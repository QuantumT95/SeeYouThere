//Initialize Firebase

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

//onclick function submit
	// get id value of name
	// get id value for address

//store values in firebase

//Create variable to reference database

//temporary object for holding the data

//upload data to database




// https://maps.googleapis.com/maps/api/js?key=AIzaSyARBt0KpGyGMoEle_MskA5Xz56lPvOJE7g&callback=initMap


$(".button-collapse").sideNav();//makes the nave work
