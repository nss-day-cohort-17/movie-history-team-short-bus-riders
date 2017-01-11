var str;
var replaced;
var movie;
var actors;
var title;
var poster;
var year;
var movieData;
var newMovieData;



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
    title = movie.Title
    actors = movie.Actors
    poster = movie.Poster
    year = movie.Year
    movieData = {
      "title": title,
      "actors": actors,
      "year": year
    }
    console.log(movieData)
    $('.newMovieSearch').append(`<div class="newMovieWrapper">
                                <span></span>
                                <h4>${title} - ${year}</h4>
                                <p>${actors}</p>
      <img class="moviePosterImg" src="${poster}">
       </div>`)
    newMovieData = JSON.stringify(movieData)
  })
})



$('#addToList').click(function(data){
  console.log('hello')
  console.log(movieData)
  var buttonList = $.ajax({
    accept: "application/json",
    contentType: "application/json; charset=utf-8",
    method: "POST",
    url: "https://movies-by-short-bus.firebaseio.com/.json",
    data: newMovieData,
    dataType: 'json'
  })
})
