var mongoose = require('mongoose');
var mongo = require('mongodb');

mongoose.connect('mongodb://localhost:users');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log("We're connected!");
});

module.exports = db;