(function () {
	autosize($('[data-form="textarea"]'));

	var $inputs = $('[data-form-input]');
	var $form = $('[data-form="container"]');
	var $submit = $('[data-form="submit"]');

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
		console.log('sending');

		$.ajax({
			type: 'POST',
			url: '../mail.php',
			data: $(this).serialize(),
			success: function(data) {
				console.log(data);
			}
		});

		e.preventDefault();
	});
})();
