function connect(callback) {

    let mysql = require('mysql'),
        fs = require('fs'),
        data = require('./read-file');
    con = mysql.createConnection({
        host: data.host,
        user: data.user,
        password: data.password,
        database: data.database
    });

    con.connect(function (err) {
        if (err) {
            console.log(err)
        }
        else {

            console.log(data.database + " is connected!");
        }

    });

    callback(con);
}

module.exports = connect;