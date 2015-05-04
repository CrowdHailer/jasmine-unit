(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function () {
    return 2
}

},{}],2:[function(require,module,exports){
var round = require('../src/lib/round');

describe('A suite', function() {
    it('contains spec with an expectation', function() {
      expect(true).toBe(true);
    });

    it('contains spec round', function() {
        expect(2).toBe(round());
    });
});

},{"../src/lib/round":1}],3:[function(require,module,exports){
require('./round.spec');

},{"./round.spec":2}]},{},[3]);
