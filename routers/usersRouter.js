var db = require('../db');

module.exports = (
  function() {
    'use strict';
//    var User = require('../schema/usersSchema2');
    var router = require('express').Router();

    router.get('/', function(req, res) {
      db.query('CALL sp_test()',function(err,rows){
        console.log('Data received from Db:\n');
        res.send(rows[0]);
      //  res.send(rows);
        // res.json(rows);
      });

    })
    .post(function(req, res) {
      res.send('Add a book');
    })
    .put(function(req, res) {
      res.send('Update the book');
    });


    return router;
})();
