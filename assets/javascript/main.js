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
src = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyB45u6q4Ep9T99aYb1tEo2NmkJ-vxJD8pk"

// Google Maps API v3 - create google maps on fly and add our current position to it
src = "//maps.googleapis.com/maps/api/js?v=3.exp&sensor=true"

// https://maps.googleapis.com/maps/api/js?key=AIzaSyARBt0KpGyGMoEle_MskA5Xz56lPvOJE7g&callback=initMap

// On window load will get and paste our latitude + longitude onto the page
window.onload = function() {
  var startPos;
  var geoSuccess = function(position) {
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
};

// Set long + lat to local storage so we can refer to it later on
setTimeout(function() {
  console.log($("#startLon").text());
}, 6000);

setTimeout(function() {
  localStorage.setItem("longitude", $("#startLon").text());
}, 6000);

setTimeout(function() {
  console.log($("#startLat").text());
}, 6000);

setTimeout(function() {
  localStorage.setItem("latitude", $("#startLat").text());
}, 6000);

// global variable for name and addresses
var id = [];
var place = [];

//onclick function submit
$("#submit").on("click", function(event) {

  // Preventing the submit button from trying to submit the form
  event.preventDefault();

  //Grabs user input for name + address
  var name = $("#name").val();
  var address = $("#address").val();

  // Creates local "temporary" object for holding our friends data
  var newFriend = {
    name: name,
    address: address
  };

  // Uploads Friend data to the database
  database.ref().push(newFriend);

  // Logs data into console
  console.log(newFriend.name);
  console.log(newFriend.address);
  // friendButton();
});


// function friendButton() {
//   for (var i=0; i < id.length; i++) {
//     var list = $("<li><a href='#!'");
//     list.addClass("id");
//     list.attr("data-name", id[i]);
//     list.text(id[i]);
//     $("#slide-out").append(list);
//   }
// }


// get id value of name
// get id value for address

//store values in firebase

//Create variable to reference database

// 3. Create Firebase event for adding friends to the database and a list in the slideout when a user adds a friend
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var name = childSnapshot.val().name;
  var address = childSnapshot.val().address;

  // Friend Info
  console.log(name);
  console.log(address);

  // Add each friends data into the list
  $("#slide-out").append("friend name: " + name + " " + "address: " + address + " ");
});



//temporary object for holding the data

//upload data to database




// https://maps.googleapis.com/maps/api/js?key=AIzaSyARBt0KpGyGMoEle_MskA5Xz56lPvOJE7g&callback=initMap


$(".button-collapse").sideNav(); //makes the nav work

$(".friendList").on("click", function() {
  $('.button-collapse').sideNav('hide'); //hide nav
  //loading screen background-color
  $("#main").hide();
  // display preloader
  $(".preloader-wrapper").show();
  //spin for amoount of time
  setTimeout(function() {
    $('.preloader-wrapper').fadeOut();
    $('.preloader-wrapper').delay(150).fadeOut('fast');
    $(".preloader-wrapper").hide();
    $("#userLoc").show(); //this isnt working????
    $("#map").show();
  },2000);



  //need to disaply map after time out is done showMap();
  //display location stuff
});


//thought maybe intsead I could call this function inside the time out ?
// function showMap(){
//   console.log("beep");
//   $("#map").show();
// }
