var dao = require('../../dao');
var async = require('async');

exports.checkLogin = function(id, pw, callback) {
	var check = 'no';
	
	dao.checkLogin(id, pw, function(result) {
		var count = 0;
		var list = [];

		async.whilst(function() {
			return count < result.length;
		}, function(callback) {
			list.push(result[count]);
			count++;
			callback();
		}, function(err) {
			console.log(err);
		});

		if (list[0].mem_id === id && list[0].mem_pw === pw) {
			check = 'yes';
			callback(check);
		} else {
			callback(check);
		}
	});
};

exports.getUserProfile = function(req, res) {
	var req_mem_id = req.session.myid;

	dao.getUserProfile(req_mem_id, function(result) {
		var count = 0;
		var list = [];

		async.whilst(function() {
			return count < result.length;
		}, function(callback) {
			list.push(result[count]);
			count++;
			callback();
		}, function(err) {
			console.log(err);
		});

		res.json({
			memlist : list
		});
	});
};