var str;
var replaced;

$('.btn').click(function(){
  str = $("#movieSearch").val();
  // replaced = str.split(' ').join('+');
  console.log(str)
  var request = $.ajax({
    method: "GET",
    url: `http://www.omdbapi.com/?s=${str}&plot=full2&r=json`
  }).then(function(data){
    console.log(data)
  })
  console.log(request)
})


// console.log(replaced)

var request = $.ajax({
  method: "GET",
  url: "http://www.omdbapi.com/?t=La+la+land&r=json"
}).then(function(data){
  console.log(data)
})
console.log(request)
