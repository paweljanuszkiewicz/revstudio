(function() {
	var $element = $('[data-fixed]');
	console.log($element.offset());
	$element.css({
      'position': 'fixed',
      'top': $element.offset().top,
	  'left': $element.offset().left,
	  'width': $element.width()
    });
})(window);
