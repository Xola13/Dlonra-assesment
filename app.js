const mysql =require('mysql');


var connection = mysql.createConnection({
    host:'localhost',
    user: 'magatya',
    password: 'Lifechoices2022.',
    database : 'dlonra-academy',
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });