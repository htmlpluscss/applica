(function(swiperContainer){

	if(!swiperContainer.length) {

		return;

	}

	Array.prototype.forEach.call(swiperContainer, function(swipe){

		var mySwipe,
			resizeTimeout = null,
			windowWidthOLd = null,
			toggleSwipe = null,
			resetSwipe = null,
			swipeNav = document.createElement('div'),
			swipeNext = document.createElement('button'),
			swipePrev = document.createElement('button'),
			count = swipe.querySelectorAll('.swiper-slide').length,
			md = swipe.classList.contains('swiper-container--md'),
			review = swipe.classList.contains('swiper-container--review');

		swipeNav.className = 'swiper-pagination';
		swipe.appendChild(swipeNav);

		swipePrev.className = 'swiper-button-prev button hide';
		swipeNext.className = 'swiper-button-next button hide';

		swipePrev.innerHTML = '<svg width="6" height="10" viewBox="0 0 6 10"><path d="M6 .788L5.183 0 0 5l5.183 5L6 9.212 1.633 5z"/></svg>';
		swipeNext.innerHTML = '<svg width="6" height="10" viewBox="0 0 6 10"><path d="M0 .788L.817 0 6 5 .817 10 0 9.212 4.367 5z"/></svg>';

		swipe.parentNode.appendChild(swipeNext);
		swipe.parentNode.appendChild(swipePrev);

		resetSwipe = function(){

			if(mySwipe) {

				mySwipe.destroy(false,true);
				mySwipe = undefined;

			}

			if (APPLICA.width < 1199) {

				swipeNav.classList.remove('hide');

			}
			else {

				swipeNav.classList.add('hide');

			}

		}

		if (md) {

			toggleSwipe = function() {

				resetSwipe();

				if (APPLICA.width < 1199) {

					mySwipe = new Swiper(swipe, {
						loop: true,
						autoHeight: true,
						pagination: {
							el: swipeNav
						}
					});

				}

			}

		}

		if (review) {

			toggleSwipe = function() {

				if(!mySwipe) {

					swipePrev.classList.remove('hide');
					swipeNext.classList.remove('hide');

					mySwipe = new Swiper(swipe, {
						loop: true,
						autoHeight: false,
						slidesPerView: 2,
						pagination: {
							el: swipeNav,
							clickable: true
						},
						navigation: {
							nextEl: swipeNext,
							prevEl: swipePrev
						},
						breakpoints: {
							1199: {
								autoHeight: true,
								slidesPerView: 1
							}
						}
					});

				}

			}

		}

		window.addEventListener("resize", function(){

			window.requestAnimationFrame(function(){

				if (!resizeTimeout) {

					resizeTimeout = setTimeout(function() {

						resizeTimeout = null;

						if(APPLICA.width != windowWidthOLd){

							windowWidthOLd = APPLICA.width;

							if(toggleSwipe){

								toggleSwipe();

							}

						}

					}, 1000);

				}

			});

		});

		window.addEventListener("load", function(){

			if(mySwipe){

				mySwipe.update();

			}

		});

		if(toggleSwipe){

			toggleSwipe();

		}

	});

})(document.querySelectorAll('.swiper-container'));