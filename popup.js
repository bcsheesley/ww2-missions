// Create a popup, but don't add it to the map yet.
var popupHover = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: true
	});
	
var popupClick = new mapboxgl.Popup({
	closeButton: true,
	closeOnClick: true,
	maxWidth: '180px'
	});

// Mission routes hover popup
map.on('mouseenter', 'routesPopup', (e) => {
	map.getCanvas().style.cursor = 'pointer';
	
	const name = e.features[0].properties.name;
	
	popupHover
	.setHTML(`<h3>${name}</h3><p><i>Click for more details...</i></p>`)
	.addTo(map)
	.setLngLat(e.lngLat)
	.trackPointer();
});

map.on('mouseleave', 'routesPopup', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

// Mission routes click popup
map.on('click', 'routesPopup', (e) => {
	const name = e.features[0].properties.name;
	const daterank1 = e.features[0].properties.daterank1||'';
	const date1 = e.features[0].properties.date1||'';
	const daterank2 = e.features[0].properties.daterank2||'';
	const date2 = e.features[0].properties.date2||'';
	const daterank3 = e.features[0].properties.daterank3||'';
	const date3 = e.features[0].properties.date3||'';
	const daterank4 = e.features[0].properties.daterank4||'';
	const date4 = e.features[0].properties.date4||'';
	
	popupClick
	.setLngLat(e.lngLat)
	.setHTML(
		`<h3>${name}</h3>
		<table>
			<tr>
				<th>Mission</th>
				<th>Date</th>
			</tr>
			<tr>
				<td>${daterank1}</td>
				<td><a href=#journal>${date1}</a></td>
			</tr>
			<tr>
				<td>${daterank2}</td>
				<td><a href=#journal>${date2}</a></td>
			</tr>
			<tr>
				<td>${daterank3}</td>
				<td><a href=#journal>${date3}</a></td>
			</tr>
			<tr>
				<td>${daterank4}</td>
				<td><a href=#journal>${date4}</a></td>
			</tr>
		</table>
		<p>
			<i>Lt. Sheesley flew 35 combat missions in total.</i>
		</p>`
	)
	.addTo(map);
});

// Mission points hover popup
map.on('mouseenter', 'missions', (e) => {
	map.getCanvas().style.cursor = 'pointer';
	
	const name = e.features[0].properties.name;

	popupHover
	.setHTML(`<h3>${name}</h3><p><i>Click for more details...</i></p>`)
	.addTo(map)
	.setLngLat(e.lngLat)
	.trackPointer();
});

map.on('mouseleave', 'missions', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

// Mission points click popup
map.on('click', 'missions', (e) => {
	const name = e.features[0].properties.name;
	const daterank1 = e.features[0].properties.daterank1||'';
	const date1 = e.features[0].properties.date1||'';
	const daterank2 = e.features[0].properties.daterank2||'';
	const date2 = e.features[0].properties.date2||'';
	const daterank3 = e.features[0].properties.daterank3||'';
	const date3 = e.features[0].properties.date3||'';
	const daterank4 = e.features[0].properties.daterank4||'';
	const date4 = e.features[0].properties.date4||'';
	
	popupClick
	.setLngLat(e.lngLat)
	.setHTML(
		`<h3>${name}</h3>
		<table>
			<tr>
				<th>Mission</th>
				<th>Date</th>
			</tr>
			<tr>
				<td>${daterank1}</td>
				<td><a href=#journal>${date1}</a></td>
			</tr>
			<tr>
				<td>${daterank2}</td>
				<td><a href=#journal>${date2}</a></td>
			</tr>
			<tr>
				<td>${daterank3}</td>
				<td><a href=#journal>${date3}</a></td>
			</tr>
			<tr>
				<td>${daterank4}</td>
				<td><a href=#journal>${date4}</a></td>
			</tr>
		</table>
		<p>
			<i>Lt. Sheesley flew 35 combat missions in total.</i>
		</p>`
	)
	.addTo(map);
});

// Service schools hover popup
map.on('mouseenter', 'serviceSchools', (e) => {
	map.getCanvas().style.cursor = 'pointer';
	
	const coordinates = e.features[0].geometry.coordinates.slice();
	const name = e.features[0].properties.name;
	const place = e.features[0].properties.place;
	const course = e.features[0].properties.course;
	const duration = e.features[0].properties.duration;
	
	// Ensure that if the map is zoomed out such that multiple
	// copies of the feature are visible, the popup appears
	// over the copy being pointed to.
	while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
	coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
	}
	
	popupHover
	.setLngLat(coordinates)
	.setHTML(`<h3>${name}</h3><p>${place}</p><p>${course}</p><p>${duration}</p>`)
	.addTo(map);
});
	 
map.on('mouseleave', 'serviceSchools', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});