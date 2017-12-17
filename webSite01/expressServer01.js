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

app.get("/", function (req, res) {
    //res.send("<html><body><h1>Express</h1></body></html>");
    //res.render("jade/index", { title: "Express + Jade" });
    //res.render("ejs/index", { title: "Express + EJS" });
    res.render("vash/index", { title: "Express + Vash" });
});

app.get("/api/users", function (req, res) {
    var author = {firstName: "Matthew", surname: "McGowan", boolVal: true, intVal: 1};
    res.set("Content-Type", "application/json");
    res.send({firstName: "Matthew", surname: "McGowan", boolVal: true, intVal: 1});
});

var server = http.createServer(app);

server.listen(3000);
