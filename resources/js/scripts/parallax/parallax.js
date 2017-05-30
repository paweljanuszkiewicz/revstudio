(function () {
	function setAttr($elem, layer) {
		if (layer == 0) {
			return;
		}
		$elem.attr('data-parallax', layer);
	}

	setAttr($('.projects-grid__tile-row:nth-child(7n+1)'), 'downMore');
	setAttr($('.projects-grid__tile-row:nth-child(7n+2)'), 'up');
	setAttr($('.projects-grid__tile-row:nth-child(7n+3)'), 'up');
	setAttr($('.projects-grid__tile-row:nth-child(7n+4)'), 'down');
	setAttr($('.projects-grid__tile-row:nth-child(7n+5)'), 'upMore');
	setAttr($('.projects-grid__tile-row:nth-child(7n+6)'), 'up');
	setAttr($('.projects-grid__tile-row:nth-child(7n+7)'), 'down');


	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	var $layerDown = $('[data-parallax="down"]');
	var $layerDownMore = $('[data-parallax="downMore"]');
	var $layerUp = $('[data-parallax="up"]');
	var $layerUpMore = $('[data-parallax="upMore"]');

	var parallax = debounce(function() {
		var $position = $(window).scrollTop();
		$layerDown.css({
			'transform': 'translateY(' + Math.floor($position/8) + 'px)'
		});
		$layerDownMore.css({
			'transform': 'translateY(' + Math.floor($position/6) + 'px)'
		});
		$layerUp.css({
			'transform': 'translateY(' + Math.floor(-1 * $position/8) + 'px)'
		});
		$layerUpMore.css({
			'transform': 'translateY(' + Math.floor(-1 * $position/6) + 'px)'
		});
	}, 10);

	// TO DO:
	// - tylko desktop (duży grid)
	// - dodawanie do gridu

	$(this).on('scroll', parallax);
})(window);
