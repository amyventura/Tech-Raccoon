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

         // Send the POST request.
         //below not set up in api routes
        $.ajax('/api/jobseekers', {
            type: 'POST',
            data: newJobseeker,
        }).then(function() {
            console.log('created new Jobseeker')
            // Reload the page to get the updated list
            location.reload()
        })
    // function radioSelect(form, name) {
    //     var val;
    //     // get list of radio buttons with specified name
    //     var radios = form.elements[name];
        
    //     // loop through list of radio buttons
    //     for (var i=0, len=radios.length; i<len; i++) {
    //         if ( radios[i].checked ) { // radio checked?
    //             val = radios[i].value; // if so, hold its value in val
    //             break; // and break out of for loop
    //         }
    //     }
    //     return val;
    // }

})
})