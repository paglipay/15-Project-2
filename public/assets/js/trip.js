



var url = window.location.search;
var tripId;
var userId;
// Sets a flag for whether or not we're updating a post to be false initially
var updating = false;

function submitTrip(trip) {
	$.post("/trips/new", trip, function () {
		window.location.href = "/trips";
	});
}

function updateTrip(trip) {
	$.ajax({
		method: "PUT",
		url: "/trips",
		data: trip
	})
		.done(function () {
			window.location.href = "/trips";
		});
}



function handleFormSubmit(event) {
	event.preventDefault();

	let nameInput = $("#tripName"),
		destinationInput = moment().toString(),
		methodOfTransportInput = $("#methodOfTransport"),
		arrivalDateInput = $("#datepicker");
	// Wont submit the post if we are missing a body, title, or author
	if ( !arrivalDateInput.val()) {
		return;
	}



	// Constructing a newPost object to hand to the database
	var newTrip = {
		name: nameInput
			.val()
			.trim(),
		destination: destinationInput,
		duration: 111,
		methodOfTransport: methodOfTransportInput
			.val()
			.trim(),
		arrivalDate: arrivalDateInput
			.val()
			.trim()
	};

	// var newTrip = {
	// 	name: 'nameInput',
	// 	destination: moment().toString(),
	// 	duration: '111',
	// 	methodOfTransport: 'directions_car',
	// 	arrivalDate: '2020-07-07 07:00:00'
	// };

	// If we're updating a post run updatePost to update a post
	// Otherwise run submitPost to create a whole new post
	if (updating) {
		newTrip.id = tripId;
		updateTrip(newTrip);
	}
	else {
		submitTrip(newTrip);
	}
}

$("#tripForm").on("submit", handleFormSubmit);