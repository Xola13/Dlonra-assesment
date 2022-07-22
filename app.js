const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    database : 'dlonra-academy',
    user: 'magatya',
    password: 'Lifechoices2022.',
    
});

  module.exports = connection;
