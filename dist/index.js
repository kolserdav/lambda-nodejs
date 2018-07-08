"use strict";

var _unfetch = require("unfetch");

var _unfetch2 = _interopRequireDefault(_unfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
    var api = "custom_api";
    var local = "http://127.0.0.1:3000";
    (0, _unfetch2.default)(local).then(function (r) {
        return r.json();
    }).then(function (data) {
        console.log(data);
    });
};