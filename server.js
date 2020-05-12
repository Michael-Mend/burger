var express = require("express");

var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));

app.use(express.unlencoded({ extended: true}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("viw engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT)
})