// import orm
const orm = require('../config/orm');

// code that calls the ORM functions

const burger = {
	all: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},
	create: function(b_name, dev, cb) {
		orm.insertOne('burgers', b_name, dev, function(res) {
			cb(res);
		});
	},
	update: function(bool, idNum, cb) {
		orm.updateOne('burgers', bool, idNum, function(res) {
			cb(res);
		});
	}
};

// export this file
module.exports = burger;
