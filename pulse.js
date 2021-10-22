/*
const size = 200;
 
// This implements `StyleImageInterface`
// to draw a pulsing dot icon on the map.
const pulsingDot = {
	width: size,
	height: size,
	data: new Uint8Array(size * size * 4),
 
	// When the layer is added to the map,
	// get the rendering context for the map canvas.
	onAdd: function () {
		const canvas = document.createElement('canvas');
		canvas.width = this.width;
		canvas.height = this.height;
		this.context = canvas.getContext('2d');
	},
 
// Call once before every frame where the icon will be used.
render: function () {
	const duration = 2000;
	const t = (performance.now() % duration) / duration;
 
	const radius = (size / 2) * 0.3;
	const outerRadius = (size / 2) * 0.7 * t + radius;
	const context = this.context;
 
	// Draw the outer circle.
	context.clearRect(0, 0, this.width, this.height);
	context.beginPath();
	context.arc(
		this.width / 2,
		this.height / 2,
		outerRadius,
		0,
		Math.PI * 2
	);
	context.fillStyle = `rgba(255, 255, 113, ${1 - t})`;
	context.strokeStyle = `rgba(255, 255, 255, ${1 - t})`;
	context.lineWidth = 2 + 2 * (1 - t);
	context.fill();
	context.stroke();
 
	// Draw the inner circle.
	context.beginPath();
	context.arc(
		this.width / 2,
		this.height / 2,
		radius,
		0,
		Math.PI * 2
	);
	context.fillStyle = 'rgba(255, 100, 100, 0)';
	context.fill();
 
	// Update this image's data with data from the canvas.
	this.data = context.getImageData(
		0,
		0,
		this.width,
		this.height
	).data;
 
	// Continuously repaint the map, resulting
	// in the smooth animation of the dot.
	map.triggerRepaint();
 
	// Return `true` to let the map know that the image was updated.
	return true;
	}
};
*/