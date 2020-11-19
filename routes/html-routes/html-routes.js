const db = require('../../models');
const isAuthenticated = require('../../config/middleware/isAuthenticated.js');
const path = require('path');

module.exports = function(app) {
    //BELOW IS WORKING!!!!! :)
    app.get('/', (req, res) => {
        res.render('home');
    });

    // get jobs route
    app.get('/getjobs', function(req, res) {
        db.Jobs.findAll().then(function(jobData) {
            res.render('getjobs', { allJobs: jobData });
        });
    });

    // Display form to add a new job post
    app.get('/postjobs', (req, res) => {
        res.render('postjobs');
    });

    // get profiles route
    app.get('/getraccoons', function(req, res) {
        db.Jobseekers.findAll().then(function(raccoonData) {
            res.render('getraccoons', { raccoons: raccoonData });
        });

        //sequelize - get raccoon data
        //raccoonData
    });
    // post profiles route
    app.get('/postprofiles', function(req, res) {
        res.render('postprofiles');
    });

    //fix below per passport

    app.get('/savedjobs', function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect('/savedjobs');
        }
        res.render('savedjobs');
    });

    app.get('/login', function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect('/login');
        }
        res.render('login');
    });

    app.get('/signup', function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect('/signup');
        }
        res.render('signup');
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get('/savedjobs', isAuthenticated, function(req, res) {
        res.render('savedjobs');
    });

    // github
    app.get('/github', (req, res) => {
            // var gitUser = db.raccoonData.dataValues.github;
            res.redirect('http://www.github.com/');
    });
};
