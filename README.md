# Solomon UI kit

A toolbox of front-end assets for UBS Solomon and related web applications.

## Usage

See the [usage docs](docs/usage.md) for details of what SASS and Javascript
this kit provides and how they should be used.

## Installation

To include the kit in your own projects, include it via its Git URL in the
 dependencies section of your NPM `package.json` file like so:

```
"dependencies": {
  "solomon-ui-kit": "https://hbrown@bitbucket.org/hbrown/npm-test.git#0.3.0",
},
```

Then run `npm install` to install it along with your other dependencies.

Alternatively, you can use the NPM CLI to add it as a dependency to an existing
NPM installation like so:

```
npm install https://hbrown@bitbucket.org/hbrown/npm-test.git#0.3.0 --save
```

## Contributing

### Building from source

The kit contains only source files with the intention that most people will
include the kit in their own projects and run SASS and JS through their own
build tools, or use the pre-built files in `./build`.

Therefore, when developing you should build your changes. You can do that
using Gulp:

1. [Install Node and NPM](https://nodejs.org/)
1. Install [Gulp](http://gulpjs.com/) and [Yarn](https://yarnpkg.com/) globally:

        npm install -g gulp yarn

1. Install local NPM dependencies with Yarn:

        yarn

1. Build the kit using Gulp. Built files will be places in the `./build` directory.

        gulp build

### Making a release

We follow the Git branching strategy outlined in [A successful Git branching
model](http://nvie.com/posts/a-successful-git-branching-model/). In summary,
active development happens in the `dev` branch; releases are prepared in
`release/x.y.z` branches, then releases are completed and released by being
merged into `master`.

To make a release of code in the `dev` which is ready for release:

1. Checkout `dev`, ensure you have a clean working directory, and that your
   latest changes have all been pushed to the remote.
1. Check on Github that `dev` is passing all CI builds and tests.
1. Run `gulp start-release` to automatically bump the package version numbers
   and start a `release/x.y.z` branch (e.g. `release/0.3.0`). You should now be
   on your release branch.
1. Update [`CHANGELOG.md`](CHANGELOG.md)
1. Build front-end assets by running `gulp build` and check they all work
   correctly. This is important so that less technical projects can use the
   built files directly without having to have their own build processes.
1. _(optional)_ In the release branch do any other pre-release tasks you wish to.
1. Run `gulp complete-release` which will merge the release branch into
   `master`, tag it with the bumped version number, and then merge it back
   into `dev`.
1. If everything looks good, push `master` and `dev` to the remote repository.

### Versioning

NPM package tags and Git tags should remain in sync. We use the [semver
versioning convention](http://semver.org/). In summary:

> Given a version number MAJOR.MINOR.PATCH, increment the:
>
> - MAJOR version when you make incompatible API changes,
> - MINOR version when you add functionality in a backwards-compatible manner,
>   and
> - PATCH version when you make backwards-compatible bug fixes.
>
> Additional labels for pre-release and build metadata are available as
> extensions to the MAJOR.MINOR.PATCH format.

### Running tests

_Section still to be written._

### Contributing Javascript

When adding new Javascript modules to the Kit you should:

1. Add the file at the appropriate location in [`src/js`](./src) directory.
1. Document what the module does and how to use it in the Javascript file itself
   _and_ in the written docs for this Kit. If the module can be visually
   demonstrated, also add a section to the styleguide demonstrating what your
   module does.
1. `require()` the file [`src/js/index.js`](src/js/index.js) and ensure it
   builds correct. See [Building from source](#building-from-source) for details
   of how to build from source.
1. Write tests for your code and ensure they are run during `gulp test`. See the
   [Running tests](#running-tests) section for more.

### Contributing CSS

This Kit's CSS is written in [SCSS](http://sass-lang.com/) using `.scss` files
and the BEM syntax.

When adding new `.scss` files to the Kit you should:

1. Add the file at the appropriate location in [`src/scss`](src/scss) directory.
1. Add a section to the styleguide for your new SCSS code.
1. `@import` the file [`src/scss/index.scss`](src/scss/index.scss) and ensure it
   builds correct. See [Building from source](#building-from-source) for details
   of how to build from source.

### Improvements

Suggested Improvements can be added to the [`TODO.md`](TODO.md) file.
