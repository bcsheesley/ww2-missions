map.on('load', function() {
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
				routeCottbus,
				routeBremen,
				routeLudwigsfelde,
				routeDresden,
				routeDulmen,
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
	
	// Add journey to England source
	map.addSource('journey', {
		'type': 'geojson',
		'data': {
			'type': 'FeatureCollection',
			'features': [
				{
					"type": "Feature",
					"properties": {
						'name': 'Camp Kilmer – New York',
						'date': 'Oct 21, 1944'
					},
					"geometry": {
						"type": "LineString",
						"coordinates": [
							kilmer,
							newyork  
						]
					}
				},
				{
					"type": "Feature",
					"properties": {
						'name': 'New York – Plymouth Bay',
						'date': 'Oct 22 – Nov 2, 1944'
					},
					"geometry": {
						"type": "LineString",
						"coordinates": [
							newyork,
							[
							-74.054,
							40.6244
							],
							[
							-74.0087,
							40.53
							],
							[
							-73.8906,
							40.4872
							],
							[
							-73.743,
							40.4783
							],
							[
							-72.9932,
							40.566
							],
							[
							-72.2186,
							40.7056
							],
							[
							-71.4276,
							40.8948
							],
							sea1  
						]
					}
				},
				routeSea,
				{
					"type": "Feature",
					"properties": {
						'name': 'New York – Plymouth Bay',
						'date': 'Oct 22 – Nov 2, 1944'
					},
					"geometry": {
						"type": "LineString",
						"coordinates": [
							sea11,
							[
							-5.3696,
							49.8398
							],
							[
							-5.0565,
							49.907
							],
							plymouthBay
						]
					}
				},
				{
					"type": "Feature",
					"properties": {
						'name': 'Plymouth Bay – Plymouth',
						'date': 'Nov 3, 1944'
					},
					"geometry": {
						"type": "LineString",
						"coordinates": [
							plymouthBay,
							[
							-4.1467,
							50.3452
							], 
							plymouthDock
						]
					}
				},
				{
					"type": "Feature",
					"properties": {
						'name': 'Plymouth – Stone (Yarnfield)',
						'date': 'Nov 4, 1944'
					},
					"geometry": {
						"type": "LineString",
						"coordinates": [
							plymouthDock,
							[
							-3.5266,
							50.7225
							],
							[
							-3.0295,
							51.0518
							],
							[
							-2.5873,
							51.4437
							],
							[
							-2.2536,
							51.8578
							],
							[
							-2.0050,
							52.4861
							],
  							yarnfield
						]
					}
				}
			] 
		}
	});
	
	// Add marston moor route source
	map.addSource('marstonMoor', {
		'type': 'geojson',
		'data': {
			'type': 'FeatureCollection',
			'features': [
				routeFromMarstonMoor,
				routeToMarstonMoor
			] 
		}
	});
	
	// Add brussels route source
	map.addSource('brussels', {
		'type': 'geojson',
		'data': {
			'type': 'FeatureCollection',
			'features': [
				routeFromBrussels,
				routeToBrussels
			] 
		}
	});
	
	// Add London trip source
	map.addSource('london', {
		'type': 'geojson',
		'data': {
			'type': 'FeatureCollection',
				'features': [
					{
					'type': 'Feature',
					'geometry': {
						'type': 'LineString',
						'coordinates': [
							mendlesham,
							ipswich,
							goring
						]
					},
					'properties': {
						'name': 'Mendlesham – London',
						'date': '1/18/1945',
						'direction': 'pass1-away'
					}
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'LineString',
						'coordinates': [
							goring,
							richmond
						]
					},
					'properties': {
						'name': 'London – Richmond',
						'date': '1/19/1945',
						'direction': 'pass1-away'
					}
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'LineString',
						'coordinates': [
							richmond,
							goring,
							ipswich,
							mendlesham
						]
					},
					'properties': {
						'name': 'Richmond – Mendlesham',
						'date': '1/20/1945',
						'direction': 'pass1-home'
					}
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'LineString',
						'coordinates': [
							mendlesham,
							ipswich,
							goring
						]
					},
					'properties': {
						'name': 'Mendlesham – London',
						'date': '2/27/1945',
						'direction': 'pass2-away'
					}
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'LineString',
						'coordinates': [
							goring,
							ipswich,
							mendlesham
						]
					},
					'properties': {
						'name': 'London – Mendlesham',
						'date': '3/1/1945',
						'direction': 'pass2-home'
					}
				}
			] 
		}
	});
	
	// Add journey to England line layer
	map.addLayer({
		'id': 'journey',
		'source': 'journey',
		'type': 'line',
		'paint': {
			'line-width': ['interpolate',['exponential',1.6],['zoom'],2,4,10,24],
			'line-opacity': ['interpolate',['exponential',1.0],['zoom'],7,1,10,0.5],
			'line-color': 'rgba(255,126,126,0.9)',
			'line-opacity': 0,
			'line-dasharray': [2,2]
		},
		'layout': {
			//'line-cap': 'round'
		}
	},
	'waterway-label'
	);
	
	// Add Marston Moor - Mendlesham route line layer
	map.addLayer({
		'id': 'fromMarstonMoor',
		'source': 'marstonMoor',
		'type': 'line',
		'filter': [
			'==',
			['get','direction'],
			'from'
		],
		'paint': {
			'line-width': ['interpolate',['exponential',1.6],['zoom'],2,4,10,24],
			'line-opacity': ['interpolate',['exponential',1.0],['zoom'],7,1,10,0.5],
			'line-color': 'rgba(255,126,126,0.9)',
			'line-opacity': 0,
			'line-dasharray': [2,2]
		},
		'layout': {
			//'line-cap': 'round'
		}
	},
	'waterway-label'
	);
	
	// Add Bitterfeld - Marston Moor route line layer
	map.addLayer({
		'id': 'toMarstonMoor',
		'source': 'marstonMoor',
		'type': 'line',
		'filter': [
			'==',
			['get','direction'],
			'to'
		],
		'paint': {
			'line-width': ['interpolate',['exponential',1.6],['zoom'],2,4,10,24],
			'line-opacity': ['interpolate',['exponential',1.0],['zoom'],7,1,10,0.5],
			'line-color': 'rgba(255,126,126,0.9)',
			'line-opacity': 0,
			'line-dasharray': [2,2]
		},
		'layout': {
			//'line-cap': 'round'
		}
	},
	'waterway-label'
	);
	
	// Add Pass 1 - London trip line layer - Away
	map.addLayer({
		'id': 'pass1-away',
		'source': 'london',
		'type': 'line',
		'filter': [
			'==',
			['get','direction'],
			'pass1-away'
		],
		'paint': {
			'line-width': ['interpolate',['exponential',1.6],['zoom'],2,4,10,24],
			'line-opacity': ['interpolate',['exponential',1.0],['zoom'],7,1,10,0.5],
			'line-color': 'rgba(255,126,126,0.9)',
			'line-opacity': 0,
			'line-dasharray': [2,2]
		},
		'layout': {
			//'line-cap': 'round'
		}
	},
	'waterway-label'
	);
	
	// Add Pass 1 - London trip line layer - Home
	map.addLayer({
		'id': 'pass1-home',
		'source': 'london',
		'type': 'line',
		'filter': [
			'==',
			['get','direction'],
			'pass1-home'
		],
		'paint': {
			'line-width': ['interpolate',['exponential',1.6],['zoom'],2,4,10,24],
			'line-opacity': ['interpolate',['exponential',1.0],['zoom'],7,1,10,0.5],
			'line-color': 'rgba(255,126,126,0.9)',
			'line-opacity': 0,
			'line-dasharray': [2,2]
		},
		'layout': {
			//'line-cap': 'round'
		}
	},
	'waterway-label'
	);
	
	// Add Pass 2 - London trip line layer - Away
	map.addLayer({
		'id': 'pass2-away',
		'source': 'london',
		'type': 'line',
		'filter': [
			'==',
			['get','direction'],
			'pass2-away'
		],
		'paint': {
			'line-width': ['interpolate',['exponential',1.6],['zoom'],2,4,10,24],
			'line-opacity': ['interpolate',['exponential',1.0],['zoom'],7,1,10,0.5],
			'line-color': 'rgba(255,126,126,0.9)',
			'line-opacity': 0,
			'line-dasharray': [2,2]
		},
		'layout': {
			//'line-cap': 'round'
		}
	},
	'waterway-label'
	);
	
	// Add Pass 2 - London trip line layer - Home
	map.addLayer({
		'id': 'pass2-home',
		'source': 'london',
		'type': 'line',
		'filter': [
			'==',
			['get','direction'],
			'pass2-home'
		],
		'paint': {
			'line-width': ['interpolate',['exponential',1.6],['zoom'],2,4,10,24],
			'line-opacity': ['interpolate',['exponential',1.0],['zoom'],7,1,10,0.5],
			'line-color': 'rgba(255,126,126,0.9)',
			'line-opacity': 0,
			'line-dasharray': [2,2]
		},
		'layout': {
			//'line-cap': 'round'
		}
	},
	'waterway-label'
	);
	
	// Add Brussels - Mendlesham route line layer
	map.addLayer({
		'id': 'fromBrussels',
		'source': 'brussels',
		'type': 'line',
		'filter': [
			'==',
			['get','direction'],
			'from'
		],
		'paint': {
			'line-width': ['interpolate',['exponential',1.6],['zoom'],2,4,10,24],
			'line-opacity': ['interpolate',['exponential',1.0],['zoom'],7,1,10,0.5],
			'line-color': 'rgba(255,126,126,0.9)',
			'line-opacity': 0,
			'line-dasharray': [2,2]
		},
		'layout': {
			//'line-cap': 'round'
		}
	},
	'waterway-label'
	);
	
	// Add Cottbus - Brussels route line layer
	map.addLayer({
		'id': 'toBrussels',
		'source': 'brussels',
		'type': 'line',
		'filter': [
			'==',
			['get','direction'],
			'to'
		],
		'paint': {
			'line-width': ['interpolate',['exponential',1.6],['zoom'],2,4,10,24],
			'line-opacity': ['interpolate',['exponential',1.0],['zoom'],7,1,10,0.5],
			'line-color': 'rgba(255,126,126,0.9)',
			'line-opacity': 0,
			'line-dasharray': [2,2]
		},
		'layout': {
			//'line-cap': 'round'
		}
	},
	'waterway-label'
	);

	// Add layer displaying ALL mission routes except Recall
	map.addLayer({
		'id': 'routes',
		'source': 'routes',
		'type': 'line',
		'filter': ['!in','name','Recall'],
		'paint': {
			'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
			'line-opacity': 0,
			// The feature-state dependent line-color expression will render
			// the color when a feature's hover state is set to true
			'line-color': [
				'case',
				['boolean', ['feature-state', 'hover'], false],
				'rgba(255,255,133,0.8)',
				'rgba(0,170,255,0.8)'
			]
		},
		'layout': {
			'line-cap': 'round'
		}
	},
	'waterway-label'
	);
	
	// Add Recall route layer
	map.addLayer({
		'id': 'recall',
		'source': 'routes',
		'type': 'line',
		'filter': ['==',['get','name'],'Recall'],
		'paint': {
			'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
			'line-opacity': 0,
			'line-dasharray': [2,2],
			// The feature-state dependent line-color expression will render
			// the color when a feature's hover state is set to true
			'line-color': [
				'case',
				['boolean', ['feature-state', 'hover'], false],
				'rgba(255,255,133,0.8)',
				'rgba(0,170,255,0.8)'
			]
		}
	},
	'waterway-label'
	);
	
	// Add a layer for each individual mission route to use as a highlight in the story
	map.addLayer({
			'id': 'routeBerlin',
			'source': 'routes',
			'type': 'line',
			'filter': ['==',['get','name'],'Berlin'],
			'layout': {
				'line-cap': 'round'
			},
			'paint': {
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': '#FFFF85'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': '#FFFF85'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': '#FFFF85'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': '#FFFF85'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
				'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
				'line-opacity': 0,
				'line-color': 'rgba(255,255,133,1)'
			},
			'layout': {
				'line-cap': 'round'
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
			'line-width': ['interpolate',['exponential',1.6],['zoom'],5,2,10,24],
			'line-opacity': 0,
			'line-color': 'rgba(255,255,133,1)',
			'line-dasharray': [2,2]
		}
	},
	'waterway-label'
	);
});