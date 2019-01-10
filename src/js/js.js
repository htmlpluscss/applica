/*! UTF-8

© kovrigin
Все права разрешены
красивый дизайн должен иметь красивый код®

https://github.com/htmlpluscss/

*/

var CF = {};

(function(){

	CF.body = document.body;
	CF.width = window.innerWidth,
	CF.height = window.innerHeight;

// resize

	var resizeTimeout = null;

	window.addEventListener("resize", function(){

		if (!resizeTimeout) {

			resizeTimeout = setTimeout(function() {

				resizeTimeout = null;
				CF.width = window.innerWidth;
				CF.height = window.innerHeight;

			}, 100);

		}

	});

})();