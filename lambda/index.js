
module.exports = function(end){
    let connect = require('./src/mysql-connect');
    connect((con)=>{
        con.query("SELECT * FROM `table-lambda`", function (error, results, fields) {
            if (error) throw error;
            //callback(JSON.stringify(results[0]));
            end(JSON.stringify(results[0]));
            con.end();
            console.log('End of connection to database');
        });
    });


};
