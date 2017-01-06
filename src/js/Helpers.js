/*jshint node:true */

'use strict';

var $ = require('jquery');


var Helpers = {
    /**
     * findClassToToggle
     * @param  {jQuery} the $el containing attr
     * @return string
     */
    findClassToToggle: function ($el) {
        return $el.attr('data-class-to-toggle');
    },

    /**
     * findTargetElement
     * @param  {jQuery} the $el containing attr
     * @return {jQuery} the target element
     */
    findTargetElement: function ($el) {
        return $($el.attr('data-target-element'));
    }
}

module.exports = Helpers;