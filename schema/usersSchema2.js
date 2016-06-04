var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
    first_name: String,

});
var User = mongoose.model('users', UserSchema);
module.exports = User;
