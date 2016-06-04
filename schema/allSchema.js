
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var UserSchema = new Schema({
      first_name: String,
  });
  var PlaceSchema = new Schema({
      name: String,
  });
  exports User = mongoose.model('users', UserSchema);
//  exports Place = mongoose.model('places', PlaceSchema);


}
