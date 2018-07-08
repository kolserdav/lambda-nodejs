let fs = require('fs');
data = JSON.parse(fs.readFileSync('./lambda/source/data.json'));
module.exports = data;