const db = require("../../models");

module.exports = function (app) {
    app.get("/jobs", (req, res) => {
        // get comments from db and send to template
        db.Jobs.findAll({})
            .then(function(){
                res.render("/viewJobs")
            .catch(err => {
                res.status(500);
                next(err);
            });
    });
    });
};