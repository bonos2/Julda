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
	res.render('index');
});

app.get('/user', function(req, res) {
	res.render('daily');
});

app.post('/login', function(req, res) {
	var req_mem_id = req.body.id;
	var req_mem_pw = req.body.pw;
	
	loginController.checkLogin(req_mem_id, req_mem_pw, function(result) {
		if (result === 'yes') {
			req.session.regenerate(function(err) {
				req.session.myid = req_mem_id;
				res.redirect('/user');
			});
		}
	});
});

app.get('/user/profile', loginController.getUserProfile);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
