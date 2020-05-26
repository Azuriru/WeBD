(function() {
	function RGB_TO_HSL(r, g, b) {
		r /= 255, g /= 255, b /= 255;

		var max = Math.max(r, g, b), min = Math.min(r, g, b);
		var h, s, l = (max + min) / 2;

		if (max == min) {
			h = s = 0; // achromatic
		} else {
			var d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0);
					break;
				case g:
					h = (b - r) / d + 2;
					break;
				case b:
					h = (r - g) / d + 4;
				break;
			}

			h /= 6;
		}

		return [ h, s, l ];
	}

	window.pickerState = {
		hue: 180,
		sat: 100,
		lig: 50,
		alp: 1,
		mousedown: false,
		x: 250,
		y: 0,

		r: 0,
		g: 0,
		b: 0
	};

	let nextColorUpdate = '';

	let imageData;

	const vars = [
        '--bd-default',
        '--bd-default-border',
        '--bd-lightest',
        '--bd-lighter',
        '--bd-light',
        '--bd-dark',
        '--bd-darker'
	];

	function updateCanvasPosition(e) {
		pickerState.x = Math.min(250, e.clientX);
		pickerState.y = Math.min(150, e.clientY);

		const color = getPixel(250, 150, pickerState.x, pickerState.y);

		pickerState.hue = color.hue;
		pickerState.sat = color.sat;
		pickerState.lig = color.lig;
		// console.log(color);
		// console.log(`%c${getStateColor()}`, getStateColor());

		const pointer = document.getElementById('bd-canvas-pointer');

		pointer.style.top = `${pickerState.y}px`;
		pointer.style.left = `${pickerState.x}px`;

		updateCurrentColor();
	}

	function getStateColor() {
		const {hue, sat, lig, alp} = pickerState;

		return `hsl(${hue}deg, ${sat}%, ${lig}%, ${alp})`;
	}

	function updateCurrentColor() {
		const wasEmpty = nextColorUpdate === '';
		nextColorUpdate = getStateColor();

		if (!wasEmpty) return;

		requestAnimationFrame(function() {
			document.documentElement.style.setProperty('--bd-currentColor', nextColorUpdate);
			nextColorUpdate = '';
		});
	}

	document.body.addEventListener('mousedown', function(e) {
		if (e.target.closest('#bd-picker-wrapper')) {
			pickerState.mousedown = true;
			updateCanvasPosition(e);
		}
	});

	document.body.addEventListener('mouseup', function(e) {
		pickerState.mousedown = false;
	});

	document.body.addEventListener('mousemove', function(e) {
		if (pickerState.mousedown) {
			updateCanvasPosition(e);
		}
	}, { passive: true });

	const hueSlider = build.input({
		type: 'range',
		id: 'bd-hue-slider',
		min: 0,
		max: 360,
		value: pickerState.hue,
		events: {
			input: function(e) {
				pickerState.hue = Number(e.target.value);
				drawCanvas(document.getElementById('bd-color-canvas'));

				updateCurrentColor();
			}
		}
	});

	const opacitySlider = build.input({
		type: 'range',
		id: 'bd-opacity-slider',
		min: '0',
		max: '100',
		value: '100',
		events: {
			input: function(e) {
				document.querySelector('#bd-picker-color').style.opacity = e.target.value / 100;
			}
		}
	});

	const colorInput = () => {
		return build.input({
			class: 'bd-color-value'
		});
	}

	const colorType = (text) => {
		return build.span({
			text: text
		})
	}

	const colorCode = build.div({
		id: 'bd-color-code',
		children: [
			build.div({
				class: 'bd-color-wrapper',
				children: [colorInput(), colorType('H')]
			}),
			build.div({
				class: 'bd-color-wrapper',
				children: [colorInput(), colorType('S')]
			}),
			build.div({
				class: 'bd-color-wrapper',
				children: [colorInput(), colorType('L')]
			}),
			build.div({
				class: 'bd-color-wrapper',
				children: [colorInput(), colorType('A')]
			})
		]
	});

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
					build.div({
						id: 'bd-picker-values',
						children: [
							build.div({
								id: 'bd-picker-current',
								children: [
									build.div({
										id: 'bd-picker-color'
									}),
									build.div({
										id: 'bd-picker-transparent'
									})
								]
							}),
							build.div({
								id: 'bd-picker-input-wrapper',
								children: [hueSlider, opacitySlider]
							}),
							colorCode
						]
					}),
				]
			}),
			build.div({
				id: 'bd-colorpicker-vars',
				child: pickerColors
			})
		]
	});

	window.getPixel = function(width, height, x, y) {
		const coordY = Math.min(y, height - 1);
		const coordX = Math.min(x, width - 1);
		const offset = coordX * 4 + coordY * width * 4;
		const r = imageData.data[offset];
		const g = imageData.data[offset+ 1];
		const b = imageData.data[offset + 2];

		const [ hue, sat, lig ] = RGB_TO_HSL(r, g, b);

		return {
			hue: hue * 360,
			sat: sat * 100,
			lig: lig * 100
		};
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

		imageData = ctx.getImageData(0, 0, width, height);
	}

	window.getPixel = getPixel;
	window.drawCanvas = drawCanvas;

    document.body.appendChild(container);

	drawCanvas(document.getElementById('bd-color-canvas'));
})();