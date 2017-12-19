var http = require("http");

var express = require("express");
var app = express();

// Setup jade view engine
//app.set("view engine", "jade");

// Setup EJS view engine
//var ejsEngine = require("ejs-locals");
//app.engine("ejs", ejsEngine); // support master pages
//app.set("view engine", "ejs"); // actually set the view engine

// Setup Vash view engine
app.set("view engine", "vash");

// Allow contents of ./public to be accessible
app.use(express.static(__dirname + "/public"));

var controllers = require("./controllers");
controllers.init(app);

var server = http.createServer(app);

server.listen(3000);
