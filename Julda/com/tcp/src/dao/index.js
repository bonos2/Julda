var mysql = require('mysql');
var client = mysql.createConnection({
	host : 'arirang.cx7s5qbzipaw.ap-northeast-1.rds.amazonaws.com',
	port : 3306,
	user : 'ari',
	password : 'dkflfkd13gh',
	database : 'mydb'
});

exports.checkLogin = function (id, pw, callback) {
	var check = 'no';
	
	client.query('SELECT * FROM mydb.Members where mem_id=? AND mem_pw=?', [id, pw], function(error, result, fields) {
		if(result.length == 0){
			check = 'no';
			callback(check);	
		} else {
			check = 'yes';
			callback(check);
		}
	});
};
