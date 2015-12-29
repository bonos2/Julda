var dao = require('../../dao');

exports.checkLogin = function (id, pw, callback) {
	var check = dao.checkLogin(id, pw, function (result){
		if(result == 'yes') {
			// add dto here
			callback(result);
		} else {
			// error msg
			callback(result);
		}
	});
};

