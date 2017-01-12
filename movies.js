
// var str;
// var replaced;
// var movie;
// var actors;
// var title;
// var poster;
// var year;
// var movieData;
// var newMovieData;
//
//
//
// $('.searchNewMovies').click(function(){
//   $('.newMovieSearch').empty()
//   str = $("#userInput").val();
//   // replaced = str.split(' ').join('+');
//   console.log(str)
//   var request = $.ajax({
//     method: "GET",
//     url: `http://www.omdbapi.com/?t=${str}&plot=full2&r=json`
//   }).then(function(data){
//     movie = data;
//     console.log(data)
//     title = movie.Title
//     actors = movie.Actors
//     poster = movie.Poster
//     year = movie.Year
//     movieData = {
//       "title": title,
//       "actors": actors,
//       "year": year
//     }
//     console.log(movieData)
//     $('.newMovieSearch').append(`<div class="newMovieWrapper">
//                                 <span></span>
//                                 <h4>${title} - ${year}</h4>
//                                 <p>${actors}</p>
//       <img class="moviePosterImg" src="${poster}">
//        </div>`)
//     newMovieData = JSON.stringify(movieData)
//   })
// })
//
//
//
// $('#addToList').click(function(data){
//   console.log('hello')
//   console.log(movieData)
//   var buttonList = $.ajax({
//     accept: "application/json",
//     contentType: "application/json; charset=utf-8",
//     method: "POST",
//     url: "https://movies-by-short-bus.firebaseio.com/.json",
//     data: newMovieData,
//     dataType: 'json'
//   })
// })
//
// API usage

// var $Form = $('form'), $Container = $('#container');
// $Container.hide();
// $Form.on('submit', function(p_oEvent){
//     var sUrl, sMovie, oData;
//     p_oEvent.preventDefault();
// sMovie = $Form.find('input').val();
//     sUrl = 'https://www.omdbapi.com/?t=' + sMovie + '&type=movie&tomatoes=true'
//     $.ajax(sUrl, {
//         complete: function(p_oXHR, p_sStatus){
//             oData = $.parseJSON(p_oXHR.responseText);
//             console.log(oData);
//             $Container.find('.title').text(oData.Title);
//             $Container.find('.plot').text(oData.Plot);
//             $Container.find('.poster').html('<img src="' + oData.Poster + '"/>');
//             $Container.find('.year').text(oData.Year);
//             $Container.show();
//         }
//     });
// });

// click function for query

var title;
var year;
var queryString;

$("#omdb_submit").click(function(){
    //Gather values from the other fields and store them into variables.
    var title = $("#title").val();
    var year = $("#year").val();
    // Concatenate those variables to a query string.
    queryString = "http://www.omdbapi.com/?t=" + title + "&y=" + year + "&plot=short&r=json";
});

// Put that query string into the AJAX request
        $.ajax({
            url: queryString, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            method: 'GET'
        }).done(function(response) {
            if(response.length < 1) {
                // Output error message into output container
                $("#output").html("Sorry, no movies were found :(");
            } else {
                // Output data into output container
                $("#output").html(JSON.stringify(response));

                // create an HTML element that will hold all of the prettified elements
                var movieContainer = $('<div class="movie_Container">');
                // Append the movie container to the existing container
                $(".pretty_movie_output").append(movieContainer);

                // Go through each property of the object and create/input the data from the object
                for(var prop in response) {
                    var element;
                    if (prop == "Poster" && response[prop] != "N/A") {
                        element = $("<img class='pretty'>").attr("src", response[prop]);
                    } else {
                        element = $("<h3 class='pretty'>").text(prop + ": " + response[prop]);
                    }

                    movieContainer.append(element);
                }
            }
        })
