const http = require('http');
const lambda = require('./../lambda/index');
const hostname = '127.0.0.1';
const port = 3000;
const data = require('./../lambda/src/read-file');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', data.origin);
    lambda((end)=>{res.end(end)});

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});