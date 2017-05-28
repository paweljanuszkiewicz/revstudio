(function () {
	var $layer1 = $('[data-parallax="1"]');
	var $layer2 = $('[data-parallax="2"]');

	// TO DO:
	// - tylko desktop (duży grid)
	// - debouncer
	// - dodawanie do gridu

	$(this).on('scroll', function() {
		var $position = $(window).scrollTop();
		$layer1.css({
			'transform': 'translateY(' + $position/2 + 'px)'
		});
		$layer2.css({
			'transform': 'translateY(' + $position/4 + 'px)'
		});
	});
})(window);
