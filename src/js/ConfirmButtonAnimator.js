/*jshint node:true */

'use strict';

var $ = require('jquery'),
    _ = require('underscore');

var ConfirmButtonAnimator = {

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
    },

    registerListeners: function () {
        $(document).on('click', '.js--confirm-button', _.bind(function (event) {
            event.preventDefault();
            this.revealConfirmButton(event.currentTarget);
        }, this));

        $(document).on('click', '.js--confirm-button__cancel', _.bind(function (event) {
            event.preventDefault();
            this.hideConfirmButton(event.currentTarget);
        }, this));
    }

};

module.exports = ConfirmButtonAnimator;