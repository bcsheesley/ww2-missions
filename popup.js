// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: false
	});
	
map.on('mouseenter', 'missions', function (e) {
	// Change the cursor style as a UI indicator.
	map.getCanvas().style.cursor = 'pointer';
	 
	var coordinates = e.features[0].geometry.coordinates.slice();
	var name = e.features[0].properties.name;
	var date = e.features[0].properties.date;
	 
	// Ensure that if the map is zoomed out such that multiple
	// copies of the feature are visible, the popup appears
	// over the copy being pointed to.
	while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
	coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
	}
	 
	// Populate the popup and set its coordinates
	// based on the feature found.
	popup.setLngLat(coordinates).setHTML(`<h3>${name}</h3><p>${date}</p>`).addTo(map);
});
	 
map.on('mouseleave', 'missions', function () {
	map.getCanvas().style.cursor = '';
	popup.remove();
});