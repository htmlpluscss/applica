
(function(){

	var scrollLink = document.querySelector('.home-top__scroll-link'),
		block = document.querySelector('#portfolio');

	if(scrollLink) {

		var href = scrollLink.getAttribute('href');

		scrollLink.addEventListener('click', function (e) {

			e.preventDefault();
			history.pushState(null, null, href);

			animateScroll(block, 500, 'linear');

		});

		window.addEventListener("scroll", function(){

			window.requestAnimationFrame(function(){

				if(window.pageYOffset < block.getBoundingClientRect().top && APPLICA.scrollTop < window.pageYOffset) {

					animateScroll(block, 500, 'linear');

				}

				APPLICA.scrollTop = window.pageYOffset;

			});

		});

	}

})();