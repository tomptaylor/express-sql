module.exports = (
  function() {
    'use strict';
    var User = require('../schema/usersSchema2');
    var router = require('express').Router();

    router.get('/', function(req, res) {
      User.find({}, function (err, docs) {
        console.log(User);
        process.exit();
         res.json(docs);
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
