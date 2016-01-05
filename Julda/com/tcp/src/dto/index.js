exports.member = function(id, pw, name, callback) {
	var member = {};

	member.id = id;
	member.pw = pw;
	member.name = name;

	callback(member);
};