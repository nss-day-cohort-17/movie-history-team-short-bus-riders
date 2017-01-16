// $('.main-page form').submit((e) => {
//   var task = $('.main-page input[type="text"]').val()
//   var uid = firebase.auth().currentUser.uid
//   $.post(
//     `https://movies-by-short-bus.firebaseio.com/${uid}.json`,
//     JSON.stringify({ task: task })
//   ).then(res => console.log(res.name))
//
//   e.preventDefault()
// })




//pull saved movies from firebase



//
//
// function myMovies(){
//     // console.log("new log",newMovieData)
//     var uid = firebase.auth().currentUser.uid
//     $.getJSON( `https://movie-history-team-short-bus-riders.firebaseio.com/${uid}.json`)
//         .done(function(e) {
//
//         populateMyMoviesPage(e) // <--send saved movies to function populateMyMoviesPage
//
//         // console.log("your saved movies are:", e)
// })
//
// }
//


// reset search field

function resetSearch() {
   movieInfo = []
   imdbIDs = []
   $('#searchResults').html("")
   $('#searchResults').removeClass('hideStuff')
   $('.my-movies-page').addClass('hideStuff')
}
