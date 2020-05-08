(function() {
	window.pickerState = {
		hue: 180,
		sat: 1,
		lig: 1,
		alp: 1,
		mousedown: false,
		x: 250,
		y: 0,
	};

	const vars = [
        '--bd-default',
        '--bd-default-border',
        '--bd-lightest',
        '--bd-lighter',
        '--bd-light',
        '--bd-dark',
        '--bd-darker'
	];

	document.body.addEventListener('mousedown', function(e) {
		if (e.target.closest('#bd-picker-wrapper')) {
			console.log('down');
			pickerState.mousedown = true;
			pickerState.x = e.clientX;
			pickerState.y = e.clientY;

			const pointer = document.getElementById('bd-canvas-pointer');

			pointer.style.top = `${pickerState.y}px`;
			pointer.style.left = `${pickerState.x}px`;
		}
	});

	document.body.addEventListener('mouseup', function(e) {
		console.log('up');
		pickerState.mousedown = false;
	});

	document.body.addEventListener('mousemove', function(e) {
		if (pickerState.mousedown) {
			pickerState.x = Math.min(250, e.clientX);
			pickerState.y = Math.min(150, e.clientY);

			const pointer = document.getElementById('bd-canvas-pointer');

			pointer.style.top = `${pickerState.y}px`;
			pointer.style.left = `${pickerState.x}px`;
		}
	}, { passive: true });

	const container = build.div({
		id: 'bd-colorpicker',
		children: [
			build.div({
				id: 'bd-colorpicker-palette',
				children: [
					build.div({
						id: 'bd-picker-wrapper',
						children: [
							build.canvas({
								id: 'bd-color-canvas',
								width: 250,
								height: 150,
								events: {
								}
							}),
							build.div({
								id: 'bd-canvas-pointer',
								style: {
									top: `${pickerState.y}px`,
									left: `${pickerState.x}px`
								}
							}),
						]
					}),
					build.input({
						type: 'range',
						id: 'bd-hue-slider',
						min: 0,
						max: 360,
						value: pickerState.hue,
						events: {
							input: function(e) {
								pickerState.hue = Number(e.target.value);
								drawCanvas(document.getElementById('bd-color-canvas'));
							}
						}
					}),
					build.input({
						type: 'range',
						id: 'bd-opacity-slider',
						min: '0',
						max: '100',
						value: '100',
						events: {
							input: function(e) {
								console.log(e.target.value);
							}
						}
					})
				]
			}),
			build.div({
				id: 'bd-colorpicker-vars',
				child: pickerColors
			})
		]
	});

	window.getPixel = function(width, height, x, y) {
		const pw = x / width;
		const ph = y / height;
		const pwn = Math.abs(pw - 1);
		const phn = Math.abs(ph - 1);

		const hue = pickerState.hue;
		const sat = Math.floor(pw * 100);
		const lig = Math.floor(pwn * 50 + phn * 50);

		return {hue, sat, lig, pw, ph, pwn, phn};
	}

	function drawCanvas(canvas) {
		const ctx = canvas.getContext('2d');
		const width = canvas.width;
		const height = canvas.height;
		const wg = ctx.createLinearGradient(0, 0, width, 0);
		const bg = ctx.createLinearGradient(0, height, 0, 0);

		wg.addColorStop(0, 'white');
		wg.addColorStop(1, 'rgba(255, 255, 255, 0)');

		bg.addColorStop(0, 'black');
		bg.addColorStop(1, 'rgba(0, 0, 0, 0)');

		ctx.fillStyle = `hsl(${pickerState.hue}, 100%, 50%)`;
		ctx.fillRect(0, 0, width, height);

		ctx.fillStyle = wg;
		ctx.fillRect(0, 0, width, height);

		ctx.fillStyle = bg;
		ctx.fillRect(0, 0, width, height);
	}

	window.getPixel = getPixel;
	window.drawCanvas = drawCanvas;

    document.body.appendChild(container);

	drawCanvas(document.getElementById('bd-color-canvas'));
})();