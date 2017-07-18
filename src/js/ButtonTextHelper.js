/*jshint node:true */

'use strict';

var $ = require('jquery');


var ButtonTextHelper = {
    /**
     * changeName
     *
     * Handles button naming on toggle events
     * from other functions eg ElementClassToggler, ElementRevealToggler, TextClipper
     *
     * @param  {jQuery}, the $button containing a <span> with the text to be changed
     */
    changeName: function($button) {
        this.storeAndRetreiveButtonText($button);
        this.changeButtonName($button);
    },

    storeAndRetreiveButtonText: function ($button) {
        var oldName = $button.attr('oldname');

        // only fill oldname attr if it's empty
        if (oldName == undefined) {
            var oldName = $button.text();
            return $button.attr('oldname', oldName);
        }
        else {
            return;
        }
    },

    changeButtonName: function ($button) {
        var $span   = $button.find("span"),
            oldName = $button.attr('oldname'),
            newName = $button.attr('data-reveal-label');

        // if html element hasn't defined a new name, default to show less
        if ( ! newName) { newName = 'Show Less'; }

        if ($span.text() != newName) {
            $span.text( newName );
            return;
        }

        if ($span.text() == newName) {
            $span.text( oldName );
            return;
        }
    }
}

module.exports = ButtonTextHelper;