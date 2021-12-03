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
    footer: 'Journal entry dates and targets align with official mission records of the 8th Air Force as well as individual flight records issued by the War Department now preserved in a small document archive saved by family members. Source: source citations, etc.',
    chapters: [
        {
            id: 'about-this-map',
            section: '',
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'About This Map',
            date: '',
            image: '',
            imageId: '',
            caption: '',
            description: '<p><span class="dropCap">L</span>t. Byron E. Sheesley kept two short journals while serving in the United States Army Air Forces (USAAF) during World War Ⅱ.</p><p>One journal documents his nearly two-week-long journey from Camp Kilmer, New Jersey to a USAAF replacement center in Staffordshire, England via troopship and train in late October and early November, 1944.</p><p>The other summarizes most of the 35 combat missions he flew over enemy targets in Germany as pilot of a B-17 heavy bomber between December 1944 and March 1945. It also describes aspects of his daily life on base and on pass. Sheesley was stationed in Mendlesham, England with the 7th Squadron of the 34th Bomb Group in the "Mighty" 8th Air Force.</p><p>For the most part, entries in both journals are consice and matter-of-fact. They are noticeably short on commentary. That said, Sheesley could be expressive at times. For example, the 22-year-old pilot tells of an intense <a href="#1-berlin-pt1">inaugeral mission</a> over Berlin that portrays the physical, mental, and occupational stress that he must have faced on a regular basis. Likewise, after completing his <a href="#35-hanover">final mission</a> – a trip to Hanover, three-and-a-half months later – he writes of his great relief and determination to reunite with his fiancé, the 19-year-old Mary E. Clark: <blockquote>Happy Day! No more flack, fighters, gas, oxygen or bomb runs to sweat out. Mary, here I come.</blockquote></p><p>This map connects entries in the two journals with the places they describe. <b>Scroll down to read more.</b></p>',
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
            id: 'lt-byron-e-sheesley',
            section: 1,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Lt. Byron E. Sheesley',
            date: '',
            image: 'images/id-card-front-trim.png',
            imageId: '',
            caption: '',
            description: '<p><span class="dropCap">B</span>yron E. Sheesley was born July 11, 1922 to parents Earl Sylvester and Ethel (Eckelberger) Sheesley. Along with Robert and Richard, he was the middle child of three boys. The Sheesley\'s lived at 324 Lincoln Avenue, Struthers, Ohio near the larger city of Youngstown. In 1942, Byron was employed as a payroll clerk by Youngstown Sheet and Tube Company. He then attended Houghton College, in Houghton, New York, and majored in Religious Education. Midway through Sophomore year, on February 28, 1943, he paused his education, entered active duty, and begin to train as a pilot with the Army Air Force.</p>',
            location: {
                center: [-80.60282, 41.05850],
                zoom: 7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'struthersMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pilot-training',
            section: 1,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Pilot Training',
            date: '',
            image: 'images/training_tree_orig.jpeg',
            imageId: 'idCardFront',
            caption: 'Douglas 63rd Preservation Society',
            description: '<p><span class="dropCap">S</span>heesley followed the pathway for "Classified Pilots" shown in the left-hand column of the above cadet training flow chart. He was a member of the Class of 44-C and commissioned 2nd Lieutenant on March 12, 1944. (He was later promoted to 1st lieutenant on February 5, 1945).</p><p>Sheesley trained for 9 weeks at each of 4 airfileds in the Southeast Air Corps Training Center (SEACTC), and spent an additional 15 weeks in college (6 wks) and specialized (9 wks) training centers, as shown in the table below. Overall, he spent nearly a full year training for the war.</p><ul><lh>Training Locations</lh><li><b>College Training – 6 wks</b><br>Duquense University, PA</br></li><li><b>Pre-Flight School – 9 wks</b><br>Maxwell Field, AL</br></li><li><b>Primary School – 9 wks</b><br>Lafayette Regional Airport, LA</li><li><b>Basic School – 9 wks</b><br>Walnut Ridge Army Airfield, AR</br></li><li><b>Advanced School – 9 wks</b><br>Blytheville Army Airfield, AR</br></li><li><b>Specialized School – 9 wks</b><br>Lockbourne Army Airfield, OH</br></li></ul>',
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
            id: 'journey-to-england',
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
            id: 'the-green-journal',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'The Green Journal',
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
            id: 'new-york-docks',
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
            callback: 'newyorkMarker',
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
            id: 'day-1-at-sea',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Day 1 at Sea',
            date: '10/22/1944',
            image: 'images/dominion-monarch/19441022-trim-blur.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">U</span>p for breakfast at 8:00. Ship left dock about 9:00. No one was allowed on deck but we looked out through our porthole. It was a nice day, but pretty cool. Water was pretty smooth all day & no one got sick. It would have been swell for flying. Counted 40 some ships in the convoy. Navy blimp overhead. Wonder if Mary is in N.Y.C. Played some chess & checkers with Brydge</p>',
            location: {
                center: [-70.6691, 41.10970],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'sea1Marker',
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
            id: 'day-2-at-sea',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Day 2 at Sea',
            date: '10/23/1944',
            image: 'images/dominion-monarch/19441023-trim-blur.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">A</span> nice day for sailing, -- not a cloud in the sky and quite warm. Navy blimp gone. A PBM (Martin Mariner) buzzed our convoy then disappeared. Rumor is that we are waiting for more boats from Boston. Some of the Engineers got sick, but the A.C. is in good shape. I first noticed the change in sunset & sunrise. At 7:30pm night had set in</p>',
            location: {
                center: [-66.49730984863106, 43.09594080607482],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'sea2Marker',
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
            id: 'day-3-at-sea',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Day 3 at Sea',
            date: '10/24/1944',
            image: 'images/dominion-monarch/19441024-trim-blur.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">W</span>eather was fine. Cumulus clouds passed over about noon, but left leaving the water the smoothest to date. The ships from Boston arrived and a PBY (Catalina) flew around us. I read some of the biography of Ethan Allen. Brydge & I played some checkers with him in the lead--revenge tomorrow! It certainly has been a beautiful trip--would be complete if Mary were along!!! We set the clock ahead one hour tonight.</p>',
            location: {
                center: [-60.18472272639963, 45.59582421709126],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'sea3Marker',
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
            id: 'day-4-at-sea',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Day 4 at Sea',
            date: '10/25/1944',
            image: 'images/dominion-monarch/19441025-trim-blur.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">T</span>he sea was a little more rough today. We set the clock ahead again on hour today. Rough weather is promised.</p>',
            location: {
                center: [-53.63687116389963, 47.61823809916669],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'sea4Marker',
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
            id: 'day-5-at-sea',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Day 5 at Sea',
            date: '10/26/1944',
            image: 'images/dominion-monarch/19441026-trim-blur.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">I</span>\'ve changed my mind about a trip like this for a honeymoon! Not so good. Some of the smaller boats are dipping their bows in the brine. Ours is fairly stable, but dips too much. I am sick.</p>',
            location: {
                center: [-46.869293038899514, 49.25081403213443],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'sea5Marker',
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
            id: 'day-6-at-sea',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Day 6 at Sea',
            date: '10/27/1944',
            image: 'images/dominion-monarch/19441027-trim-blur.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">I</span> was on detail in the enlisted mens quarters this morning from 5:00am to noon. What a time we had getting them up. In my mind they are very poor soldiers. I resolve to do something about it in my own crew. Some of them I had to give six invitations to get up and then had to stand there until they got up. I was pretty sick all day and ate very little.</p>',
            location: {
                center: [-40.277496163899514, 50.328843938377474],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'sea6Marker',
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
            id: 'day-7-at-sea',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Day 7 at Sea',
            date: '10/28/1944',
            image: 'images/dominion-monarch/19441028-trim-blur.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">I</span> feel pretty good today. The clock was moved up an hour after midnight and I didn\'t know it so I missed breakfast. Sure miss good American food. I\'ve just been thinking--no more ice cream or cold drinks no more ice. Fish, fish, fish--that\'s my present impression of the British food. I\'ve been looking over the English money system getting ready.</p>',
            location: {
                center: [-33.20230085139934, 51.10787025644228],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'sea7Marker',
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
            id: 'day-8-at-sea',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Day 8 at Sea',
            date: '10/29/1944',
            image: 'images/dominion-monarch/19441029-trim-blur.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">C</span>hurch was held in the officers lounge The clock was moved forward another hour.</p>',
            location: {
                center: [-25.951324288899173, 51.382960620270325],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'sea8Marker',
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
            id: 'day-9-at-sea',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Day 9 at Sea',
            date: '10/30/1944',
            image: 'images/dominion-monarch/19441030-trim-blur.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">T</span>his trip is getting awfully monotonous. We were told that we are going to Plymouth, England. We won\'t have more than 2 more days on ship. We changed our position from the front to the rear of the convoy today. The weather is cloudy & cold.</p>',
            location: {
                center: [-18.78823835139906, 51.24562111169806],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'sea9Marker',
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
            id: 'day-10-at-sea',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Day 10 at Sea',
            date: '10/31/1944',
            image: 'images/dominion-monarch/19441031-trim-blur.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">T</span>oday is pay day, but no pay today--have to wait until we land. The convoy has split up. I went on duty at E.M\'s quarters this morning last night from 2300 to 0500 with Lt. Brydge. The clock was set up another hour. Had a sandwich and coffee from Steward. Finished reading "The Christ of the American Road" by E. Stanley Jones.</p>',
            location: {
                center: [-11.669097726398945, 50.664298274616186],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'sea10Marker',
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
            id: 'day-11-at-sea',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Day 11 at Sea',
            date: '11/1/1944',
            image: 'images/dominion-monarch/19441101-trim-blur.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">O</span>ff duty at 0500--went to bed & awoke at 1100. Land sighted about 1400. Convoy split again. K rations for 3 meals issued. Clothes are packed ready to go. Land faded from view and night came on. Some thought it was Ireland. Tipped our waiter $2.00 & our stewart $1.00.</p>',
            location: {
                center: [-5.6964, 49.8167],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'sea11Marker',
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
            id: 'plymouth-bay',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Plymouth Bay',
            date: '11/2/1944',
            image: 'images/dominion-monarch/19441102-trim-blur.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">T</span>he ship was anchored at the mouth of the bay river waiting to move to Plymouth to unload. Fog was heavy until about 1300 & lifted exposing to view a beautiful country side & town. A couple hurricanes kept buzzing us all day & we watched (Smoley & I) a couple Sunderlands take off & land in the bay. A flock of destroyers moved by us up the river. A British band came aboard and played until 1900. The air marshall spoke to us. We were told that we wouldn\'t start to leave the boat until 1400 tomorrow.</p>',
            location: {
                center: [-4.156, 50.3266],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'plymouthBayMarker',
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
            id: 'plymouth-docks',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Plymouth Docks',
            date: '11/3/1944',
            image: 'images/dominion-monarch/19441103-trim-blur.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">I</span> awoke with the sound of hymns and a preacher speaking over the broadcasting system. I liked it. After breakfast at 08:00 I discovered that we were moving up the river bay. At 10:00 we were tied to a dock. Some bomb ruins could be seen but the town looked to be in fair shape. Half the navy seems to be in this river. Destroyers, cruisers & battleships. A King George battleship is being repaired & a A.C. carrier also. This is said to be the 2nd transport in the harbor since the French coast has been cleared. (At breakfast a racial argument flared in which Lt. Brydge suffered severely.) The enlisted men on our crews left the boat at 10:00pm.</p>',
            location: {
                center: [-4.1556, 50.3640],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'plymouthMarker',
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
            id: 'day-1-at-stone-p1',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Day 1 at Stone, p. 1',
            date: '11/4/1944',
            image: 'images/dominion-monarch/19441104-1-trim-blur.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">A</span>t 0015 we left the boat and walked to a railroad where we boarded a train for the replacement center at Stone. Before the train pulled out the British navy gave us cups of coffee which wasn\'t drinkable and we ate our K ration breakfast. At 0900 I awoke, the train was rolling. At the rear of the train car I watched the country side--quite nice looking country. Farms very neat and every field in use. Towns not so appealing. Railroads are toy-like. Boxcars are very small. Passenger cars are quite comfortable. We arrived at Stone at 1400 and got in trucks which brought us to the camp. We were put into stone barracks shaped like an H. Poorly heated they are. The British [...]</p>',
            location: {
                center: [-2.1990963667560663, 52.895682841527304],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'yarnfieldMarker',
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
            id: 'day-1-at-stone-p2',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Day 1 at Stone, p. 2',
            date: '11/4/1944',
            image: 'images/dominion-monarch/19441104-2-trim-blur.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p>[...] call them "BLOCKS" & the whole camp is called a "HALL". We are in Beatty Hall, Block I, Room 16. I sent cablegrams to the folks & Mary. Missed my supper.</p>',
            location: {
                center: [-2.1990963667560663, 52.895682841527304],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'yarnfieldMarker',
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
            id: 'day-2-at-stone',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Day 2 at Stone',
            date: '11/5/1944',
            image: 'images/dominion-monarch/19441105-trim-blur.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">B</span><p>rydge, Smoley & I went to church at 1100. Dinner was very good. While filling out pay voucher a fellow tapped me on the shoulder and asked me if I was from Houghton. It was Burlingame. He came over to my room and we talked for quite a while. Went to hymn sing at 1900 at Duncan Hall chapel. I\'m going to the officers club at 2200 to get cake and tea which they are supposed to give out.</p>',
            location: {
                center: [-2.1990963667560663, 52.895682841527304],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'yarnfieldMarker',
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
            id: 'day-3-at-stone',
            section: 2,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Day 3 at Stone',
            date: '11/6/1944',
            image: 'images/dominion-monarch/19441106-trim-blur.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">W</span><p>e processed today – orientation lecture – gas lecture and physical exam. Played ball with Smoley & Brydge for a couple hours. Some fellows went out on pass tonight. Going for cake & coffee again.</p>',
            location: {
                center: [-2.1990963667560663, 52.895682841527304],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'yarnfieldMarker',
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
            id: 'mendlesham-airfield',
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
            callback: 'mendleshamMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '35-missions',
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
            id: 'a-line-a-day',
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
            id: '1-berlin-p1',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '1',
            title: 'Berlin, p. 1',
            date: '12/5/1944',
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
            callback: 'berlinMarker',
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
            id: '1-berlin-p2',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '1',
            title: 'Berlin, p. 2',
            date: '12/5/1944',
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
            callback: 'berlinMarker',
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
            id: '5-kassel',
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
            callback: 'kasselMarker',
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
