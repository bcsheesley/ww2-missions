var config = {
    style: 'mapbox://styles/bcsheesley/ckrclicp410k317pc4fdmfh71',
    accessToken: 'pk.eyJ1IjoiYmNzaGVlc2xleSIsImEiOiJja3JiNXY5ZDIwMTI0MnFwZnNvYTVuZHN5In0.X4Nj3sDbgu-1yAM_T8ymUg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'The World War Ⅱ Journals',
    subtitle: 'of',
    byline: 'Lt. Byron E. Sheesley',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'about-this-map',
            section: '',
            alignment: 'centered',
            hidden: false,
            daterank: '',
            title: 'About This Map',
            date: '',
            image: '',
            imageId: '',
            caption: '',
            description: '<p><span class="dropCap">L</span>t. Byron E. Sheesley kept two short journals while serving in the United States Army Air Forces (USAAF) during World War Ⅱ.</p><p>One journal documents his nearly two-week-long journey from Camp Kilmer, New Jersey to a USAAF replacement center near Stone, England by troopship and train in late October and early November, 1944.</p><p>The other summarizes many of the 35 combat missions he flew over enemy targets in Germany as pilot of a B-17 heavy bomber between December 1944 and March 1945. It also describes aspects of his daily life on base and on pass. Sheesley was stationed in Mendlesham, England with the 7th Squadron of the 34th Bomb Group in the "Mighty" 8th Air Force.</p><p>Many of the journal entries are concise and matter-of-fact. There are details about people and places, bomber formations and targets, weather conditions and flack, as well as time spent playing games, riding bikes, doing laundry, eating meals, attending chapel, and reading books.</p><p>Other entries, however, are quite powerful and moving. For example, in one entry Lt. Sheesley describes an intense <a href="#1-berlin-p1">first mission</a> to Berlin where his crew was sent by mistake and barely made it home alive. In another, after completing his <a href="#hanover">last mission</a>, Lt. Sheesley expresses his relief and determination to reunite with his fiancé, Mary E. Clark: <blockquote>... Happy Day! No more flack, fighters, gas, oxygen or bomb runs to sweat out. Mary, here I come.</blockquote></p><p>This map connects entries in the two journals with the places they describe. <b>Scroll down to read more.</b></p>',
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
            id: 'break-1',
            section: '',
            alignment: 'full',
            hidden: false,
            daterank: '',
            title: 'Part 1',
            date: 'Background',
            image: '',
            imageId: '',
            caption: '',
            description: '<p>Lt. Byron E. Sheesley</p><p>Pilot Training</p><p>Journey to England</p><p>Mendlesham Airfield</p><p>35 Missions<p>',
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
            description: '<p><span class="dropCap">B</span>yron E. Sheesley was born July 11, 1922 to parents Earl Sylvester and Ethel (Eckelberger) Sheesley. He was the middle child of three boys that included brothers Robert and Richard. The Sheesley family lived at 324 Lincoln Avenue, Struthers, Ohio near the larger city of Youngstown. In 1942, Byron was employed as a payroll clerk by Youngstown Sheet and Tube Company. He then attended Houghton College, in Houghton, New York, and majored in Religious Education. On February 28, 1943, at just 21 years of age and halfway through his sophomore year in college, he entered active duty with the Army Air Force and began training to become a pilot.</p>',
            location: {
                center: struthers,
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
            description: '<p><span class="dropCap">S</span>heesley followed the pathway for "Classified Pilots" shown in the left-hand column of the above cadet training flow chart. He was a member of the Class of 44-C and commissioned 2nd Lieutenant on March 12, 1944. (He was later promoted to 1st lieutenant on February 5, 1945).</p><p>Sheesley trained for 9 weeks at each of 4 airfileds in the Southeast Air Corps Training Center (SEACTC), and spent an additional 15 weeks in college (6 wks) and specialized (9 wks) training centers, as shown in the table below. Overall, he spent nearly a full year training for the war.</p><ul><lh>Training Schedule</lh><li><b>College Training (6 wks)</b><br>Duquense University, PA</br></li><li><b>Pre-Flight School (9 wks)</b><br>Maxwell Field, AL</br></li><li><b>Primary School (9 wks)</b><br>Lafayette Regional Airport, LA</li><li><b>Basic School (9 wks)</b><br>Walnut Ridge Army Airfield, AR</br></li><li><b>Advanced School (9 wks)</b><br>Blytheville Army Airfield, AR</br></li><li><b>Specialized School (9 wks)</b><br>Lockbourne Army Airfield, OH</br></li></ul>',
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
            section: 1,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Journey to England',
            date: '',
            image: 'images/dominion-monarch4.jpg',
            imageId: 'dominion-monarch',
            caption: 'Alexander Turnbull Library',
            description: '<p><span class="dropCap">D</span>eparts from NYC Harbor aboard the Dominion Monarch, pictured above, a cruise liner converted to troopship during the war. Arrives in Portsmouth, England after more than a week at sea. Travels by train to the town of Stone, Staffordshire, England, where the center is setup in nearby Yarnfield. Entries in the Green Journal were written during this journey.</p>',
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
            id: 'mendlesham-airfield',
            section: 1,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham Airfield',
            date: '',
            image: 'images/Mendelshamairfield-18jan47.png',
            imageId: 'missions',
            caption: 'Wikipedia',
            description: '<p><span class="dropCap">8</span>th Airforce, 34th bomb group, 7th squadron. Other groups were also present here before and during. Spends about four months total here. Plays basketball, goes to London, sees a play, attends church, receives and sends letters (?), ride a bike, and flies missions. This is where entries in the A Line A Day journal were written. The journal was a gift from Mary Sheesley, and on the front leaf has a quote from her, "".</p>',
            location: {
                center: mendlesham,
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
            section: 1,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: '35 Missions',
            date: '',
            image: 'images/missions-card-small.png',
            imageId: 'idCardFront',
            caption: '',
            description: '<p><span class="dropCap">F</span>lies 35 missions over Germany. Some short, some long trips. Some repeated targets. Some taregets not hit. An accident. A recall.</p><p>The record on this index card matches dates in the journal and also aligns with official individual flight records that were issued to Lt. Sheesley by the War Department.</p>',
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
            id: 'break-2',
            section: '',
            alignment: 'full',
            hidden: false,
            daterank: '',
            title: 'Part 2',
            date: 'The Green Journal',
            image: '',
            imageId: '',
            caption: '',
            description: '<p><b>17 entries</b><br>10/21/1944 – 11/6/1944</br></p>',
            location: {
                center: [-39.43332, 44.67845],
                zoom: 3,
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
                id: 'the-green-journal',
                section: 2,
                alignment: 'left',
                hidden: false,
                daterank: '',
                title: 'Front Cover',
                date: '',
                image: 'images/dominion-monarch/front-cover-outside-trim.png',
                imageId: '',
                caption: '',
                description: '<p><span class="dropCap">T</span>his is a hardcover, two-ring journal measuring XX by XX. It includes XX entries that cover Lt. Sheesley\'s journey to England, from Camp Kilmer, NY, to New York Docks, Plymouth Bay, Plymouth Docks, Stone and Yarnfield. The entries are dated between XX and XX. The journal also includes pages of tecnical training notes and one sketch of a B-17. </p>',
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
                id: 'the-green-journal-b17-sketch',
                section: 2,
                alignment: 'left',
                hidden: false,
                daterank: '',
                title: 'B-17 Sketch',
                date: '',
                image: 'images/dominion-monarch/drawing-b17-trim.png',
                imageId: '',
                caption: '',
                description: '<p><span class="dropCap">U</span>ndated sketch of a B-17 bomber drawn on an unlined page in the journal that serves as a section divider.',
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
                center: newyork,
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
                center: sea1,
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
                center: sea2,
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
                center: sea3,
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
                center: sea4,
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
                center: sea5,
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
                center: sea6,
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
                center: sea7,
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
                center: sea8,
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
                center: sea9,
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
                center: sea10,
                zoom: 3,
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
                center: sea11,
                zoom: 5,
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
                center: plymouthBay,
                zoom: 9,
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
                center: plymouthDock,
                zoom: 12,
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
                center: yarnfield,
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
                center: yarnfield,
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
                center: yarnfield,
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
                center: yarnfield,
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
            id: 'break-3',
            section: '',
            alignment: 'full',
            hidden: false,
            daterank: '',
            title: 'Part 3',
            date: 'A Line A Day',
            image: '',
            imageId: '',
            caption: '',
            description: '<p><b>78 entries</b><br>12/5/1944 – 5/14/1945</br></p>',
            location: {
                center: [3.11114, 51.00934],
                zoom: 4,
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
            id: 'a-line-a-day',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Front Cover',
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
            id: 'a-line-a-day-front-leaf',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Dedication Page',
            date: '',
            image: 'images/journal/front-leaf-right-trim.png',
            imageId: '',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p>To Byron<br>from Mary</br></p><p>Remember dear each day you write brings you nearer the day when we\'ll be together again.</p><p>Overseas Christmas October 15, 1944</p>',
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
            date: 'Tuesday, 12/5/1944',
            image: 'images/journal/19441205-1-trim.png',
            imageId: 'dec05a',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">I</span> was awakened at 0400 expecting to ride as copilot for my 1st mission. At the briefing block I was surprised, alarmed and frightened when I learned that we would go as a crew and I didn\'t know the score at all and had never flown above 20,000 ft. In a daze we went to our ship and somehow got ready and took off. After what seemed ages the formation got together in a pre-dawn assembly and away we went for BERLIN.</p><p>On the climb we stayed right in. Then we leveled off for the run in and it happened. That which is most disastrous happened—we fell behind. Opening her wide open we oh! so slowly crept back up. Come the IP and it happened again. I took over the ship again—the bombays were open—target just ahead—we had to get back in! If fighters hit we would have been sunk.</p><p>All our hearts were pounding—nerves at the break point-sweat rolling at 40° below. I quickly turned on the emergency turbo and the engines were giving all they had—they shook and shuddered and whined as if to say "we can\'t take this long." We were pulling 54" and I wondered how long those engines would hold. We just didn\'t seem to gain a bit, but kept falling back & dropping.</p><p>Finally we were down with the low element when we stopped losing. I uttered a little prayer and as a plant grows [...]</p>',
            location: {
                center: berlin,
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
            date: 'Tuesday, 12/5/1944',
            image: 'images/journal/19441205-2-trim.png',
            imageId: 'dec05b',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p>[...] the airspeed moved to 140, then 141, then 142; it seemed to stop and my heart seemed to stop then it moved to 145 and we began to move up again. Carefully I lifted her up as we gained on our lead. Just as we dropped the bombs we got back in place, but low.</p><p>That was it—the quick turn to escape flack and we were homeward bound. The 10 minutes from the IP to the target were the longest and most tense, exhausting ones of my life. At the Rally point I looked down just in time to see a lone B-17 spin down through the clouds below.</p><p>When we landed the squadron C.O. and all were there to meet us. Then we realized that, as I suspected, we had been sent by mistake—a green crew. They didn\'t think we would make it—we weren\'t even operational yet. "We had it!" Brydge was so frightened he made only 3 entries in his log: "(1) took off (2) Bombs away (3) landed." The hot cocoa sure tasted good. Next day we went on pass and sure needed it!</p>',
            location: {
                center: berlin,
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
            date: 'Saturday, 12/30/1944',
            image: 'images/journal/19441230-trim.png',
            imageId: 'dec30',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">B</span>riefing this morning was at 04:00. Our target for today was a marshalling yard at <s>Castle</s> Kassel, Germany. We took off and hit a low ceiling and climbed in solid overcast up to 11,000 ft. Our position was 4–3 in High squadron. Overcast 10/10 over target—results not observed. Flack was dense and we got our first hits. Our gas tank in right wing had to be replaced upon return. Oxygen system was leaking and was empty as we reached 10,000\' on descending—sweating it out. Visibility very poor upon return—we made 6 passes at field before getting in. Went to bed at 20:00 hours.</p>',
            location: {
                center: kassel,
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
        },
        {
            id: '6-misburg',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '6',
            title: 'Misburg',
            date: 'Sunday, 12/31/1944',
            image: 'images/journal/19441231-trim.png',
            imageId: 'dec31',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">I</span> was awakened at 02:30 for 04:00 briefing, went back asleep and luckily awoke again at 03:30, rushed around & made it. The target for today was an oil refinery at Misberg near Hanover. It was snowing at take off and I flew 30 min. A.I. to a pre dawn assembly. Weather was fine—visual over target and we had a good hit. One ship in [at] high squadron was hit and caught fire and one blew up at R.P. of another group. Furtado\'s guns went off badly damaging a ship. We will probably lose him from crew. We were given a new ship tonight —haven\'t seen it yet. I went to church with Brydge and I stayed for communion. Mission today was #6 and we flew in position 2–1.</p>',
            location: {
                center: misburg,
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'misburgMarker',
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
                layer: 'routeMisburg',
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
                    layer: 'routeMisburg',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450101',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Monday, 1/1/1945',
            image: 'images/journal/19450101-trim.png',
            imageId: 'jan01',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">W</span>e sat on the ground today. Furtado was taken from the crew and put in the motor pool. I sure feel bad about it. Turkey dinner today.</p>',
            location: {
                center: mendlesham,
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19450102',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Tuesday, 1/2/1945',
            image: 'images/journal/19450102-trim.png',
            imageId: 'jan02',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">G</span>rounded again. Recommended Stevens and Bulis for Tech Sarg. Heard that Hoffman is missing from yesterday. He never met the formation—no one knows a thing about him—swell guy.</p>',
            location: {
                center: mendlesham,
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19450103',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '7',
            title: 'Pforzheim',
            date: 'Wednesday, 1/3/1945',
            image: 'images/journal/19450103-trim.png',
            imageId: 'jan03',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">B</span>riefing was early as usual and today it was Prozeheim [Pforzheim]. It was a long haul, but we didn\'t see a speck of flack. We flew our new plane today and 1 1/2 hours before target the oxygen back of the bombay began to leak out and all except the ball G. had to ride the rest of the way on the bottle. The plane is fine flying though. We had a new ball gunner.</p>',
            location: {
                center: pforzheim,
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'pforzheimMarker',
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
                layer: 'routePforzheim',
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
                    layer: 'routePforzheim',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450104',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Thursday, 1/4/1945',
            image: 'images/journal/19450104-trim.png',
            imageId: 'jan04',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">S</span>tood down for training, I flew co-pilot for Lt. Col. Lee Bally taking a McTaggart crew to pick up a new ship. Got a package from Mary. The picture was in it (her picture).</p>',
            location: {
                center: mendlesham,
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19450105',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Friday, 1/5/1945',
            image: 'images/journal/19450105-trim.png',
            imageId: 'jan05',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">S</span>tood down for training and flew practice mission. We flew 3–1 position. It sure was a mess. I took my laundry to "Mom at Magpie. A new crew overshot a landing on runway 28 and wrecked a new B-17. That makes 2 of them across that road in a month.</p>',
            location: {
                center: mendlesham,
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19450106',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Saturday, 1/6/1945',
            image: 'images/journal/19450106-trim.png',
            imageId: 'jan06',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">U</span>p for a mission, but it was scrubbed before we started engines. Back to sack we went until noon—missed ground school.</p>',
            location: {
                center: mendlesham,
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19450107',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '8',
            title: 'Bielefeld',
            date: 'Sunday, 1/7/1945',
            image: 'images/journal/19450107-trim.png',
            imageId: 'jan07',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">B</span>riefing at 0500. We took 6x1000 lb. bombs to Bielefeld to get a bridge but cloud cover made us hit rail station in town instead. We flew 3–2 on Mowers wing. It was #2 in our new plane and everything went fine. We had a ball gunner who was new & he was a little nervous. Church at 1800.</p>',
            location: {
                center: bielefeld,
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'bielefeldMarker',
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
                    layer: 'routeBielefeld',
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
                    layer: 'routeBielefeld',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450108',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Monday, 1/8/1945',
            image: 'images/journal/19450108-trim.png',
            imageId: 'jan08',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">W</span>ent to bed alerted, but it was scrubbed at 0200. Cleaned up our stove and house cleaned in general. Made curtains for my boxes and overhauled my razor at bomb sight maintenance vault. It snowed today and it stayed with us. It sure is cold.</p>',
            location: {
                center: mendlesham,
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19450109',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Tuesday, 1/9/1945',
            image: 'images/journal/19450109-trim.png',
            imageId: 'jan09',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">S</span>tood down for training. Had Squadron meeting. There was a two inch snow cover all over this morning. Reminded me of winter at home. Brydge biked to Magpie for bike spokes & a wheel. Roads were icy and Brydge fell 5 times—NICELY—me once.</p>',
            location: {
                center: mendlesham,
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19450110',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '9',
            title: 'Cologne',
            date: 'Wednesday, 1/10/1945',
            image: 'images/journal/19450110-trim.png',
            imageId: 'jan10',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">T</span>arget: a bridge at Cologne. We dropped 6–1000 pounders. It was rough getting off because of snow packed taxi strips & runways. One of our planes ran off runway halfway down but luckily no damage was done. Our squadron left with but six ships, but more caught up later. Saw a huge flash of flame about 5 mile south of our field as we taxied. A plane at Debich exploded. Our bomb doors had to cranked open & we dropped 20 sec. late. Those old men & boys sure are sharp with the flack. Those puffs walked right up to us and we picked up plenty of holes in our new plane. Today\'s was #9. Went to S.M.C.L. at the chapel. Ceiling was at 400 ft. when we came back</p>',
            location: {
                center: cologne,
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'cologneMarker',
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
                    layer: 'routeCologne',
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
                    layer: 'routeCologne',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450111',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Thursday, 1/11/1945',
            image: 'images/journal/19450111-trim.png',
            imageId: 'jan11',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">I</span> spent the morning reading by the fireplace in the Officers club & got a haircut. It snowed more. Pete & I got bomb rings for fuel. The water is shut off again.</p>',
            location: {
                center: mendlesham,
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19450112',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Friday, 1/12/1945',
            image: 'images/journal/19450112-trim.png',
            imageId: 'jan12',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">I</span>t rained last night making slush of the snow & water was 2" deep in every low spot so I had to ride my bike to keep my feet dry. It was a miserable day. Finished Weatherheads book "How can I find God." Brushed up on radio oper. We, the "7th Hawks" beat the 391st in basketball tonight 32–25. I made 4 pts</p>',
            location: {
                center: mendlesham,
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19450113',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Saturday, 1/13/1945',
            image: 'images/journal/19450113-trim.png',
            imageId: 'jan13',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">A</span> mission went out, but we were a spare. My laundry came back. I was given a new ball gunner. His name is Hopkins. Went to devotions at chapel at 11:45. Our pass was set back to the 18th.</p>',
            location: {
                center: mendlesham,
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19450114',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '10',
            title: 'Derben',
            date: 'Sunday, 1/14/1945',
            image: 'images/journal/19450114-trim.png',
            imageId: 'jan14',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">T</span>arget today was an oil storage area near Derben. Formed at 6,000\' & went up across the North Sea. Just inside coast at Cookshaven [Cuxhaven] flack hit two ships, direct in their wing. Carter was first—it hit his right wing and he hurtled down through the formation into a tight spiral. Almost immediately I looked to the right, saw Raver\'s left wing tip disappear and he did a wing over and Red saw him spin. No shutes seen. Pretty good gunners down there. Remainder of trip uneventful. We missed the target. We picked up a couple holes in wing & waist. Bandits were around, but never got up to us. I was a scared boy—thought I had it. Had another new ball gunner today. Before we took off he was going to fly 2 tours here, but when we landed he decided to quit right now. Went to chapel after chow. Bed time. We flew 4–3.</p>',
            location: {
                center: derben,
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'derbenMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19450115',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '11',
            title: 'Augsburg',
            date: 'Monday, 1/15/1945',
            image: 'images/journal/19450115-trim.png',
            imageId: 'jan15',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">W</span>e started out for an air field at Letchfeild [Lechfeld] but a 10/10 cloud cover sent us PFF to a marshaling yard at Augsburg. We started out in 3–2 but had to move up to 3–1 when Peterson lost a turbo about 20 min. before the IP. Flack was way off the left wing. Results of bombing unobserved. It was a long 8 hour haul. We\'re on the loading list for tomorrow.</p>',
            location: {
                center: augsburg,
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'augsburgMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19450116',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '12',
            title: 'Bitterfeld',
            date: 'Tuesday, 1/16/1945',
            image: 'images/journal/19450116-trim.png',
            imageId: 'jan16',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">T</span>hree missions in as many days. Today was our cluster mission—#12. We flew 4–2 in the high at the start. Our squad. lead aborted so we were moved up to 2–2 where we flew until we got back to France & then because Vick was such a sad rocker-trombone lead I went back down to 4–2. At briefing they had two plans & didn\'t know which we would take. At the plane we were told by radio that "Plan A"—a fighter bait tour of Germany was it. The target was a jet engine factory near Cottbus. Our course looked thus [small inline drawing of a circular route, with arrows and a point marked] & was an 8 hr. haul but weather closed our field so we were diverted to Marston Moor making it 9:10 flight. A ship in the lead squad. caught fire before we left England and the crew baild out. The ball gunner chuted ok, but was found dead near the remains of the plane. Target was covered so PFF was used. Snow covered all the route—pretty. We got flack at battle line, accurate. I watched one flack shell come up from the ground & explode. Gas was plenty low when we got back to earth. Good food at M. M. & went to bed early.</p>',
            location: {
                center: bitterfeld,
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'bitterfeldMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19450117',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Marston Moor - Mendlesham',
            date: 'Wednesday, 1/17/1945',
            image: 'images/journal/19450117-trim.png',
            imageId: 'jan17',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">T</span>hree missions in as many days. Today was our cluster mission—#12. We flew 4–2 in the high at the start. Our squad. lead aborted so we were moved up to 2–2 where we flew until we got back to France & then because Vick was such a sad rocker-trombone lead I went back down to 4–2. At briefing they had two plans & didn\'t know which we would take. At the plane we were told by radio that "Plan A"—a fighter bait tour of Germany was it. The target was a jet engine factory near Cottbus. Our course looked thus [small inline drawing of a circular route, with arrows and a point marked] & was an 8 hr. haul but weather closed our field so we were diverted to Marston Moor making it 9:10 flight. A ship in the lead squad. caught fire before we left England and the crew baild out. The ball gunner chuted ok, but was found dead near the remains of the plane. Target was covered so PFF was used. Snow covered all the route—pretty. We got flack at battle line, accurate. I watched one flack shell come up from the ground & explode. Gas was plenty low when we got back to earth. Good food at M. M. & went to bed early.</p>',
            location: {
                center: mendlesham,
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamMarker',
            onChapterEnter: [
                {
                    layer: 'marstonmoor',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'marstonmoor',
                    opacity: 0,
                    duration: 300
                }
            ]
        }
    ]
};
