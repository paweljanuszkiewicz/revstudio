(function () {
	var $hamburger = $('[data-mobile-menu="hamburger"]');
	var $menu = $('[data-mobile-menu="menu"]');

	$hamburger.on('click', function () {
		$(this).toggleClass('is-active');
		$menu.toggleClass('is-active');
	});
})(window);
