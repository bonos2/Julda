var mysql = require('mysql');
var client = mysql.createConnection({
	host : 'arirang.cx7s5qbzipaw.ap-northeast-1.rds.amazonaws.com',
	port : 3306,
	user : 'ari',
	password : 'dkflfkd13gh',
	database : 'mydb'
});

exports.login = function (request, response) {
	var req_mem_id = request.param('id');
	var req_mem_pw = request.param('pw');
	console.log(req_mem_id);
	console.log(req_mem_pw);

	client.query('SELECT * FROM mydb.Members where mem_id=? AND mem_pw=?', [req_mem_id, req_mem_pw], function(error, result, fields) {
		if(result.length == 0){
			response.json({
				RESULT : "NO"
			});
		} else {
			response.json({
				RESULT : "YES"
			});
		}
	});
};
