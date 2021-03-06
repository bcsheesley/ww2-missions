// Create a popup, but don't add it to the map yet.
var popupHover = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: true,
	closeOnMove: true
});
	
var popupClick = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: true,
	focusAfterOpen: false,
	maxWidth: '180px'
});

// From Kilmer hover popup
map.on('mousemove', 'newyork-docks', (e) => {
	const paintProperty = map.getPaintProperty('newyork-docks', 'line-opacity');
	const name = e.features[0].properties.name;
	const date = e.features[0].properties.date;
	//console.log(paintProperty);
	const checkOpen = missionPopup.isOpen();
	//console.log(checkOpen);
	
	if (paintProperty > 0 && checkOpen === false) {
		map.getCanvas().style.cursor = 'pointer';
		
		popupHover
		.setHTML(`<h3>${name}</h3><p>${date}</p><p><i>Click to view endpoints...</i></p>`)
		.addTo(map)
		.setLngLat(e.lngLat)
		.trackPointer();
	}
});

map.on('mouseleave', 'newyork-docks', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

map.on('click', 'newyork-docks', () => {
	const paintProperty = map.getPaintProperty('newyork-docks', 'line-opacity');
	if(iClick === 0 && paintProperty > 0){
		map.flyTo({
			center: kilmer,
			zoom: 13
		});
		iClick = 1;
	} else if (paintProperty > 0){
		map.flyTo({
			center: newyork,
			zoom: 10
		});
		iClick = 0;
	};
});

// From Marston Moor hover popup
map.on('mousemove', 'fromMarstonMoor', (e) => {
	const paintProperty = map.getPaintProperty('fromMarstonMoor', 'line-opacity');
	const name = e.features[0].properties.name;
	const date = e.features[0].properties.date;
	//console.log(paintProperty);
	
	if (paintProperty > 0) {
		map.getCanvas().style.cursor = 'pointer';
		
		popupHover
		.setHTML(`<h3>${name}</h3><p>${date}</p><p><i>Click to fly between places...</i></p>`)
		.addTo(map)
		.setLngLat(e.lngLat)
		.trackPointer();
	}
});

map.on('mouseleave', 'fromMarstonMoor', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

map.on('click', 'fromMarstonMoor', () => {
	const paintProperty = map.getPaintProperty('fromMarstonMoor', 'line-opacity');
	if(iClick === 0 && paintProperty > 0){
		map.flyTo({
			center: marstonmoor,
			zoom: 13
		});
		iClick = 1;
	} else if (paintProperty > 0){
		map.flyTo({
			center: mendlesham,
			zoom: 13
		});
		iClick = 0;
	};
});

// To Marston Moor hover popup
map.on('mousemove', 'toMarstonMoor', (e) => {
	const paintProperty = map.getPaintProperty('toMarstonMoor', 'line-opacity');
	const name = e.features[0].properties.name;
	const date = e.features[0].properties.date;
	//console.log(paintProperty);
	
	if (paintProperty > 0) {
		map.getCanvas().style.cursor = 'pointer';
		
		popupHover
		.setHTML(`<h3>${name}</h3><p>${date}</p><p><i>Click to fly between places...</i></p>`)
		.addTo(map)
		.setLngLat(e.lngLat)
		.trackPointer();
	}
});

map.on('mouseleave', 'toMarstonMoor', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

map.on('click', 'toMarstonMoor', () => {
	const paintProperty = map.getPaintProperty('toMarstonMoor', 'line-opacity');
	if(iClick === 0 && paintProperty > 0){
		map.flyTo({
			center: marstonmoor,
			zoom: 13
		});
		iClick = 1;
	} else if (paintProperty > 0){
		map.flyTo({
			center: bitterfeld,
			zoom: 9
		});
		iClick = 0;
	};
});

// From Brussels hover popup
map.on('mousemove', 'fromBrussels', (e) => {
	const paintProperty = map.getPaintProperty('fromBrussels', 'line-opacity');
	const name = e.features[0].properties.name;
	const date = e.features[0].properties.date;
	//console.log(paintProperty);
	
	if (paintProperty > 0) {
		map.getCanvas().style.cursor = 'pointer';
		
		popupHover
		.setHTML(`<h3>${name}</h3><p>${date}</p><p><i>Click to fly between places...</i></p>`)
		.addTo(map)
		.setLngLat(e.lngLat)
		.trackPointer();
	}
});

map.on('mouseleave', 'fromBrussels', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

map.on('click', 'fromBrussels', () => {
	const paintProperty = map.getPaintProperty('fromBrussels', 'line-opacity');
	if(iClick === 0 && paintProperty > 0){
		map.flyTo({
			center: brussels,
			zoom: 13
		});
		iClick = 1;
	} else if (paintProperty > 0){
		map.flyTo({
			center: mendlesham,
			zoom: 13
		});
		iClick = 0;
	};
});

// To Brussels hover popup
map.on('mousemove', 'toBrussels', (e) => {
	const paintProperty = map.getPaintProperty('toBrussels', 'line-opacity');
	const name = e.features[0].properties.name;
	const date = e.features[0].properties.date;
	//console.log(paintProperty);
	
	if (paintProperty > 0) {
		map.getCanvas().style.cursor = 'pointer';
		
		popupHover
		.setHTML(`<h3>${name}</h3><p>${date}</p><p><i>Click to fly between places...</i></p>`)
		.addTo(map)
		.setLngLat(e.lngLat)
		.trackPointer();
	}
});

map.on('mouseleave', 'toBrussels', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

map.on('click', 'toBrussels', () => {
	const paintProperty = map.getPaintProperty('toBrussels', 'line-opacity');
	if (iClick === 0 && paintProperty > 0){
		map.flyTo({
			center: brussels,
			zoom: 13
		});
		iClick = 1;
	} else if (paintProperty > 0){
		map.flyTo({
			center: cottbus,
			zoom: 9
		});
		iClick = 0;
	};
});

// Pass1 to London hover popup - Away
map.on('mousemove', 'pass1-away', (e) => {
	const paintProperty = map.getPaintProperty('pass1-away', 'line-opacity');
	const name = e.features[0].properties.name;
	const date = e.features[0].properties.date;
	//console.log(paintProperty);
	
	if (paintProperty > 0) {
		map.getCanvas().style.cursor = 'pointer';
		
		popupHover
		.setHTML(`<h3>${name}</h3><p>${date}</p>`)
		.addTo(map)
		.setLngLat(e.lngLat)
		.trackPointer();
	}
});

map.on('mouseleave', 'pass1-away', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

// Pass1 to London hover popup - Away
map.on('mousemove', 'pass1-home', (e) => {
	const paintProperty = map.getPaintProperty('pass1-home', 'line-opacity');
	const name = e.features[0].properties.name;
	const date = e.features[0].properties.date;
	//console.log(paintProperty);
	
	if (paintProperty > 0) {
		map.getCanvas().style.cursor = 'pointer';
		
		popupHover
		.setHTML(`<h3>${name}</h3><p>${date}</p>`)
		.addTo(map)
		.setLngLat(e.lngLat)
		.trackPointer();
	}
});

map.on('mouseleave', 'pass1-home', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

// Pass2 to London hover popup - Away
map.on('mousemove', 'pass2-away', (e) => {
	const paintProperty = map.getPaintProperty('pass2-away', 'line-opacity');
	const name = e.features[0].properties.name;
	const date = e.features[0].properties.date;
	//console.log(paintProperty);
	
	if (paintProperty > 0) {
		map.getCanvas().style.cursor = 'pointer';
		
		popupHover
		.setHTML(`<h3>${name}</h3><p>${date}</p>`)
		.addTo(map)
		.setLngLat(e.lngLat)
		.trackPointer();
	}
});

map.on('mouseleave', 'pass2-away', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

// Pass2 to London hover popup - Home
map.on('mousemove', 'pass2-home', (e) => {
	const paintProperty = map.getPaintProperty('pass2-home', 'line-opacity');
	const name = e.features[0].properties.name;
	const date = e.features[0].properties.date;
	//console.log(paintProperty);
	
	if (paintProperty > 0) {
		map.getCanvas().style.cursor = 'pointer';
		
		popupHover
		.setHTML(`<h3>${name}</h3><p>${date}</p>`)
		.addTo(map)
		.setLngLat(e.lngLat)
		.trackPointer();
	}
});

map.on('mouseleave', 'pass2-home', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

// Pass3 to London hover popup - Away
map.on('mousemove', 'pass3-away', (e) => {
	const paintProperty = map.getPaintProperty('pass3-away', 'line-opacity');
	const name = e.features[0].properties.name;
	const date = e.features[0].properties.date;
	//console.log(paintProperty);
	
	if (paintProperty > 0) {
		map.getCanvas().style.cursor = 'pointer';
		
		popupHover
		.setHTML(`<h3>${name}</h3><p>${date}</p>`)
		.addTo(map)
		.setLngLat(e.lngLat)
		.trackPointer();
	}
});

map.on('mouseleave', 'pass3-away', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

// Pass3 to London hover popup - Home
map.on('mousemove', 'pass3-home', (e) => {
	const paintProperty = map.getPaintProperty('pass3-home', 'line-opacity');
	const name = e.features[0].properties.name;
	const date = e.features[0].properties.date;
	//console.log(paintProperty);
	
	if (paintProperty > 0) {
		map.getCanvas().style.cursor = 'pointer';
		
		popupHover
		.setHTML(`<h3>${name}</h3><p>${date}</p>`)
		.addTo(map)
		.setLngLat(e.lngLat)
		.trackPointer();
	}
});

map.on('mouseleave', 'pass3-home', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

// Pass4 to London hover popup - Away
map.on('mousemove', 'pass4-away', (e) => {
	const paintProperty = map.getPaintProperty('pass4-away', 'line-opacity');
	const name = e.features[0].properties.name;
	const date = e.features[0].properties.date;
	//console.log(paintProperty);
	
	if (paintProperty > 0) {
		map.getCanvas().style.cursor = 'pointer';
		
		popupHover
		.setHTML(`<h3>${name}</h3><p>${date}</p>`)
		.addTo(map)
		.setLngLat(e.lngLat)
		.trackPointer();
	}
});

map.on('mouseleave', 'pass4-away', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

// Pass4 to London hover popup - Home
map.on('mousemove', 'pass4-home', (e) => {
	const paintProperty = map.getPaintProperty('pass4-home', 'line-opacity');
	const name = e.features[0].properties.name;
	const date = e.features[0].properties.date;
	//console.log(paintProperty);
	
	if (paintProperty > 0) {
		map.getCanvas().style.cursor = 'pointer';
		
		popupHover
		.setHTML(`<h3>${name}</h3><p>${date}</p>`)
		.addTo(map)
		.setLngLat(e.lngLat)
		.trackPointer();
	}
});

map.on('mouseleave', 'pass4-home', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

// Route from Mendlesham to Stone
map.on('mousemove', 'routeStone', (e) => {
	const paintProperty = map.getPaintProperty('routeStone', 'line-opacity');
	const name = e.features[0].properties.name;
	const date = e.features[0].properties.date;
	//console.log(paintProperty);
	
	if (paintProperty > 0) {
		map.getCanvas().style.cursor = 'pointer';
		
		popupHover
		.setHTML(`<h3>${name}</h3><p>${date}</p>`)
		.addTo(map)
		.setLngLat(e.lngLat)
		.trackPointer();
	}
});

map.on('mouseleave', 'routeStone', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});

// Journey Home
map.on('mousemove', 'journey-home', (e) => {
	const paintProperty = map.getPaintProperty('journey-home', 'line-opacity');
	const name = e.features[0].properties.name;
	const date = e.features[0].properties.date;
	//console.log(paintProperty);
	
	if (paintProperty > 0) {
		map.getCanvas().style.cursor = 'pointer';
		
		popupHover
		.setHTML(`<h3>${name}</h3><p>${date}</p>`)
		.addTo(map)
		.setLngLat(e.lngLat)
		.trackPointer();
	}
});

map.on('mouseleave', 'journey-home', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
});


// Mission routes hover popup
let routeID = null;

map.on('mousemove', 'routes', (e) => {
	const paintProperty = map.getPaintProperty('routes', 'line-opacity');
	const name = e.features[0].properties.name;
	const checkOpen = missionPopup.isOpen();
	
	if (paintProperty > 0 && checkOpen === false) {
		map.getCanvas().style.cursor = 'pointer';
		
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
	if (routeID !== undefined) {
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
	
	//console.log(routeID);
	//console.log(map.getFeatureState);
});

map.on('mouseleave', 'routes', () => {
	map.getCanvas().style.cursor = '';
	
	popupHover.remove();
	
	if (routeID !== undefined) {
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
	
	const paintProperty = map.getPaintProperty('routes', 'line-opacity');
	
	//&#x2a;Sheesley flew a total of 35 combat missions.
	
	if (paintProperty > 0) {
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
	}
});

// Recall route hover popup
map.on('mouseenter', 'recall', (e) => {
	const paintProperty = map.getPaintProperty('recall', 'line-opacity');
	const name = e.features[0].properties.name;
	
	if (paintProperty > 0){	
		map.getCanvas().style.cursor = 'pointer';
		
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
	if (routeID !== undefined) {
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

map.on('mouseleave', 'recall', () => {
	map.getCanvas().style.cursor = '';
	popupHover.remove();
	
	if (routeID !== undefined) {
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
	
	const paintProperty = map.getPaintProperty('recall', 'line-opacity');
	
	if (paintProperty > 0) {
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
				<i>Click a date to view the journal entry...</i>
			</p>`
		)
		.addTo(map);
	}
});