**Local development AWS Lambda Node.js module**  

_Base files_  

'./src/index.js': frontend code  
'./dist/index.js': frontend code after Babel
'./js/module.js': bundle frontend
'./server/server.js': backend code  
'./lambda/index.js': lambda code 

_Changes_  

`src/index.js`
Change local for api in fetch(parameter);
```javascript
let api = "custom_api";
let local = "http://127.0.0.1:3000";
fetch(local).then( r => r.json() ).then( data => {
        console.log(data);
    });
``` 