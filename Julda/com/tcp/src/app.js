var express = require('express');
var http = require('http');
var path = require('path');
var loginController = require('./controller/logincontroller');

var app = express();
var member;

// all environments
app.set('port', process.env.PORT || 3000);
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({
	secret : 'secret key'
}));
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'views')));

// development only
if ('development' === app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', function(req, res) {
	res.json({
		RESULT : 'yes'
	});
});

app.get('/login', function(req, res) {
	res.render('index', {msg:req.session.msg});
});

app.get('/user', function(req, res) {
	res.render('daily');
});

app.get('/user/profile', loginController.getUserProfile);

app.post('/login', loginController.checkLogin);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
