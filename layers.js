map.on('load', function() {
	// Add service schools points
	map.addSource('serviceSchools', {
		'type': 'geojson',
		'data': 'https://bcsheesley.github.io/ww2-missions/data/serviceSchools.geojson'
	});
	
	// Add plymouth source
	map.addSource('routePlymouth', {
		'type': 'geojson',
		'data': {
			'type': 'FeatureCollection',
			'features': [
				routePlymouth
			] 
		}
	});
	
	// Add missions source
	map.addSource('routes', {
		'type': 'geojson',
		'data': {
			'type': 'FeatureCollection',
			'features': [
				routeBerlin,
				routeDarmstadt,
				routeHanover,
				routeAndernach,
				routeKassel,
				routeMisburg,
				routePforzheim,
				routeBielefeld,
				routeCologne,
				routeDerben,
				routeAugsburg,
				routeBitterfeld,
				routeDuisburg,
				routeDulmen,
				routeCottbus,
				routeBremen,
				routeLudwigsfelde,
				routeDresden,
				routeDedenhausen,
				routeDatteln,
				routeSoest,
				routeHamburg,
				routeSwinoujscie,
				routeJena,
				routeMarxen,
				routeRatingen,
				routeGeisecke,
				routeBadZwischenahn
			] 
		}
	});

	// Add a layer displaying service schools
	map.addLayer({
		'id': 'serviceSchools',
		'source': 'serviceSchools',
		'type': 'circle',
		'paint': {
			'circle-radius': 12,
			'circle-color': '#ff0000'
		}
	},
	'missions'
);

	// Add a layer for the route to Plymouth
	map.addLayer({
		'id': 'routePlymouth',
		'source': 'routePlymouth',
		'type': 'line',
		'paint': {
			'line-width': 12,
			'line-opacity': 1,
			'line-color': '#E85F5F'
		}
	},
	'missions'
);

	// Add layer displaying ALL mission routes
	map.addLayer({
		'id': 'routes',
		'source': 'routes',
		'type': 'line',
		'paint': {
			'line-width': 2,
			'line-opacity': 1,
			'line-color': '#CDA076'
		}
	},
	'missions'
);

	// Add an invisible layer displaying ALL mission routes for mouse interactions
	map.addLayer({
		'id': 'routesPopup',
		'source': 'routes',
		'type': 'line',
		'paint': {
			'line-width': 4,
			'line-opacity': 0,
			'line-color': '#fff'
		}
	},
	'missions'
);
	
	// Add a layer for each individual route to use as a highlight in the story
	map.addLayer({
			'id': 'routeBerlin',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#FFFF85'
			}
		},
		'missions'
	)
	map.addLayer({
			'id': 'routeDarmstadt',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#FFFF85'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeHanover',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#FFFF85'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeAndernach',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#FFFF85'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeKassel',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#FFFF85'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeMisburg',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routePforzheim',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeBielefeld',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeCologne',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeDerben',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeAugsburg',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeBitterfeld',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeDuisburg',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeDulmen',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeCottbus',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeBremen',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeLudwigsfelde',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeDresden',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeDedenhausen',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeDatteln',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeSoest',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeHamburg',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeSwinoujscie',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeJena',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeMarxen',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeRatingen',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeGeisecke',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeBadZwischenahn',
			'source': 'routes',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
});