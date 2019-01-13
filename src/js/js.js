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

})();