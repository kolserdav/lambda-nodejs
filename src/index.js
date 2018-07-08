
import fetch from 'unfetch';

window.onload = ()=>{
    let api = "custom_api";
    let local = "http://127.0.0.1:3000";
    fetch(local).then( r => r.json() ).then( data => {
        //some code
        console.log(data);
    });

};