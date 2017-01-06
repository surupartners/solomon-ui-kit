/*jshint node:true */

'use strict';

var $       = require('jquery'),
    _       = require('underscore'),
    Helpers = require('./Helpers');


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