var config = {
    style: 'mapbox://styles/bcsheesley/ckrclicp410k317pc4fdmfh71',
    accessToken: 'pk.eyJ1IjoiYmNzaGVlc2xleSIsImEiOiJja3JiNXY5ZDIwMTI0MnFwZnNvYTVuZHN5In0.X4Nj3sDbgu-1yAM_T8ymUg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'World War Ⅱ Journals',
    subtitle: 'Lt. Byron E. Sheesley',
    byline: '',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'about',
            section: '',
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'About this map',
            date: '',
            image: '',
            imageId: '',
            caption: '',
            description: '<p><span class="dropCap">L</span>t. Byron E. Sheesley kept two short journals while serving in the United States Army Air Forces (USAAF) during World War Ⅱ.</p><p>One journal documents his nearly two-week-long journey from Camp Kilmer, New Jersey to a USAAF replacement center in Staffordshire, England via troopship and train in late October and early November, 1944.</p><p>The other summarizes most of the 35 combat missions he flew over enemy targets in Germany as pilot of a B-17 heavy bomber between December 1944 and March 1945. It also describes aspects of his daily life on base and on pass. Sheesley was stationed in Mendlesham, England with the 34th Bomb Group of the "Mighty" 8th Air Force.</p><p>For the most part, entries in both journals are consice and matter-of-fact. They are noticeably short on commentary. That said, Sheesley could be expressive at times. For example, the 22-year-old pilot tells of an intense inaugeral mission over Berlin that portrays the physical, mental, and occupational stress that he must have faced on a regular basis. Three-and-a-half months later, after completing his last mission, he can finally set his sights on reuniting with his fiancé, 19-year-old Mary E. Clark: <blockquote>Happy Day! No more flack, fighters, gas, oxygen or bomb runs to sweat out. Mary, here I come.</blockquote></p><p>This map connects entries in the two journals with the places they describe. <b>Scroll down to read more.</b></p>',
            location: {
                center: [-95.96827, 39.03594],
                zoom: 2,
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
            id: 'struthers',
            section: 1,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Lt. Byron E. Sheesley',
            date: '',
            image: 'images/id-card-front-trim.png',
            imageId: '',
            caption: '',
            description: '<p><span class="dropCap">F</span>amily from Struthers, Ohio near Youngstown. Attending Houghton college as a Sophomore majoring in Religious Studies when he began training</p>',
            location: {
                center: [-80.60282, 41.05850],
                zoom: 7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'struthersTest',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'training-schools',
            section: 1,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Pilot Training',
            date: '',
            image: 'images/training_tree_orig.jpeg',
            imageId: 'idCardFront',
            caption: 'Douglas 63rd Preservation Society',
            description: '<p><span class="dropCap">S</span>heesley followed the pathway for "classified pilots" shown in the left-hand column of this cadet training flow chart. He was a member of the Class of 44-C and was commissioned 2nd Lieutenant on XXXX. He trained for 36 weeks at various airfileds in the Southeast Air Corps Training Center (SEACTC) bookended by additional time to the northeast in college and specialized training centers.</p><ul><lh>Training Schools</lh><li><b>College Training</b><br>Duquense University, PA</br></li><li><b>Pre-Flight School</b><br>Maxwell Field, AL</br></li><li><b>Primary School</b><br>Lafayette Regional Airport, LA</li><li><b>Basic School</b><br>Walnut Ridge Army Airfield, AR</br></li><li><b>Advanced School</b><br>Blytheville Army Airfield, AR</br></li><li><b>Specialized School</b><br>Lockbourne Army Airfield, OH</br></li></ul>',
            location: {
                center: [-86.18510, 35.05642],
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
            id: 'dominion-monarch',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Journey to England',
            date: '',
            image: 'images/dominion-monarch4.jpg',
            imageId: 'dominion-monarch',
            caption: 'Alexander Turnbull Library',
            description: '<p><span class="dropCap">D</span>eparts from NYC Harbor aboard the Dominion Monarch, pictured above, a cruise liner converted to troopship during the war. Arrives in Portsmouth, England after more than a week at sea. Travels by train to the town of Stone, Staffordshire, England, where the center is setup in nearby Yarnfield.</p>',
            location: {
                center: [-39.43332, 44.67845],
                zoom: 1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'journey',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'journey',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'green-journal',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Green Journal',
            date: '',
            image: 'images/dominion-monarch/front-cover-outside-trim.png',
            imageId: '',
            caption: '',
            description: '<p><span class="dropCap">F</span>amily from Struthers, Ohio near Youngstown. Attending Houghton college when began training</p>',
            location: {
                center: [-39.43332, 44.67845],
                zoom: 1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'journey',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'journey',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'newyork',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'New York Docks',
            date: '10/21/1944',
            image: 'images/dominion-monarch/19441021-trim.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">L</span>eft Kilmer at 5:30pm with B-4 bag in one hand & service records in the other one hand. Rain made the departing miserable. Train was packed. By the time I got my pack and gear off (steel helmet & liner, musette bag, pistol, gas mask, flying jacked & raincoat) it was time to put them on again. Went by ferry from N.J. to N.Y. docks and boarded the "Dominion Monarch -- a two stack Canadian liner. Red cross ladies served doughnuts and coffee just before we boarded the boat. A band was blowing us away. Everyone filed in smoothly In Dormitory #1 on A deck I found my bunk and about 11:00pm went to sleep. E.M. were crowded badly & slept in hammocks and on the floor</p>',
            location: {
                center: [-74.045556, 40.668333],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'newyorkTest',
            onChapterEnter: [
                {
                    layer: 'journey',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'journey',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'sea1',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Day 1 at Sea',
            date: '10/22/1944',
            image: '',
            imageId: '',
            caption: '',
            description: '<p><span class="dropCap">F</span>amily from <span class= "test">Struthers, OH, near Youngstown</span>. Trains to become a pilot at several bases in US: Walnut Springs, Ardmore Airforce, and others. 2nd Lt. Later becomes 1st Lt. Starts preparing in the fields of Arkansas</p>',
            location: {
                center: [-70.6691, 41.10970],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'sea1Test',
            onChapterEnter: [
                {
                    layer: 'journey',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'journey',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'sea2',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Day 2 at Sea',
            date: '10/23/1944',
            image: '',
            imageId: '',
            caption: '',
            description: '<p><span class="dropCap">F</span>amily from <span class= "test">Struthers, OH, near Youngstown</span>. Trains to become a pilot at several bases in US: Walnut Springs, Ardmore Airforce, and others. 2nd Lt. Later becomes 1st Lt. Starts preparing in the fields of Arkansas</p>',
            location: {
                center: [-66.4689, 43.0820],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'sea2Test',
            onChapterEnter: [
                {
                    layer: 'journey',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'journey',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'mendlesham',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham Airfield',
            date: '',
            image: 'images/Mendelshamairfield-18jan47.png',
            imageId: 'missions',
            caption: 'Wikipedia',
            description: '<p><span class="dropCap">8</span>th Airforce, 34th bomb group, 7th squadron. Other groups were also present before and during. Spends about four months total here. Plays basketball, goes to London, sees a play, attends church, receives and sends letters (?), ride a bike, and flies missions</p>',
            location: {
                center: [1.1210006854646852, 52.23269925011281],
                zoom: 13,
                pitch: 0,
                bearing: 16
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamTest',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '35missions',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: '35 Missions',
            date: '',
            image: 'images/missions-card-small.png',
            imageId: 'idCardFront',
            caption: '',
            description: '<p><span class="dropCap">F</span>lies 35 missions over Germany. Some short, some long trips. Some repeated targets. Some taregets not hit. An accident. A recall.</p>',
            location: {
                center: [3.11114, 51.00934],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'routes',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'recall',
                    opacity: 1,
                    duration: 300
                },
            ],
            onChapterExit: [
                {
                    layer: 'routes',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'recall',
                    opacity: 0,
                    duration: 300
                },
            ]
        },
        {
            id: 'journal',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'A Line A Day',
            date: '',
            image: 'images/journal/front-cover-1.png',
            imageId: 'idCardFront',
            caption: '',
            description: '<p><span class="dropCap">B</span>egins with a surprise mission, battles weather, cold, exhaustion, equipment, oxygen, nerves, flack, uncertainty, longing for Mary. Experiences scary moments and moments of comfort in the sky. Receives honors (but never recorded in these pages).</p>',
            location: {
                center: [3.11114, 51.00934],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'routes',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'recall',
                    opacity: 1,
                    duration: 300
                },
            ],
            onChapterExit: [
                {
                    layer: 'routes',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'recall',
                    opacity: 0,
                    duration: 300
                },
            ]
        },
        {
            id: 'berlin1a',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '1',
            title: 'Berlin',
            date: '12/5/1944, p. 1',
            image: 'images/journal/19441205-1-trim.png',
            imageId: 'dec5a',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">I</span> was awakened at 0400 expecting to ride as copilot for my 1st mission. At the briefing block I was surprised, alarmed and frightened when I learned that we would go as a crew and I didn\'t know the score at all and had never flown above 20,000 ft. In a daze we went to our ship and somehow got ready and took off. After what seemed ages the formation got together in a pre-dawn assembly and away we went for BERLIN.</p><p>On the climb we stayed right in. Then we leveled off for the run in and it happened. That which is most disastrous happened—we fell behind. Opening her wide open we oh! so slowly crept back up. Come the IP and it happened again. I took over the ship again—the bombays were open—target just ahead—we had to get back in! If fighters hit we would have been sunk.</p><p>All our hearts were pounding—nerves at the break point-sweat rolling at 40° below. I quickly turned on the emergency turbo and the engines were giving all they had—they shook and shuddered and whined as if to say "we can\'t take this long." We were pulling 54" and I wondered how long those engines would hold. We just didn\'t seem to gain a bit, but kept falling back & dropping.</p><p>Finally we were down with the low element when we stopped losing. I uttered a little prayer and as a plant grows [...]</p>',
            location: {
                center: [13.404954, 52.520006],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'berlinTest',
            onChapterEnter: [
                {
                    layer: 'routes',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'recall',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'routeBerlin',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'routes',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'recall',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeBerlin',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'berlin1b',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '1',
            title: 'Berlin',
            date: '12/5/1944, p. 2',
            image: 'images/journal/19441205-2-trim.png',
            imageId: 'dec5b',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p>[...] the airspeed moved to 140, then 141, then 142; it seemed to stop and my heart seemed to stop then it moved to 145 and we began to move up again. Carefully I lifted her up as we gained on our lead. Just as we dropped the bombs we got back in place, but low.</p><p>That was it—the quick turn to escape flack and we were homeward bound. The 10 minutes from the IP to the target were the longest and most tense, exhausting ones of my life. At the Rally point I looked down just in time to see a lone B-17 spin down through the clouds below.</p><p>When we landed the squadron C.O. and all were there to meet us. Then we realized that, as I suspected, we had been sent by mistake—a green crew. They didn\'t think we would make it—we weren\'t even operational yet. "We had it!" Brydge was so frightened he made only 3 entries in his log: "(1) took off (2) Bombs away (3) landed." The hot cocoa sure tasted good. Next day we went on pass and sure needed it!</p>',
            location: {
                center: [13.404954, 52.520006],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'berlinTest',
            onChapterEnter: [
            {
                layer: 'routes',
                opacity: 1,
                duration: 300
            },
            {
                layer: 'recall',
                opacity: 1,
                duration: 300
            },
            {
                layer: 'routeBerlin',
                opacity: 1,
                duration: 300
            }
        ],
            onChapterExit: [
                {
                    layer: 'routes',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'recall',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeBerlin',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'kassel',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '5',
            title: 'Kassel',
            date: '12/30/1944',
            image: 'images/journal/19441230.jpeg',
            imageId: 'dec30',
            caption: '',
            description: '<span class="dropQuote">&ldquo;</span><p><span class="dropCap">B</span> riefing this morning was at 04:00. Our target for today was a marshalling yard at <s>Castle</s> Kassel, Germany. We took off and hit a low ceiling and climbed in solid overcast up to 11,000 ft. Our position was 4–3 in High squadron. Overcast 10/10 over target—results not observed. Flack was dense and we got our first hits. Our gas tank in right wing had to be replaced upon return. Oxygen system was leaking and was empty as we reached 10,000\' on descending—sweating it out. Visibility very poor upon return—we made 6 passes at field before getting in. Went to bed at 20:00 hours.</p>',
            location: {
                center: [9.480, 51.312],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'kasselTest',
            onChapterEnter: [
            {
                layer: 'routes',
                opacity: 1,
                duration: 300
            },
            {
                layer: 'recall',
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
                    layer: 'routes',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'recall',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'routeKassel',
                    opacity: 0,
                    duration: 300
                }
            ]
        }
    ]
};
