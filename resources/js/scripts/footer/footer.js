(function () {
	var $content = $('[data-post="content"]');
	var $footer = $('[data-post="footer"]');

	$(window).on('load', function () {
		$content.css({
			marginBottom: Math.ceil($footer.outerHeight()) + 'px'
		});
	});
})();
