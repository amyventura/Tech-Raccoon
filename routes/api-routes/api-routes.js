const db = require('../../models');
const passport = require('../../config/passport.js');

module.exports = function(app) {
    // GET route for getting all of the job posts
    // app.get("/api/jobs", function(req, res) {
    //     db.Jobs.findAll().then(function(data) {
    //         res.json(data);
    //     });
    // });

    // POST route for saving a new job post
    app.post('/api/getjobs', function(req, res) {
        // Insert into table
        db.Jobs.create({
            comp_name: req.body.comp_name,
            job_descrip: req.body.job_descrip,
            primary_tech_id: req.body.primary_tech_id,
            secondary_tech_id: req.body.secondary_tech_id,
            job_email: req.body.job_email,
            remote: req.body.remote,
        })
            .then(function() {
                res.redirect('/getjobs');
            })
            .catch(err =>
                res.render('error', {
                    error: err.message,
                })
            );
    });

    app.get('/api/getjobs', function(req, res) {
        db.Jobs.findAll().then(function(data) {
            res.json(data);
        });
    });

    app.post('/api/getraccoons', function(req, res) {
        console.log(req.body);
        db.Jobseekers.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            yr_exp: req.body.yr_exp,
            education_id: req.body.education_id,
            primary_tech_id: req.body.primary_tech_id,
            secondary_tech_id: req.body.secondary_tech_id,
            github: req.body.github,
            remote: req.body.remote,
        })

            .then(function() {
                res.redirect('/getraccoons');
            })
            .catch(err =>
                res.render('error', {
                    error: err.message,
                })
            );
    });

    app.get('/api/getraccoons', function(req, res) {
        db.Jobseekers.findAll().then(function(data) {
            res.json(data);
        });
    });

    // Search for jobs?
    // app.get('/api/jobs/:search', function (req, res) {
    //     let search = req.params.search;

    // by category or name or location
    // Make search lowercase
    // search = search.toLowerCase();

    //     Jobs.findAll({
    //             where: {
    //
    //                 }
    //             }
    //         })
    //         .then(jobs => res.render("jobsall", {
    //             jobs
    //         }))
    //         .catch(err => res.render('error', {
    //             error: err
    //         }));
    // });

    //using passport to authenticate
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post('/api/login', passport.authenticate('local'), function(req, res) {
        res.json(req.user);
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error - this doesn't work how I think it works...***
    app.post('/api/signup', function(req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password,
        })
            .then(function() {
                res.redirect(307, '/api/login');
            })
            .catch(function(err) {
                res.status(401).json(err);
            });
    });

    // Route for logging user out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // Route for getting some data about our user to be used client side
    app.get('/api/savedjobs', function(req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id,
            });
        }
    });
};
