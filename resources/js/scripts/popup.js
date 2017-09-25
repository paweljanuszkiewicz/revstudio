;(function () {
	$('[data-popup-trigger]').on('click', function (e) {
		e.preventDefault();
		var target = $(this).attr('data-popup-trigger');
		$('[data-popup="' + target + '"]').toggleClass('popup--visible');
	});
})();
