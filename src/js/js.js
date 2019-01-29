/*! UTF-8

© kovrigin
Все права разрешены
красивый дизайн должен иметь красивый код®

https://github.com/htmlpluscss/

*/

var APPLICA = {};

(function(){

	APPLICA.body = document.body;
	APPLICA.width = window.innerWidth,
	APPLICA.height = window.innerHeight;

// resize

	var resizeTimeout = null;

	window.addEventListener("resize", function(){

		if (!resizeTimeout) {

			resizeTimeout = setTimeout(function() {

				resizeTimeout = null;
				APPLICA.width = window.innerWidth;
				APPLICA.height = window.innerHeight;

			}, 100);

		}

	});

	APPLICA.isInViewport = function(element) {
		var rect = element.getBoundingClientRect();
		return (
			rect.top >= 0 && rect.bottom <= APPLICA.height
		);
	}

// cursor
	var cursor = document.querySelector('.js-cursor'),
		pageCoordCursor = [0,0];

	window.addEventListener("mousemove", function(e){

		if(pageCoordCursor[0]==0){

			TweenMax.set(cursor, {
				x: e.clientX-6,
				y: e.clientY-6
			});

			TweenMax.to(cursor, 1, {
				ease: Expo.easeOut,
				opacity: 1
			});

		}

		pageCoordCursor[0] = e.clientX;
		pageCoordCursor[1] = e.clientY;

		// курсок кружок
		var size = e.target.closest('a') || e.target.closest('button') ? 36 : 12;

		TweenMax.to(cursor, 1, {
			width: size,
			height: size,
			x: pageCoordCursor[0]-(size/2),
			y: pageCoordCursor[1]-(size/2),
			ease: Expo.easeOut
		});

	});

	if (typeof window.CustomEvent === 'function') {

	//	window.dispatchEvent(new Event('mousemove'));

	}

})();