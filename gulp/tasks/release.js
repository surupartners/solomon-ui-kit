/* jslint node: true */

"use strict";

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    git = require('gulp-git'),
    bump = require('gulp-bump'),
    inquirer = require('inquirer'),
    fs = require('fs'),
    replace = require('gulp-replace'),
    execSync = require('sync-exec'),
    spawn = require('child_process').spawn;

/**
 * The release type chosen by the user.
 * One of patch, minor, major.
 *
 * @var {string}
 */
var releaseType;

/**
 * Returns the current contents of package.json as an object.
 *
 * Uses fs() rather than require() to prevent caching as we want to read the
 * current contents.
 *
 * @return {object}
 */
var getPackageJson = function () {
  return JSON.parse(fs.readFileSync('./package.json', 'utf8'));
};

/**
 * Whether the Git working directory is clean.
 *
 * @return {bool}
 */
var gitWorkingDirectoryIsClean = function () {
    var status_check_cmd = execSync('git status --porcelain');

    if (status_check_cmd.status !== 0 || status_check_cmd.stderr) {
        throw 'Failed to check git status.';
    }

    if ( !! status_check_cmd.stdout.trim() ) {
        return false;
    }

    return true;
};

/**
 * Returns the currently checked-out Git branch name.
 *
 * @return {string}
 */
var getCurrentGitBranchName = function () {
    var branch_check_cmd = execSync('git rev-parse --abbrev-ref HEAD');

    if (branch_check_cmd.status !== 0 || branch_check_cmd.stderr) {
        throw 'Failed to check git status.';
    }

    return branch_check_cmd.stdout.trim()
};

/**
 * Whether the currently checked-out Git branch name starts with the given text.
 *
 * @param  {string} shouldStartWith
 * @return {bool}
 */
var currentGitBranchNameStartsWith = function (shouldStartWith) {
    var branch_check_cmd = execSync('git rev-parse --abbrev-ref HEAD');

    if (branch_check_cmd.status !== 0 || branch_check_cmd.stderr) {
        throw 'Failed to check git status.';
    }

    return getCurrentGitBranchName().startsWith(shouldStartWith);
};

/**
 * Starts a release from dev.
 *
 * Different semver release types are available:
 *
 *     'patch' makes v0.1.0 → v0.1.1
 *     'minor' makes v0.1.1 → v0.2.0
 *     'major' makes v0.2.1 → v1.0.0
 */
gulp.task('start-release', ['release-start-branch']);

gulp.task('complete-release', function () {
    // First, check we're on a release branch
    if ( ! currentGitBranchNameStartsWith('release/')) {
        gutil.log(gutil.colors.red('ERROR: must be on "release/x.y.z" branch to complete a release; currently checked-out branch is "' + getCurrentGitBranchName() + '".'))
        process.exit(-1);
    }

    // Next, check we have a clean working directory
    if ( ! gitWorkingDirectoryIsClean()) {
        gutil.log(gutil.colors.red('ERROR: working directory must be clean before continuing.'))
        process.exit(-1);
    }

    var currentVersion = getPackageJson().version;

    return inquirer.prompt({
        type: 'confirm',
        name: 'continue',
        message: 'This will merge this branch into ' +
            gutil.colors.yellow('master') + ' and ' + gutil.colors.yellow('dev') +
            ', tag it as ' +
            gutil.colors.yellow(currentVersion) +
            ', then delete this branch. ' +
            'Do you want to proceed?',
    }).then(function (answers) {
        if ( ! answers.continue) {
            process.exit(-1);
        }

        var releaseBranch = getCurrentGitBranchName();

        // @improvement: Fix the callback hell below. Maybe gulp-git returns
        // promises?
        // 1. Checkout master
        git.checkout('master', function (err) {
            if (err) { throw err; }

            // 2. Merge the release branch into master
            git.merge(releaseBranch, {args: '--no-ff'}, function (err) {
                if (err) { throw err; }

                // 3. Tag master with the version
                git.tag(currentVersion, '', function (err) {
                    if (err) { throw err; }

                    // 4. Checkout dev
                    git.checkout('dev', function (err) {
                        if (err) { throw err; }

                        // 5. Merge release branch into dev
                        git.merge(releaseBranch, {args: '--no-ff'}, function (err) {
                            if (err) { throw err; }

                            // 6. Delete the release branch
                            git.exec({args: 'br -d ' + releaseBranch}, function (err, stdout) {
                                if (err) { throw err; }
                                gutil.log( stdout );
                            });
                        });
                    });
                });
            });
        });
    });
})

/**
 * {{{ Task run as part of a chain of tasks kicked off by `gulp start-release` }}}
 *
 * Starts a new release/x.y.z branch for the current release, commits the bumped
 * version numbers and (a) instructs the user to review the committed changes,
 * and (b) tells them how to complete the release.
 */
gulp.task('release-start-branch', ['release-update-other-version-references'], function (callback) {
    var newVersion = getPackageJson().version;

    gutil.log('Package version is now', gutil.colors.yellow(newVersion));

    // start a release branch
    git.checkout('release/' + newVersion, {args: '-b'}, function (err) {
        if (err) throw err;
    });

    // commit the changed version numbers as the first commit on the
    // release branch
    // git.commit('Increments package version to ' + newVersion + '.');
    var commit_cmd = execSync('git commit -am "Increments package version to ' + newVersion + '."');
    if (commit_cmd.status !== 0 || commit_cmd.stderr) {
        throw 'Failed to Git commit version bump. Please intervene. Error was: ' + commit_cmd.stderr.trim();
    }

    // Using spawn with stdio: 'inherit' so we can see colours in the git diff output
    spawn('git', ['diff', '--word-diff', '-U0', 'HEAD^', 'HEAD'], {stdio: "inherit"});

    // Running final instruction in setTimeout so it appears after everything else
    setTimeout(function () {
        gutil.log(gutil.colors.bold('↑↑↑ Please review committed changes above'));
        gutil.log(
            'When you\'re ready to finalise this release, run',
            gutil.colors.bgCyan.black.bold(' gulp complete-release '),
            'from this branch to merge into master and tag that merge commit with the package version.'
        );
    }, 200);

    callback();
});

/**
 * {{{ Task run as part of a chain of tasks kicked off by `gulp start-release` }}}
 *
 * Bumps the version in any other files which contain version references such
 * as README.md
 */
gulp.task('release-update-other-version-references', ['release-bump-package-version'], function () {
    var newVersion = getPackageJson().version;

    return gulp.src(['README.md'])
        // See http://regexr.com/3eo54
        .pipe(replace(/(\d+\.\d+\.\d+)/g, newVersion))
        .pipe(gulp.dest('./'));
});

/**
 * {{{ Task run as part of a chain of tasks kicked off by `gulp start-release` }}}
 *
 * Bumps the version in package.json
 *
 * Currently only bumping in package.json but could also add bower.json, etc. if
 * we released this package in other places.
 */
gulp.task('release-bump-package-version', ['release-define-type'], function () {
    gutil.log('OK, bumping the version for a', gutil.colors.yellow(releaseType), 'release...');

    // Get all the files to bump version in
    return gulp.src(['package.json'])
        // bump the version number in those files
        .pipe(bump({type: releaseType}))
        // save files back to filesystem
        .pipe(gulp.dest('./'));
});

/**
 * {{{ Task run as part of a chain of tasks kicked off by `gulp start-release` }}}
 *
 * Asks the user what type of release they'd like to begin and stores the release
 * type in this file's `releaseType` variable.
 */
gulp.task('release-define-type', function () {

    // First, check we're on the dev branch
    if ( ! currentGitBranchNameStartsWith('dev')) {
        gutil.log(gutil.colors.red('ERROR: must be on "dev" branch to start a release; currently checked-out branch is "' + getCurrentGitBranchName() + '".'))
        process.exit(-1);
    }

    // Next, check we have a clean working directory
    if ( ! gitWorkingDirectoryIsClean()) {
        gutil.log(gutil.colors.red('ERROR: working directory must be clean before starting a release branch.'))
        process.exit(-1);
    }

    // Finally, ask the user what type of release they want to do and store
    // their answer on releaseType
    gutil.log('Current version:', gutil.colors.yellow(require('../../package.json').version));

    return inquirer.prompt({
        type: 'list',
        name: 'releaseType',
        message: 'What type of release would you like to do?',
        choices: ['patch', 'minor', 'major'],
        default: 'minor'
    }).then(function (answers) {
        releaseType = answers.releaseType;
    });
});
