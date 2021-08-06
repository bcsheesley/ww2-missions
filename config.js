var config = {
    style: 'mapbox://styles/bcsheesley/ckrclicp410k317pc4fdmfh71',
    accessToken: 'pk.eyJ1IjoiYmNzaGVlc2xleSIsImEiOiJja3JiNXY5ZDIwMTI0MnFwZnNvYTVuZHN5In0.X4Nj3sDbgu-1yAM_T8ymUg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'The Mendlesham Journal',
    subtitle: 'December 1944 - March  1945',
    byline: 'Lt. B.E. Sheesley',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'overview',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: './images/osm.png',
            imageId: 'osmImage',
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
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'mendlesham',
            alignment: 'left',
            hidden: false,
            title: 'Mendlesham',
            image: './images/tools.png',
            imageId: 'tools',
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
                    layer: 'routeBerlinActive',
                    opacity: 0,
                    duration: 300
                }
            ],
            onChapterExit: []
        },
        {
            id: 'berlin1a',
            alignment: 'left',
            hidden: false,
            title: 'Berlin, 12/5/1944 (Part 1)',
            image: './images/journal/19441205-1.jpeg',
            imageId: 'dec5a',
            description: 'I was awakened at 0400 expecting to ride as copilot for my 1st mission. At the briefing block I was surprised, alarmed and frightened when I learned that we would go as a crew and I didn\'t know the score at all and had never flown above 20,000 ft. In a daze we went to our ship and somehow got ready and took off. After what seemed ages the formation got together in a pre-dawn assembly and away we went for BERLIN. On the climb we stayed right in. Then we leveled off for the run in and it happened. That which is most disastrous happened—we fell behind. Opening her wide open we oh! so slowly crept back up. Come the IP and it happened again. I took over the ship again—the bombays were open—target just ahead—we had to get back in! If fighters hit we would have been sunk. All our hearts were pounding—nerves at the break point-sweat rolling at 40° below. I quickly turned on the emergency turbo and the engines were giving all they had—they shook and shuddered and whined as if to say "we can\'t take this long." We were pulling 54" and I wondered how long those engines would hold. We just didn\'t seem to gain a bit, but kept falling back & dropping. Finally we were down with the low element when we stopped losing. I uttered a little prayer and as a plant grows...',
            location: {
                center: [13.39272, 52.51166],
                zoom: 12,
                pitch: 80,
                bearing: 102
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'routeBerlinActive',
                    opacity: 0.8,
                    duration: 300
                }
            ],
            onChapterExit: []
        },
        {
            id: 'berlin1b',
            alignment: 'left',
            hidden: false,
            title: 'Berlin, 12/5/1944 (Part 2)',
            image: './images/journal/19441205-2.jpeg',
            imageId: 'dec5b',
            description: '...the airspeed moved to 140, then 141, then 142; it seemed to stop and my heart seemed to stop then it moved to 145 and we began to move up again. Carefully I lifted her up as we gained on our lead. Just as we dropped the bombs we got back in place, but low. That was it—the quick turn to escape flack and we were homeward bound. The 10 minutes from the IP to the target were the longest and most tense, exhausting ones of my life. At the Rally point I looked down just in time to see a lone B-17 spin down through the clouds below. When we landed the squadron C.O. and all were there to meet us. Then we realized that, as I suspected, we had been sent by mistake—a green crew. They didn\'t think we would make it—we weren\'t even operational yet. "We had it!" Brydge was so frightened he made only 3 entries in his log: "(1) took off (2) Bombs away (3) landed." The hot cocoa sure tasted good. Next day we went on pass and sure needed it!',
            location: {
                center: [13.39272, 52.51166],
                zoom: 12,
                pitch: 80,
                bearing: 102
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'routeBerlinActive',
                opacity: 0.8,
                duration: 300
            }
        ],
            onChapterExit: []
        },
    ]
};
