const express = require('express')
const router = express.Router()
// const commentsRoute = require('./comments')

module.exports = function(app) {

    //BELOW IS WORKING!!!!! :)
    app.get('/getjobs', (req, res) => {
        res.render('getjobs')
    })

    app.get('/getraccoons', (req, res) => {
        res.render('getraccoons')
    })

    app.get('/postjobs', (req, res) => {
        res.render('postjobs')
    })

    app.get('/postprofiles', (req, res) => {
        res.render('postprofiles')
    })

    app.get('/', (req, res) => {
        res.render('home')
    })

}


// // From Comments.js example
// const express = require("express");
// const router = express.Router();
// const db = require("../../models");

// // routing (html) /commnets
// router.get("/", (req, res) => {
//    // get comments from db and send to template
//    db.Test.findAll({})
//       .then(comments => res.render("home", { comments: comments }))
//       .catch(err => {
//          res.status(500);
//          next(err);
//       });
// });

// module.exports = router;
