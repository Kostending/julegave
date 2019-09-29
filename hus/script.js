$(function() {
	var doneTime = new Date('Feb 1, 2020 12:00:00').getTime();

	var loop = setInterval(function() {
		var now = new Date().getTime();

		var diff = doneTime - now;

		var days = Math.floor(diff / (1000 * 60 * 60 * 24));
 		var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  		var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  		var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  		$('#counter').html(days + " Dage " + hours + " Timer " + minutes + " Minutter " + seconds + " Sekunder");

	}, 1000);
});
