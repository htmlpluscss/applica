
(function(){

	var modal = document.querySelector('.modal'),
		items = modal.querySelectorAll('.modal__item'),
		close = modal.querySelectorAll('.modal__close'),
		btns = document.querySelectorAll('[data-modal]');

	Array.prototype.forEach.call(close, function (el) {

		el.addEventListener('click', function () {

			APPLICA.hideModal();

		});

	});

	APPLICA.hideModal = function() {

		modal.classList.add('hidden-visible');

		APPLICA.body.classList.remove('modal-show');
		APPLICA.wrapper.style.top = 0;
		window.scrollTo(0,APPLICA.windowScrollOld);

		APPLICA.activeModal = false;

		// clear video
		if (document.getElementById('modal-video')){

			document.getElementById('modal-video').innerHTML = '';

		}

	};

	APPLICA.modalShow = function (selector) {

		if(!APPLICA.activeModal){

			APPLICA.windowScrollOld = window.pageYOffset;

			APPLICA.wrapper.style.top = -APPLICA.windowScrollOld + 'px';

		}

		APPLICA.activeModal = modal.querySelector('.modal__item--' + selector);

		Array.prototype.forEach.call(items, function(el){

			el.classList.toggle('hidden-visible', el !== APPLICA.activeModal);

		});

		modal.classList.remove('hidden-visible');

		APPLICA.body.classList.add('modal-show');
		window.scrollTo(0,0);

		// close menu
		if(APPLICA.OpenMenu){

			document.body.classList.remove('menu-show');
			APPLICA.OpenMenu = false;

		}

		APPLICA.activeModal.focus();

	};

	Array.prototype.forEach.call(btns, function(el){

		el.addEventListener('click', function(e) {

			APPLICA.modalShow(this.getAttribute('data-modal'));

		});

	});

})();