// Displays all techRaccoon profiles (jobseekers saved information)

app.get('/api/getraccoons', function(req, res) {
    db.Jobseekers.findAll().then(function(data) {
        res.json(data);
    });
    console.log(data);
});

// function displayJobseekers () {
//     for (var i = 0; i < data.length; i++) {

// }
