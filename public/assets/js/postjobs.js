$(document).ready(function () {
    // Gets an optional query string from our url (i.e. ?post_id=23)
    const url = window.location.search;
    const jobId;

    // Getting jQuery references to the job description, title, location, company name, and form id
    var description = $('#description');
    var title = $('#title');
    var location = $('#location');
    var companyName = $('#companyName');
    var jobForm = $('#jobForm');

    // Adding an event listener for when the form is submitted
    $(jobForm).on('submit', function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a description or a title
        if (!title.val().trim() || !description.val().trim()) {
            return;
            }
        // Constructing a newJobPost object to hand to the database
        let newJobPost = {
            title: title.val().trim(),
            job_descrip: description.val().trim(),
            comp_name: companyName.val().trim(),
            location: location.val().trim()
            };

        console.log(newJobPost);

        submitJobPost();

        // Submits a new post and brings user to home page upon completion
        function submitJobPost(Jobs) {
            $.Jobs('/api/jobs/', Jobs, function () {
                window.location.href = '/';
                });
            }
    });
});