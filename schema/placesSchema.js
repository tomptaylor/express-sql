var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var PlacesSchema = new Schema({
    name: String,

});
var Places = mongoose.model('Places', PlacesSchema);
module.exports = Places;
