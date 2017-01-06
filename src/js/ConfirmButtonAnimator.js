/*jshint node:true */

'use strict';

var $ = require('jquery'),
    _ = require('underscore');

/**
 * The user can click on a button to reveal an element containing confirm and cancel buttons.  The cancel button resets
 * the user interaction, where the confirm button (usually) submits a form.  Anything else can be placed in the element
 * which is revealed, such as help text to explain what will happen, or a confirmation question such as "Are you sure?".
 *
 * <button class="js--confirm-button">Delete this thing</button>
 *
 * <div class="js--confirm-button__wrapper">
 *     Are you sure?
 *     <Form>
 *     <button class="js--confirm-button__confirm">Yes Delete this</button>
 *     </Form>
 *     <button class="js--confirm-button__cancel">No, cancel</button>
 * </div>
 *
 * @type {Object}
 */
var ConfirmButtonAnimator = {

    registerListeners: function () {
        $(document).on('click', '.js--confirm-button', _.bind(function (event) {
            event.preventDefault();
            this.revealConfirmButton(event.currentTarget);
        }, this));

        $(document).on('click', '.js--confirm-button__cancel', _.bind(function (event) {
            event.preventDefault();
            this.hideConfirmButton(event.currentTarget);
        }, this));
    },

    revealConfirmButton: function (revealButton) {
        var $buttonWrapper  = $(revealButton).parents('.js--confirm-button__wrapper'),
            $initialWrapper = $buttonWrapper.find('.js--confirm-button__initial'),
            $confirmWrapper = $buttonWrapper.find('.js--confirm-button__confirm');

        $confirmWrapper.removeClass('hidden');
        $initialWrapper.addClass('hidden');

        _.delay(_.bind(function () {
            $buttonWrapper.find(".js--confirm-button__confirm, .js--confirm-button__cancel").prop("disabled", false);
        }, this), 1000);
    },

    hideConfirmButton: function (cancelButton) {
        var $buttonWrapper  = $(cancelButton).parents('.js--confirm-button__wrapper'),
            $initialWrapper = $buttonWrapper.find('.js--confirm-button__initial'),
            $confirmWrapper = $buttonWrapper.find('.js--confirm-button__confirm');

        $confirmWrapper.addClass('hidden');
        $initialWrapper.removeClass('hidden');

        $buttonWrapper.find(".js--confirm-button__confirm, .js--confirm-button__cancel").prop("disabled", true);
    }
};

module.exports = ConfirmButtonAnimator;