**Local development AWS Lambda Node.js module which connected to MySQL (for example)**  

_Installation_  

`git clone https://github.com/kolserdav/lambda-nodejs.git .` - clone the project in current directory

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
`lambda/index.js`  
Change output method in Lambda function  
```javascript
//callback(JSON.stringify(results[0])); 
end(JSON.stringify(results[0]));
``` 

_Usage_  

`npm run build` - build the file: './dist/index.js' from the './src/index.js' with Babel  
`webpack` - build the file: './js/module.js' from the './dist/index.js' with webpack
`npm run server` - run localhost server