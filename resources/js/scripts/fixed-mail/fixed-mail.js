(function() {
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

	function setPosition () {
		var $element = $('[data-fixed]');
		$element.removeAttr('style');
		console.log($element.offset());
		$element.css({
	      'position': 'fixed',
	      'top': $element.offset().top,
		  'left': $element.offset().left,
		  'width': $element.width()
	    });
	};

	setPosition();

	var setPositionDebounce = debounce(setPosition, 200);

	$(this).on('resize', setPositionDebounce);

})(window);
