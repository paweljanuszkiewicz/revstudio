window.sr = ScrollReveal();

sr.reveal('[data-reveal]', {
	// 'bottom', 'left', 'top', 'right'
	origin: 'top',

	// Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
	distance: '100%',

	// Time in milliseconds.
	duration: 350,
	delay: 100,

	// Starting opacity value, before transitioning to the computed opacity.
	opacity: 0,

	// Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
	easing: 'ease',

	// true/false to control reveal animations on mobile.
	mobile: false,

	// true:  reveals occur every time elements become visible
	// false: reveals occur once as elements become visible
	reset: false,

	// 'always' — delay for all reveal animations
	// 'once'   — delay only the first time reveals occur
	// 'onload' - delay only for animations triggered by first load
	useDelay: 'always',

	// Change when an element is considered in the viewport. The default value
	// of 0.20 means 20% of an element must be visible for its reveal to occur.
	viewFactor: 0.5
}, 2);

sr.reveal('[data-reveal-post]', {
	// Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
	distance: '0',

	// Time in milliseconds.
	duration: 350,
	delay: 100,

	// Starting opacity value, before transitioning to the computed opacity.
	opacity: 0,

	// Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
	easing: 'ease',

	// true/false to control reveal animations on mobile.
	mobile: true,

	// true:  reveals occur every time elements become visible
	// false: reveals occur once as elements become visible
	reset: false,

	// 'always' — delay for all reveal animations
	// 'once'   — delay only the first time reveals occur
	// 'onload' - delay only for animations triggered by first load
	useDelay: 'always',

	// Change when an element is considered in the viewport. The default value
	// of 0.20 means 20% of an element must be visible for its reveal to occur.
	viewFactor: 0.1
}, 2);
