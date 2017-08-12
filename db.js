const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'vij',
    database:'shopvilla',
});

connection.connect(function(err){
    if(err) throw err
    console.log('You are now connected...');
})

module.exports = connection;