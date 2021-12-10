// Simple line
var routeSea = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [sea1, sea11]
	},
	'properties': {
		'name': 'New York – Plymouth Bay',
		'date': 'Oct 22 – Nov 2, 1944'
	}
};

// Lines for each mission
var routeBerlin = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, berlin]
	},
	'properties': {
		'name': 'Berlin',
		'trips': 4,
		'daterank1': 1,
		'daterank2': 14,
		'daterank3': 19,
		'daterank4': 28,
		'date1': '12/5/1944',
		'date2': '2/3/1945',
		'date3': '2/26/1945',
		'date4': '3/18/1945',
		'mission1': 97,
		'mission2': 119,
		'mission3': 131,
		'mission4': 145
	}
};
var routeDarmstadt = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, darmstadt]
	},
	'properties': {
		'name': 'Darmstadt',
		'trips': 1,
		'daterank1': 2,
		'date1': '12/12/1944',
		'mission1': 100
	}
};
var routeHanover = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, hanover]
	},
	'properties': {
		'name': 'Hanover',
		'trips': 2,
		'daterank1': 3,
		'daterank2': 35,
		'date1': '12/15/1944',
		'date2': '3/28/1945',
		'mission1': 101,
		'mission2': 153,
	}
};
var routeAndernach = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, andernach]
	},
	'properties': {
		'name': 'Andernach',
		'trips': 1,
		'daterank1': 4,
		'date1': '12/27/1944',
		'mission1': 103
	}
};
var routeKassel = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, kassel]
	},
	'properties': {
		'name': 'Kassel',
		'trips': 1,
		'daterank1': 5,
		'date1': '12/30/1944',
		'mission1': 105
	}
};
var routeMisburg = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, misburg]
	},
	'properties': {
		'name': 'Misburg',
		'trips': 1,
		'daterank1': 6,
		'date1': '12/31/1944',
		'mission1': 106
	}
};
var routePforzheim = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, pforzheim]
	},
	'properties': {
		'name': 'Pforzheim',
		'trips': 1,
		'daterank1': 7,
		'date1': '1/3/1945',
		'mission1': 108
	}
};
var routeBielefeld = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, bielefeld]
	},
	'properties': {
		'name': 'Bielefeld',
		'trips': 1,
		'daterank1': 8,
		'date1': '1/7/1945',
		'mission1': 109
	}
};
var routeCologne = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, cologne]
	},
	'properties': {
		'name': 'Cologne',
		'trips': 1,
		'daterank1': 9,
		'date1': '1/10/1945',
		'mission1': 110
	}
};
var routeDerben = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, derben]
	},
	'properties': {
		'name': 'Derben',
		'trips': 1,
		'daterank1': 10,
		'date1': '1/14/1945',
		'mission1': 112
	}
};
var routeAugsburg = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, augsburg]
	},
	'properties': {
		'name': 'Augsburg',
		'trips': 1,
		'daterank1': 11,
		'date1': '1/15/1945',
		'mission1': 113
	}
};
var routeBitterfeld = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, bitterfeld]
	},
	'properties': {
		'name': 'Bitterfeld',
		'trips': 2,
		'daterank1': 12,
		'daterank2': 27,
		'date1': '1/16/1945',
		'date2': '3/17/1945',
		'mission1': 114,
		'mission2': 144
	}
};
var routeDuisburg = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, duisburg]
	},
	'properties': {
		'name': 'Duisburg',
		'trips': 1,
		'daterank1': 13,
		'date1': '1/28/1945',
		'mission1': 117
	}
};
var routeDulmen = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, dulmen]
	},
	'properties': {
		'name': 'Dülmen',
		'trips': 1,
		'daterank1': 15,
		'date1': '2/9/1945',
		'mission1': 121
	}
};
var routeCottbus = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, cottbus]
	},
	'properties': {
		'name': 'Cottbus',
		'trips': 1,
		'daterank1': 16,
		'date1': '2/15/1945',
		'mission1': 123
	}
};
var routeBremen = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, bremen]
	},
	'properties': {
		'name': 'Bremen',
		'trips': 1,
		'daterank1': 17,
		'date1': '2/24/1945',
		'mission1': 129
	}
};
var routeLudwigsfelde = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, ludwigsfelde]
	},
	'properties': {
		'name': 'Ludwigsfelde',
		'trips': 1,
		'daterank1': 18,
		'date1': '2/25/1945',
		'mission1': 130
	}
};
var routeDresden = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, dresden]
	},
	'properties': {
		'name': 'Dresden',
		'trips': 1,
		'daterank1': 20,
		'date1': '3/2/1945',
		'mission1': 134
	}
};
var routeDedenhausen = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, dedenhausen]
	},
	'properties': {
		'name': 'Dedenhausen',
		'trips': 1,
		'daterank1': 21,
		'date1': '3/3/1945',
		'mission1': 135
	}
};
var routeDatteln = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, datteln]
	},
	'properties': {
		'name': 'Datteln',
		'trips': 1,
		'daterank1': 23,
		'date1': '3/7/1945',
		'mission1': 137
	}
};
var routeSoest = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, soest]
	},
	'properties': {
		'name': 'Soest',
		'trips': 1,
		'daterank1': 24,
		'date1': '3/10/1945',
		'mission1': 139
	}
};
var routeHamburg = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, hamburg]
	},
	'properties': {
		'name': 'Hamburg',
		'trips': 2,
		'daterank1': 25,
		'daterank2': 30,
		'date1': '3/11/1945',
		'date2': '3/20/1945',
		'mission1': 140,
		'mission2': 147
	}
};
var routeSwinoujscie = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, swinoujscie]
	},
	'properties': {
		'name': 'Świnoujście',
		'trips': 1,
		'daterank1': 26,
		'date1': '3/12/1945',
		'mission1': 141
	}
};
var routeJena = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, jena]
	},
	'properties': {
		'name': 'Jena',
		'trips': 1,
		'daterank1': 29,
		'date1': '3/19/1945',
		'mission1': 146
	}
};
var routeMarxen = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, marxen]
	},
	'properties': {
		'name': 'Marxen',
		'trips': 1,
		'daterank1': 31,
		'date1': '3/21/1945',
		'mission1': 148
	}
};
var routeRatingen = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, ratingen]
	},
	'properties': {
		'name': 'Ratingen',
		'trips': 1,
		'daterank1': 32,
		'date1': '3/22/1945',
		'mission1': 149
	}
};
var routeGeisecke = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, geisecke]
	},
	'properties': {
		'name': 'Geisecke',
		'trips': 1,
		'daterank1': 33,
		'date1': '3/23/1945',
		'mission1': 150
	}
};
var routeBadZwischenahn = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, badZwischenahn]
	},
	'properties': {
		'name': 'Bad Zwischenahn',
		'trips': 1,
		'daterank1': 34,
		'date1': '3/24/1945',
		'mission1': 151
	}
};
var routeRecall = {
	'type': 'Feature',
	'geometry': {
		'type': 'LineString',
		'coordinates': [mendlesham, recall]
	},
	'properties': {
		'name': 'Recall',
		'trips': 1,
		'daterank1': 22,
		'date1': '3/4/1945',
		'mission1': 136
	}
};

// Calculate the distance in kilometers between route start/end points.
var lineDistanceSea = turf.length.default(routeSea);
var lineDistanceBerlin = turf.length.default(routeBerlin);
var lineDistanceDarmstadt = turf.length.default(routeDarmstadt);
var lineDistanceHanover = turf.length.default(routeHanover);
var lineDistanceAndernach = turf.length.default(routeAndernach);
var lineDistanceKassel = turf.length.default(routeKassel);
var lineDistanceMisburg = turf.length.default(routeMisburg);
var lineDistancePforzheim = turf.length.default(routePforzheim);
var lineDistanceBielefeld = turf.length.default(routeBielefeld);
var lineDistanceCologne = turf.length.default(routeCologne);
var lineDistanceDerben = turf.length.default(routeDerben);
var lineDistanceAugsburg = turf.length.default(routeAugsburg);
var lineDistanceBitterfeld = turf.length.default(routeBitterfeld);
var lineDistanceDuisburg = turf.length.default(routeDuisburg);
var lineDistanceDulmen = turf.length.default(routeDulmen);
var lineDistanceCottbus = turf.length.default(routeCottbus);
var lineDistanceBremen = turf.length.default(routeBremen);
var lineDistanceLudwigsfelde = turf.length.default(routeLudwigsfelde);
var lineDistanceDresden = turf.length.default(routeDresden);
var lineDistanceDedenhausen = turf.length.default(routeDedenhausen);
var lineDistanceDatteln = turf.length.default(routeDatteln);
var lineDistanceSoest = turf.length.default(routeSoest);
var lineDistanceHamburg = turf.length.default(routeHamburg);
var lineDistanceSwinoujscie = turf.length.default(routeSwinoujscie);
var lineDistanceJena = turf.length.default(routeJena);
var lineDistanceMarxen = turf.length.default(routeMarxen);
var lineDistanceRatingen = turf.length.default(routeRatingen);
var lineDistanceGeisecke = turf.length.default(routeGeisecke);
var lineDistanceBadZwischenahn = turf.length.default(routeBadZwischenahn);
var lineDistanceRecall = turf.length.default(routeRecall);
 
var arcSea = [];
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
var arcRecall = [];
 
// Number of steps to use in the arc and animation, more steps means
// a smoother arc and animation, but too many steps will result in a
// low frame rate
var stepsSea = 500;
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
var stepsRecall = 500;
 
// Draw an arc between the origin & destination points
for (var i = 0; i < lineDistanceSea; i += lineDistanceSea / stepsSea) {
	  var segmentSea = turf.along.default(routeSea, i);
	  arcSea.push(segmentSea.geometry.coordinates);
}
for (var i = 0; i < lineDistanceBerlin; i += lineDistanceBerlin / stepsBerlin) {
	var segmentBerlin = turf.along.default(routeBerlin, i);
	arcBerlin.push(segmentBerlin.geometry.coordinates);
}
for (var i = 0; i < lineDistanceDarmstadt; i += lineDistanceDarmstadt / stepsDarmstadt) {
	var segmentDarmstadt = turf.along.default(routeDarmstadt, i);
	arcDarmstadt.push(segmentDarmstadt.geometry.coordinates);
}
for (var i = 0; i < lineDistanceHanover; i += lineDistanceHanover / stepsHanover) {
	var segmentHanover = turf.along.default(routeHanover, i);
	arcHanover.push(segmentHanover.geometry.coordinates);
}
for (var i = 0; i < lineDistanceAndernach; i += lineDistanceAndernach / stepsAndernach) {
	var segmentAndernach = turf.along.default(routeAndernach, i);
	arcAndernach.push(segmentAndernach.geometry.coordinates);
}
for (var i = 0; i < lineDistanceKassel; i += lineDistanceKassel / stepsKassel) {
	var segmentKassel = turf.along.default(routeKassel, i);
	arcKassel.push(segmentKassel.geometry.coordinates);
}
for (var i = 0; i < lineDistanceMisburg; i += lineDistanceMisburg / stepsMisburg) {
	var segmentMisburg = turf.along.default(routeMisburg, i);
	arcMisburg.push(segmentMisburg.geometry.coordinates);
}
for (var i = 0; i < lineDistancePforzheim; i += lineDistancePforzheim / stepsPforzheim) {
	var segmentPforzheim = turf.along.default(routePforzheim, i);
	arcPforzheim.push(segmentPforzheim.geometry.coordinates);
}
for (var i = 0; i < lineDistanceBielefeld; i += lineDistanceBielefeld / stepsBielefeld) {
	var segmentBielefeld = turf.along.default(routeBielefeld, i);
	arcBielefeld.push(segmentBielefeld.geometry.coordinates);
}
for (var i = 0; i < lineDistanceCologne; i += lineDistanceCologne / stepsCologne) {
	var segmentCologne = turf.along.default(routeCologne, i);
	arcCologne.push(segmentCologne.geometry.coordinates);
}
for (var i = 0; i < lineDistanceDerben; i += lineDistanceDerben / stepsDerben) {
	var segmentDerben = turf.along.default(routeDerben, i);
	arcDerben.push(segmentDerben.geometry.coordinates);
}
for (var i = 0; i < lineDistanceAugsburg; i += lineDistanceAugsburg / stepsAugsburg) {
	var segmentAugsburg = turf.along.default(routeAugsburg, i);
	arcAugsburg.push(segmentAugsburg.geometry.coordinates);
}
for (var i = 0; i < lineDistanceBitterfeld; i += lineDistanceBitterfeld / stepsBitterfeld) {
	var segmentBitterfeld = turf.along.default(routeBitterfeld, i);
	arcBitterfeld.push(segmentBitterfeld.geometry.coordinates);
}
for (var i = 0; i < lineDistanceDuisburg; i += lineDistanceDuisburg / stepsDuisburg) {
	var segmentDuisburg = turf.along.default(routeDuisburg, i);
	arcDuisburg.push(segmentDuisburg.geometry.coordinates);
}
for (var i = 0; i < lineDistanceDulmen; i += lineDistanceDulmen / stepsDulmen) {
	var segmentDulmen = turf.along.default(routeDulmen, i);
	arcDulmen.push(segmentDulmen.geometry.coordinates);
}
for (var i = 0; i < lineDistanceCottbus; i += lineDistanceCottbus / stepsCottbus) {
	var segmentCottbus = turf.along.default(routeCottbus, i);
	arcCottbus.push(segmentCottbus.geometry.coordinates);
}
for (var i = 0; i < lineDistanceBremen; i += lineDistanceBremen / stepsBremen) {
	var segmentBremen = turf.along.default(routeBremen, i);
	arcBremen.push(segmentBremen.geometry.coordinates);
}
for (var i = 0; i < lineDistanceLudwigsfelde; i += lineDistanceLudwigsfelde / stepsLudwigsfelde) {
	var segmentLudwigsfelde = turf.along.default(routeLudwigsfelde, i);
	arcLudwigsfelde.push(segmentLudwigsfelde.geometry.coordinates);
}
for (var i = 0; i < lineDistanceDresden; i += lineDistanceDresden / stepsDresden) {
	var segmentDresden = turf.along.default(routeDresden, i);
	arcDresden.push(segmentDresden.geometry.coordinates);
}
for (var i = 0; i < lineDistanceDedenhausen; i += lineDistanceDedenhausen / stepsDedenhausen) {
	var segmentDedenhausen = turf.along.default(routeDedenhausen, i);
	arcDedenhausen.push(segmentDedenhausen.geometry.coordinates);
}
for (var i = 0; i < lineDistanceDatteln; i += lineDistanceDatteln / stepsDatteln) {
	var segmentDatteln = turf.along.default(routeDatteln, i);
	arcDatteln.push(segmentDatteln.geometry.coordinates);
}
for (var i = 0; i < lineDistanceSoest; i += lineDistanceSoest / stepsSoest) {
	var segmentSoest = turf.along.default(routeSoest, i);
	arcSoest.push(segmentSoest.geometry.coordinates);
}
for (var i = 0; i < lineDistanceHamburg; i += lineDistanceHamburg / stepsHamburg) {
	var segmentHamburg = turf.along.default(routeHamburg, i);
	arcHamburg.push(segmentHamburg.geometry.coordinates);
}
for (var i = 0; i < lineDistanceSwinoujscie; i += lineDistanceSwinoujscie / stepsSwinoujscie) {
	var segmentSwinoujscie = turf.along.default(routeSwinoujscie, i);
	arcSwinoujscie.push(segmentSwinoujscie.geometry.coordinates);
}
for (var i = 0; i < lineDistanceJena; i += lineDistanceJena / stepsJena) {
	var segmentJena = turf.along.default(routeJena, i);
	arcJena.push(segmentJena.geometry.coordinates);
}
for (var i = 0; i < lineDistanceMarxen; i += lineDistanceMarxen / stepsMarxen) {
	var segmentMarxen = turf.along.default(routeMarxen, i);
	arcMarxen.push(segmentMarxen.geometry.coordinates);
}
for (var i = 0; i < lineDistanceRatingen; i += lineDistanceRatingen / stepsRatingen) {
	var segmentRatingen = turf.along.default(routeRatingen, i);
	arcRatingen.push(segmentRatingen.geometry.coordinates);
}
for (var i = 0; i < lineDistanceGeisecke; i += lineDistanceGeisecke / stepsGeisecke) {
	var segmentGeisecke = turf.along.default(routeGeisecke, i);
	arcGeisecke.push(segmentGeisecke.geometry.coordinates);
}
for (var i = 0; i < lineDistanceBadZwischenahn; i += lineDistanceBadZwischenahn / stepsBadZwischenahn) {
	var segmentBadZwischenahn = turf.along.default(routeBadZwischenahn, i);
	arcBadZwischenahn.push(segmentBadZwischenahn.geometry.coordinates);
}
for (var i = 0; i < lineDistanceRecall; i += lineDistanceRecall / stepsRecall) {
	var segmentRecall = turf.along.default(routeRecall, i);
	arcRecall.push(segmentRecall.geometry.coordinates);
}
 
// Update the route with calculated arc coordinates
routeSea.geometry.coordinates = arcSea;
routeBerlin.geometry.coordinates = arcBerlin;
routeDarmstadt.geometry.coordinates = arcDarmstadt;
routeHanover.geometry.coordinates = arcHanover;
routeAndernach.geometry.coordinates = arcAndernach;
routeKassel.geometry.coordinates = arcKassel;
routeMisburg.geometry.coordinates = arcMisburg;
routePforzheim.geometry.coordinates = arcPforzheim;
routeBielefeld.geometry.coordinates = arcBielefeld;
routeCologne.geometry.coordinates = arcCologne;
routeDerben.geometry.coordinates = arcDerben;
routeAugsburg.geometry.coordinates = arcAugsburg;
routeBitterfeld.geometry.coordinates = arcBitterfeld;
routeDuisburg.geometry.coordinates = arcDuisburg;
routeDulmen.geometry.coordinates = arcDulmen;
routeCottbus.geometry.coordinates = arcCottbus;
routeBremen.geometry.coordinates = arcBremen;
routeLudwigsfelde.geometry.coordinates = arcLudwigsfelde;
routeDresden.geometry.coordinates = arcDresden;
routeDedenhausen.geometry.coordinates = arcDedenhausen;
routeDatteln.geometry.coordinates = arcDatteln;
routeSoest.geometry.coordinates = arcSoest;
routeHamburg.geometry.coordinates = arcHamburg;
routeSwinoujscie.geometry.coordinates = arcSwinoujscie;
routeJena.geometry.coordinates = arcJena;
routeMarxen.geometry.coordinates = arcMarxen;
routeRatingen.geometry.coordinates = arcRatingen;
routeGeisecke.geometry.coordinates = arcGeisecke;
routeBadZwischenahn.geometry.coordinates = arcBadZwischenahn;
routeRecall.geometry.coordinates = arcRecall;