// $('.main-page form').submit((e) => {
//   var task = $('.main-page input[type="text"]').val()
//   var uid = firebase.auth().currentUser.uid
//   $.post(
//     `https://movies-by-short-bus.firebaseio.com/${uid}.json`,
//     JSON.stringify({ task: task })
//   ).then(res => console.log(res.name))

//   e.preventDefault()
// })

// //save a movie

// function saveMovie(e){
//     // console.log("new log",newMovieData)
//     $.ajax({
//         accept: "application/json",
//         type: 'POST',
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         url: "https://movie-history-team-short-bus-riders.firebaseio.com/.json",
//         data: JSON.stringify(newMovieData)
//     });
//     clearMovie()
// }

// //pull saved movies from firebase

// function myMovies(){
//     // console.log("new log",newMovieData)
//     $.ajax({url: "https://movie-history-team-short-bus-riders.firebaseio.com/.json"})
//         .done(function(e) {

//         populateMyMoviesPage(e) // <--send saved movies to function populateMyMoviesPage

//         // console.log("your saved movies are:", e)
// })

// }
