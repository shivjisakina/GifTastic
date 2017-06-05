// Pseudo Code:
// Create initial buttons
// Create input form so user can add their own tv shows
// Push/render(?) their buttons onto the site
// Pull the gifs from the api that have to do with that button
// Show them on the website when the button is clicked
// Enable ratings to show underneath each gif
// Enable user to stop and start gif animation on click

// Document ready function
$(document).ready (function() {
    console.log("ready");

// ---------------------------------------------------------------------------------------------------------------------

    // Animation variable
    var animate = "0";

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

// ---------------------------------------------------------------------------------------------------------------------

    // Turning them into on click functions
    $(document).on("click", ".getbuttons", function (userbuttons) {

        $("#gifsareas").empty();

        //var tvshows = $(event.target).val().trim();

        var tvshows = $(event.target).text().trim();

        // Adding an on click event listener to the buttons
        var shows = $(this).attr("data-show");
        console.log(shows);

        // Creating a variable for the queryURL
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
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
                var showDiv = $("<div class='item'>");

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

                // Prepending showDiv
                $("#gifsarea").prepend(showDiv);
                //$("#gifsarea").prepend(showImg)



            }


        });

        // Trying to set animation to still but it didnt do anything

        // Create on click function on the gifs

        /*$(".showImg").on("click", function(){
            console.log("image clicked");

            // If else statement to figure out when to stop/start animation
            if (animate == 0){
                var imgVal = this.value;
                console.log(imgVal);
                $(this).attr("src", results[imgVal].images.fixed_height.url);
                animate ++

            }else {
                var imgVal = this.value;
                $(this).attr("src", results[imageVal].images.fixed_height_still.url);
                animate --
            }

        });*/


// ---------------------------------------------------------------------------------------------------------------------

        /*// Create buttons based on user input
        function renderButtons() {
            $(".userbtn").empty();
            for (var i = 0; i < buttons.length; i++) {
                var a = $("<button>");
                a.addClass("tvshow");
                a.attr("data-tvshow", buttons[i]);
                a.text(buttons[i]);
                $(".userbtns").append(a);
                return false;

            }
        }

        $("#addusershow").on("click", function(event) {
            event.preventDefault();
            var usershow = $("#user-input").val().trim();
            buttons.push(usershow);
            renderButtons();
        });
        renderButtons();

        $(document).on("click", ".tvshow", userbuttons);
        renderButtons();
        */



    });

});
