var db = require('../db');

module.exports = (
  function() {
    'use strict';
//    var User = require('../schema/usersSchema2');
    var router = require('express').Router();

    router.get('/', function(req, res) {
      db.query('CALL get_authors()',function(err,rows){
        if (err) { console.log(err); }
        console.log('Data received from Db:\n');
          console.log(rows);
      //  res.send(rows[0]);
      //  res.send(rows);
         res.json(rows[0]);
      });

    }).post(function(req, res) {
      res.send('Add a book');
    });

    router.put('/:id', function( req, res) {
      console.log('in put' + req.body.id + ' ' + req.body.first_name.toString());

      db.query('CALL update_authors('+req.body.id +' ,\'' +req.body.first_name+'\' )' ,function(err,rows){
        if (err) { console.log(err);}
        res.send('');
      });
    });


    return router;
})();
