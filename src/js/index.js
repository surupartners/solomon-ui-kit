'use strict';

/**
 * This file is used only to build a version of the Solomon UI kit. If you are
 * including the Kit in your own projects with a Javascript build process you
 * should ignore this file and instead directly include the parts of the Kit
 * that you need to use using `require()` statements.
 */

var FormSubmitAnimator               = require('FormSubmitAnimator'),
    DisabledUnlessHasCheckedElements = require('DisabledUnlessHasCheckedElements');

// Register submit events for form animations
FormSubmitAnimator.registerFormSubmitListener();

// Reigster listener for the confirm button animator
ConfirmButtonAnimator.registerListeners();

// A button that's disabled unless there are checked elements specified by the button
DisabledUnlessHasCheckedElements.registerListener('.js--disabled-unless-has-checked-elements');

 // TODO: Use this file to make the included JS modules exposed on
 // `window.solomon` and write usage docs for this method (as distinct from the
 // method of installing the kit as an NPM package and using `require()`)
