// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAVzyhipabzN_dHteXvpAC7l9VP8fvK4Y4",
    authDomain: "seeyouthere-175217.firebaseapp.com",
    databaseURL: "https://seeyouthere-175217.firebaseio.com",
    projectId: "seeyouthere-175217",
    storageBucket: "seeyouthere-175217.appspot.com",
    messagingSenderId: "764610033809"
  };

firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// Google maps API
// async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"


// apiKey: "AIzaSyB45u6q4Ep9T99aYb1tEo2NmkJ-vxJD8pk"


// Geolocation url for finding current location
src="https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyB45u6q4Ep9T99aYb1tEo2NmkJ-vxJD8pk"

// Google Maps API v3 - create google maps on fly and add our current position to it
src="//maps.googleapis.com/maps/api/js?v=3.exp&sensor=true"


// https://maps.googleapis.com/maps/api/js?key=AIzaSyARBt0KpGyGMoEle_MskA5Xz56lPvOJE7g&callback=initMap




window.onload = function() {
  var startPos;
  var geoSuccess = function(position) {
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
};


// $(".location").on("click", function() {
// 	preventDefault();


// })

//onclick function for friends address menu
	//inside slide out id refer to info in database and add firends info

// global variable for name and addresses
var id = [];
var place = [];

//onclick function submit
$("#submit").on("click", function(){
  event.preventDefault();
  var name = $("#name").val();
  id.push(name);
  var address = $("#address").val();
  place.push(address);
  console.log(id);
  console.log(place);
  friendButton();
});

function friendButton() {
  for (var i=0; i < id.length; i++) {
    var list = $("<li><a href='#!'");
    list.addClass("id");
    list.attr("data-name", id[i]);
    list.text(id[i]);
    $("#slide-out").append(list);
  }
}


	// get id value of name
	// get id value for address

//store values in firebase

//Create variable to reference database

//temporary object for holding the data

//upload data to database




// https://maps.googleapis.com/maps/api/js?key=AIzaSyARBt0KpGyGMoEle_MskA5Xz56lPvOJE7g&callback=initMap


$(".button-collapse").sideNav(); //makes the nave work

$(".friendList").on("click", function(){
  $('.button-collapse').sideNav('hide'); //hide nav
  // display preloader
  //spin for amoount of time
  //display location stuff

});
