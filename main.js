firebase.initializeApp({

    apiKey: "AIzaSyD6CkmvZmBWRvXmZaPBeMLNqmyg4l2ZiKk",
    authDomain: "movies-by-short-bus.firebaseapp.com",
    databaseURL: "https://movies-by-short-bus.firebaseio.com",
    storageBucket: "movies-by-short-bus.appspot.com",
    messagingSenderId: "390164299011"

});

setTimeout(() => {
  if (firebase.auth().currentUser === null) {
      //logged in
      $('.registrationButtons').removeClass('hideStuff')
      $('.dataWrapper').addClass('hideStuff')
      $('.login-register').removeClass('hideStuff')
      $('.signOut').addClass('hideStuff')
      console.log('hello')

  } else {
      $('.registrationButtons').addClass('hideStuff')
      $('.dataWrapper').removeClass('hideStuff')
      $('.login-register').addClass('hideStuff')
      $('.signOut').removeClass('hideStuff')
      console.log('boo')
  }
  console.log('done')
}, 100)


//checks to see if the user is logged in or not

firebase.auth().onAuthStateChanged(() => {
  if (firebase.auth().currentUser === null) {
      //logged in
      $('.registrationButtons').removeClass('hideStuff')
      $('.dataWrapper').addClass('hideStuff')
      $('.login-register').removeClass('hideStuff')
      $('.signOut').addClass('hideStuff')
  } else {
          $('.registrationButtons').addClass('hideStuff')
          $('.dataWrapper').removeClass('hideStuff')
          $('.login-register').addClass('hideStuff')
          $('.signOut').removeClass('hideStuff')
  }

})

//when the login/register button is clicked, the search areas will hide and the login form will show
// $('#auth-button').click(function (e){
//   e.preventDefault()
//   $('.registrationButtons').removeClass('hideStuff')
//   $('.datawrapper').addClass('hideStuff')
// })



$('.register').click((e) => {
  e.preventDefault()
  var email = $('.emailRegister').val()
  var password = $('.passwordRegister').val()
  // var username = $('.')
  // var registeredEmail = firebase.auth().currentUser.email

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function () {
        showHideStuff();
        $('.greeting').text(`Hello ${email}`)
      })

      .catch(
        function(error){
          console.log(error.message)
          console.log('hello')
        })
})


$('.login').click((e) => {
  e.preventDefault()
  var email = $('.emailRegister').val()
  var password = $('.passwordRegister').val()
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    showHideStuff();
    // $('form')[0].reset()
    $('.greeting').text(`Hello ${email}`);
    myMovies();

  }).catch(
      function(error){
        $('.errorMessage').text(`${error.message}`)
        alert(error.message)
        console.log(error.message)
        console.log(e)
      })


})

function showHideStuff() {
  $('.registrationButtons').addClass('hideStuff')
  $('.datawrapper').removeClass('hideStuff')
}

$('.main-page form').submit((e) => {
  var task = $('.main-page input[type="text"]').val()
  var uid = firebase.auth().currentUser.uid
  $.post(
    `https://movies-by-short-bus.firebaseio.com/${uid}.json`,
    JSON.stringify({ task: task })
  ).then(res => console.log(res.name))

  e.preventDefault()
})


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


//save a movie
//
// function saveMovie(e){
//     // console.log("new log",newMovieData)
//     $.ajax({
//         accept: "application/json",
//         type: 'POST',
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         url: "https://movies-by-short-bus.firebaseio.com/.json",
//         data: JSON.stringify(newMovieData)
//     });
//     clearMovie()
// }

//pull saved movies from firebase

$('#search-button').click(
  function myMovies(){
    $('.newMovieSearch').addClass('hideStuff')
    $('.unWatchedMovies').removeClass('hideStuff')
      // console.log("new log",newMovieData)
      var uid = firebase.auth().currentUser.uid
      $.getJSON( `https://movies-by-short-bus.firebaseio.com/${uid}.json`)
          .done(function(e) {

          populateMyMoviesPage(e) // <--send saved movies to function populateMyMoviesPage

          console.log("your saved movies are:", e)
      })

  }

)



function populateMyMoviesPage(e) {
  for (var p in e) {
    if (e.hasOwnProperty(p)) {
      console.log(e[p].movie)
      if (e[p].movie.watched === false){
        $('.unwatchedMovies').append(`
          <div class="movieUnwatched">
          <h4>${e[p].movie.title}</h4>
          <img src="${e[p].movie.poster}">
          <button class="markWatched btn">Mark as Watched</button>
          </div>`
        )
      }
    }
  }
  $('.markWatched').click(function (){
    e[p].movie.watched = true;
    $.post()
    console.log('hello')
    console.log(e[p].movie.watched)
  })
  console.log(e)
}
