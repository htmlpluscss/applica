(function(btnAjax){

	if(btnAjax) {

		APPLICA.AJAX = {

			'ON'        : true,
			'page'      : 2,
			'size'      : 12,
			'url'       : btnAjax.getAttribute('data-url'),
			'count'     : parseInt(btnAjax.getAttribute('data-nav-record-count')),
			'list'      : document.querySelector('.list-article__box'),
			'box'       : document.createElement('div')

		};

		window.addEventListener("scroll", function(){

			window.requestAnimationFrame(function(){

				if(APPLICA.AJAX.ON && APPLICA.isInViewport(btnAjax) && !btnAjax.classList.contains('is-active')) {

					btnAjax.classList.add('is-active');

					var xhr = new XMLHttpRequest(),
						param = /\?/i.test(APPLICA.AJAX.url) ? '&' : '?';

					param += 'AJAX=Y&COMPONENT=BLOG&' + APPLICA.AJAX.pagen_n + '=' + APPLICA.AJAX.page

					xhr.open("GET", APPLICA.AJAX.url + param);

					xhr.onreadystatechange = function() {

						if (xhr.readyState === 4) {

							APPLICA.AJAX.box.innerHTML = xhr.responseText;

							Array.prototype.forEach.call(APPLICA.AJAX.box.children, function(el){

								APPLICA.AJAX.list.appendChild(el.cloneNode(true));

							});

							if(APPLICA.AJAX.size * APPLICA.AJAX.page >= APPLICA.AJAX.count) {

								btnAjax.classList.add('hide');

								APPLICA.AJAX.ON = false;

							}

							APPLICA.AJAX.page++;

							btnAjax.classList.remove('is-active');

						}

						if (xhr.status !== 200) {

							console.log('ошибка ' + xhr.status);

						}

					}

					xhr.send();

				}

			});

		});

	}

})(document.querySelector('.js-loading'));