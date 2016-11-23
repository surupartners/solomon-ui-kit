(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*jshint node:true */

"use strict";

// An example SASS file just to check things are configured properly in this
// repository. Should be removed as soon as we start added actual SASS code.

var ExampleModule = {

    sayHello: function () {
        console.log( "Hello from ExampleModule" );
    },

};

module.exports = ExampleModule;

},{}],2:[function(require,module,exports){
'use strict';

/**
 * This file is used only to build a version of the Solomon UI kit. If you are
 * including the Kit in your own projects with a Javascript build process you
 * should ignore this file and instead directly include the parts of the Kit
 * that you need to use using `require()` statements.
 */

 var ExampleModule = require('ExampleModule');

 // TODO: Use this file to make the included JS modules exposed on
 // `window.solomon` and write usage docs for this method (as distinct from the
 // method of installing the kit as an NPM package and using `require()`)

},{"ExampleModule":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvRXhhbXBsZU1vZHVsZS5qcyIsInNyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKmpzaGludCBub2RlOnRydWUgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIEFuIGV4YW1wbGUgU0FTUyBmaWxlIGp1c3QgdG8gY2hlY2sgdGhpbmdzIGFyZSBjb25maWd1cmVkIHByb3Blcmx5IGluIHRoaXNcbi8vIHJlcG9zaXRvcnkuIFNob3VsZCBiZSByZW1vdmVkIGFzIHNvb24gYXMgd2Ugc3RhcnQgYWRkZWQgYWN0dWFsIFNBU1MgY29kZS5cblxudmFyIEV4YW1wbGVNb2R1bGUgPSB7XG5cbiAgICBzYXlIZWxsbzogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyggXCJIZWxsbyBmcm9tIEV4YW1wbGVNb2R1bGVcIiApO1xuICAgIH0sXG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZU1vZHVsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBUaGlzIGZpbGUgaXMgdXNlZCBvbmx5IHRvIGJ1aWxkIGEgdmVyc2lvbiBvZiB0aGUgU29sb21vbiBVSSBraXQuIElmIHlvdSBhcmVcbiAqIGluY2x1ZGluZyB0aGUgS2l0IGluIHlvdXIgb3duIHByb2plY3RzIHdpdGggYSBKYXZhc2NyaXB0IGJ1aWxkIHByb2Nlc3MgeW91XG4gKiBzaG91bGQgaWdub3JlIHRoaXMgZmlsZSBhbmQgaW5zdGVhZCBkaXJlY3RseSBpbmNsdWRlIHRoZSBwYXJ0cyBvZiB0aGUgS2l0XG4gKiB0aGF0IHlvdSBuZWVkIHRvIHVzZSB1c2luZyBgcmVxdWlyZSgpYCBzdGF0ZW1lbnRzLlxuICovXG5cbiB2YXIgRXhhbXBsZU1vZHVsZSA9IHJlcXVpcmUoJ0V4YW1wbGVNb2R1bGUnKTtcblxuIC8vIFRPRE86IFVzZSB0aGlzIGZpbGUgdG8gbWFrZSB0aGUgaW5jbHVkZWQgSlMgbW9kdWxlcyBleHBvc2VkIG9uXG4gLy8gYHdpbmRvdy5zb2xvbW9uYCBhbmQgd3JpdGUgdXNhZ2UgZG9jcyBmb3IgdGhpcyBtZXRob2QgKGFzIGRpc3RpbmN0IGZyb20gdGhlXG4gLy8gbWV0aG9kIG9mIGluc3RhbGxpbmcgdGhlIGtpdCBhcyBhbiBOUE0gcGFja2FnZSBhbmQgdXNpbmcgYHJlcXVpcmUoKWApXG4iXX0=
