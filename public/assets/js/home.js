$(document).ready(function() {
    // References to buttons below
    const submitJob = $('#post-job-submit')
    const submitProfile = $('#post-profile-submit')

    // If time, these as well
    const jobSeekerLogin = $('#job-seeker-login')
    const savedJobs = $('#my-saved-jobs')
    const homeBtn = $('#home-button')

    // Hide in different pages - maybe not needed
    const hideExceptIndex = $('#hide-when-not-index')
    const hideExceptBrowseJobs = $('#hide-when-not-browsejobs')
    const hideExceptFindRaccoons = $('#hide-when-not-findraccoons')

    // References to buttons
    const findRaccoonBtn = $('#find-raccoon-btn')
    const postJobBtn = $('#post-job-btn')
    const getJobBtn = $('#job-search-btn')
    const createProfileBtn = $('#create-profile-btn')

    console.log('Loaded!')

    // Function to click into various pages
    getJobBtn.click(function() {
        location.href = '/getjobs'
    })
    findRaccoonBtn.click(function() {
        location.href = '/getraccoons'
    })
    postJobBtn.click(function() {
        location.href = '/postjobs'
    })
    createProfileBtn.click(function() {
        location.href = '/postprofiles'
    })
    homeBtn.click(function() {
        location.href = '/'
    })


//On click submits profile
    submitProfile.click(function(event) {
        event.preventDefault();
    
    var newJobseeker = {
        first_name: $("#first-input").val().trim(),
        last_name: $("#last-input").val().trim(),
        email: $("#email-input").val().trim(),
        primary_tech_id: $("#profile1").val().trim(),
        secondary_tech_id: $("#profile2").val().trim(),
        yr_exp: $("#experience-input").val().trim(),
        // check below
        education_id: $("#education-form").val().trim(),
        github: $("#github-input").val().trim(),
        remote: $("#remote-input").val().trim(),
    }

    console.log(newJobseeker);
         // Send the POST request.
         //below not set up in api routes
        $.ajax('/getraccoons', {
            type: 'POST',
            data: newJobseeker,
        }).then(function() {
            console.log('created new Jobseeker')
            // Reload the page to get the updated list
            location.reload()
        })
})

var newJob = {
    comp_name: $("#business-input").val().trim(),
    posting_date: $("#date-input").val().trim(),
    job_email: $("#job-email-input").val().trim(),
    job_descrip: $("#description-input").val().trim(),
    education_id: $("#date-input").val().trim(),
    primary_tech_id: $("#seek1").val().trim(),
    secondary_tech_id: $("#seek2").val().trim(),
    remote: $("#remote-input").val().trim(),
}

console.log(newJob);
     // Send the POST request.
     //below not set up in api routes
    $.ajax('/getjobs', {
        type: 'POST',
        data: newJob,
    }).then(function() {
        console.log('created new Job')
        // Reload the page to get the updated list
        location.reload()
    })










})