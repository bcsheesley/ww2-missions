// Create a popup, but don't add it to the map yet.
var popupHover = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: true
	});
	
var popupClick = new mapboxgl.Popup({
	closeButton: true,
	closeOnClick: true
	});

// Missions route popup
map.on('mouseenter', 'routesPopup', (e) => {
	const name = e.features[0].properties.name;
	
	// Populate the popup and set its coordinates
	// based on the feature found.
	popupHover
		.setHTML(`testing`)
		.addTo(map)
		.setLngLat(e.lngLat)
		.trackPointer();
});

map.on('click', 'routesPopup', (e) => {
	const name = e.features[0].properties.name;
	
	// Populate the popup and set its coordinates
	// based on the feature found.
	popupClick.setLngLat(e.lngLat).setHTML(`click probe`).addTo(map);
});

map.on('mouseenter', 'routesPopup', (e) => {
	const name = e.features[0].properties.name;
	
	// Populate the popup and set its coordinates
	// based on the feature found.
	popupHover
		.setHTML(`<h3>${name}</h3>`)
		.addTo(map)
		.setLngLat(e.lngLat)
		.trackPointer();
});

map.on('mouseenter', 'routesPopup', () => {
	// Change the cursor style as a UI indicator.
	map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'routesPopup', () => {
	// Change the cursor style as a UI indicator.
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

// Missions point popup
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
	popupHover.setLngLat(coordinates).setHTML(`<h3>${name}</h3><p>${date}</p>`).addTo(map);
});
	 
map.on('mouseleave', 'missions', function () {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

// Service schools popup
map.on('mouseenter', 'serviceSchools', function (e) {
	// Change the cursor style as a UI indicator.
	map.getCanvas().style.cursor = 'pointer';
	 
	var coordinates = e.features[0].geometry.coordinates.slice();
	var name = e.features[0].properties.name;
	var place = e.features[0].properties.place;
	var course = e.features[0].properties.course;
	var duration = e.features[0].properties.duration;
	 
	// Ensure that if the map is zoomed out such that multiple
	// copies of the feature are visible, the popup appears
	// over the copy being pointed to.
	while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
	coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
	}
	 
	// Populate the popup and set its coordinates
	// based on the feature found.
	popupHover.setLngLat(coordinates).setHTML(`<h3>${name}</h3><p>${place}</p><p>${course}</p><p>${duration}</p>`).addTo(map);
});
	 
map.on('mouseleave', 'serviceSchools', function () {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});