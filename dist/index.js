"use strict";

var _unfetch = require("unfetch");

var _unfetch2 = _interopRequireDefault(_unfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const req = require('request');
window.onload = function () {
    var api = "custom_api";
    var local = "http://127.0.0.1:3000";
    (0, _unfetch2.default)('https://91gtk94opi.execute-api.us-west-2.amazonaws.com/prodTest', {
        method: 'GET',
        headers: {
            "Access-Control-Request-Headers": "Origin",
            "Origin": "https://video.uyem.ru"
        }
    }).then(function (r) {
        return r.json();
    }).then(function (data) {
        //some code
        console.log(data);
    });
};