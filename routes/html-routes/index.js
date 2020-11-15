const express = require('express')
const router = express.Router()
const commentsRoute = require('./comments')

module.exports = function(app) {
    // get route -> index


    //BELOW IS WORKING!!!!! :)
    app.get('/getjobs', (req, res) => {
        console.log('getjobs!')
        res.render('getjobs')
    })

    app.get('/', (req, res) => {
        res.render('home')
    })


    // comments page
    // router.use("/comments", commentsRoute);

    //  module.exports = router
}
