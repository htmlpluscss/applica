
(function(){

	var modal = document.querySelector('.modal'),
		items = modal.querySelectorAll('.modal__item'),
		close = modal.querySelectorAll('.modal__close'),
		btns = document.querySelectorAll('[data-modal]');

	Array.prototype.forEach.call(close, function (el) {

		el.addEventListener('click', function () {

			CF.hideModal();

		});

	});

	CF.hideModal = function() {

		modal.classList.add('hidden-visible');

		CF.body.classList.remove('modal-show');
		CF.wrapper.style.top = 0;
		window.scrollTo(0,CF.windowScrollOld);

		CF.activeModal = false;

		// clear video
		if (document.getElementById('modal-video')){

			document.getElementById('modal-video').innerHTML = '';

		}

	};

	CF.modalShow = function (selector) {

		if(!CF.activeModal){

			CF.windowScrollOld = window.pageYOffset;

			CF.wrapper.style.top = -CF.windowScrollOld + 'px';

		}

		CF.activeModal = modal.querySelector('.modal__item--' + selector);

		Array.prototype.forEach.call(items, function(el){

			el.classList.toggle('hidden-visible', el !== CF.activeModal);

		});

		modal.classList.remove('hidden-visible');

		CF.body.classList.add('modal-show');
		window.scrollTo(0,0);

		// close menu
		if(CF.OpenMenu){

			document.body.classList.remove('menu-show');
			CF.OpenMenu = false;

		}

		CF.activeModal.focus();

	};

	Array.prototype.forEach.call(btns, function(el){

		el.addEventListener('click', function(e) {

			CF.modalShow(this.getAttribute('data-modal'));

		});

	});

})();