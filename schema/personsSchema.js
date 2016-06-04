var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var PersonSchema = new Schema({
    name: String,

});
var Person = mongoose.model('Persons', PersonSchema);
module.exports = Person;
