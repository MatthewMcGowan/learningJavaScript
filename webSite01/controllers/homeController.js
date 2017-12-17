(function (homeController) {

    var data = require("../data");

    homeController.init = function (app) {

        app.get("/", function (req, res) {
            //res.send("<html><body><h1>Express</h1></body></html>");
            //res.render("jade/index", { title: "Express + Jade" });
            //res.render("ejs/index", { title: "Express + EJS" });

            data.getNoteCategories(function (err, results) {
                res.render("vash/index", { title: "Express + Vash", error: err, items: results });
            })
        });

        app.get("/api/users", function (req, res) {
            var author = {firstName: "Matthew", surname: "McGowan", boolVal: true, intVal: 1};
            res.set("Content-Type", "application/json");
            res.send({firstName: "Matthew", surname: "McGowan", boolVal: true, intVal: 1});
        });
    }

})(module.exports);