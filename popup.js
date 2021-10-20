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
map.on('mouseenter', 'routes', (e) => {
	map.getCanvas().style.cursor = 'pointer';
	
	const name = e.features[0].properties.name;
	
	popupHover
	.setHTML(`<h3>${name}</h3><p><i>Click for more details...</i></p>`)
	.addTo(map)
	.setLngLat(e.lngLat)
	.trackPointer();
});

map.on('mouseleave', 'routes', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

// Mission routes click popup
map.on('click', 'routes', (e) => {
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

// Recall route hover popup
map.on('mouseenter', 'recall', (e) => {
	map.getCanvas().style.cursor = 'pointer';
	
	const name = e.features[0].properties.name;
	
	popupHover
	.setHTML(`<h3>${name}</h3><p><i>Click for more details...</i></p>`)
	.addTo(map)
	.setLngLat(e.lngLat)
	.trackPointer();
});

map.on('mouseleave', 'recall', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

// Recall route click popup
map.on('click', 'recall', (e) => {
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