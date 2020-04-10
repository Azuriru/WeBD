(function() {
	window.pickerState = {
		hue: 0,
		sat: 1,
		lig: 1,
		alp: 1
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

	const container = build.div({
		id: 'bd-colorpicker',
		children: [
			build.div({
				id: 'bd-colorpicker-palette',
				child: build.canvas({
					id: 'bd-color-canvas',
					width: 250,
					height: 150,
					events: {
						click: function(e) {
							const ctx = e.targt.getContext('2d');
							
						}
					}
				})
			}),
			build.div({
				id: 'bd-colorpicker-vars',
				children: []
			})
		]
	}); // lmao code faster gdi
	
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

	function paintPixel(ctx, x, y, color) {
		ctx.fillStyle = color;
		ctx.fillRect(x, y, 1, 1);
	}

	function drawCanvas(canvas) {
		const ctx = canvas.getContext('2d');
		const width = canvas.width;
		const height = canvas.height;

		let x = canvas.width;
		
		const chsl = `hsl(${pickerState.hue}, 100%, 50%)`;
		
		while (x--) {

			let y = canvas.height;
			while (y--) {
				const {hue, sat, lig} = getPixel(width, height, x, y);
				const pw = x / width;
				const ph = y / height;
				const pwn = Math.abs(pw - 1);
				// const phn = Math.abs(ph - 1);
				// const hue = pickerState.hue;
				// const sat = Math.floor(pw * 100);
				// const lig = Math.floor(((pw + phn) / 2) * 100);

				paintPixel(ctx, x, y, chsl);
				paintPixel(ctx, x, y, `rgba(255, 255, 255, ${pwn})`);
				paintPixel(ctx, x, y, `rgba(0, 0, 0, ${ph})`);
				// ctx.fillStyle = `hsl(${hue}, ${sat}%, ${lig}%)`;
				// ctx.fillRect(x, y, 1, 1);
			}
		}
	}

	window.getPixel = getPixel;
	window.drawCanvas = drawCanvas;
	
    document.body.appendChild(container);

	drawCanvas(document.getElementById('bd-color-canvas'));
})();