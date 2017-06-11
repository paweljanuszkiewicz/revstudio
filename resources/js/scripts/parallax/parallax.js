(function () {
	function setAttr($elem, layer) {
		if (layer == 0) {
			return;
		}
		$elem.attr('data-parallax', layer);
	}

	setAttr($('.projects-grid__tile-row:nth-child(7n+1) .projects-grid__tile'), 'upMore');
	setAttr($('.projects-grid__tile-row:nth-child(7n+2) .projects-grid__tile'), 'up');
	setAttr($('.projects-grid__tile-row:nth-child(7n+3) .projects-grid__tile'), 'upMoreMore');
	setAttr($('.projects-grid__tile-row:nth-child(7n+4) .projects-grid__tile'), 'down');
	setAttr($('.projects-grid__tile-row:nth-child(7n+5) .projects-grid__tile'), 'upMore');
	setAttr($('.projects-grid__tile-row:nth-child(7n+6) .projects-grid__tile'), 'up');
	setAttr($('.projects-grid__tile-row:nth-child(7n+7) .projects-grid__tile'), 'upMore');


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
	var $layerUpMoreMore = $('[data-parallax="upMoreMore"]');

	var parallax = debounce(function() {
		var $position = $(window).scrollTop();
		$('[data-parallax]').css({
			'overflow': 'visible'
		});

		$layerDown.css({
			'transform': 'translateY(' + Math.floor($position/12) + 'px)'
		});
		$layerDownMore.css({
			'transform': 'translateY(' + Math.floor($position/9) + 'px)'
		});
		$layerUp.css({
			'transform': 'translateY(' + Math.floor(-1 * $position/12) + 'px)'
		});
		$layerUpMore.css({
			'transform': 'translateY(' + Math.floor(-1 * $position/9) + 'px)'
		});
		$layerUpMoreMore.css({
			'transform': 'translateY(' + Math.floor(-1 * $position/6) + 'px)'
		});
	}, 10);

	function resetParallax() {
		$layerDown.css({
			'transform': 'none'
		});
		$layerDownMore.css({
			'transform': 'none'
		});
		$layerUp.css({
			'transform': 'none'
		});
		$layerUpMore.css({
			'transform': 'none'
		});
		$layerUpMoreMore.css({
			'transform': 'none'
		});
	}

	var checkWidth = function () {
		return $(window).width();
	};


	if (checkWidth() > 970) {
		$(this).on('scroll', parallax);
	}

	$(this).on('resize', debounce(function () {
		if (checkWidth() > 970) {
			$(this).on('scroll', parallax);
		}
		else {
			resetParallax();
			$(this).off('scroll', parallax);
		}
	}, 200));

})(window);
