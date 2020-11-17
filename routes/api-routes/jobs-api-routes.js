const db = require("../../models");

module.exports = function (app) {
    // GET route for getting all of the job posts
    app.get("/api/jobs", function (req, res) {
        db.Jobs.findAll({}).then(function (dbJob) {
            res.json(dbJob);
        });
    });

    // POST route for saving a new job post
    app.post("/jobs/post", function (req, res) {
        
        // Insert into table
        db.Jobs.create({
            comp_name: req.body.comp_name, 
            job_descrip: req.body.job_descrip, 
            education_id: req.body.education_id, 
            primary_tech_id: req.body.primary_tech_id, 
            secondary_tech_id: req.body.secondary_tech_id, 
            remote: req.body.remote
            })
            .then(() => res.redirect("/jobs"))
            .catch(err => res.render("error", {
                error: err.message
            }));
    });

    app.post("/api/getraccoons", function (req, res) {
        console.log(req.body)
        db.Jobseekers.create({
            first_name: req.body.first_name, 
            last_name: req.body.last_name, 
            email: req.body.email, 
            yr_exp: req.body.yr_exp,
            education_id: req.body.education_id,
            primary_tech_id: req.body.primary_tech_id, 
            secondary_tech_id: req.body.secondary_tech_id, 
            github: req.body.github,
            remote: req.body.remote
        })
        .then(() => res.redirect("/getraccoons"))
            .catch(err => res.render("error", {
                error: err.message
            }));

    })

    app.get("/api/getraccoons", function (req, res) {

        db.Jobseekers.findAll().then(function(data){
            res.json(data)
        })
    })



    // Search for jobs?
    app.get('/api/jobs/:search', function (req, res) {
        let search = req.params.search;

        // by category or name or location
        // Make search lowercase
        // search = search.toLowerCase();

    //     Jobs.findAll({
    //             where: {
    //                 technologies: {
    //                     [Op.like]: '%' + search + '%'
    //                 }
    //             }
    //         })
    //         .then(jobs => res.render('viewJobs', {
    //             jobs
    //         }))
    //         .catch(err => res.render('error', {
    //             error: err
    //         }));
    });

};