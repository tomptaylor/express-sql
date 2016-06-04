module.exports = (function(Person) {
    'use strict';
    var Person = require('../schema/PersonsSchema');

    var router = require('express').Router();

    router.get('/', function(req, res) {
      async.series([
        Person.find({})
      ],
      function(err,results) {
        res.json(results)
      })
    })
    .post(function(req, res) {
      res.send('Add a book');
    })
    .put(function(req, res) {
      res.send('Update the book');
    });


    return router;
})();
