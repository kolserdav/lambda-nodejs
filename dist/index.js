"use strict";

//import fetch from 'unfetch';

window.onload = function () {
    var api = "https://91gtk94opi.execute-api.us-west-2.amazonaws.com/prodTest";
    var local = "http://127.0.0.1:3000";
    fetch(local).then(function (r) {
        return r.json();
    }).then(function (data) {
        console.log(data);
    });
};