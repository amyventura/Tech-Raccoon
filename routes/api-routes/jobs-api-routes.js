const db = require("../models");

module.exports = function (app) {
    // GET route for getting all of the job posts
    app.get("/api/jobs", function (req, res) {
        Jobs.findAll({}).then(function (dbJob) {
            res.render(dbJob);
        })
    });

    // Display form to add a new job post
    app.get("/api/jobs/post", function (req, res) {
        res.render("post");
    });

    // POST route for saving a new job post
    app.post("/api/jobs/post", function (req, res) {
        let {
            title,
            description,
            technologies,
            salary,
            company_name,
            contact_email,
            remote_position
        } = req.body;

        // Make technologies lowercase
        technologies = technologies.toLowerCase();

        // salary is not included "Unknown" will be printed...also added $
        if (!salary) {
            salary = "Unknown";
        } else {
            salary = `$${salary}`;
        }

        // Insert into table
        db.Jobs.create({
                title,
                description,
                technologies,
                salary,
                company_name,
                contact_email,
                remote_position
            })
            .then(jobs => res.redirect('/jobs'))
            .catch(err => res.render('error', {
                error: err.message
            }))
    });

    // Search for gigs
    app.get('/search', function (req, res) {
        let search = req.query;

        // Make search lowercase
        search = search.toLowerCase();

        Jobs.findAll({
                where: {
                    technologies: {
                        [Op.like]: '%' + search + '%'
                    }
                }
            })
            .then(jobs => res.render('viewJobs', {
                jobs
            }))
            .catch(err => res.render('error', {
                error: err
            }));
    });

};