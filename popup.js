// Create a popup, but don't add it to the map yet.
var popupHover = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: true
});
	
var popupClick = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: true,
	focusAfterOpen: false,
	maxWidth: '180px'
});

// Journey hover popup
map.on('mousemove', 'journey', (e) => {
	const paintProperty = map.getPaintProperty('journey', 'line-opacity');
	const name = e.features[0].properties.name;
	console.log(paintProperty);
	
	//if (paintProperty > 0) {
		map.getCanvas().style.cursor = 'pointer';
		
		popupHover
		.setHTML(`<h3>${name}</h3><p><i>Click for more details...</i></p>`)
		.addTo(map)
		.setLngLat(e.lngLat)
		.trackPointer();
	//}
});

map.on('mouseleave', 'journey', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

// Mission routes hover popup
let routeID = null;

map.on('mousemove', 'routes', (e) => {
	map.getCanvas().style.cursor = 'pointer';
	
	const isPopupOpen = popupClick.isOpen();
	const name = e.features[0].properties.name;
	console.log(isPopupOpen);
	
	if (isPopupOpen === false){	
	popupHover
	.setHTML(`<h3>${name}</h3><p><i>Click for more details...</i></p>`)
	.addTo(map)
	.setLngLat(e.lngLat)
	.trackPointer();
	}
	
	// Check whether features exist
	if (e.features.length === 0) return;
	
	// If routeID for the hovered feature is not null,
	// use removeFeatureState to reset to the default behavior
	if (routeID) {
		map.removeFeatureState({
			source: 'routes',
			id: routeID
		});
	}
	
	routeID = e.features[0].id;
	
	// When the mouse moves over the routes layer, update the
	// feature state for the feature under the mouse
	map.setFeatureState(
		{
			source: 'routes',
			id: routeID
		},
		{
			hover: true
		}
	);
});

map.on('mouseleave', 'routes', () => {
	map.getCanvas().style.cursor = '';
	
	popupHover.remove();
	
	if (routeID) {
		map.setFeatureState(
			{
				source: 'routes',
				id: routeID
		    },
		    {
				hover: false
		    }
		);
	  }
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
	
	//&#x2a;Sheesley flew a total of 35 combat missions.
	
	popupClick
	.setLngLat(e.lngLat)
	.setHTML(
		`<h3>${name}</h3>
		<table>
			<tr>
				<th>MISSION #</th>
				<th>DATE</th>
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
			<i>Click a date to view the journal entry...</i>
		</p>`
	)
	.addTo(map);
});

// Mission routes touch popup
map.on('touchstart', 'routes', (e) => {
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
				<th>MISSION #</th>
				<th>DATE</th>
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
			<i>Click a date to view the journal entry...</i>
		</p>`
	)
	.addTo(map);
});

// Recall route hover popup
map.on('mouseenter', 'recall', (e) => {
	map.getCanvas().style.cursor = 'pointer';

	const isPopupOpen = popupClick.isOpen();
	const name = e.features[0].properties.name;
	
	if (isPopupOpen === false){	
	popupHover
	.setHTML(`<h3>${name}</h3><p><i>Click for more details...</i></p>`)
	.addTo(map)
	.setLngLat(e.lngLat)
	.trackPointer();
	}
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