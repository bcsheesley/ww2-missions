var config = {
    style: 'mapbox://styles/bcsheesley/ckrclicp410k317pc4fdmfh71',
    accessToken: 'pk.eyJ1IjoiYmNzaGVlc2xleSIsImEiOiJja3JiNXY5ZDIwMTI0MnFwZnNvYTVuZHN5In0.X4Nj3sDbgu-1yAM_T8ymUg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'overview',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [10.05168, 51.11306],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'routeBerlin',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeDarmstadt',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeHanover',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeAndernach',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeKassel',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeMisburg',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routePforzheim',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeBielefeld',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeCologne',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeDerben',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeAugsburg',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeBitterfeld',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeDuisburg',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeDulmen',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeCottbus',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeBremen',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeLudwigsfelde',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeDresden',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeDedenhausen',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeDatteln',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeSoest',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeHamburg',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeSwinoujscie',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeJena',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeMarxen',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeRatingen',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeGeisecke',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeBadZwischenahn',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'routeBerlin',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeDarmstadt',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeHanover',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeAndernach',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeKassel',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeMisburg',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routePforzheim',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeBielefeld',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeCologne',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeDerben',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeAugsburg',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeBitterfeld',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeDuisburg',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeDulmen',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeCottbus',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeBremen',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeLudwigsfelde',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeDresden',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeDedenhausen',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeDatteln',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeSoest',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeHamburg',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeSwinoujscie',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeJena',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeMarxen',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeRatingen',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeGeisecke',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeBadZwischenahn',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'mendlesham',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [1.17528, 52.23786],
                zoom: 12,
                pitch: 80,
                bearing: 102
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'routeBerlin',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeKassel',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'routeBerlin',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeKassel',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [13.39272, 52.51166],
                zoom: 12,
                pitch: 80,
                bearing: 102
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
