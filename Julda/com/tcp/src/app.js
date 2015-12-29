var express = require('express');
var http = require('http');
var path = require('path');
var dao = require('./dao');
var loginController = require('./controller/logincontroller');
var app = express();
var bodyParser = require('body-parser');

app.set('port', process.env.PORT || 80);

app.use(express.static(path.join(__dirname, 'view')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/login', function (req, res) {
    res.sendfile('./view/index.html');
});

app.get('/daily', function (req, res) {
	res.sendfile('./view/daily.html');
});

app.post('/login', function (req, res) {
	var req_mem_id = req.body.id;
	var req_mem_pw = req.body.pw;
	
	loginController.checkLogin(req_mem_id, req_mem_pw, function(result){
		res.redirect('http://52.192.184.47/daily');
	});
});


http.createServer(app).listen(app.get('port'), function () {
	console.log('Server running at http://52.192.184.47');
});
