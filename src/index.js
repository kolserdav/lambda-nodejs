
import fetch from 'unfetch';
//const req = require('request');
window.onload = ()=>{
    let api = "custom_api";
    let local = "http://127.0.0.1:3000";
    fetch('https://91gtk94opi.execute-api.us-west-2.amazonaws.com/prodTest', {
        method: 'GET',
        headers:{
            "Access-Control-Request-Headers": "Origin",
            "Origin": "https://video.uyem.ru"
        }
    }).then( r => r.json() ).then( data => {
        //some code
        console.log(data);
    });
};