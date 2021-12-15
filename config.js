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
            description: '<p><span class="dropCap">L</span>t. Byron E. Sheesley kept two short journals while serving in the United States Army Air Forces (USAAF) during World War Ⅱ.</p><p>One journal documents his nearly two-week-long journey from Camp Kilmer, New Jersey to a USAAF replacement center near Stone, England by troopship and train in late October and early November, 1944.</p><p>The other summarizes many of the 35 combat missions he flew over enemy targets in Germany as pilot of a B-17 heavy bomber between December 1944 and March 1945. It also describes aspects of his daily life on base and on pass. Sheesley was stationed in Mendlesham, England with the 7th Squadron of the 34th Bomb Group in the "Mighty" 8th Air Force.</p><p>The journal entries are often concise and matter-of-fact. They include details about people and places, bomber formations and targets, weather conditions and flack, as well as time spent playing games, riding bikes, doing laundry, eating meals, attending chapel, and reading books. Routines developed, like going to London on pass four times. Flying missions, too, became somewhat job-like over time. After returning from London on one occasion, Sheesley says:</p><blockquote>Right back to work. Up at 0330 to bomb the Germans...</blockquote>Some entries, however, are quite powerful and moving. For example, Lt. Sheesley describes an intense <a href="#1-berlin-p1">first mission</a> to Berlin where his crew was sent by mistake and barely made it home alive:<blockquote>All our hearts were pounding—nerves at the break point—sweat rolling at 40° below...They didn\'t think we would make it...</blockquote>In another, after his <a href="#hanover">last mission</a>, he is joyful, relieved, and determined to reunite with his fiancé, Mary E. Clark: <blockquote>... Happy Day! No more flack, fighters, gas, oxygen or bomb runs to sweat out. Mary, here I come.</blockquote><p>This map connects entries with the places they describe. <b>Scroll down to read more.</b></p>',
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
            aircraftHeading: 'aircraft heading',
            aircraftTable: 'aircraft table',
            imageAircraft: 'images/aircraft/test.png',
            imageAircraftId: 'test',
            imageAircraftLink: 'http://www.axismaps.com',
            missionDetails: 'mission details',
            location: {
                center: berlin,
                zoom: 8,
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
                zoom: 8,
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
            id: '19441212',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '2',
            title: 'Darmstadt',
            date: 'Tuesday, 12/12/1944',
            image: '',
            imageId: '',
            caption: '',
            description: '<i style="color: #999;">Note: No entry exists for this date.</i>',
            location: {
                center: darmstadt,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'darmstadtMarker',
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
                    layer: 'routeDarmstadt',
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
                    layer: 'routeDarmstadt',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19441215',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '3',
            title: 'Hanover',
            date: 'Friday, 12/15/1944',
            image: '',
            imageId: '',
            caption: '',
            description: '<i style="color: #999;">Note: No entry exists for this date.</i>',
            location: {
                center: hanover,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hanoverMarker',
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
                    layer: 'routeHanover',
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
                    layer: 'routeHanover',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19441227',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '4',
            title: 'Andernach',
            date: 'Wednesday, 12/27/1944',
            image: '',
            imageId: '',
            caption: '',
            description: '<i style="color: #999;">Note: No entry exists for this date.</i>',
            location: {
                center: andernach,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'andernachMarker',
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
                    layer: 'routeAndernach',
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
                    layer: 'routeAndernach',
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
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">B</span>riefing this morning was at 04:00. Our target for today was a marshalling yard at <strike>Castle</strike> Kassel, Germany. We took off and hit a low ceiling and climbed in solid overcast up to 11,000 ft. Our position was 4–3 in High squadron. Overcast 10/10 over target—results not observed. Flack was dense and we got our first hits. Our gas tank in right wing had to be replaced upon return. Oxygen system was leaking and was empty as we reached 10,000\' on descending—sweating it out. Visibility very poor upon return—we made 6 passes at field before getting in. Went to bed at 20:00 hours.</p>',
            location: {
                center: kassel,
                zoom: 8,
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
                zoom: 9,
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
                zoom: 8,
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
                zoom: 8,
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
                zoom: 8,
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
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'derbenMarker',
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
                    layer: 'routeDerben',
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
                    layer: 'routeDerben',
                    opacity: 0,
                    duration: 300
                }
            ]
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
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'augsburgMarker',
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
                    layer: 'routeAugsburg',
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
                    layer: 'routeAugsburg',
                    opacity: 0,
                    duration: 300
                }
            ]
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
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'bitterfeldMarker',
            onChapterEnter: [
                {
                    layer: 'toMarstonMoor',
                    opacity: 1,
                    duration: 300
                },
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
                    layer: 'routeBitterfeld',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'toMarstonMoor',
                    opacity: 0,
                    duration: 300
                },
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
                    layer: 'routeBitterfeld',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450117',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Wednesday, 1/17/1945',
            image: 'images/journal/19450117-trim.png',
            imageId: 'jan17',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">D</span>idn\'t sleep too well. Breakfast at 0830 & were told to take off soon as possible for home. The General Partridge was to be here to inspect today. We were ready to go at 10:00, but our new ball gunner was missing. Col. LaBally told us to take off without him if he didn\'t come by 1130 so we did. I guess he has had enough of war and decided on a rest. We got here at 1230. Someone (probably Hendricks) gave our shack a good buzzing in a P51. We got Furtado back on the crew again. Went to the chapel to S.M.C.L.</p>',
            location: {
                center: mendlesham,
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamMarker',
            onChapterEnter: [
                {
                    layer: 'toMarstonMoor',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'fromMarstonMoor',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'toMarstonMoor',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'fromMarstonMoor',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450118',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'London',
            date: 'Thursday, 1/18/1945',
            image: 'images/journal/19450118-trim.png',
            imageId: 'jan18',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">G</span>ot up about 1000, got ready for pass and took off. I got a ride to Ipswich and got there just in time to catch London train. Found Phillip & we got a room at the Goring hotel.</p>',
            location: {
                center: goring,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'londonMarker',
            onChapterEnter: [
                {
                    layer: 'pass1-away',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'pass1-away',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450119',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Richmond',
            date: 'Friday, 1/19/1945',
            image: 'images/journal/19450119-trim.png',
            imageId: 'jan19',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">B</span>ought blouse and had it cut into a little jacket. Pee Wee and I finished our London tour. I went with him as far as Richmond where we watched the ice skating. I stayed at the Red Cross Rainbow Club over night.</p>',
            location: {
                center: richmond,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'richmondMarker',
            onChapterEnter: [
                {
                    layer: 'pass1-away',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'pass1-away',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450120',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Saturday, 1/20/1945',
            image: 'images/journal/19450120-trim.png',
            imageId: 'jan20',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">C</span>ame back to the base. End of pass. Bought Mom & Mary a couple presents in Ipswich.</p>',
            location: {
                center: mendlesham,
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamMarker',
            onChapterEnter: [
                {
                    layer: 'pass1-home',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'pass1-home',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450121',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Sunday, 1/21/1945',
            image: 'images/journal/19450121-trim.png',
            imageId: 'jan21',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">I</span>flew as command pilot with Bloomquist on a practice mission. Went to the chapel for the evening service.</p>',
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
            id: '19450122',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Monday, 1/22/1945',
            image: 'images/journal/19450122-trim.png',
            imageId: 'jan22',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">F</span>ixed up my bike again & took laundry to Mrs. Easter by the Magpie. Played basketball. We beat the 4th Sqdn.</p>',
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
            id: '19450123',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Tuesday, 1/23/1945',
            image: 'images/journal/19450123-trim.png',
            imageId: 'jan23',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">S</span>wung the compass in our ship this morning. Spent the afternoon trying to smooth out childish squabbling between King and the rest of the boys.</p>',
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
            id: '19450124',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Wednesday, 1/24/1945',
            image: 'images/journal/19450124-trim.png',
            imageId: 'jan24',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">M</span>ails packages to Mom & Mary. Rode to Mendlesham with Scimeca and got a loaf of bread. Visited the old fashioned shoe repair shop. S.M.C.L. at chapel.</p>',
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
            id: '19450127',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Saturday, 1/27/1945',
            image: 'images/journal/19450127-trim.png',
            imageId: 'jan27',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">W</span>ent down to Mrs. Easters to get my laundry. She wanted me down for tea, but I played ball so I didn\'t go. We played the 4th Eng. and won.</p>',
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
            id: '19450128',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '13',
            title: 'Duisburg',
            date: 'Sunday, 1/28/1945',
            image: 'images/journal/19450128-trim.png',
            imageId: 'jan28',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">W</span>e always fly on Sunday. Between snow flurries 13 planes of us got off—just made it on short runway 100°. Target was marshaling yard Hohenbudburg Duisburg—just over the battle line. We missed it. Flack was too accurate—tracked us. A piece broke the outer pane of my windshield. I don\'t see how they miss us. Bulis hurt his arm in the turret. We had a camera man along.</p>',
            location: {
                center: duisburg,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'duisburgMarker',
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
                    layer: 'routeDuisburg',
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
                    layer: 'routeDuisburg',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450131',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Wednesday, 1/31/1945',
            image: 'images/journal/19450131-trim.png',
            imageId: 'jan31',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">W</span>e were going to Berlin today, but weather kept us on the ground. I just got to the ship when it was scrubbed. I went back to bed and got up at noon. Today was payday. Went to S.M.C.L. Had a sandwich & glass of ginger ale at the club. Pay Day</p>',
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
            id: '19450201',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Thursday, 2/1/1945',
            image: 'images/journal/19450201-trim.png',
            imageId: 'feb01',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">S</span>tood down for training. I flew as command pilot with Hicks in a mission over England to determine the effectiveness & a way to beat the German radar guns captured in the Ardennes.</p>',
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
            id: '19450202',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Friday, 2/2/1945',
            image: 'images/journal/19450202-trim.png',
            imageId: 'feb02',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">B</span>riefed for a trip to Berlin, but weather over the island kept us on the ground so back to bed until noon I went. The whole 8th A.F. was going to Berlin today.</p>',
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
            id: '19450203',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '14',
            title: 'Berlin',
            date: 'Saturday, 2/3/1945',
            image: 'images/journal/19450203-trim.png',
            imageId: 'feb03',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">A</span> big one to Berlin. We carried 5x1,000. It was a long haul. I never saw so many planes in my life. Every where there were planes. The bomber stream stretched from the channel to Berlin. Flack wasn\'t bad. We were in the air 7 1/2 hours. I cracked up my plane. I locked the controls while rolling down the runway and Red hit the brakes. It went up on the nose, bent the inboard props and the chin turret. Then it fell hard on the tail, collapsing the tail wheel & breaking the fuselage. I don\'t know what will happen to me, but something should. Sure was a dumb trick. A perfect airplane ruined for no reason. Tired</p>',
            location: {
                center: berlin,
                zoom: 8,
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
            id: '19450204',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Sunday, 2/4/1945',
            image: 'images/journal/19450204-trim.png',
            imageId: 'feb04',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">W</span>ent to church. Each sermon makes my convictions grow stronger in favor of holiness. "You have to sin" theology is sooo thin & hopeless—so compromising—so contradictory—so false—so unfruitful. Flew the blind landing range. Wrote up a report on the wreck.</p>',
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
            id: '19450209',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '15',
            title: 'Dülmen',
            date: 'Friday, 2/9/1945',
            image: 'images/journal/19450209-trim.png',
            imageId: 'feb09',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">M</span>ission to Dulmen. It was our secondary target. Primary was visual only. We dropped them thru clouds_flack was inaccurate.</p>',
            location: {
                center: dulmen,
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'dulmenMarker',
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
                    layer: 'routeDulmen',
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
                    layer: 'routeDulmen',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450212',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Monday, 2/12/1945',
            image: 'images/journal/19450212-trim.png',
            imageId: 'feb12',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">W</span>e were ground spare today, but mission was scrubbed after briefing.</p>',
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
            id: '19450213',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Tuesday, 2/13/1945',
            image: 'images/journal/19450213-trim.png',
            imageId: 'feb13',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">U</span>p for briefing, but she was scrubbed just as I got to the ship. Read J. Wesley\'s sermon on Christian Perfection. Mailed package to Mary.</p>',
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
            id: '19450214',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Wednesday, 2/14/1945',
            image: 'images/journal/19450214-trim.png',
            imageId: 'feb14',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">F</span>lew a camera gunnery mission, but camera\'s would not work & fighters didn\'t come so we came home.</p>',
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
            id: '19450215',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '16',
            title: 'Cottbus',
            date: 'Thursday, 2/15/1945',
            image: 'images/journal/19450215-trim.png',
            imageId: 'feb15',
            caption: '',
            description: '<p></p>',
            location: {
                center: cottbus,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'cottbusMarker',
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
                    layer: 'routeCottbus',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'toBrussels',
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
                    layer: 'routeCottbus',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'toBrussels',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450221',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Wednesday, 2/21/1945',
            image: 'images/journal/19450221-trim.png',
            imageId: 'feb21',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">G</span>ot back from Belgium by way of Canadian transport. Landed at &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; & got back here by truck.</p><i style="color: #999;">Note: Original entry is misdated.</i>',
            location: {
                center: mendlesham,
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamMarker',
            onChapterEnter: [
                {
                    layer: 'toBrussels',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'fromBrussels',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'toBrussels',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'fromBrussels',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450222',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Thursday, 2/22/1945',
            image: 'images/journal/19450222-trim.png',
            imageId: 'feb22',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">S</span>low timed T-tare.<br>&nbsp;</br></p><i style="color: #999;">Note: Original entry is misdated.</i>',
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
            id: '19450223',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Friday, 2/23/1945',
            image: 'images/journal/19450223-trim.png',
            imageId: 'feb23',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">S</span>low timed C-charlie. Weather was bad so we only put 4 hours on it.</p><i style="color: #999;">Note: Original entry is misdated.</i>',
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
            id: '19450224',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '17',
            title: 'Bremen',
            date: 'Saturday, 2/24/1945',
            image: 'images/journal/19450224-trim.png',
            imageId: 'feb24',
            caption: '',
            description: '<i style="color: #999;">Note: Original entry is misdated.</i>',
            location: {
                center: bremen,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'bremenMarker',
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
                    layer: 'routeBremen',
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
                    layer: 'routeBremen',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450225',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '18',
            title: 'Ludwigsfelde',
            date: 'Sunday, 2/25/1945',
            image: 'images/journal/19450225-trim.png',
            imageId: 'feb25',
            caption: '',
            description: '<i style="color: #999;">Note: Original entry is misdated.</i>',
            location: {
                center: ludwigsfelde,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'ludwigsfeldeMarker',
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
                    layer: 'routeLudwigsfelde',
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
                    layer: 'routeLudwigsfelde',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450226',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '19',
            title: 'Berlin',
            date: 'Monday, 2/26/1945',
            image: 'images/journal/19450226-trim.png',
            imageId: 'feb26',
            caption: '',
            description: '<i style="color: #999;">Note: Original entry is misdated.</i>',
            location: {
                center: berlin,
                zoom: 8,
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
            id: '19450227',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'London',
            date: 'Tuesday, 2/27/1945',
            image: 'images/journal/19450227-trim.png',
            imageId: 'feb27',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">H</span>itch hiked to Ipswitch [Ipswich] with Red & caught a train to London. Saw "Hamlet". Stayed at Princess Gardens.</p><i style="color: #999;">Note: Original entry is misdated.</i>',
            location: {
                center: goring,
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'londonMarker',
            onChapterEnter: [
                {
                    layer: 'pass2-away',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'pass2-away',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450228',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'London',
            date: 'Wednesday, 2/28/1945',
            image: 'images/journal/19450228-trim.png',
            imageId: 'feb28',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">S</span>pent the day wandering around London and getting in touch with Phillip. Had some ice cream at ¢.20 (1 shilling) per dip. Pee Wee & I went to see "Midsummer Nights Dream. Stayed overnight at "Boom Gardens".</p><i style="color: #999;">Note: Original entry is misdated.</i>',
            location: {
                center: goring,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'londonMarker',
            onChapterEnter: [
                {
                    layer: 'pass2-away',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'pass2-away',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450301',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Thursday, 3/1/1945',
            image: 'images/journal/19450301-trim.png',
            imageId: 'mar01',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">J</span>ust got back from pass.<br>&nbsp;</br></p><i style="color: #999;">Note: Original entry is misdated.</i>',
            location: {
                center: mendlesham,
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamMarker',
            onChapterEnter: [
                {
                    layer: 'pass2-home',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'pass2-home',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450302',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '20',
            title: 'Dresden',
            date: 'Friday, 3/2/1945',
            image: 'images/journal/19450302-trim.png',
            imageId: 'mar02',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">B</span>riefed at 0330 for a marshaling yard at Dresden. At the I.P. we were met by enemy fighters. We were in the 4–1 & behind because we had just been scattered by prop wash. Why we weren\'t hit I don\'t know but we poured on the coal & got in formation. McTaggart was behind us & was hit but got back on two engines. A waist gunner was killed in the lead ship. That formation really tightened up, but quick so the fighters hit the 385th behind us. The ball gunner in the ship in front of us shot out the glass in our top turret. We were very fortunate</p>',
            location: {
                center: dresden,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'dresdenMarker',
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
                    layer: 'routeDresden',
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
                    layer: 'routeDresden',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450303',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '21',
            title: 'Dedenhausen',
            date: 'Saturday, 3/3/1945',
            image: 'images/journal/19450303-trim.png',
            imageId: 'mar03',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">U</span>p at 0230 for another mission. We flew the 2–2 spot. Our target was a fuel dump near Hannover. Bombardiers couldn\'t pick up the target in time so we missed. No flak to speak of. German fighters were over England from 11:00p.m. to 0200 a.m. Bombs were dropped on Ipswich and Great Ashfield. One plane straffed [strafed] our base, but no damage was done.</p>',
            location: {
                center: dedenhausen,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'dedenhausenMarker',
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
                    layer: 'routeDedenhausen',
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
                    layer: 'routeDedenhausen',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450304',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '22',
            title: 'Recall',
            date: 'Sunday, 3/4/1945',
            image: 'images/journal/19450304-trim.png',
            imageId: 'mar04',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">F</span>or the third day in succession we arose at 0230 to bomb the enemy. Ship by ship we went to France to form there. Cirrus clouds at formation alt. made things bad. Two ships in the 18th Sqdn collided. Our "G" box was out & we couldn\'t get the buncher so we didn\'t get to the formation until the last moment. We flew the 4–1 position. We had just crossed the battle line, got some accurate flack, but no hits and the wing was recalled without going on to target. We got mission credit though.— Went to the chapel.</p>',
            location: {
                center: recall,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'recallMarker',
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
                    layer: 'routeRecall',
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
                    layer: 'routeRecall',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450305',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Monday, 3/5/1945',
            image: 'images/journal/19450305-trim.png',
            imageId: 'mar05',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">D</span>own for training today.<br>&nbsp;</br></p>',
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
            id: '19450306',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Tuesday, 3/6/1945',
            image: 'images/journal/19450306-trim.png',
            imageId: 'mar06',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">S</span>tand down for training. Had Link trainer. Mailed a couple packages</p>',
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
            id: '19450307',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '23',
            title: 'Datteln',
            date: 'Wednesday, 3/7/1945',
            image: 'images/journal/19450307-trim.png',
            imageId: 'mar07',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">B</span>riefed at 0430 for a bengal plant in Happy Valley! Bengal is supposed to be their substitute for gasoline. We flew 2–3 in the low sqdn. It is doubtful as to hit possibilities. We lost #4 engine just at bombs away and the formation got away from us. I requested little friends and two came up to fly with us. They flew just off our wing tips almost to the coast. They looked wonderful out there. One of them was named "Hurry Home Honey". One pilot talked to us addressing us as "Bottoms Up", the name on our ship.</p>',
            location: {
                center: datteln,
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'dattelnMarker',
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
                    layer: 'routeDatteln',
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
                    layer: 'routeDatteln',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450308',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Thursday, 3/8/1945',
            image: 'images/journal/19450308-trim.png',
            imageId: 'mar08',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">W</span>e were a spare today but Brydge flew with another crew. Had Link trainer and almost had a slow time.</p>',
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
            id: '19450309',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Friday, 3/9/1945',
            image: 'images/journal/19450309-trim.png',
            imageId: 'mar09',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">S</span>tand dow for training. We flew a practice mission.<br>&nbsp;</br></p>',
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
            id: '19450310',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '24',
            title: 'Soest',
            date: 'Saturday, 3/10/1945',
            image: 'images/journal/19450310-trim.png',
            imageId: 'mar10',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">B</span>ombed a marshalling yard PFF at Soest. We lost an engine just after leaving target. It was #4. We came back in formation all right anyway. We flew 4–1. Used Barron for navigation from Davis\' crew. Took 42–100 pounders.</p>',
            location: {
                center: soest,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'soestMarker',
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
                    layer: 'routeSoest',
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
                    layer: 'routeSoest',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450311',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '25',
            title: 'Hamburg',
            date: 'Sunday, 3/11/1945',
            image: 'images/journal/19450311-trim.png',
            imageId: 'mar11',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">W</span>e always fly on Sunday. Today we hit PFF an oil refinery at Hamburg. Cloud cover was 10/10. Black smoke was seen billowing up through the clouds. Flack was inaccurate. We carried 6–1000 pounders.</p>',
            location: {
                center: hamburg,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hamburgMarker',
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
                    layer: 'routeHamburg',
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
                    layer: 'routeHamburg',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450313',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '26',
            title: 'Świnoujście',
            date: 'Tuesday, 3/13/1945',
            image: 'images/journal/19450313-trim.png',
            imageId: 'mar13',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">I</span>t was a long overwater haul today to hit Swinemunde\'s docks. The Russians are only about ten mile away. It was a good mission—P.F.F.  Flack was inaccurate. Black smoke burst up through the clouds where someone hit.</p>',
            location: {
                center: swinoujscie,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'swinoujscieMarker',
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
                    layer: 'routeSwinoujscie',
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
                    layer: 'routeSwinoujscie',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450314',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Ipswich',
            date: 'Wednesday, 3/14/1945',
            image: 'images/journal/19450314-trim.png',
            imageId: 'mar14',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">W</span>ent on pass. Hitch hiked to Ipswitch. Got a ride in a jeep.</p>',
            location: {
                center: ipswich,
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'ipswichMarker',
            onChapterEnter: [
                {
                    layer: 'pass3-away',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'pass3-away',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450315',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Ascot',
            date: 'Thursday, 3/15/1945',
            image: 'images/journal/19450315-trim.png',
            imageId: 'mar15',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">W</span>ent to Ascot to see Phillip. We made a mess of pictures. Slept in his barracks</p>',
            location: {
                center: ascot,
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'ascotMarker',
            onChapterEnter: [
                {
                    layer: 'pass3-away',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'pass3-away',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450316',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Friday, 3/16/1945',
            image: 'images/journal/19450316-trim.png',
            imageId: 'mar16',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">P</span>hillip & I went into London to Princes Gardens Red Cross club. Played ping pong—I got beat 3 of 5. Left for here on 5:06 train</p>',
            location: {
                center: mendlesham,
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamMarker',
            onChapterEnter: [
                {
                    layer: 'pass3-home',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'pass3-home',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450317',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '27',
            title: 'Bitterfeld',
            date: 'Saturday, 3/17/1945',
            image: 'images/journal/19450317-trim.png',
            imageId: 'mar17',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">R</span>ight back to work. Up at 0330 to bomb the Germans. We PFF\'d the town of Bitterfeld. We didn\'t hit a thing I don\'t think. Weather was lousy. Contrails dense and haze and cirrus clouds up to 26,000\'. We spent most of the time in the clouds and our squadron got lost from our group. We got to the target though. Our lead & low got flack damage over battle line so it was just as well for us that we were alone because we missed the flack.</p>',
            location: {
                center: bitterfeld,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'bitterfeldMarker',
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
                    layer: 'routeBitterfeld',
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
                    layer: 'routeBitterfeld',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450318',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '28',
            title: 'Berlin',
            date: 'Sunday, 3/18/1945',
            image: 'images/journal/19450318-trim.png',
            imageId: 'mar18',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">A</span>s usual we make missions on Sunday. Again we go to Berlin. We got into yesterdays weather again, but our leader is quite sure we hit the MPI. Flack was too accurate, but we escaped without any damage.</p>',
            location: {
                center: berlin,
                zoom: 8,
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
            id: '19450319',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '29',
            title: 'Jena',
            date: 'Monday, 3/19/1945',
            image: 'images/journal/19450319-trim.png',
            imageId: 'mar19',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">S</span>tarted for Lutzkendorf. Twenty minutes before target #1 blew some cylinders & prop ran wild—couldn\'t feather it. Engine shook violently, caught fire, shook itself off fuselage.</p>',
            location: {
                center: jena,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'jenaMarker',
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
                    layer: 'routeJena',
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
                    layer: 'routeJena',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450320',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '30',
            title: 'Hamburg',
            date: 'Tuesday, 3/20/1945',
            image: 'images/journal/19450320-trim.png',
            imageId: 'mar20',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">S</span>tand down cancelled at noon. We took off at 12:30 for Hamburg\'s docks. Got back at 1900.</p>',
            location: {
                center: hamburg,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hamburgMarker',
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
                    layer: 'routeHamburg',
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
                    layer: 'routeHamburg',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450321',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '31',
            title: 'Marxen',
            date: 'Wednesday, 3/21/1945',
            image: 'images/journal/19450321-trim.png',
            imageId: 'mar21',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">U</span>p at 0230 for a nice one. Shorty to an airfield near Marx. No flack, no nothin. Only 5:00 hrs. chaulk to chaulk.</p>',
            location: {
                center: marxen,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'marxenMarker',
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
                    layer: 'routeMarxen',
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
                    layer: 'routeMarxen',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450323',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '33',
            title: 'Geisecke',
            date: 'Friday, 3/23/1945',
            image: 'images/journal/19450323-trim.png',
            imageId: 'mar23',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">U</span>Hit a concentration of Nazi officers & men by the little town of &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.</p>',
            location: {
                center: geisecke,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'geiseckeMarker',
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
                    layer: 'routeGeisecke',
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
                    layer: 'routeGeisecke',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450324',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '34',
            title: 'Bad Zwischenahn',
            date: 'Saturday, 3/24/1945',
            image: 'images/journal/19450324-trim.png',
            imageId: 'mar24',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">B</span>ombed an airfield at &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;. No flack—no fighters. Good mission—5:45 was all the longer. <strike>Started out</strike> Flew 3–2 in T-tare.</p>',
            location: {
                center: badZwischenahn,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'badZwischenahnMarker',
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
                    layer: 'routeBadZwischenahn',
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
                    layer: 'routeBadZwischenahn',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450325',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'London',
            date: 'Sunday, 3/25/1945',
            image: 'images/journal/19450325-trim.png',
            imageId: 'mar25',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">R</span>ecalled after we were formed. A ship broke in the air & fell to the field just a short distance from where we sat on the runway. Caught fire—exploded upon hitting. A huge ball of fire rose above the ship as large as a house—floated toward us and went out just above us. We sat there awaiting developments and they developed. A 1000 pounder exploded spreading debree all over the field. Our ship had quite a jar, but wasn\'t hit at all. We cut the engines quick like and got out. Left for London at 4:30 to see about the broadcast.</p>',
            location: {
                center: goring,
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'londonMarker',
            onChapterEnter: [
                {
                    layer: 'pass4-away',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'pass4-away',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450326',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'London',
            date: 'Monday, 3/26/1945',
            image: 'images/journal/19450326-trim.png',
            imageId: 'mar26',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">W</span>ent to ABSIF at Gaumont Pictures to see about the recording. Spent an hour preparing and 3 1/2 minutes making the record. Waste of time. I went to see Phillip & developed some film.</p>',
            location: {
                center: goring,
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'londonMarker',
            onChapterEnter: [
                {
                    layer: 'pass4-away',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'pass4-away',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450327',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Mendlesham',
            date: 'Tuesday, 3/27/1945',
            image: 'images/journal/19450327-trim.png',
            imageId: 'mar27',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">C</span>ame home<br>&nbsp;</br></p>',
            location: {
                center: mendlesham,
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'mendleshamMarker',
            onChapterEnter: [
                {
                    layer: 'pass4-home',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'pass4-home',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450328',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '35',
            title: 'Hanover',
            date: 'Wednesday, 3/28/1945',
            image: 'images/journal/19450328-trim.png',
            imageId: 'mar28',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">F</span>or four months we\'ve looked forward to today. Weather was terrific. We assembled over France & went on from there. I had to climb on instruments from 1 to 22 thousand feet. At 7,000 the pitot tube froze so I had to climb on up without airspeed indication. What a job—flying a B-17 by the seat of ones pants—I was almost screaming when we broke out. We went to Hannover through clouds—P.F.F.— & came half way home through the same. We, the happy warriors left formation at coast out and came home at 210–220. Happy Day! No more flack, fighters, gas, oxygen or bomb runs to sweat out. Mary, here I come.</p>',
            location: {
                center: hanover,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hanoverMarker',
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
                    layer: 'routeHanover',
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
                    layer: 'routeHanover',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450412',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Stone (Yarnfield)',
            date: 'Thursday, 4/12/1945',
            image: 'images/journal/19450412-trim.png',
            imageId: 'apr12',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">L</span>eft the 34th B.G. for Stone with Red, Shaky, Eisenberg, Maj. Young & Maj. Ritchie. We flew over. Pres. Roosevelt died - too bad.</p>',
            location: {
                center: yarnfield,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'yarnfieldMarker',
            onChapterEnter: [
                {
                    layer: 'routeStone',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'routeStone',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450501',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Plymouth Docks',
            date: 'Tuesday, 5/1/1945',
            image: 'images/journal/19450501-trim.png',
            imageId: 'may01',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">L</span>eft Stone 70th B.D. for the boat.<br></br></p>',
            location: {
                center: plymouthDock,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'plymouthMarker',
            onChapterEnter: [
                {
                    layer: 'journey-home',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'journey-home',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450502',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Day 1 at Sea',
            date: 'Wednesday, 5/2/1945',
            image: 'images/journal/19450502-trim.png',
            imageId: 'may02',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">W</span>ent out to sea.<br></br></p>',
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
                    layer: 'journey-home',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'journey-home',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450513',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Boston',
            date: 'Sunday, 5/13/1945',
            image: 'images/journal/19450513-trim.png',
            imageId: 'may13',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">G</span>ot off the boat at Boston & went to camp. Called Mary. Happy Day! Called Mom too.</p>',
            location: {
                center: boston,
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'bostonMarker',
            onChapterEnter: [
                {
                    layer: 'journey-home',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'journey-home',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: '19450514',
            section: 3,
            alignment: 'left',
            hidden: false,
            daterank: '',
            title: 'Camp Atterbury',
            date: 'Monday, 5/14/1945',
            image: 'images/journal/19450514-trim.png',
            imageId: 'may14',
            caption: '',
            description: '<p class="divider"><span class="dividerLine"></span><span class="dropQuote">&ldquo;&rdquo;</span><span class="dividerLine"></span></p><p><span class="dropCap">S</span>tarted for Atterbury by Pullman.<br></br></p>',
            location: {
                center: atterbury,
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'atterburyMarker',
            onChapterEnter: [
                {
                    layer: 'journey-home',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'journey-home',
                    opacity: 0,
                    duration: 300
                }
            ]
        }
    ]
};
