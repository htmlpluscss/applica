
(function(){

	var modal = document.querySelector('.modal'),
		items = modal.querySelectorAll('.modal__item'),
		close = modal.querySelectorAll('.modal__close'),
		btns = document.querySelectorAll('[data-modal]'),
		wrapper = document.querySelector('.wrapper');

	Array.prototype.forEach.call(close, function (el) {

		el.addEventListener('click', function () {

			APPLICA.hideModal();

		});

	});

	APPLICA.hideModal = function() {

		modal.classList.add('hidden-visible');

		APPLICA.body.classList.remove('modal-show');
		wrapper.style.top = 0;
		window.scrollTo(0,APPLICA.windowScrollOld);

		APPLICA.activeModal = false;

	};

	APPLICA.modalShow = function (selector) {

		if(!APPLICA.activeModal){

			APPLICA.windowScrollOld = window.pageYOffset;

			wrapper.style.top = -APPLICA.windowScrollOld + 'px';

		}

		APPLICA.activeModal = modal.querySelector('.modal__item--' + selector);

		Array.prototype.forEach.call(items, function(el){

			el.classList.toggle('hidden-visible', el !== APPLICA.activeModal);

		});

		modal.classList.toggle('modal--menu', selector == "menu");

		modal.classList.remove('hidden-visible');

		APPLICA.body.classList.add('modal-show');
		window.scrollTo(0,0);

		APPLICA.activeModal.focus();

	};

	Array.prototype.forEach.call(btns, function(el){

		el.addEventListener('click', function(e) {

			APPLICA.modalShow(this.getAttribute('data-modal'));

		});

	});

})();