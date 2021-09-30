map.on('load', function() {
	// Add sources
	map.addSource('routeMendlesham', {
		'type': 'geojson',
		'data': routeMendlesham
	});
	map.addSource('routeBerlin', {
		'type': 'geojson',
		'data': routeBerlin
	});
	map.addSource('routeDarmstadt', {
		'type': 'geojson',
		'data': routeDarmstadt
	});
	map.addSource('routeHanover', {
		'type': 'geojson',
		'data': routeHanover
	});
	map.addSource('routeAndernach', {
		'type': 'geojson',
		'data': routeAndernach
	});
	map.addSource('routeKassel', {
		'type': 'geojson',
		'data': routeKassel
	});
	map.addSource('routeMisburg', {
		'type': 'geojson',
		'data': routeMisburg
	});
	map.addSource('routePforzheim', {
		'type': 'geojson',
		'data': routePforzheim
	});
	map.addSource('routeBielefeld', {
		'type': 'geojson',
		'data': routeBielefeld
	});
	map.addSource('routeCologne', {
		'type': 'geojson',
		'data': routeCologne
	});
	map.addSource('routeDerben', {
		'type': 'geojson',
		'data': routeDerben
	});
	map.addSource('routeAugsburg', {
		'type': 'geojson',
		'data': routeAugsburg
	});
	map.addSource('routeBitterfeld', {
		'type': 'geojson',
		'data': routeBitterfeld
	});
	map.addSource('routeDuisburg', {
		'type': 'geojson',
		'data': routeDuisburg
	});
	map.addSource('routeDulmen', {
		'type': 'geojson',
		'data': routeDulmen
	});
	map.addSource('routeCottbus', {
		'type': 'geojson',
		'data': routeCottbus
	});
	map.addSource('routeBremen', {
		'type': 'geojson',
		'data': routeBremen
	});
	map.addSource('routeLudwigsfelde', {
		'type': 'geojson',
		'data': routeLudwigsfelde
	});
	map.addSource('routeDresden', {
		'type': 'geojson',
		'data': routeDresden
	});
	map.addSource('routeDedenhausen', {
		'type': 'geojson',
		'data': routeDedenhausen
	});
	map.addSource('routeDatteln', {
		'type': 'geojson',
		'data': routeDatteln
	});
	map.addSource('routeSoest', {
		'type': 'geojson',
		'data': routeSoest
	});
	map.addSource('routeHamburg', {
		'type': 'geojson',
		'data': routeHamburg
	});
	map.addSource('routeSwinoujscie', {
		'type': 'geojson',
		'data': routeSwinoujscie
	});
	map.addSource('routeJena', {
		'type': 'geojson',
		'data': routeJena
	});
	map.addSource('routeMarxen', {
		'type': 'geojson',
		'data': routeMarxen
	});
	map.addSource('routeRatingen', {
		'type': 'geojson',
		'data': routeRatingen
	});
	map.addSource('routeGeisecke', {
		'type': 'geojson',
		'data': routeGeisecke
	});
	map.addSource('routeBadZwischenahn', {
		'type': 'geojson',
		'data': routeBadZwischenahn
	});

	// Add layers displaying lines
	map.addLayer({
			'id': 'routeMendlesham',
			'source': 'routeMendlesham',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeMendleshamActive',
			'source': 'routeMendlesham',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#E85F5F'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeBerlin',
			'source': 'routeBerlin',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeBerlinActive',
			'source': 'routeBerlin',
			'type': 'line',
			'paint': {
				'line-width': 12,
				'line-opacity': 0,
				'line-color': '#E85F5F'
			}
		},
		'missions'
	)
	map.addLayer({
			'id': 'routeDarmstadt',
			'source': 'routeDarmstadt',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeDarmstadtActive',
			'source': 'routeDarmstadt',
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
			'source': 'routeHanover',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeHanoverActive',
			'source': 'routeHanover',
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
			'source': 'routeAndernach',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeAndernachActive',
			'source': 'routeAndernach',
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
			'source': 'routeKassel',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeKasselActive',
			'source': 'routeKassel',
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
			'source': 'routeMisburg',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeMisburgActive',
			'source': 'routeMisburg',
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
			'source': 'routePforzheim',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routePforzheimActive',
			'source': 'routePforzheim',
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
			'source': 'routeBielefeld',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeBielefeldActive',
			'source': 'routeBielefeld',
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
			'source': 'routeCologne',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeCologneActive',
			'source': 'routeCologne',
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
			'source': 'routeDerben',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeDerbenActive',
			'source': 'routeDerben',
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
			'source': 'routeAugsburg',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeAugsburgActive',
			'source': 'routeAugsburg',
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
			'source': 'routeBitterfeld',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeBitterfeldActive',
			'source': 'routeBitterfeld',
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
			'source': 'routeDuisburg',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeDuisburgActive',
			'source': 'routeDuisburg',
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
			'source': 'routeDulmen',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeDulmenActive',
			'source': 'routeDulmen',
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
			'source': 'routeCottbus',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeCottbusActive',
			'source': 'routeCottbus',
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
			'source': 'routeBremen',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeBremenActive',
			'source': 'routeBremen',
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
			'source': 'routeLudwigsfelde',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeLudwigsfeldeActive',
			'source': 'routeLudwigsfelde',
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
			'source': 'routeDresden',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeDresdenActive',
			'source': 'routeDresden',
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
			'source': 'routeDedenhausen',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeDedenhausenActive',
			'source': 'routeDedenhausen',
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
			'source': 'routeDatteln',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeDattelnActive',
			'source': 'routeDatteln',
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
			'source': 'routeSoest',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeSoestActive',
			'source': 'routeSoest',
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
			'source': 'routeHamburg',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeHamburgActive',
			'source': 'routeHamburg',
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
			'source': 'routeSwinoujscie',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeSwinoujscieActive',
			'source': 'routeSwinoujscie',
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
			'source': 'routeJena',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeJenaActive',
			'source': 'routeJena',
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
			'source': 'routeMarxen',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeMarxenActive',
			'source': 'routeMarxen',
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
			'source': 'routeRatingen',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeRatingenActive',
			'source': 'routeRatingen',
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
			'source': 'routeGeisecke',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeGeiseckeActive',
			'source': 'routeGeisecke',
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
			'source': 'routeBadZwischenahn',
			'type': 'line',
			'paint': {
				'line-width': 2,
				'line-opacity': 1,
				'line-color': '#CDA076'
			}
		},
		'missions'
	);
	map.addLayer({
			'id': 'routeBadZwischenahnActive',
			'source': 'routeBadZwischenahn',
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