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
	
	// Add mission animated pulsing-dot image and source
	map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
	
	map.addSource('dot-point', {
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

	// Add layer displaying ALL mission routes except Recall
	map.addLayer({
		'id': 'routes',
		'source': 'routes',
		'type': 'line',
		'filter': ['!=',['get','name'],'Recall'],
		'paint': {
			'line-width': ['interpolate',['exponential',1.6],['zoom'],7,2,10,24],
			'line-opacity': ['interpolate',['exponential',1.0],['zoom'],7,1,10,0.5],
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
	
	// Add layer for each individual mission point displaying the pulsing-dot
	map.addLayer({
		'id': 'pulseBerlin',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Berlin'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true,
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseDarmstadt',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Darmstadt'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseHanover',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Hanover'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseAndernach',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Andernach'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseKassel',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Kassel'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseMisburg',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Misburg'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulsPforzheim',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Pforzheim'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseBielefeld',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Bielefeld'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseCologne',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Cologne'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseDerben',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Derben'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseAugsburg',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Augsburg'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseBitterfeld',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Bitterfeld'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseDuisburg',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Duisburg'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseDülmen',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Dülmen'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseCottbus',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Cottbus'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseBremen',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Bremen'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseLudwigsfelde',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Ludwigsfelde'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseDresden',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Dresden'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseDedenhausen',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Dedenhausen'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseDatteln',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Datteln'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseSoest',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Soest'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseHamburg',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Hamburg'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseŚwinoujście',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Świnoujście'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseJena',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Jena'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseMarxen',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Marxen'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseRatingen',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Ratingen'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseGeisecke',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Geisecke'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
		}
	},
	'waterway-label'
	);
	map.addLayer({
		'id': 'pulseBadZwischenahn',
		'source': 'dot-point',
		'type': 'symbol',
		'filter': ['==',['get','name'],'Bad Zwischenahn'],
		'layout': {
			'icon-image': 'pulsing-dot',
			'icon-allow-overlap': true
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
			'line-dasharray': [2,2]
		}
	},
	'waterway-label'
	);
});