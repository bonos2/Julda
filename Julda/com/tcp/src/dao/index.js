var mysql = require('mysql');
var client = mysql.createConnection({
	host : '127.0.0.1',
	port : 3306,
	user : 'root',
	password : 'dkflfkd13gh',
	database : 'mydb'
});

/* check login */
exports.checkLogin = function(id, pw, callback) {
	var check = 'no';

	/* find id and pw in database */
	client.query('SELECT * FROM mydb.Members where mem_id=? AND mem_pw=?', [
			id, pw ], function(error, result, fields) {
		if (result.length === 0) {
			check = 'no';
			callback(check);
		} else {
			check = 'yes';
			callback(check);
		}
	});
};

/* create user */
exports.createUser = function(UserModel) {
};

/* get schedule */
exports.getSchedule = function(userIndex) {
};

/* add schedule */
exports.addSchedule = function(ScheduleModel) {
};

/* delete schedule */
exports.deleteSchedule = function(schedulIndex, userIndex) {
};

/* get mission */
exports.getMission = function(userIndex) {
};

/* get bodymodel */
exports.getBodyModel = function(userIndex) {
};

/*get summary */
exports.getSummary = function(userIndex) {
};