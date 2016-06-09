var express = require('express');
var path = require('path');
var bodyParser  = require('body-parser');
var db = require('./db');
var usersRouter = require('./routers/usersRouter');

// Bootstrap express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req,res,next){
  console.log(`${req.method} request for ${req.url} `);
  //console.log(db);
  // db.query('SELECT * FROM authors', function(err, results) {
  //         if (err) throw err
  //         console.log(results[0].first_name);
  //       });
  next();
});

app.use(express.static("./public"));
app.use('/users', usersRouter);
app.listen(8000);
