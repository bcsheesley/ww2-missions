map.on('load', function() {
	// Add routes source
	map.addSource('routes', {
		'type': 'geojson',
		'data': {
			'type': 'FeatureCollection',
			'features': [
				routePlymouth,
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
				routeBadZwischenahn,
				routeRecall
			] 
		},
		generateId: true // This ensures that all features have unique IDs
	});

	// Add Plymouth route layer
	map.addLayer({
		'id': 'routePlymouth',
		'source': 'routes',
		'type': 'line',
		'filter': ['==',['get','name'],'Voyage'],
		'paint': {
			'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
			'line-opacity': 0,
			'line-color': '#7DC5E0'
		}
	},
	'waterway-label'
	);

	// Add layer displaying ALL routes except Recall and Voyage
	map.addLayer({
		'id': 'routes',
		'source': 'routes',
		'type': 'line',
		'filter': ['!in','name','Recall','Voyage'],
		'paint': {
			'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
			'line-opacity': ['interpolate',['exponential',1.0],['zoom'],7,1,10,0.5],
			//'line-color': '#CDA076'
			'line-color': [
				'case',
				['boolean', ['feature-state', 'hover'], false],
				'#ff0000',
				'#CDA076'
			]
		}
	},
	'waterway-label'
	);
	
	// Add recall route layer
	map.addLayer({
		'id': 'recall',
		'source': 'routes',
		'type': 'line',
		'filter': ['==',['get','name'],'Recall'],
		'paint': {
			'line-width': 2,
			'line-opacity': 1,
			'line-color': '#CDA076',
			'line-dasharray': [4,4]
		}
	},
	'waterway-label'
	);
	
	// Add a layer for each individual route to use as a highlight in the story
	map.addLayer({
			'id': 'routeBerlin',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Berlin'],
			'layout': {
				'line-cap': 'round'
			},
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#FFFF85'
			}
		},
		'waterway-label'
	)
	map.addLayer({
			'id': 'routeDarmstadt',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Darmstadt'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#FFFF85'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeHanover',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Hanover'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#FFFF85'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeAndernach',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Andernach'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#FFFF85'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeKassel',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Kassel'],
			'layout': {
				'line-cap': 'round'
			},
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#FFFF85'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeMisburg',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Misburg'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routePforzheim',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Pforzheim'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeBielefeld',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Bielefeld'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeCologne',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Cologne'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeDerben',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Derben'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeAugsburg',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Augsburg'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeBitterfeld',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Bitterfeld'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeDuisburg',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Duisburg'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeDulmen',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Dülmen'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeCottbus',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Cottbus'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeBremen',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Bremen'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeLudwigsfelde',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Ludwigsfelde'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeDresden',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Dresden'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeDedenhausen',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Dedenhausen'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeDatteln',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Datteln'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeSoest',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Soest'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeHamburg',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Hamburg'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeSwinoujscie',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Świnoujście'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeJena',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Jena'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeMarxen',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Marxen'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeRatingen',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Ratingen'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeGeisecke',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Geisecke'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
			'id': 'routeBadZwischenahn',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Bad Zwischenahn'],
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
				'line-opacity': 0,
				'line-color': '#CDA076'
			}
		},
		'waterway-label'
	);
	map.addLayer({
		'id': 'routeRecall',
		'source': 'routes',
		'type': 'line',
		'filter': ['==',['get','name'],'Recall'],
		'paint': {
			'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
			'line-opacity': 0,
			'line-color': '#CDA076',
			'line-dasharray': [2,2]
		}
	},
	'waterway-label'
	);
});