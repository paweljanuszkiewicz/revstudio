(function () {
	autosize($('[data-form="textarea"]'));

	var $inputs = $('[data-form-input]');
	var $form = $('[data-form="container"]');

	$inputs.each(function (index) {
		var index = index;

		$(this).on('keydown', function () {
			$inputs.eq(index + 1).addClass('form__input--active');
		});

		$(this).on('blur', function () {
			if ($(this).val()) {
				$(this).addClass('form__input--active');
			} else {
				$(this).removeClass('form__input--active');
				$inputs.eq(index + 1).removeClass('form__input--active');
			}
		});
	});


})();
