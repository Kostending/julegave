$(function() {
	// Flight time 20. aug kl. 14:55
	var flightTime = new Date('Aug 18, 2018 08:00:00').getTime();
	var instanbul  = new Date('Aug 20, 2018 14:55:00').getTime();
	var kreta = new Date('Aug 25, 2018 10:35:00').getTime();
	var home = new Date('Aug 31, 2018 19:00:00').getTime();

	var now = new Date().getTime();

	if (0 > flightTime - now) {
		flightTime = instanbul;
	}
	if (0 > flightTime - now) {
		flightTime = kreta;
	}
	if (0 > flightTime - now) {
		flightTime = home;
	}

	var loop = setInterval(function() {
		var now = new Date().getTime();

		var diff = flightTime - now;

		var days = Math.floor(diff / (1000 * 60 * 60 * 24));
 		var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  		var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  		var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  		$('#counter').html(days + " Dage " + hours + " Timer " + minutes + " Minutter " + seconds + " Sekunder");

	}, 1000);


	// function anim(car, speed) {
 //    	car.animate({
 //        	"left": "40%"
 //    	}, speed)
 //    	.animate({
 //    		"left": "85%"
 //    	}, speed, function() {
 //    		console.log('done');
 //    	});
	// };

	// function anim(plane, speed) {
 //    	plane.animate({
 //        	"left": "40%"
 //    	}, speed)
 //    	.animate({
 //    		"left": "85%"
 //    	}, speed);
	// };

	// anim($('#car'), 5000);
	// anim($('#plane'), 5000);

	$('#car').animate({
		"left": "25%"
	}, 5000, function() {
		$('#plane').animate(
			{"left": "15%"},
			3000).
		animate(
			{"left": "60%"},
			5000);
	});
});
