const express = require('express')
const router = express.Router()
const commentsRoute = require('./comments')

module.exports = function(app) {
    // get route -> index

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

    // comments page
    // router.use("/comments", commentsRoute);

    //  module.exports = router
}
