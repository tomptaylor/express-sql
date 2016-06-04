var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  console.log(`in here `);
  next();
});
router
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });

module.exports = router;
