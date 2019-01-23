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
			count = swipe.querySelectorAll('.swiper-slide').length,
			md = swipe.classList.contains('swiper-container--md');

		swipeNav.className = 'swiper-pagination';
		swipe.appendChild(swipeNav);

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