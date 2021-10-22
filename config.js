var config = {
    style: 'mapbox://styles/bcsheesley/ckrclicp410k317pc4fdmfh71',
    accessToken: 'pk.eyJ1IjoiYmNzaGVlc2xleSIsImEiOiJja3JiNXY5ZDIwMTI0MnFwZnNvYTVuZHN5In0.X4Nj3sDbgu-1yAM_T8ymUg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'A Line a Day',
    subtitle: 'The World War Ⅱ Journal of Lt. Byron E. Sheesley',
    byline: 'December 1944 - March  1945',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'grandpa',
            section: 1,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Lt. Byron E. Sheesley',
            date: '',
            image: './images/id-card-front-small.png',
            imageId: 'idCardFront',
            description: 'Family from <span class= "test">Struthers, OH, near Youngstown</span>. Trains to become a pilot at several bases in US: Walnut Springs, Ardmore Airforce, and others. 2nd Lt. Later becomes 1st Lt. Starts preparing in the fields of Arkansas',
            location: {
                center: [-90.95484, 36.06806],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'addSchools',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'monarch',
            section: 1,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Journey to England',
            date: '',
            image: './images/he_Dominion_Monarch_at_a_wharf_in_Wellington,_1940s_(3377606529).jpg',
            imageId: 'idCardFront',
            description: 'Departs from NYC Harbor aboard ship. Writes in another journal. Arrives in [port city], England after a week at sea. Travels by train to fields of Mendlesham, England.',
            location: {
                center: [-39.43332, 44.67845],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'removeMarker',
            onChapterEnter: [
                {
                layer: 'routePlymouth',
                opacity: 1,
                duration: 300
                }
            ],
            onChapterExit: [
                {
                layer: 'routePlymouth',
                opacity: 0,
                duration: 300
                }
            ]
        },
        {
            id: 'mendlesham',
            section: 1,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham Airfield',
            date: '',
            image: './images/Mendelshamairfield-18jan47.png',
            imageId: 'missions',
            description: '8th Airforce, 34th bomb group, 7th squadron. Other groups were also present before and during. Spends about four months total here. Plays basketball, goes to London, sees a play, attends church, receives and sends letters (?), ride a bike, and flies missions',
            location: {
                center: [1.1210006854646852, 52.23269925011281],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamTest',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '35missions',
            section: 1,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: '35 Missions',
            date: '',
            image: './images/missions-card-small.png',
            imageId: 'idCardFront',
            description: 'Flies 35 missions over Germany. Some short, some long trips. Some repeated targets. Some taregets not hit. An accident. A recall.',
            location: {
                center: [1.17528, 52.23786],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'removeMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'journal',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'The Journal',
            date: '',
            image: './images/journal/front-cover-1.png',
            imageId: 'idCardFront',
            description: 'Begins with a surprise mission, battles weather, cold, exhaustion, equipment, oxygen, nerves, flack, uncertainty, longing for Mary. Experiences scary moments and moments of comfort in the sky. Receives honors (but never recorded in these pages).',
            location: {
                center: [1.17528, 52.23786],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'removeMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'berlin1a',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '1',
            title: 'Berlin',
            date: '12/5/1944 (Part 1)',
            image: './images/journal/19441205-1-trim.png',
            imageId: 'dec5a',
            description: '<p>I was awakened at 0400 expecting to ride as copilot for my 1st mission. At the briefing block I was surprised, alarmed and frightened when I learned that we would go as a crew and I didn\'t know the score at all and had never flown above 20,000 ft. In a daze we went to our ship and somehow got ready and took off. After what seemed ages the formation got together in a pre-dawn assembly and away we went for BERLIN.</p><p>On the climb we stayed right in. Then we leveled off for the run in and it happened. That which is most disastrous happened—we fell behind. Opening her wide open we oh! so slowly crept back up. Come the IP and it happened again. I took over the ship again—the bombays were open—target just ahead—we had to get back in! If fighters hit we would have been sunk.</p><p>All our hearts were pounding—nerves at the break point-sweat rolling at 40° below. I quickly turned on the emergency turbo and the engines were giving all they had—they shook and shuddered and whined as if to say "we can\'t take this long." We were pulling 54" and I wondered how long those engines would hold. We just didn\'t seem to gain a bit, but kept falling back & dropping.</p><p>Finally we were down with the low element when we stopped losing. I uttered a little prayer and as a plant grows...</p>',
            location: {
                center: [13.39272, 52.51166],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'berlinTest',
            onChapterEnter: [
                {
                    layer: 'routeBerlin',
                    opacity: 0.8,
                    duration: 300
                }
            ],
            onChapterExit: []
        },
        {
            id: 'berlin1b',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '1',
            title: 'Berlin',
            date: '12/5/1944 (Part 2)',
            image: './images/journal/19441205-2.jpeg',
            imageId: 'dec5b',
            description: '<p>...the airspeed moved to 140, then 141, then 142; it seemed to stop and my heart seemed to stop then it moved to 145 and we began to move up again. Carefully I lifted her up as we gained on our lead. Just as we dropped the bombs we got back in place, but low.</p><p>That was it—the quick turn to escape flack and we were homeward bound. The 10 minutes from the IP to the target were the longest and most tense, exhausting ones of my life. At the Rally point I looked down just in time to see a lone B-17 spin down through the clouds below.</p><p>When we landed the squadron C.O. and all were there to meet us. Then we realized that, as I suspected, we had been sent by mistake—a green crew. They didn\'t think we would make it—we weren\'t even operational yet. "We had it!" Brydge was so frightened he made only 3 entries in his log: "(1) took off (2) Bombs away (3) landed." The hot cocoa sure tasted good. Next day we went on pass and sure needed it!</p>',
            location: {
                center: [13.39272, 52.51166],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'berlinTest',
            onChapterEnter: [
            {
                layer: 'routeBerlin',
                opacity: 0.8,
                duration: 300
            }
        ],
            onChapterExit: []
        },
        {
            id: 'kassel',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '5',
            title: 'Kassel',
            date: '12/30/1944',
            image: './images/journal/19441230.jpeg',
            imageId: 'dec30',
            description: 'Briefing this morning was at 04:00. Our target for today was a marshalling yard at [crossed out] Castle [end crossed out] Kassel, Germany. We took off and hit a low ceiling and climbed in solid overcast up to 11,000 ft. Our position was 4–3 in High squadron. Overcast 10/10 over target—results not observed. Flack was dense and we got our first hits. Our gas tank in right wing had to be replaced upon return. Oxygen system was leaking and was empty as we reached 10,000\' on descending—sweating it out. Visibility very poor upon return—we made 6 passes at field before getting in. Went to bed at 20:00 hours.',
            location: {
                center: [9.4797461, 51.3127114],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'kasselTest',
            onChapterEnter: [
            {
                layer: 'routeBerlin',
                opacity: 0,
                duration: 300
            },
            {
                layer: 'routeKassel',
                opacity: 0.8,
                duration: 300
            }
        ],
            onChapterExit: [{
                layer: 'routeKassel',
                opacity: 0,
                duration: 300
            }]
        }
    ]
};
