var str;
var replaced;
var movie;
var actors;
var title;
var poster;
var year;
var movieData



$('.searchNewMovies').click(function(){
  $('.newMovieSearch').empty()
  str = $("#userInput").val();
  // replaced = str.split(' ').join('+');
  console.log(str)
  var request = $.ajax({
    method: "GET",
    url: `http://www.omdbapi.com/?t=${str}&plot=full2&r=json`
  }).then(function(data){
    movie = data;
    console.log(data)
  }).then(function(){
    title = movie.Title
    actors = movie.Actors
    poster = movie.Poster
    year = movie.Year
    movieData = [
      movie.Title,
      movie.Actors,
      movie.Year
    ]
    console.log(movieData)
    $('.newMovieSearch').append(`<div class="newMovieWrapper">
                                <span></span>
                                <h4>${title} - ${year}</h4>
                                <p>${actors}</p>
      <img class="moviePosterImg" src="${poster}">`)
  })
})



// console.log(replaced)
