var express = require('express');
var http = require('http');
var path = require('path');
var dao = require('./dao');
var app = express();

app.use(express.static(path.join(__dirname, 'view')));

app.get('/', function (req, res) {
    res.sendfile('index.html');
});

app.get('/login', dao.login);


http.createServer(app).listen(80, function () {
	console.log('Server running at http://52.192.184.47');
});
