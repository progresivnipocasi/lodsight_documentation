

$(function () {

	// Vars.
	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper');

	// Breakpoints.
	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	// Disable animations/transitions until everything's loaded.
	$body.addClass('is-loading');

	$window.on('load', function () {
		$body.removeClass('is-loading');
	});

	window.onscroll = function () { myFunction() };

	/*
	function myFunction() {
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var scrolled = (winScroll / height) * 100;
		document.getElementById("myBar").style.width = scrolled + "%";
	}*/


	particlesJS(
		"particles-js", {
		"particles": {
			"number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" },
			"shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } },
			"opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": {
				"value": 3, "random": true,
				"anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
			}, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }
			, "move": {
				"enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false,
				"attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
			}
		}, "interactivity": {
			"detect_on": "canvas", "events":
				{ "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": {
					"grab": { "distance": 400, "line_linked": { "opacity": 1 } },
					"bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 },
					"remove": { "particles_nb": 2 }
				}
		}, "retina_detect": true
	});

});

