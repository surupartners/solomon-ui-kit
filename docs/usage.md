# Usage

## Sass

To include the pre-built css from this toolkit without building anything in your project, simply include the build/css/main.min.css file.

The sass in this toolkit is written using ITCSS
Read more about that here https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/

We have one additional top layer containing functions which is required by the settings layer, which is called 'functions'.

The layers are:

1. functions
1. settings
1. tools
1. generic
1. elements
1. objects
1. components
1. trumps
1. hacks

The first 3 layers will not output any css when they are compiled.

You can just include specific layer files eg `@import "solomon-ui-kit/src/scss/settings";` at the appropriate layer in your main sass file, or specific files found in the folders with the corresponding names eg `@import "solomon-ui-kit/src/scss/settings/colors";` if you don't want to include the entire layer.   This will be more useful for including objects and components, which would actually impact on your output css file size.

To include the entire toolkit in one call in your sass file just include the main.scss file.   Generally this is unhelpful in a project because it would mean all the layers will be put in a specific layer in your project, messing up the ITCSS heirachy.

## JS

To include the pre-build js from this toolkit without building anything in your project, include the build/js/index.js file.

Otherwise you can require different js modules as necessary.
