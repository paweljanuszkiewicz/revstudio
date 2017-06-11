(function () {
	var $projectLinks = $('[data-project-link]');

	function delay (e) {
		$('body').css({
			'transition': 'ease 200ms all',
			'opacity': '0'
		});
		console.log('rampampam');
		e.preventDefault();
		var $link = $(this);
		setTimeout( function() {
			window.location = $link.attr('href');
		}, 300 );
	}

	$projectLinks.on('click', delay);

})(window);
