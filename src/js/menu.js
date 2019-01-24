
(function(menu){

	Array.prototype.forEach.call(menu.querySelectorAll('.menu__item--parent'), function(el){

		var a = el.firstElementChild,
			sub = el.querySelector('.menu__sub');

		a.addEventListener('click', function (e) {

			e.preventDefault();

			sub.classList.toggle('menu__sub--open');

		});

	});

})(document.querySelector('.modal-menu .menu'));