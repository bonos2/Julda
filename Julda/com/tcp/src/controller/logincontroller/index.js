var dao = require('../../dao');
var async = require('async');

exports.checkLogin = function(id, pw, callback) {
	dao.checkLogin(id, pw, function(result) {
		if (result === 'yes') {
			// add dto here
			callback(result);
		} else {
			// error msg
			callback(result);
		}
	});
};

exports.getUserProfile = function(req, res) {
	var req_mem_id = req.param('id');
	
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