"use strict";
exports.__esModule = true;
exports.f12 = exports.f11 = exports.f10 = exports.f9 = exports.f8 = exports.f7 = exports.f6 = exports.f5 = exports.f4 = exports.f3 = exports.f2 = exports.f1 = exports.getUserChoice = void 0;
var getUserChoice = function () {
    return Math.floor(Math.random() * 12) + 1;
};
exports.getUserChoice = getUserChoice;
var generateRandomStr = function () {
    var str = "";
    var ramdomCharCode = function () {
        return Math.floor(Math.random() * 26) + 97;
    };
    for (var i = 0; i < 6; i++) {
        var code = ramdomCharCode();
        var letter = String.fromCharCode(code);
        str += letter;
    }
    return str;
};
var f1 = function () {
    return generateRandomStr();
};
exports.f1 = f1;
var f2 = function () {
    return generateRandomStr();
};
exports.f2 = f2;
var f3 = function () {
    return generateRandomStr();
};
exports.f3 = f3;
var f4 = function () {
    return generateRandomStr();
};
exports.f4 = f4;
var f5 = function () {
    return generateRandomStr();
};
exports.f5 = f5;
var f6 = function () {
    return generateRandomStr();
};
exports.f6 = f6;
var f7 = function () {
    return generateRandomStr();
};
exports.f7 = f7;
var f8 = function () {
    return generateRandomStr();
};
exports.f8 = f8;
var f9 = function () {
    return generateRandomStr();
};
exports.f9 = f9;
var f10 = function () {
    return generateRandomStr();
};
exports.f10 = f10;
var f11 = function () {
    return generateRandomStr();
};
exports.f11 = f11;
var f12 = function () {
    return generateRandomStr();
};
exports.f12 = f12;
