var application_root = __dirname;
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var partials = require('express-partials');
var request = require('request');
var mongoose = require('mongoose');

var app = express();

// Database connection
mongoose.connect('mongodb://localhost/user_database');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log("We're connected!");
});

// User schema
var User = new mongoose.Schema({
  username: { type: String, index: { unique: true }},
  message: String
});
var UserModel = mongoose.model('User', User);

app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(application_root, 'public')));

// Creates API endpoint
app.get('/api', function (req, res) {
  res.send('Users API is running');
});

app.get('/api/users', function (req, res) {
  return UserModel.find(function (err, users) {
    if (!err) {
      return res.send(users);
    } else {
      return console.log(err);
    }
  });
});

app.post('/api/users', function (req, res) {
  var user = new UserModel({
    username: req.body.username,
    message: req.body.message
  });

  return user.save(function (err) {
    if (!err) {
      console.log(user, 'created');
      return res.send(user);
    } else {
      console.log(err);
    }
  });
});

app.get('/api/users/:id', function (req, res) {
  return UserModel.findById(req.params.id, function (err, user) {
    if (!err) {
      return res.send(user);
    } else {
      console.log(err);
    }
  });
});

app.put('/api/users/:id', function (req, res) {
  return UserModel.findById(req.params.id, function (err, user) {
    user.username = request.body.username;
    user.message = request.body.message;

    return user.save(function (err) {
      if (!err) {
        console.log('User updated!');
        return res.send(user);
      } else {
        console.log(err);
      }
    })
  });
});

app.delete('/api/users/:id', function (req, res) {
  return UserModel.findById(req.params.id, function (err, user) {
    return user.remove(function (err) {
      if (!err) {
        console.log('The user has been deleted');
      } else {
        console.log(err);
      }
    })
  });
});

var port = 8000;
app.listen(port, function () {
  console.log('app is listening on',port, app.settings.env);
});

module.exports = app;