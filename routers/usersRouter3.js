module.exports = (function(response) {
    'use strict';
    var User = require('../schema/usersSchema2');
console.log(User);
      User.find({}, function (err, docs) {
         response.json(docs);
      })


})();
