// Struthers, OH
var home = [-80.60282, 41.05850];

// Mendlesham
var origin = [1.1210006854646852, 52.23269925011281];
 
// Destinations
var berlin = [13.404954, 52.520006];
var darmstadt = [8.6511929, 49.8728253];
var hanover = [9.7320104, 52.3758916];
var andernach = [7.4086636, 50.426057];
var kassel = [9.4797461, 51.3127114];
var misburg = [9.851202, 52.390962];
var pforzheim = [8.6946286, 48.8921862];
var bielefeld = [8.5324708, 52.0302285];
var cologne = [6.9609652, 50.937531];
var derben = [11.9977096, 52.4165503];
var augsburg = [10.89779, 48.3705449];
var bitterfeld = [12.3133061, 51.6265334];
var duisburg = [6.7623293, 51.4344079];
var dulmen = [7.2834926, 51.8316451];
var cottbus = [14.3328679, 51.7563108];
var bremen = [8.8016937, 53.0792962];
var ludwigsfelde = [13.261627, 52.3011439];
var dresden = [13.7372621, 51.0504088];
var dedenhausen = [10.2291851, 52.432764];
var datteln = [7.3348301, 51.6461362];
var soest = [8.105754, 51.5711476];
var hamburg = [9.9936818, 53.5510846];
var swinoujscie = [14.2475775, 53.9100327];
var jena = [11.5892372, 50.927054];
var marxen = [10.0010767, 53.3105751];
var ratingen = [6.8401844, 51.2964148];
var geisecke = [7.6194012, 51.4584411];
var badZwischenahn = [8.0098765, 53.1814401];
 
// Simple lines from the home/origin to each destination.
var routeMendlesham = {
  'type': 'FeatureCollection',
  'features': [
	  {
		  'type': 'Feature',
		  'geometry': {
			  'type': 'LineString',
			  'coordinates': [home, origin]
		  }
	  }
  ]
};

var routeBerlin = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, berlin]
			},
			'properties': {
				'name': 'Berlin is the name'
			}
		}
	]
};
var routeDarmstadt = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, darmstadt]
			},
			'properties': {
				'name': 'Darm is the name'
			}
		}
	]
};
var routeHanover = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, hanover]
			}
		}
	]
};
var routeAndernach = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, andernach]
			}
		}
	]
};
var routeKassel = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, kassel]
			}
		}
	]
};
var routeMisburg = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, misburg]
			}
		}
	]
};
var routePforzheim = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, pforzheim]
			}
		}
	]
};
var routeBielefeld = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, bielefeld]
			}
		}
	]
};
var routeCologne = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, cologne]
			}
		}
	]
};
var routeDerben = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, derben]
			}
		}
	]
};
var routeAugsburg = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, augsburg]
			}
		}
	]
};
var routeBitterfeld = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, bitterfeld]
			}
		}
	]
};
var routeDuisburg = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, duisburg]
			}
		}
	]
};
var routeDulmen = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, dulmen]
			}
		}
	]
};
var routeCottbus = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, cottbus]
			}
		}
	]
};
var routeBremen = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, bremen]
			}
		}
	]
};
var routeLudwigsfelde = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, ludwigsfelde]
			}
		}
	]
};
var routeDresden = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, dresden]
			}
		}
	]
};
var routeDedenhausen = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, dedenhausen]
			}
		}
	]
};
var routeDatteln = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, datteln]
			}
		}
	]
};
var routeSoest = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, soest]
			}
		}
	]
};
var routeHamburg = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, hamburg]
			}
		}
	]
};
var routeSwinoujscie = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, swinoujscie]
			}
		}
	]
};
var routeJena = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, jena]
			}
		}
	]
};
var routeMarxen = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, marxen]
			}
		}
	]
};
var routeRatingen = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, ratingen]
			}
		}
	]
};
var routeGeisecke = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, geisecke]
			}
		}
	]
};
var routeBadZwischenahn = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'LineString',
				'coordinates': [origin, badZwischenahn]
			}
		}
	]
};

// Calculate the distance in kilometers between route start/end points.
var lineDistanceMendlesham = turf.length(routeMendlesham.features[0]);
var lineDistanceBerlin = turf.length(routeBerlin.features[0]);
var lineDistanceDarmstadt = turf.length(routeDarmstadt.features[0]);
var lineDistanceHanover = turf.length(routeHanover.features[0]);
var lineDistanceAndernach = turf.length(routeAndernach.features[0]);
var lineDistanceKassel = turf.length(routeKassel.features[0]);
var lineDistanceMisburg = turf.length(routeMisburg.features[0]);
var lineDistancePforzheim = turf.length(routePforzheim.features[0]);
var lineDistanceBielefeld = turf.length(routeBielefeld.features[0]);
var lineDistanceCologne = turf.length(routeCologne.features[0]);
var lineDistanceDerben = turf.length(routeDerben.features[0]);
var lineDistanceAugsburg = turf.length(routeAugsburg.features[0]);
var lineDistanceBitterfeld = turf.length(routeBitterfeld.features[0]);
var lineDistanceDuisburg = turf.length(routeDuisburg.features[0]);
var lineDistanceDulmen = turf.length(routeDulmen.features[0]);
var lineDistanceCottbus = turf.length(routeCottbus.features[0]);
var lineDistanceBremen = turf.length(routeBremen.features[0]);
var lineDistanceLudwigsfelde = turf.length(routeLudwigsfelde.features[0]);
var lineDistanceDresden = turf.length(routeDresden.features[0]);
var lineDistanceDedenhausen = turf.length(routeDedenhausen.features[0]);
var lineDistanceDatteln = turf.length(routeDatteln.features[0]);
var lineDistanceSoest = turf.length(routeSoest.features[0]);
var lineDistanceHamburg = turf.length(routeHamburg.features[0]);
var lineDistanceSwinoujscie = turf.length(routeSwinoujscie.features[0]);
var lineDistanceJena = turf.length(routeJena.features[0]);
var lineDistanceMarxen = turf.length(routeMarxen.features[0]);
var lineDistanceRatingen = turf.length(routeRatingen.features[0]);
var lineDistanceGeisecke = turf.length(routeGeisecke.features[0]);
var lineDistanceBadZwischenahn = turf.length(routeBadZwischenahn.features[0]);
 
var arcMendlesham = []; 
var arcBerlin = [];
var arcDarmstadt = [];
var arcHanover = [];
var arcAndernach = [];
var arcKassel = [];
var arcMisburg = [];
var arcPforzheim = [];
var arcBielefeld = [];
var arcCologne = [];
var arcDerben = [];
var arcAugsburg = [];
var arcBitterfeld = [];
var arcDuisburg = [];
var arcDulmen = [];
var arcCottbus = [];
var arcBremen = [];
var arcLudwigsfelde = [];
var arcDresden = [];
var arcDedenhausen = [];
var arcDatteln = [];
var arcSoest = [];
var arcHamburg = [];
var arcSwinoujscie = [];
var arcJena = [];
var arcMarxen = [];
var arcRatingen = [];
var arcGeisecke = [];
var arcBadZwischenahn = [];
 
// Number of steps to use in the arc and animation, more steps means
// a smoother arc and animation, but too many steps will result in a
// low frame rate
var stepsMendlesham = 500;
var stepsBerlin = 500;
var stepsDarmstadt = 500;
var stepsHanover = 500;
var stepsAndernach = 500;
var stepsKassel = 500;
var stepsMisburg = 500;
var stepsPforzheim = 500;
var stepsBielefeld = 500;
var stepsCologne = 500;
var stepsDerben = 500;
var stepsAugsburg = 500;
var stepsBitterfeld = 500;
var stepsDuisburg = 500;
var stepsDulmen = 500;
var stepsCottbus = 500;
var stepsBremen = 500;
var stepsLudwigsfelde = 500;
var stepsDresden = 500;
var stepsDedenhausen = 500;
var stepsDatteln = 500;
var stepsSoest = 500;
var stepsHamburg = 500;
var stepsSwinoujscie = 500;
var stepsJena = 500;
var stepsMarxen = 500;
var stepsRatingen = 500;
var stepsGeisecke = 500;
var stepsBadZwischenahn = 500;
 
// Draw an arc between the `origin` & `destination` of the two points
for (var i = 0; i < lineDistanceMendlesham; i += lineDistanceMendlesham / stepsMendlesham) {
  var segmentMendlesham = turf.along(routeMendlesham.features[0], i);
  arcMendlesham.push(segmentMendlesham.geometry.coordinates);
}
for (var i = 0; i < lineDistanceBerlin; i += lineDistanceBerlin / stepsBerlin) {
	var segmentBerlin = turf.along(routeBerlin.features[0], i);
	arcBerlin.push(segmentBerlin.geometry.coordinates);
}
for (var i = 0; i < lineDistanceDarmstadt; i += lineDistanceDarmstadt / stepsDarmstadt) {
	var segmentDarmstadt = turf.along(routeDarmstadt.features[0], i);
	arcDarmstadt.push(segmentDarmstadt.geometry.coordinates);
}
for (var i = 0; i < lineDistanceHanover; i += lineDistanceHanover / stepsHanover) {
	var segmentHanover = turf.along(routeHanover.features[0], i);
	arcHanover.push(segmentHanover.geometry.coordinates);
}
for (var i = 0; i < lineDistanceAndernach; i += lineDistanceAndernach / stepsAndernach) {
	var segmentAndernach = turf.along(routeAndernach.features[0], i);
	arcAndernach.push(segmentAndernach.geometry.coordinates);
}
for (var i = 0; i < lineDistanceKassel; i += lineDistanceKassel / stepsKassel) {
	var segmentKassel = turf.along(routeKassel.features[0], i);
	arcKassel.push(segmentKassel.geometry.coordinates);
}
for (var i = 0; i < lineDistanceMisburg; i += lineDistanceMisburg / stepsMisburg) {
	var segmentMisburg = turf.along(routeMisburg.features[0], i);
	arcMisburg.push(segmentMisburg.geometry.coordinates);
}
for (var i = 0; i < lineDistancePforzheim; i += lineDistancePforzheim / stepsPforzheim) {
	var segmentPforzheim = turf.along(routePforzheim.features[0], i);
	arcPforzheim.push(segmentPforzheim.geometry.coordinates);
}
for (var i = 0; i < lineDistanceBielefeld; i += lineDistanceBielefeld / stepsBielefeld) {
	var segmentBielefeld = turf.along(routeBielefeld.features[0], i);
	arcBielefeld.push(segmentBielefeld.geometry.coordinates);
}
for (var i = 0; i < lineDistanceCologne; i += lineDistanceCologne / stepsCologne) {
	var segmentCologne = turf.along(routeCologne.features[0], i);
	arcCologne.push(segmentCologne.geometry.coordinates);
}
for (var i = 0; i < lineDistanceDerben; i += lineDistanceDerben / stepsDerben) {
	var segmentDerben = turf.along(routeDerben.features[0], i);
	arcDerben.push(segmentDerben.geometry.coordinates);
}
for (var i = 0; i < lineDistanceAugsburg; i += lineDistanceAugsburg / stepsAugsburg) {
	var segmentAugsburg = turf.along(routeAugsburg.features[0], i);
	arcAugsburg.push(segmentAugsburg.geometry.coordinates);
}
for (var i = 0; i < lineDistanceBitterfeld; i += lineDistanceBitterfeld / stepsBitterfeld) {
	var segmentBitterfeld = turf.along(routeBitterfeld.features[0], i);
	arcBitterfeld.push(segmentBitterfeld.geometry.coordinates);
}
for (var i = 0; i < lineDistanceDuisburg; i += lineDistanceDuisburg / stepsDuisburg) {
	var segmentDuisburg = turf.along(routeDuisburg.features[0], i);
	arcDuisburg.push(segmentDuisburg.geometry.coordinates);
}
for (var i = 0; i < lineDistanceDulmen; i += lineDistanceDulmen / stepsDulmen) {
	var segmentDulmen = turf.along(routeDulmen.features[0], i);
	arcDulmen.push(segmentDulmen.geometry.coordinates);
}
for (var i = 0; i < lineDistanceCottbus; i += lineDistanceCottbus / stepsCottbus) {
	var segmentCottbus = turf.along(routeCottbus.features[0], i);
	arcCottbus.push(segmentCottbus.geometry.coordinates);
}
for (var i = 0; i < lineDistanceBremen; i += lineDistanceBremen / stepsBremen) {
	var segmentBremen = turf.along(routeBremen.features[0], i);
	arcBremen.push(segmentBremen.geometry.coordinates);
}
for (var i = 0; i < lineDistanceLudwigsfelde; i += lineDistanceLudwigsfelde / stepsLudwigsfelde) {
	var segmentLudwigsfelde = turf.along(routeLudwigsfelde.features[0], i);
	arcLudwigsfelde.push(segmentLudwigsfelde.geometry.coordinates);
}
for (var i = 0; i < lineDistanceDresden; i += lineDistanceDresden / stepsDresden) {
	var segmentDresden = turf.along(routeDresden.features[0], i);
	arcDresden.push(segmentDresden.geometry.coordinates);
}
for (var i = 0; i < lineDistanceDedenhausen; i += lineDistanceDedenhausen / stepsDedenhausen) {
	var segmentDedenhausen = turf.along(routeDedenhausen.features[0], i);
	arcDedenhausen.push(segmentDedenhausen.geometry.coordinates);
}
for (var i = 0; i < lineDistanceDatteln; i += lineDistanceDatteln / stepsDatteln) {
	var segmentDatteln = turf.along(routeDatteln.features[0], i);
	arcDatteln.push(segmentDatteln.geometry.coordinates);
}
for (var i = 0; i < lineDistanceSoest; i += lineDistanceSoest / stepsSoest) {
	var segmentSoest = turf.along(routeSoest.features[0], i);
	arcSoest.push(segmentSoest.geometry.coordinates);
}
for (var i = 0; i < lineDistanceHamburg; i += lineDistanceHamburg / stepsHamburg) {
	var segmentHamburg = turf.along(routeHamburg.features[0], i);
	arcHamburg.push(segmentHamburg.geometry.coordinates);
}
for (var i = 0; i < lineDistanceSwinoujscie; i += lineDistanceSwinoujscie / stepsSwinoujscie) {
	var segmentSwinoujscie = turf.along(routeSwinoujscie.features[0], i);
	arcSwinoujscie.push(segmentSwinoujscie.geometry.coordinates);
}
for (var i = 0; i < lineDistanceJena; i += lineDistanceJena / stepsJena) {
	var segmentJena = turf.along(routeJena.features[0], i);
	arcJena.push(segmentJena.geometry.coordinates);
}
for (var i = 0; i < lineDistanceMarxen; i += lineDistanceMarxen / stepsMarxen) {
	var segmentMarxen = turf.along(routeMarxen.features[0], i);
	arcMarxen.push(segmentMarxen.geometry.coordinates);
}
for (var i = 0; i < lineDistanceRatingen; i += lineDistanceRatingen / stepsRatingen) {
	var segmentRatingen = turf.along(routeRatingen.features[0], i);
	arcRatingen.push(segmentRatingen.geometry.coordinates);
}
for (var i = 0; i < lineDistanceGeisecke; i += lineDistanceGeisecke / stepsGeisecke) {
	var segmentGeisecke = turf.along(routeGeisecke.features[0], i);
	arcGeisecke.push(segmentGeisecke.geometry.coordinates);
}
for (var i = 0; i < lineDistanceBadZwischenahn; i += lineDistanceBadZwischenahn / stepsBadZwischenahn) {
	var segmentBadZwischenahn = turf.along(routeBadZwischenahn.features[0], i);
	arcBadZwischenahn.push(segmentBadZwischenahn.geometry.coordinates);
}
 
// Update the route with calculated arc coordinates
routeMendlesham.features[0].geometry.coordinates = arcMendlesham;
routeBerlin.features[0].geometry.coordinates = arcBerlin;
routeDarmstadt.features[0].geometry.coordinates = arcDarmstadt;
routeHanover.features[0].geometry.coordinates = arcHanover;
routeAndernach.features[0].geometry.coordinates = arcAndernach;
routeKassel.features[0].geometry.coordinates = arcKassel;
routeMisburg.features[0].geometry.coordinates = arcMisburg;
routePforzheim.features[0].geometry.coordinates = arcPforzheim;
routeBielefeld.features[0].geometry.coordinates = arcBielefeld;
routeCologne.features[0].geometry.coordinates = arcCologne;
routeDerben.features[0].geometry.coordinates = arcDerben;
routeAugsburg.features[0].geometry.coordinates = arcAugsburg;
routeBitterfeld.features[0].geometry.coordinates = arcBitterfeld;
routeDuisburg.features[0].geometry.coordinates = arcDuisburg;
routeDulmen.features[0].geometry.coordinates = arcDulmen;
routeCottbus.features[0].geometry.coordinates = arcCottbus;
routeBremen.features[0].geometry.coordinates = arcBremen;
routeLudwigsfelde.features[0].geometry.coordinates = arcLudwigsfelde;
routeDresden.features[0].geometry.coordinates = arcDresden;
routeDedenhausen.features[0].geometry.coordinates = arcDedenhausen;
routeDatteln.features[0].geometry.coordinates = arcDatteln;
routeSoest.features[0].geometry.coordinates = arcSoest;
routeHamburg.features[0].geometry.coordinates = arcHamburg;
routeSwinoujscie.features[0].geometry.coordinates = arcSwinoujscie;
routeJena.features[0].geometry.coordinates = arcJena;
routeMarxen.features[0].geometry.coordinates = arcMarxen;
routeRatingen.features[0].geometry.coordinates = arcRatingen;
routeGeisecke.features[0].geometry.coordinates = arcGeisecke;
routeBadZwischenahn.features[0].geometry.coordinates = arcBadZwischenahn;