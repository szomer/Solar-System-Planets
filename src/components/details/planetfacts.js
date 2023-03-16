const planetFacts = [
    {
        planet: "mercury",
        facts: [
            { key: 0, title: "Small World", content: "Mercury is the smallest planet in our solar system - only slightly larger than Earth's Moon." },
            { key: 1, title: "Inside Track", content: "Mercury is the planet that orbits the closest to the Sun." },
            { key: 2, title: "Big sun", content: "Standing on Mercury's surface at its closest approach to the Sun, our star would appear more than three times larger than it does on Earth." },
            { key: 3, title: "Rough Surface", content: "Mercury is a rocky planet, also known as a terrestrial planet. Mercury has a solid, cratered surface, much like the Earth's moon." },
            { key: 4, title: "Can't Breathe There", content: "Mercury's thin atmosphere, or exosphere, is composed mostly of oxygen (O2), sodium (Na), hydrogen (H2), helium (He), and potassium (K)." },
            { key: 5, title: "Tough place for life", content: "It is unlikely that life as we know it could survive on Mercury due to solar radiation, and extreme temperatures." },

        ],
        numbers: [
            { key: 0, title: "Planet type", content: "Terrestrial" },
            { key: 1, title: "Distance from sun", content: "58 million km" },
            { key: 2, title: "Surface area", content: "74.8 million km²" },
            { key: 3, title: "Length of year", content: "88 Earth days" },
        ]
    },
    {
        planet: "venus",
        facts: [
            { key: 0, title: "Toxic Twin", content: 'Venus is often called "Earth’s twin" because they’re similar in size and structure, but Venus has extreme surface heat and a dense, toxic atmosphere. If the Sun were as tall as a typical front door, Earth and Venus would each be about the size of a nickel.' },
            { key: 1, title: "Long days, short years", content: 'Venus rotates very slowly on its axis - one day on Venus lasts 243 Earth days. The planet orbits the Sun faster than Earth, however, so one year on Venus takes only about 225 Earth days, making a Venusian day longer than its year!' },
            { key: 2, title: "Diverse Terrain", content: 'Venus has a solid surface covered in dome-like volcanoes, rifts, and mountains, with expansive volcanic plains and vast, ridged plateaus.' },
            { key: 3, title: "Youthful Surface", content: 'The average surface of Venus is less than a billion years old, and possibly as young as 150 million years old - which is relatively young from a geological perspective. This is a major conundrum for scientists - they don’t know exactly what happened that made Venus completely resurface itself.' },
            { key: 4, title: "Runaway Greenhouse", content: 'Venus’ thick atmosphere traps heat creating a runaway greenhouse effect - making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. The greenhouse effect makes Venus roughly 700°F (390°C) hotter than it would be without a greenhouse effect.' },
            { key: 5, title: "Stinky Clouds", content: 'Venus is permanently shrouded in thick, toxic clouds of sulfuric acid that start at an altitude of 28 to 43 miles (45 to 70 kilometers). The clouds smell like rotten eggs!' },
        ],
        numbers: [
            { key: 0, title: "Planet type", content: "Terrestrial" },
            { key: 1, title: "Distance from sun", content: "108.2 million km" },
            { key: 2, title: "Surface area", content: "460.2 million km²" },
            { key: 3, title: "Length of year", content: "225 Earth days" },
        ]
    },
    {
        planet: "earth",
        facts: [
            { key: 0, title: "Measuring Up", content: "If the Sun were as tall as a typical front door, Earth would be the size of a nickel." },
            { key: 1, title: "We're On It", content: 'Earth is a rocky planet with a solid and dynamic surface of mountains, canyons, plains and more. Most of our planet is covered in water.' },
            { key: 2, title: "Breathe Easy", content: "Earth's atmosphere is 78 percent nitrogen, 21 percent oxygen and 1 percent other ingredients—the perfect balance to breathe and live." },
            { key: 3, title: "Orbital Science", content: 'Many orbiting spacecraft study the Earth from above as a whole system—observing the atmosphere, ocean, glaciers, and the solid earth.' },
            { key: 4, title: "Protective Shield", content: 'Our atmosphere protects us from incoming meteoroids, most of which break up in our atmosphere before they can strike the surface.' },
            { key: 5, title: "Home, Sweet Home", content: 'Earth is the perfect place for life as we know it.' },
        ],
        numbers: [
            { key: 0, title: "Planet type", content: "Terrestrial" },
            { key: 1, title: "Distance from sun", content: "149.6 million km" },
            { key: 2, title: "Surface area", content: "510.1 million km²" },
            { key: 3, title: "Length of year", content: "356 Earth days" },
        ]
    },
    {
        planet: "mars",
        facts: [
            { key: 0, title: "Longer Days", content: "One day on Mars takes a little over 24 hours. Mars makes a complete orbit around the Sun (a year in Martian time) in 687 Earth days." },
            { key: 1, title: "Rugged Terrain", content: 'Mars is a rocky planet. Its solid surface has been altered by volcanoes, impacts, winds, crustal movement and chemical reactions.' },
            { key: 2, title: "Bring a Spacesuit", content: 'Mars has a thin atmosphere made up mostly of carbon dioxide (CO2), argon (Ar), nitrogen (N2), and a small amount of oxygen and water vapor.' },
            { key: 3, title: "Many Missions", content: 'Several missions have visited this planet, from flybys and orbiters to rovers on the surface.The first true Mars mission success was the Mariner 4 flyby in 1965.' },
            { key: 4, title: "Rusty Planet", content: 'Mars is known as the Red Planet because iron minerals in the Martian soil oxidize, or rust, causing the soil and atmosphere to look red.' },
            { key: 5, title: "Tough Place for Life", content: "At this time, Mars' surface cannot support life as we know it. Current missions are determining Mars' past and future potential for life." },
        ],
        numbers: [
            { key: 0, title: "Planet type", content: "Terrestrial" },
            { key: 1, title: "Distance from sun", content: "227.9 million km" },
            { key: 2, title: "Surface area", content: "144.8 million km²" },
            { key: 3, title: "Length of year", content: "687 Earth days" },
        ]
    },
    {
        planet: "jupiter",
        facts: [
            { key: 0, title: "The Grandest Planet", content: "Eleven Earths could fit across Jupiter’s equator. If Earth were the size of a grape, Jupiter would be the size of a basketball." },
            { key: 1, title: "What's Inside", content: 'Jupiter is a gas giant and so lacks an Earth-like surface. If it has a solid inner core at all, it’s likely only about the size of Earth.' },
            { key: 2, title: "Massive World, Light Elements", content: "Jupiter's atmosphere is made up mostly of hydrogen (H2) and helium (He)" },
            { key: 3, title: "Ringed World", content: 'In 1979 the Voyager mission discovered Jupiter’s faint ring system. All four giant planets in our solar system have ring systems.' },
            { key: 4, title: "Exploring Jupiter", content: 'Nine spacecraft have visited Jupiter. Seven flew by and two have orbited the gas giant. Juno, the most recent, arrived at Jupiter in 2016.' },
            { key: 5, title: "Super Storm", content: "Jupiter's Great Red Spot is a gigantic storm that’s about twice the size of Earth and has raged for over a century." },
        ],
        numbers: [
            { key: 0, title: "Planet type", content: "Gas Giant" },
            { key: 1, title: "Distance from sun", content: "778.5 million km" },
            { key: 2, title: "Surface area", content: "61.42 billion km²" },
            { key: 3, title: "Length of year", content: "12 Earth years" },
        ]
    },
    {
        planet: "saturn",
        facts: [
            { key: 0, title: "A Colossal Planet", content: "Nine Earths side by side would almost span Saturn’s diameter. That doesn’t include Saturn’s rings." },
            { key: 1, title: "Gas Giant", content: 'Saturn is a gas-giant planet and therefore does not have a solid surface like Earth’s. But it might have a solid core somewhere in there.' },
            { key: 2, title: "Hot air", content: "Saturn's atmosphere is made up mostly of hydrogen (H2) and helium (He)." },
            { key: 3, title: "Mini Solar System", content: 'Saturn has 53 known moons with an additional 29 moons awaiting confirmation of their discovery—that is a total of 82 moons.' },
            { key: 4, title: "Glorious Rings", content: 'Saturn has the most spectacular ring system, with seven rings and several gaps and divisions between them.' },
            { key: 5, title: "Rare Destination", content: 'Few missions have visited Saturn: Pioneer 11 and Voyagers 1 and 2 flew by; But Cassini orbited Saturn 294 times from 2004 to 2017.' },
        ],
        numbers: [
            { key: 0, title: "Planet type", content: "Gas Giant" },
            { key: 1, title: "Distance from sun", content: "1.434 billion km" },
            { key: 2, title: "Surface area", content: "42.7 billion km²" },
            { key: 3, title: "Length of year", content: "29 Earth years" },
        ]
    },
    {
        planet: "uranus",
        facts: [
            { key: 0, title: "Ice Giant", content: 'Uranus is an ice giant. Most of its mass is a hot, dense fluid of "icy" materials - water, methane and ammonia - above a small rocky core.' },
            { key: 1, title: "Gassy", content: 'Uranus has an atmosphere made mostly of molecular hydrogen and atomic helium, with a small amount of methane.' },
            { key: 2, title: "Many Moons", content: 'Uranus has 27 known moons, and they are named after characters from the works of William Shakespeare and Alexander Pope.' },
            { key: 3, title: "The Other Ringed World", content: 'Uranus has 13 known rings. The inner rings are narrow and dark and the outer rings are brightly colored.' },
            { key: 4, title: "A Bit Lonely ", content: 'Voyager 2 is the only spacecraft to fly by Uranus. No spacecraft has orbited this distant planet to study it at length and up close.' },
            { key: 5, title: "One cool fact", content: 'Like Venus, Uranus rotates east to west. But Uranus is unique in that it rotates on its side.' },
        ],
        numbers: [
            { key: 0, title: "Planet type", content: "Ice Giant" },
            { key: 1, title: "Distance from sun", content: "2.871 billion km" },
            { key: 2, title: "Surface area", content: "8.083 billion km²" },
            { key: 3, title: "Length of year", content: "84 Earth years" },
        ]
    },
    {
        planet: "neptune",
        facts: [
            { key: 0, title: "Ice Giant", content: 'Neptune is an ice giant. Most of its mass is a hot, dense fluid of "icy" materials - water, methane and ammonia - above a small rocky core.' },
            { key: 1, title: "Gassy", content: "Neptune's atmosphere is made up mostly of molecular hydrogen, atomic helium and methane." },
            { key: 2, title: "Moons ", content: 'Neptune has 14 known moons which are named after sea gods and nymphs in Greek mythology.' },
            { key: 3, title: "Faint Rings ", content: 'Neptune has at least five main rings and four more ring arcs, which are clumps of dust and debris likely formed by the gravity of a nearby moon.' },
            { key: 4, title: "One Voyage There ", content: 'Voyager 2 is the only spacecraft to have visited Neptune. No spacecraft has orbited this distant planet to study it at length and up close.' },
            { key: 5, title: "Lifeless", content: 'Neptune cannot support life as we know it.' },
        ],
        numbers: [
            { key: 0, title: "Planet type", content: "Ice Giant" },
            { key: 1, title: "Distance from sun", content: "4.495 billion km" },
            { key: 2, title: "Surface area", content: "7.618 billion km²" },
            { key: 3, title: "Length of year", content: "165 Earth years" },

        ]
    },
]


export default planetFacts;