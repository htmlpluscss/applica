// btn all menu

(function(btnFullMenu){

	btnFullMenu.addEventListener('click', function () {

		btnFullMenu.parentNode.classList.toggle('header__nav--show');

	});

	window.addEventListener("click", function(e){

		if(!e.target.closest('.header__nav') || e.target.closest('.header__search')){

			btnFullMenu.parentNode.classList.remove('header__nav--show');

		}

	});

})(document.querySelector('.header__btn-full-menu'));


// search

(function(headerSearch){

	var btn = headerSearch.querySelector('.header__search-btn'),
		input = headerSearch.querySelector('.header__search-input'),
		result = headerSearch.querySelector('.header__search-result');

	input.addEventListener('keyup', function () {

		result.classList.toggle('hide',!this.value.length)

	});

	btn.addEventListener('click', function () {

		headerSearch.classList.toggle('header__search--show');

		setTimeout(function(){

			input.focus();

		},100);

	});

	window.addEventListener("click", function(e){

		if(!e.target.closest('.header__search')){

			headerSearch.classList.remove('header__search--show');
			result.classList.add('hide');

		}

	});

})(document.querySelector('.header__search'));

// bg
(function(){

	var search = document.querySelector('.header__search'),
		menu = document.querySelector('.header__btn-full-menu').parentNode;


	window.addEventListener("click", function(e){

		CF.body.classList.toggle('body--bg', menu.classList.contains('header__nav--show') || search.classList.contains('header__search--show'));

	});

})();


// menu mobile
(function(btn){

	btn.addEventListener('click', function () {

		if(CF.OpenMenu) {

			CF.body.classList.remove('menu-show');

			window.scrollTo(0,CF.windowScrollOld);

			CF.OpenMenu = false;

		}
		else {

			CF.OpenMenu = true;

			// записываем значение скролла страницы
			CF.windowScrollOld = window.pageYOffset;
			window.scrollTo(0,0);

			CF.body.classList.add('menu-show');

		}

	});

})(document.querySelector('.header__btn-menu-toggle'));