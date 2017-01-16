firebase.initializeApp(config){

    apiKey: "AIzaSyD6CkmvZmBWRvXmZaPBeMLNqmyg4l2ZiKk",
    authDomain: "movies-by-short-bus.firebaseapp.com",
    databaseURL: "https://movies-by-short-bus.firebaseio.com",
    storageBucket: "movies-by-short-bus.appspot.com",
    messagingSenderId: "390164299011"

};

//when the login/register button is clicked, the search areas will hide and the login form will show
$('#auth-button').click(function (e){
  e.preventDefault()
  $('.registrationButtons').removeClass('hidden')
  $('.datawrapper').addClass('hidden')
  console.log('hello')
})


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


  }).catch(
      function(error){
        $('.errorMessage').text(`${error.message}`)
        alert(error.message)
        console.log(error.message)
        console.log('hello')
        console.log(e)
      })


})

function showHideStuff() {
  $('.registrationButtons').addClass('hidden')
  $('.datawrapper').removeClass('hidden')
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

//save a movie

function saveMovie(e){
    // console.log("new log",newMovieData)
    $.ajax({
        accept: "application/json",
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "https://movie-history-team-short-bus-riders.firebaseio.com/.json",
        data: JSON.stringify(newMovieData)
    });
    clearMovie()
}

//pull saved movies from firebase

function myMovies(){
    // console.log("new log",newMovieData)
    $.ajax({url: "https://movie-history-team-short-bus-riders.firebaseio.com/.json"})
        .done(function(e) {

        populateMyMoviesPage(e) // <--send saved movies to function populateMyMoviesPage

        // console.log("your saved movies are:", e)
})

}

// This function takes a movie ID and rating then assigns that rating a certain number of stars
function showStarsOnLoad(uuid, rating) {
	switch(rating) {
		case 1:
			$(`#${uuid} .star-1.hollow`).addClass('hidden')
			$(`#${uuid} .star-1.filled`).removeClass('hidden')
			break
		case 2:
			$(`#${uuid} .star-1.hollow, #${uuid} .star-2.hollow`).addClass('hidden')
			$(`#${uuid} .star-1.filled, #${uuid} .star-2.filled`).removeClass('hidden')
			break
		case 3:
			$(`#${uuid} .star-1.hollow, #${uuid} .star-2.hollow, #${uuid} .star-3.hollow`).addClass('hidden')
			$(`#${uuid} .star-1.filled, #${uuid} .star-2.filled, #${uuid} .star-3.filled`).removeClass('hidden')
			break
		case 4:
			$(`#${uuid} .star-1.hollow, #${uuid} .star-2.hollow, #${uuid} .star-3.hollow, #${uuid} .star-4.hollow`).addClass('hidden')
			$(`#${uuid} .star-1.filled, #${uuid} .star-2.filled, #${uuid} .star-3.filled, #${uuid} .star-4.filled`).removeClass('hidden')
			break
		case 5:
			$(`#${uuid} .star.hollow`).addClass('hidden') // hide filled stars
			$(`#${uuid} .star.filled`).removeClass('hidden') // show hollow stars
			break
  }
}

// Updates the 1-5 star rating on DOM and updates data in firebase
function updateStarsOnClick(clickEvt) {
  console.log("updateStarsOnClick")
	var target = clickEvt.target
	var starVal = $(target).data('value')
	var uuid = $(target).closest('.col').attr('id')
	$(`#${uuid} .star.filled`).addClass('hidden') // hide filled stars
	$(`#${uuid} .star.hollow`).removeClass('hidden') // show hollow stars
	switch(starVal) {
		case 1:
			$(`#${uuid} .star-1.hollow`).addClass('hidden')
			$(`#${uuid} .star-1.filled`).removeClass('hidden')
			updateRating(uuid, 1)
			break
		case 2:
			$(`#${uuid} .star-1.hollow, #${uuid} .star-2.hollow`).addClass('hidden')
			$(`#${uuid} .star-1.filled, #${uuid} .star-2.filled`).removeClass('hidden')
			updateRating(uuid, 2)
			break
		case 3:
			$(`#${uuid} .star-1.hollow, #${uuid} .star-2.hollow, #${uuid} .star-3.hollow`).addClass('hidden')
			$(`#${uuid} .star-1.filled, #${uuid} .star-2.filled, #${uuid} .star-3.filled`).removeClass('hidden')
			updateRating(uuid, 3)
			break
		case 4:
			$(`#${uuid} .star-1.hollow, #${uuid} .star-2.hollow, #${uuid} .star-3.hollow, #${uuid} .star-4.hollow`).addClass('hidden')
			$(`#${uuid} .star-1.filled, #${uuid} .star-2.filled, #${uuid} .star-3.filled, #${uuid} .star-4.filled`).removeClass('hidden')
			updateRating(uuid, 4)
			break
		case 5:
			$(`#${uuid} .star.hollow`).addClass('hidden') // hide filled stars
			$(`#${uuid} .star.filled`).removeClass('hidden') // show hollow stars
			updateRating(uuid, 5)
			break
	}
}

// Updates star rating on object using patch
function updateRating(uuid, rating) {
	var url = `https://movies-by-short-bus.firebaseio.com`
	$.ajax({
	  url : url,
	  data: JSON.stringify({ Stars: rating }),
	  type : 'PATCH',
	  dataType: 'json'
	});
}
