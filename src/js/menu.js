
(function(btn){

	btn.addEventListener('click', function () {

		if(APPLICA.OpenMenu) {

			APPLICA.body.classList.remove('menu-show');

			window.scrollTo(0,APPLICA.windowScrollOld);

			APPLICA.OpenMenu = false;

		}
		else {

			APPLICA.OpenMenu = true;

			// записываем значение скролла страницы
			APPLICA.windowScrollOld = window.pageYOffset;
			window.scrollTo(0,0);

			APPLICA.body.classList.add('menu-show');

		}

	});

})(document.querySelector('.header__btn-menu-toggle'));