firebase.initializeApp({

    apiKey: "AIzaSyD6CkmvZmBWRvXmZaPBeMLNqmyg4l2ZiKk",
    authDomain: "movies-by-short-bus.firebaseapp.com",
    databaseURL: "https://movies-by-short-bus.firebaseio.com",
    storageBucket: "movies-by-short-bus.appspot.com",
    messagingSenderId: "390164299011"

});

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
