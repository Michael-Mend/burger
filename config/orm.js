const connection = require('../config/connection.js');

const orm = {
	selectAll: function(tableInput, cb) {
		const query = `SELECT * FROM ${tableInput};`;

		connection.query(query, function(err, result) {
			if (err) throw err;

			cb(result);
		});
	},
	insertOne: function(tableInput, b_name, dev, cb) {
		connection.query(
			`INSERT INTO ${tableInput} SET ?`,
			{
				burger_name: b_name,
				devoured: dev
			},
			function(err, result) {
				if (err) throw err;

				cb(result);
			}
		);
	},
	updateOne: function(tableInput, bool, idNum, cb) {
		const query = `UPDATE ${tableInput} SET devoured = ? WHERE id = ?;`;
		connection.query(query, [ bool, idNum ], function(err, result) {
			if (err) throw err;

			cb(result);
		});
	}
};

module.exports = orm;
