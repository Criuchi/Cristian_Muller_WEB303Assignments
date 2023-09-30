// Cristian Muller - 0785530
// Assignment 3

$(document).ready(function() {
    // Function for $.getJSON
    //  requestJSON();

    // Function for $.ajax
        requestAjax();
});


function requestJSON() {
    $.getJSON("team.json", function(data) {

        $.each(data, function(index, teamMember) {
            
            // Create HTML for the JSON elements
            var teamName = $("<h2>").text(teamMember.name);
            var teamPosition = $("<h5>").text(teamMember.position);
            var teamBio = $("<p>").text(teamMember.bio);
            
            // Append the elements to the #team div
            $("#team").append(teamName, teamPosition, teamBio);
        });
    });
}

// Function for $.ajax request
function requestAjax() {

    $("#team").text("Loading...");
    $.ajax({
        url: "team.json",
        type: "GET",
        dataType: "json",
        timeout: 3000,
        success: function(data) {

            // Delay content display for 3 seconds
            setTimeout(function() {
                $("#team").empty();

                // Loop through the array in the returned object
                $.each(data, function(index, teamMember) {

                    // Create HTML for the JSON elements 
                    var teamName = $("<h2>").text(teamMember.name);
                    var teamPosition= $("<h5>").text(teamMember.position);
                    var teamBio = $("<p>").text(teamMember.bio);
                    
                    // Append the elements to the #team div
                    $("#team").append(teamName, teamPosition, teamBio);
                });
            }); 
        },
        error: function() {
            // Display error message }
            $("#team").text("Error: Content could not be retrieved.");
        }
    });
}

