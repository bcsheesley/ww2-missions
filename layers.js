map.on('load', function() {
	// Add service school points
	map.addSource('serviceSchools', {
		'type': 'geojson',
		'data': 'https://bcsheesley.github.io/ww2-missions/data/serviceSchools.geojson'
	});
	
	// Add plymouth route source
	map.addSource('routePlymouth', {
		'type': 'geojson',
		'data': {
			'type': 'FeatureCollection',
			'features': [
				routePlymouth
			] 
		}
	});
	
	//Add mission points source
	map.addSource('missions', {
		'type': 'geojson',
		'data': {
			'type': 'FeatureCollection',
			'features': [
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': berlin
					},
					'properties': routeBerlin.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': darmstadt
					},
					'properties': routeDarmstadt.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': hanover
					},
					'properties': routeHanover.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': andernach
					},
					'properties': routeAndernach.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': kassel
					},
					'properties': routeKassel.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': misburg
					},
					'properties': routeMisburg.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': pforzheim
					},
					'properties': routePforzheim.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': bielefeld
					},
					'properties': routeBielefeld.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': cologne
					},
					'properties': routeCologne.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': derben
					},
					'properties': routeDerben.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': augsburg
					},
					'properties': routeAugsburg.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': bitterfeld
					},
					'properties': routeBitterfeld.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': duisburg
					},
					'properties': routeDuisburg.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': dulmen
					},
					'properties': routeDulmen.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': cottbus
					},
					'properties': routeCottbus.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': bremen
					},
					'properties': routeBremen.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': ludwigsfelde
					},
					'properties': routeLudwigsfelde.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': dresden
					},
					'properties': routeDresden.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': dedenhausen
					},
					'properties': routeDedenhausen.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': datteln
					},
					'properties': routeDatteln.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': soest
					},
					'properties': routeSoest.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': hamburg
					},
					'properties': routeHamburg.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': swinoujscie
					},
					'properties': routeSwinoujscie.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': jena
					},
					'properties': routeJena.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': marxen
					},
					'properties': routeMarxen.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': ratingen
					},
					'properties': routeRatingen.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': geisecke
					},
					'properties': routeGeisecke.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': badZwischenahn
					},
					'properties': routeBadZwischenahn.properties
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': recall
					},
					'properties': routeRecall.properties
				}
			]
		}
	});
	
	// Add mission routes source
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
				routeBadZwischenahn,
				routeRecall
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
	'waterway-label'
	);

	// Add a layer displaying the route to Plymouth
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
	'waterway-label'
	);

	// Add a layer displaying ALL mission points
	map.addLayer({
		'id': 'missions',
		'source': 'missions',
		'type': 'circle',
		'paint': {
			'circle-radius': 50,
			'circle-opacity': 1,
			'circle-color': '#E85F5F'
		}
	},
	'waterway-label'
	);

	// Add layer displaying ALL mission routes except Recall
	map.addLayer({
		'id': 'routes',
		'source': 'routes',
		'type': 'line',
		'filter': ['!=',['get','name'],'Recall'],
		'paint': {
			'line-width': 2,
			'line-opacity': 1,
			'line-color': '#CDA076'
		}
	},
	'waterway-label'
	);
	
	// Add layer displaying the Recall route
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

	// Add an invisible layer displaying ALL mission routes for mouse interactions
	map.addLayer({
		'id': 'routesPopup',
		'source': 'routes',
		'type': 'line',
		'paint': {
			'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
			'line-opacity': 0.0,
			'line-color': '#fff'
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
			'line-dasharray': [4,4]
		}
	},
	'waterway-label'
	);
});