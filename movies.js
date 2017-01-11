var str;
var replaced;
var movie;


$('.btn').click(function(){
  str = $("#movieSearch").val();
  // replaced = str.split(' ').join('+');
  console.log(str)
  var request = $.ajax({
    method: "GET",
    url: `http://www.omdbapi.com/?t=${str}&plot=full2&r=json`
  }).then(function(data){
    movie = data;
    console.log(data)
  }).then(function(){
    console.log(movie.Title)
    console.log(movie.Actors)
    var poster = movie.Poster
    $('body').append(`<img src="${poster}">`)
  })
})


// console.log(replaced)
