module.exports = function(app) {

    //BELOW IS WORKING!!!!! :)
    app.get("/getjobs", (req, res) => {
        res.render("getjobs");
    });

    app.get("/getraccoons", (req, res) => {
        res.render("getraccoons");
    });

    app.get("/postjobs", (req, res) => {
        res.render("postjobs");
    });

    app.get("/postprofiles", (req, res) => {
        res.render("postprofiles");
    });

    app.get("/", (req, res) => {
        res.render("home");
    });

    app.get("/jobs", (req, res) => {
        res.render("getjobs");
    });

    // Display form to add a new job post
    app.get("/jobs/post", function (req, res) {
        res.render("postjobs");
    });

    // get profiles route
    app.get("/getraccoons", function (req, res) {
        res.render("getraccoons");
    });

    // post profiles route
    app.get("/getraccoons/post", function (req, res) {
        res.render("postprofiles");
    });

};

