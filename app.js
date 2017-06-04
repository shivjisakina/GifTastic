// Pseudo Code:
// Create initial buttons
// Create input form so user can add their own tv shows
// Push/render(?) their buttons onto the site
// Pull the gifs from the api that have to do with that button
// Show them on the website when the button is clicked
// Enable ratings to show underneath each gif


// TV Shows Variable

var tvshows = ["Greys Anatomy", "Friends", "How I Met Your Mother", "The Middle", "The Carrie Diaries", "The Fosters", "Chasing Life", "Two and a Half Men", "Gossip Girl", "The Originals", "2 Broke Girls", "Mike & Molly", "The Big Bang Theory"]

// Function to get the gifs according to the button
//function getgifs () {

    var tvshow = $(this).attr("data-tvshow");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        tvshow + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(tvshow);
    console.log(queryURL);


// AJAX to pull the gifs
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);

    // response.data variable
    var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var showGifDiv = $("<div class='showDiv'>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var showImage = $("<img>");

            showImage.attr("src", results[i].images.fixed_height.url);

            showGifDiv.prepend(p);
            showGifDiv.prepend(showImage);

           // $("#gifsarea").prepend(gifDiv);
        }








    });



//};