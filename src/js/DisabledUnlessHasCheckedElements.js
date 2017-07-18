/*jshint node:true */

'use strict';

var $       = require('jquery'),
    _       = require('underscore'),
    Helpers = require('./Helpers');

/**
 * Sets the disabled property on an element unless some of its associated checkboxes are checked.
 * Typical use case is to stop the user from submitting a form without having selected any checkboxes.
 * Call the registerListner method passing some kind of hook for the element that jQuery can hook into (generally a css class)
 * Give the element data-target-element attribute to point to its associated checkboxes. E.g.
 *
 * <button class="js--disabled-unless-has-checked-elements" data-target-element=".js--target-checkbox-identifier">Click me</button>
 * <input type="checkbox" class="js--target-checkbox-identifier" />
 *
 * This JS will immediately disable the button if no associated checkboxes are checked, and binds to checkbox change event to
 * re-enable the button if any checkboxes are checked.
 */
var DisabledUnlessHasCheckedElements = {
    values: {
        $elementsToListenTo: null,
        $el: null,
    },

    registerListener: function(element) {
        this.values.$el = $(element);

        // Quit if none found
        if (this.values.$el.length == 0) { return; }

        this.values.$elementsToListenTo = this.getElementsToListenTo();

        // set button to disabled (or not) on page load.
        this.updateDisabledState();

        this.bindListenerToElements();
    },

    bindListenerToElements: function() {
        var _self = this;

        this.values.$elementsToListenTo.change(function(){_self.updateDisabledState()});
    },

    updateDisabledState: function() {
        if (this.anyElementsAreChecked()) {
            this.values.$el.prop( "disabled", false );
        }
        else {
            this.values.$el.prop( "disabled", true );
        }
    },

    anyElementsAreChecked: function() {
        return this.values.$elementsToListenTo.filter(':checked').length > 0;
    },

    getElementsToListenTo: function() {
        return Helpers.findTargetElement(this.values.$el);
    }
}

module.exports = DisabledUnlessHasCheckedElements;