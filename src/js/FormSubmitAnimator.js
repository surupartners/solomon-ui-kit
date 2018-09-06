/*jshint node:true */

'use strict';

var $ = require('jquery'),
    _ = require('underscore');

var FormSubmitAnimator = {

    /**
     * Allows use of .js--is-submittable to automatically have button loading
     * states for non-JS-controlled forms
     *
     * @return void
     */
    registerFormSubmitListener: function () {
        $( "html" ).on( "submit", "form", function() {
            var $button = $(this).find('.js--is-submittable'),
                label   = '.button__label';

            FormSubmitAnimator.setButtonState($button, label);
        });
    },

    /**
     * Animates buttons to show a loading state.
     *
     * @param  [selector, jQuery object, element] $button Button to work on
     * @param  [selector]                         label   Selector of label inside button
     * @return void
     */
    setButtonState: function (button, label) {
        // Resolve button into jQuery object
        var $buttons = $(button);

        // Add classes to the button(s)
        $buttons.addClass('submitting');
        $buttons.addClass('button--disabled');

        // Disable the buttons to prevent more than one form submission.
        $buttons.prop('disabled', true);

        // Don't do anything with labels if a selector string was not passed in
        if ( ! _.isString(label)) { return; }

        // For each button...
        $buttons.each(function(index, button) {
            var $button = $(button),
                $label = $button.find(label);

            // Store original label content so it can be reset
            $button.attr('data-original-label', $button.find(label).text());

            // If button has a loading label defined...
            if ($button.attr('data-loading-label'))
            {
                // Update the button's label text
                $label.text($button.attr('data-loading-label'));
            }
            // Otherwise, show a default label
            else
            {
                $label.text('Working...');
            }
        });
    },

    /**
     * Resets buttons back to original state
     *
     * @param  [selector, jQuery object, element] $button Button to work on
     * @param  [selector]                         label   Selector of label inside button
     * @return void
     */
    resetButtonState: function (buttons, label) {
        // Resolve button into jQuery object
        var $buttons = $(buttons);

        // Remove classes to the button(s)
        $buttons.removeClass('submitting');
        $buttons.removeClass('button--disabled');

        // Don't do anything with labels if a selector string was not passed in
        if ( ! _.isString(label)) { return; }

        // For each button...
        $buttons.each(function(index, button) {
            var $button = $(button),
                $label = $button.find(label);

            // If button has an original label stored on it...
            if ($button.attr('data-original-label'))
            {
                // Update the button's label text
                $label.text($button.attr('data-original-label'));
            }
            // Otherwise, show a default label
            else
            {
                $label.text('Submit');
            }
        });
    }

};

module.exports = FormSubmitAnimator;