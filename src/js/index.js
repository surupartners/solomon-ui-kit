'use strict';

/**
 * This file is used only to build a version of the Solomon UI kit. If you are
 * including the Kit in your own projects with a Javascript build process you
 * should ignore this file and instead directly include the parts of the Kit
 * that you need to use using `require()` statements.
 */

 var FormSubmitAnimator = require('FormSubmitAnimator');

// Register submit events for form animations
FormSubmitAnimator.registerFormSubmitListener();

// Reigster listener for the confirm button animator
ConfirmButtonAnimator.registerListeners();

 // TODO: Use this file to make the included JS modules exposed on
 // `window.solomon` and write usage docs for this method (as distinct from the
 // method of installing the kit as an NPM package and using `require()`)
