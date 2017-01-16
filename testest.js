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
//     $.getJSON( `https://movies-by-short-bus.firebaseio.com/${uid}.json`)
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

//function to switch movie to watch

function switchWatched (data){
  $(".switchWatched").click (function (e) {
    var mObj; // holds movie obj
    var mid; // holds movie key
    for (let each in data) {
      var currentObj = data[each];
      console.log("currentObj/Title: ",movieTitle, mObj)
      if (currentObj.Title === movieTitle){
        mObj = currentObj;
        mid = each;
      }
    }
    UID = firebase.auth().currentUser.uid;
    mObj.watched = true;
    $.ajax({
      url: `https://movies-by-short-bus.firebaseio.com/${UID}.json`,
      type: "PATCH",
      data: JSON.stringify(data),
      dataType: "json"
    })
    console.log(mObj)
    mObj = "";
    unWatchedMovieFactory();
  })
}
