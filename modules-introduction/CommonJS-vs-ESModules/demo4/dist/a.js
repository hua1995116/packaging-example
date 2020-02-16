"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bar3 = bar3;
exports.bar2 = exports.bar = void 0;

var _b = require("./b.js");

console.log('a.js');
var bar = 1;
exports.bar = bar;

var bar2 = function bar2() {
  console.log('bar2');
};

exports.bar2 = bar2;

function bar3() {
  console.log('bar3');
}
