var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: { type: String, index: { unique: true }},
  message: type: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;