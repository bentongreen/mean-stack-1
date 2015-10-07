'use strict'

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// var server = app.listen(port, 'localhost', function() {
//   var port = server.address().port;
//   var host = server.address().address;
//   console.log('server listening at http://' + host + ':' + port);
// });


app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res, next) {
    console.log('request was made...');
    console.log(req.originalUrl);
    next();
});

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname + '/' });
});

app.use(function(req, res) {
  console.log(req.originalUrl);
    res.status(404).sendFile('404.html', { root: __dirname + '/' });

});

app.listen(port);
console.log('server listening at' + port);
