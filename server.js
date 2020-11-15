const express = require('express')
const exphbs = require('express-handlebars')
const handlebars = require('handlebars')
const apiRoutes = require('./routes/api-routes')
const htmlRoutes = require('./routes/html-routes')
const db = require('./models')
const seed = require('./utils/seed.js')
const errorHandler = require('./utils/errorHandler.js')
const PORT = process.env.PORT || 3000
const app = express()

// good place for a logging middleware library***

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'))
require('./routes/api-routes/jobs-api-routes.js')(app)
require('./routes/html-routes/index.js')(app)

// Parse application body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine(
    'handlebars',
    exphbs({
        defaultLayout: 'main',
        partialsDir: __dirname + '/views/partials/',
    })
)
app.set('view engine', 'handlebars')
app.get('/', function(req, res) {
    res.render('home')
})

// var routes = require("./controllers/burgersController.js");

app.use('/api', apiRoutes)
app.use(htmlRoutes)

// error handling
app.use(errorHandler)

// drops all tables on eevery restart - one is local, and one is in production - if pushing with force true, you're pushing all tables remotely
db.sequelize.sync({ force: true }).then(async () => {
    // seed db
    // await seed(db.Test);

    // seed db
    await seed(db.Education)
    await seed(db.Jobs)
    await seed(db.Jobseekers)
    await seed(db.Technologies)

    app.listen(PORT, () => {
        console.log('🌎 => live on http://localhost:%s', PORT)
    })
})
