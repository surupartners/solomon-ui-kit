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
  "solomon-ui-kit": "https://hbrown@bitbucket.org/hbrown/npm-test.git#1.0.0",
},
```

Then run `npm install` to install it along with your other dependencies.

Alternatively, you can use the NPM CLI to add it as a dependency to an existing
NPM installation like so:

```
npm install https://hbrown@bitbucket.org/hbrown/npm-test.git#1.0.0 --save
```

## Building from source

The kit contains only source files with the intention that you will include the
kit in your own projects and run SASS and JS through your own build tools.

However, if you wish to build just this kit you can do using Gulp:

1. [Install Node and NPM](https://nodejs.org/)
1. Install [Gulp](http://gulpjs.com/) and [Yarn](https://yarnpkg.com/) globally:

        npm install -g gulp yarn

1. Install local NPM dependencies with Yarn:

        yarn

1. Build the kit using Gulp. Built files will be places in the `./build` directory.

        gulp build

## Contributing

### Versioning

Active development happens in the `dev` branch. To make a release of code in the `dev` which is ready for release:

1. Ensure you have a clean working directory.
1. Start a release branch off of `dev` named `release/{version}` (e.g. `release/1.0.2`).
1. In that branch do any pre-release tasks, including running `gulp release` to tag the release and update the version references in `package.json`, `README.md`, etc.
1. Merge the release branch into `master` and then back into `dev`.

We use the [semver versioning convention](http://semver.org/). In summary:

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
