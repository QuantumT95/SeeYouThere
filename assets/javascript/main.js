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
// async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB45u6q4Ep9T99aYb1tEo2NmkJ-vxJD8pk&callback=initMap"

// apiKey: "AIzaSyB45u6q4Ep9T99aYb1tEo2NmkJ-vxJD8pk"

// Geolocation url for finding current location
src = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyB45u6q4Ep9T99aYb1tEo2NmkJ-vxJD8pk"

// Google Maps API v3 - create google maps on fly and add our current position to it
src = "//maps.googleapis.com/maps/api/js?v=3.exp&sensor=true"

// src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyARBt0KpGyGMoEle_MskA5Xz56lPvOJE7g&callback=initMap"

var googleMyKey = "AIzaSyB45u6q4Ep9T99aYb1tEo2NmkJ-vxJD8pk";

// On window load will get and paste our latitude + longitude onto the page
function loadFirst() {

  // var startPos;
  // var geoSuccess = function(position) {
  //   startPos = position;
  //   document.getElementById('startLat').innerHTML = startPos.coords.latitude;
  //   document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  // };
  // navigator.geolocation.getCurrentPosition(geoSuccess);

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
      showMapChoices();
    },2000);

  });

  function showMapChoices(){
    console.log("beep");
    $("#map_canvas").show();
    $("#topChoices").show();
  }

  var startPos;
  var geoSuccess = function(position) {
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
  loadScript();
};

// Set long + lat to local storage so we can refer to it later on
// setTimeout(function() {
//   console.log($("#startLon").text());
// }, 6000);

// setTimeout(function() {
//   localStorage.setItem("longitude", $("#startLon").text());
// }, 6000);

// setTimeout(function() {
//   console.log($("#startLat").text());
// }, 6000);

// setTimeout(function() {
//   localStorage.setItem("latitude", $("#startLat").text());
// }, 6000);

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
// -34.397, 150.644 austrailia

function initialize() {
            var latlng = new google.maps.LatLng(29.7251099,-95.5459889,3010);
            var myOptions = {
                zoom: 8,
                center: latlng,
            };
            var map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);
}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + googleMyKey + "&callback=initialize";
    document.body.appendChild(script);
  }


// YELP api
// "url": "https://api.yelp.com/v3/businesses/search?location=77083",


var location = '77083',

var yelp = {
  //"async": true,
  //"crossDomain": true,
  "url":"https://still-castle-31920.herokuapp.com/",
  "method": "GET",
  "data": {
      "term":'restaurants',
      "location": '77083',
      "radius": '16093',
      "open_now": 'true'
  },
  "headers": {
    //"authorization": "Bearer IwuIlUt2cqn7UOVRTabK04434_6hWZgLZmfz4nBU9KpqjMnXbMBX9qQzCGQzk0HNRNtUef3T5eE3O1JM8w4Kunf-sE1lznXQKbV7YDQMgkHPkbaG0oQ3KJAQL-CFWXYx"
    //"cache-control": "no-cache",
    // "postman-token": "cd21ac1e-b1bd-efd5-2535-9d0d52d7d1aa"
  }
}

$.ajax(yelp).done(function (response) {
  console.log(response);
});


 // src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyARBt0KpGyGMoEle_MskA5Xz56lPvOJE7g&callback=initMap"
