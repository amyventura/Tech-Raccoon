$(document).ready(function () {
    // jobContainer holds all of our posts
    var jobContainer = $(".job-container");
    var location = $("#location");
    var jobs;

    // This function grabs posts from the database and updates the view
    function getJobs(category) {
        var locationString = location || "";
        if (locationString) {
            locationString = "/location/" + locationString;
        }
        $.get("/api/jobs" + locationString, function (data) {
            console.log("Jobs", data);
            jobs = data;
            if (!jobss || !jobs.length) {
                displayEmpty();
            } else {
                initializeRows();
            }
        });
    }

    // Getting the initial list of posts
    getJobPosts();
    // InitializeRows handles appending all of our constructed post HTML inside
    // jobContainer
    function initializeRows() {
        jobContainer.empty();
        var postsToAdd = [];
        for (var i = 0; i < jobs.length; i++) {
            postsToAdd.push(createNewRow(jobs[i]));
        }
        jobContainer.append(postsToAdd);
    }

    // This function displays a message when there are no jobs
    function displayEmpty() {
        jobContainer.empty();
        var messageH2 = $("<h2>");
        messageH2.css({
            "text-align": "center",
            "margin-top": "50px"
        });
        messageH2.html("No jobs yet for this search, navigate <a href='/postjobs'>here</a> in order to create a new job post.");
        jobContainer.append(messageH2);
    }

});