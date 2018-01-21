$(document).ready(function() {
	/* WEATHER with simpleWeather.js */
	  $.simpleWeather({
		location: 'Biel/Bienne, CH',
		unit: 'c',
		success: function(weather) {
		  html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
		  html += '<ul><li>'+weather.city+', '+weather.region+'</li></ul>';

		  $("#weather").html(html);
		},
		error: function(error) {
		  $("#weather").html('<p>'+error+'</p>');
		}
	  });

	/* Date & time */
	function dateTime() {
		var dt = new Date();
		var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
		$("#date h1").html(time);

		//convert month to 2 digits
		var twoDigitMonth = ((dt.getMonth().length+1) === 1)? (dt.getMonth()+1) : '0' + (dt.getMonth()+1);
		var currentDate = dt.getDate() + "/" + twoDigitMonth + "/" + dt.getFullYear();
		$("#date h3").html(currentDate);
	}

	setInterval(dateTime, 1000);
});
