// import express and burger.js file
const express = require('express');

const app = express();

const burger = require('../models/burger');

// Routes

app.get('/', function(req, res) {
	burger.all(function(data) {
		let hbsObject = {
			burgers: data
		};
		res.render('index', hbsObject);
	});
});

app.post('/api/burgers', function(req, res) {
	const { burger_name, devoured } = req.body;
	burger.create(burger_name, devoured, function(result) {
		res.json({ id: result.insertId });
	});
});

app.put('/api/burgers/:id', function(req, res) {
	let idNum = req.params.id;
	let bool = req.body.devoured;
	burger.update(bool, idNum, function(result) {
		if (result.changedRows == 0) {
			// If no rows were changed, then the ID must not exist, so 404
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});
// export router
module.exports = app;
