var http = require("http");
var express = require("express");
var app = express();
// Setup view engine
app.set("view engine", "jade");


app.get("/", function (req, res) {
    //res.send("<html><body><h1>Express</h1></body></html>");
    res.render("jade/index", { title: "Express + Jade" });
});

app.get("/api/users", function (req, res) {
    var author = {firstName: "Matthew", surname: "McGowan", boolVal: true, intVal: 1};
    res.set("Content-Type", "application/json");
    res.send({firstName: "Matthew", surname: "McGowan", boolVal: true, intVal: 1});
});

var server = http.createServer(app);

server.listen(3000);
