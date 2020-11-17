const db = require("../../models");

module.exports = function(app) {
    //BELOW IS WORKING!!!!! :)
    app.get("/", (req, res) => {
        res.render("home");
    });

    // get jobs route
    app.get("/getjobs", function(req, res) {
        db.Jobs.findAll().then(function(jobData) {
            res.render("getjobs", {allJobs: jobData});
        });
    });

    // Display form to add a new job post
    app.get("/postjobs", (req, res) => {
        res.render("postjobs");
    });

    // get profiles route
    app.get("/getraccoons", function(req, res) {
        db.Jobseekers.findAll().then(function(raccoonData) {
            console.log("Here is the: ", raccoonData);
            res.render("getraccoons", { raccoons: raccoonData });
        });

        //sequelize - get raccoon data
        //raccoonData
    });
    // post profiles route
    app.get("/postprofiles", function(req, res) {
        res.render("postprofiles");
    });
};
