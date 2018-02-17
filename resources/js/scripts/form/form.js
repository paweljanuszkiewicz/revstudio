(function () {
	autosize($('[data-form="textarea"]'));

	var $inputs = $('[data-form-input]');
	var $form = $('[data-form="container"]');
	var $submit = $('[data-form="submit"]');
	var $info = $('[data-form="info"]');

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

	$form.validate({ // initialize the plugin
		errorClass: 'form__input--error',
		errorPlacement: function(error, element) {
    		return true;
  		},
        rules: {
            name: {
                required: true,
				minlength: 3
            },
            email: {
                required: true,
				email: true
            },
			message: {
                required: true,
				minlength: 10
            },
			budget: {
                required: false
            }
        }
    });

	$form.submit(function (e) {
		if ($(this).valid()) {
			$info.removeClass('form__info--visible');

			// $inputs.attr('disabled', true);
			// $submit.attr('disabled', true);
			$form.addClass('form--disabled');

			$.ajax({
				type: 'POST',
				// url: 'http://revstudio.pl/beta/mail.php',
				data: $form.serialize(),
				success: function(data) {
					$info.text(data.message);

					$info.removeClass('form__info--error form__info--success');

					if (data.success) {
						$info.addClass('form__info--success');
					} else {
						$info.addClass('form__info--error');
					}

					// $inputs.attr('disabled', false);
					// $submit.attr('disabled', false);
					$form.removeClass('form--disabled');

					$info.addClass('form__info--visible');
				}
			});
		}

		e.preventDefault();
	});
})();
