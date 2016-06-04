module.exports = (function(Place) {
    'use strict';
    var Place = require('../schema/PlacesSchema');

    var router = require('express').Router();

    router.get('/', function(req, res) {
      Place.find({}, function (err, docs) {
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
