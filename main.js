var express = require('express');
var path = require('path');
var db = require('./db');
var usersRouter = require('./routers/usersRouter');
var personsRouter = require('./routers/personsRouter');
var placesRouter = require('./routers/placesRouter');

// Bootstrap express
var app = express();
app.use(function(req,res,next){
  console.log(`${req.method} request for ${req.url} `);
  next();
});

app.use(express.static("./public"));
app.use('/users', usersRouter);
app.use('/persons', personsRouter);
app.use('/places', placesRouter);

// Start the server
app.listen(3000);
