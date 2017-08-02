

// Google maps API
// async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
 

// apiKey: "AIzaSyARBt0KpGyGMoEle_MskA5Xz56lPvOJE7g"

var location1;
var res1;

$(".submit").on("click", function() {
	preventDefault();

	var location1 = $("#address_1").val();
	var res1 = location1.toString().replace(/ /g,"+");


	console.log(location1);
	console.log(res1);

	

});


// https://maps.googleapis.com/maps/api/js?key=AIzaSyARBt0KpGyGMoEle_MskA5Xz56lPvOJE7g&callback=initMap