// Document ready function
$(document).ready (function() {
    console.log("ready");

    // Buttons variable
    var buttons = ["Greys Anatomy", "Friends", "How I Met Your Mother", "The Middle", "The Carrie Diaries", "The Fosters", "Chasing Life", "Two and a Half Men", "Gossip Girl", "The Originals", "2 Broke Girls", "Mike & Molly", "The Big Bang Theory"]

    //Push buttons variable into HTML
    function htmlbtn() {

        $(".getbuttons").empty();

        for (var i = 0; i < buttons.length; i++) {
            console.log(htmlbtn);

            var a = $("<button>");

            a.addClass("btn btn-default");
            a.attr("data-name", buttons[i]);
            a.text(buttons[i]);
            $(".getbuttons").append(a);
        }
    }

    // Initialize htmlbtn function
    htmlbtn();

    // Turning them into on click functions

    $(document).on("click", ".getbuttons", function () {

        $("#gifsareas").empty();

        var tvshows = $(event.target).text().trim();

        // Adding an on click event listener to the buttons
        var shows = $(this).attr("data-show");
        console.log(shows);

        // Creating a variable for the queryURL
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
            tvshows + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(queryURL);

        // AJAX request
        $.ajax({
            url: queryURL
        }).done(function (response) {

            console.log(queryURL);
            console.log(response);

            // Storing data from AJAX request in a variable
            var results = response.data;

            // Looping through the results
            for (var i = 0; i < results.length; i++) {

                // Creating a new div tag to store the results
                var showDiv = $("<div>");

                // A new paragraph tag to store the gif ratings
                var p = $("<p>").text("Rating: " + results[i].rating);

                // Creating an image tag
                var showImg = $("<img>");

                // Giving the image tag an attribute
                showImg.attr("src", results[i].images.fixed_height.url);

                // Appending the image tag to the showDiv
                showDiv.append(showImg);

                // Appending the paragraph tag to the showDiv
                showDiv.append(p);

                // Prepending showDiv to HTML
                $("#gifsarea").prepend(showDiv)


            }


        });

    });

});
