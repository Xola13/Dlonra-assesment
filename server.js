var connection = require('./app')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

app.set('view engine','ejs')

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/form.html');
})

// Submitting

app.post('/',(req, res)=>{
  var name = req.body.name;
  var surname = req.body.surname;
  var email = req.body.email;

  var sql = "INSERT INTO tusers(name, surname, email) VALUES('"+ name +"', '"+ surname +"', '"+ email +"')";
  connection.query(sql,function(error, result){
    if(error) throw error;
    res.redirect('/tusers')
  });
 });

  
  
//   Get all tusers

  app.get('/tusers', function(req, res) {
    let sql = "SELECT * FROM tusers";
    connection.query(sql, function(err, results) {
        if(err) throw err;
        res.render(__dirname+"/tusers",{tusers:results});
    });
  })
  
  
  // Listening
  app.listen(3500, function(){
    console.log('Listening to port 3500');
    connection.connect(function(err) {
        if (err) throw err;
        console.log('Connected to the MySQL server.');
      });
  })