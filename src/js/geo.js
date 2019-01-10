

(function(geo){

	var btnTrue = geo.querySelector('.header__geo-confirm-true'),
		confirmWindow = geo.querySelector('.header__geo-confirm'),
		city = geo.querySelector('.header__geo-confirm-name'),
		current = geo.querySelector('.header__geo-current');

	btnTrue.addEventListener('click', function () {

		confirmWindow.classList.add('hide');
		current.textContent = city.textContent;

		Cookies.set('BITRIX_SM_geo', city.textContent);

	});

})(document.querySelector('.header__geo'));