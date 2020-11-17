const db = require("../../models");

module.exports = function (app) {
    app.get("/jobs", (req, res) => {
        res.render("getjobs");
    });

    // Display form to add a new job post
    app.get("/jobs/post", function (req, res) {
        res.render("postjobs");
    });

};