var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, index: { unique: true }},
  message: String
});

var User = mongoose.model('User', userSchema);

var Chris = new User({
  username: 'Chris',
  message: 'Hi'
});

Chris.save();
console.log(Chris);

module.exports = User;