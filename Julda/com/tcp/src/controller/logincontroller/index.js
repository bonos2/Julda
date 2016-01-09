var dao = require('../../dao');
var async = require('async');

exports.checkLogin = function(req, res) {
	var req_mem_id = req.body.id;
	var req_mem_pw = req.body.pw;

	dao.checkLogin(req_mem_id, req_mem_pw, function(result) {
		var count = 0;
		var list = [];

		if (result.length === 0) {
			req.session.regenerate(function(err) {
				req.session.msg = '아이디 혹은 비밀번호가 틀립니다.';
				res.redirect('/login');
			});
		} else {
			async.whilst(function() {
				return count < result.length;
			}, function(callback) {
				list.push(result[count]);
				count++;
				callback();
			}, function(err) {
				console.log(err);
			});

			if (list[0].mem_id === req_mem_id && list[0].mem_pw === req_mem_pw) {
				req.session.regenerate(function(err) {
					req.session.myid = req_mem_id;
					res.redirect('/user');
				});
			} else {
				req.session.regenerate(function(err) {
					req.session.msg = '아이디 혹은 비밀번호가 틀립니다.';
					res.redirect('/login');
				});
			}
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