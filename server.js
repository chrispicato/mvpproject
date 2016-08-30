var express = require('express');
var path = require('path');
var partials = require('express-partials');
var db = require('./client/config');

var app = express();

// Mongo server connection

// Injects handlebars templates
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(partials());

app.use(express.static(__dirname + '/client'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(8000, function () {
  console.log('app is listening on 8000');
});

module.exports.app = app;