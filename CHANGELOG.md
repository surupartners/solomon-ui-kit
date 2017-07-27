# Change Log
All notable changes to this project should be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

During development, write new additions under **Added** in the permanent
**Unreleased** section and changed code under **Changed**. When releasing,
rename **Unreleased** to the release version and date and start a new empty
**Unreleased** section.

## `[Unreleased]`
#### Added
#### Changed
- Removed premature use of strip-units() function in [`_buttons.scss`](./src/scss/settings/_buttons.scss)

## `[0.3.2]` — 2017-07-26
#### Changed
- Removes [`basespace--bottom` mixins](src/scss/tools/_basespace.scss) because they're duplicates of the bog standard basespace mixins

## `[0.3.1]` — 2017-07-18
#### Added
- Adds [`basespace--bottom` mixins](src/scss/tools/_basespace.scss) at standard, small and large sizes: `basespace--bottom`, `basespace--bottom--small`, `basespace--small--bottom`, `basespace--bottom--large` and `basespace--large--bottom`

## `[0.3.0]` — 2017-01-11
#### Added
- [Usage docs](./docs/usage.md)

#### Changed
- Re-structured SASS files

## `[0.2.1]` — 2017-01-06
#### Fixed
- JS syntax error

## `[0.2.2]` — 2017-01-09
#### Fixed
- Gulp release task

## `[0.2.0]` — 2017-01-06
#### Added
- This [`CHANGELOG.md`](CHANGELOG.md) file.
- Adds various SASS settings, tools and functions.
- [FormSubmitAnimator](./src/js/FormSubmitAnimator.js) module
- [ConfirmButtonAnimator](./src/js/ConfirmButtonAnimator.js) module
- [ButtonTextHelper](./src/js/ButtonTextHelper.js) module
- [DisabledUnlessHasCheckedElements](./src/js/DisabledUnlessHasCheckedElements.js) module
- [Javascript helpers](./src/js/Helpers.js)

## `[0.1.1]` - 2016-11-24
#### Added
- Gulp build process for SASS and Javascript with `gulp build`
- Gulp release and versioning process with `gulp start-release` and `gulp
  complete-release`.

## `[0.1.0]` - 2016-11-23
#### Added
- Initial commit, just kicking off the repository.
