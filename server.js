'use strict'

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

var server = app.listen(port, 'localhost', function() {
  var port = server.address().port;
  var host = server.address().address;
  console.log('server listening at http:// ' + host)
});

app.route('*')
  .get(function (req, res, next) {
    console.log('request was made...')
});

app.route('/')
  .get(function(req, res) {
    res.sendFile('index.html', { root: __dirname + '/' });
});

app.use(function(req, res) {
    res.status(404).sendFile('404.html', { root: __dirname + '/' });
});

app.listen();
