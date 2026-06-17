const countries = [
    {
        "country": "Afghanistan",
        "code": "af",
        "capital": "Kabul",
        "continent": "Asia"
    },
    {
        "country": "Angola",
        "code": "ao",
        "capital": "Luanda",
        "continent": "Africa"
    },
    {
        "country": "Albania",
        "code": "al",
        "capital": "Tirana",
        "continent": "Europe"
    },
    {
        "country": "Andorra",
        "code": "ad",
        "capital": "Andorra la Vella",
        "continent": "Europe"
    },
    {
        "country": "United Arab Emirates",
        "code": "ae",
        "capital": "Abu Dhabi",
        "continent": "Asia"
    },
    {
        "country": "Argentina",
        "code": "ar",
        "capital": "Buenos Aires",
        "continent": "South America"
    },
    {
        "country": "Armenia",
        "code": "am",
        "capital": "Yerevan",
        "continent": "Asia"
    },
    {
        "country": "Antigua and Barbuda",
        "code": "ag",
        "capital": "Saint John's",
        "continent": "North America"
    },
    {
        "country": "Australia",
        "code": "au",
        "capital": "Canberra",
        "continent": "Oceania"
    },
    {
        "country": "Austria",
        "code": "at",
        "capital": "Vienna",
        "continent": "Europe"
    },
    {
        "country": "Azerbaijan",
        "code": "az",
        "capital": "Baku",
        "continent": "Asia"
    },
    {
        "country": "Burundi",
        "code": "bi",
        "capital": "Gitega",
        "continent": "Africa"
    },
    {
        "country": "Belgium",
        "code": "be",
        "capital": "Brussels",
        "continent": "Europe"
    },
    {
        "country": "Benin",
        "code": "bj",
        "capital": "Porto-Novo",
        "continent": "Africa"
    },
    {
        "country": "Burkina Faso",
        "code": "bf",
        "capital": "Ouagadougou",
        "continent": "Africa"
    },
    {
        "country": "Bangladesh",
        "code": "bd",
        "capital": "Dhaka",
        "continent": "Asia"
    },
    {
        "country": "Bulgaria",
        "code": "bg",
        "capital": "Sofia",
        "continent": "Europe"
    },
    {
        "country": "Bahrain",
        "code": "bh",
        "capital": "Manama",
        "continent": "Asia"
    },
    {
        "country": "Bahamas",
        "code": "bs",
        "capital": "Nassau",
        "continent": "North America"
    },
    {
        "country": "Bosnia and Herzegovina",
        "code": "ba",
        "capital": "Sarajevo",
        "continent": "Europe"
    },
    {
        "country": "Belarus",
        "code": "by",
        "capital": "Minsk",
        "continent": "Europe"
    },
    {
        "country": "Belize",
        "code": "bz",
        "capital": "Belmopan",
        "continent": "North America"
    },
    {
        "country": "Bolivia",
        "code": "bo",
        "capital": "Sucre",
        "continent": "South America"
    },
    {
        "country": "Brazil",
        "code": "br",
        "capital": "Brasília",
        "continent": "South America"
    },
    {
        "country": "Barbados",
        "code": "bb",
        "capital": "Bridgetown",
        "continent": "North America"
    },
    {
        "country": "Brunei",
        "code": "bn",
        "capital": "Bandar Seri Begawan",
        "continent": "Asia"
    },
    {
        "country": "Bhutan",
        "code": "bt",
        "capital": "Thimphu",
        "continent": "Asia"
    },
    {
        "country": "Botswana",
        "code": "bw",
        "capital": "Gaborone",
        "continent": "Africa"
    },
    {
        "country": "Central African Republic",
        "code": "cf",
        "capital": "Bangui",
        "continent": "Africa"
    },
    {
        "country": "Canada",
        "code": "ca",
        "capital": "Ottawa",
        "continent": "North America"
    },
    {
        "country": "Switzerland",
        "code": "ch",
        "capital": "Bern",
        "continent": "Europe"
    },
    {
        "country": "Chile",
        "code": "cl",
        "capital": "Santiago",
        "continent": "South America"
    },
    {
        "country": "China",
        "code": "cn",
        "capital": "Beijing",
        "continent": "Asia"
    },
    {
        "country": "Ivory Coast",
        "code": "ci",
        "capital": "Yamoussoukro",
        "continent": "Africa"
    },
    {
        "country": "Cameroon",
        "code": "cm",
        "capital": "Yaoundé",
        "continent": "Africa"
    },
    {
        "country": "DR Congo",
        "code": "cd",
        "capital": "Kinshasa",
        "continent": "Africa"
    },
    {
        "country": "Congo",
        "code": "cg",
        "capital": "Brazzaville",
        "continent": "Africa"
    },
    {
        "country": "Colombia",
        "code": "co",
        "capital": "Bogotá",
        "continent": "South America"
    },
    {
        "country": "Comoros",
        "code": "km",
        "capital": "Moroni",
        "continent": "Africa"
    },
    {
        "country": "Cape Verde",
        "code": "cv",
        "capital": "Praia",
        "continent": "Africa"
    },
    {
        "country": "Costa Rica",
        "code": "cr",
        "capital": "San José",
        "continent": "North America"
    },
    {
        "country": "Cuba",
        "code": "cu",
        "capital": "Havana",
        "continent": "North America"
    },
    {
        "country": "Cyprus",
        "code": "cy",
        "capital": "Nicosia",
        "continent": "Europe"
    },
    {
        "country": "Czechia",
        "code": "cz",
        "capital": "Prague",
        "continent": "Europe"
    },
    {
        "country": "Germany",
        "code": "de",
        "capital": "Berlin",
        "continent": "Europe"
    },
    {
        "country": "Djibouti",
        "code": "dj",
        "capital": "Djibouti",
        "continent": "Africa"
    },
    {
        "country": "Dominica",
        "code": "dm",
        "capital": "Roseau",
        "continent": "North America"
    },
    {
        "country": "Denmark",
        "code": "dk",
        "capital": "Copenhagen",
        "continent": "Europe"
    },
    {
        "country": "Dominican Republic",
        "code": "do",
        "capital": "Santo Domingo",
        "continent": "North America"
    },
    {
        "country": "Algeria",
        "code": "dz",
        "capital": "Algiers",
        "continent": "Africa"
    },
    {
        "country": "Ecuador",
        "code": "ec",
        "capital": "Quito",
        "continent": "South America"
    },
    {
        "country": "Egypt",
        "code": "eg",
        "capital": "Cairo",
        "continent": "Africa"
    },
    {
        "country": "Eritrea",
        "code": "er",
        "capital": "Asmara",
        "continent": "Africa"
    },
    {
        "country": "Spain",
        "code": "es",
        "capital": "Madrid",
        "continent": "Europe"
    },
    {
        "country": "Estonia",
        "code": "ee",
        "capital": "Tallinn",
        "continent": "Europe"
    },
    {
        "country": "Ethiopia",
        "code": "et",
        "capital": "Addis Ababa",
        "continent": "Africa"
    },
    {
        "country": "Finland",
        "code": "fi",
        "capital": "Helsinki",
        "continent": "Europe"
    },
    {
        "country": "Fiji",
        "code": "fj",
        "capital": "Suva",
        "continent": "Oceania"
    },
    {
        "country": "France",
        "code": "fr",
        "capital": "Paris",
        "continent": "Europe"
    },
    {
        "country": "Micronesia",
        "code": "fm",
        "capital": "Palikir",
        "continent": "Oceania"
    },
    {
        "country": "Gabon",
        "code": "ga",
        "capital": "Libreville",
        "continent": "Africa"
    },
    {
        "country": "United Kingdom",
        "code": "gb",
        "capital": "London",
        "continent": "Europe"
    },
    {
        "country": "Georgia",
        "code": "ge",
        "capital": "Tbilisi",
        "continent": "Asia"
    },
    {
        "country": "Ghana",
        "code": "gh",
        "capital": "Accra",
        "continent": "Africa"
    },
    {
        "country": "Guinea",
        "code": "gn",
        "capital": "Conakry",
        "continent": "Africa"
    },
    {
        "country": "Gambia",
        "code": "gm",
        "capital": "Banjul",
        "continent": "Africa"
    },
    {
        "country": "Guinea-Bissau",
        "code": "gw",
        "capital": "Bissau",
        "continent": "Africa"
    },
    {
        "country": "Equatorial Guinea",
        "code": "gq",
        "capital": "Malabo",
        "continent": "Africa"
    },
    {
        "country": "Greece",
        "code": "gr",
        "capital": "Athens",
        "continent": "Europe"
    },
    {
        "country": "Grenada",
        "code": "gd",
        "capital": "St. George's",
        "continent": "North America"
    },
    {
        "country": "Guatemala",
        "code": "gt",
        "capital": "Guatemala City",
        "continent": "North America"
    },
    {
        "country": "Guyana",
        "code": "gy",
        "capital": "Georgetown",
        "continent": "South America"
    },
    {
        "country": "Honduras",
        "code": "hn",
        "capital": "Tegucigalpa",
        "continent": "North America"
    },
    {
        "country": "Croatia",
        "code": "hr",
        "capital": "Zagreb",
        "continent": "Europe"
    },
    {
        "country": "Haiti",
        "code": "ht",
        "capital": "Port-au-Prince",
        "continent": "North America"
    },
    {
        "country": "Hungary",
        "code": "hu",
        "capital": "Budapest",
        "continent": "Europe"
    },
    {
        "country": "Indonesia",
        "code": "id",
        "capital": "Jakarta",
        "continent": "Asia"
    },
    {
        "country": "India",
        "code": "in",
        "capital": "New Delhi",
        "continent": "Asia"
    },
    {
        "country": "Ireland",
        "code": "ie",
        "capital": "Dublin",
        "continent": "Europe"
    },
    {
        "country": "Iran",
        "code": "ir",
        "capital": "Tehran",
        "continent": "Asia"
    },
    {
        "country": "Iraq",
        "code": "iq",
        "capital": "Baghdad",
        "continent": "Asia"
    },
    {
        "country": "Iceland",
        "code": "is",
        "capital": "Reykjavik",
        "continent": "Europe"
    },
    {
        "country": "Israel",
        "code": "il",
        "capital": "Jerusalem",
        "continent": "Asia"
    },
    {
        "country": "Italy",
        "code": "it",
        "capital": "Rome",
        "continent": "Europe"
    },
    {
        "country": "Jamaica",
        "code": "jm",
        "capital": "Kingston",
        "continent": "North America"
    },
    {
        "country": "Jordan",
        "code": "jo",
        "capital": "Amman",
        "continent": "Asia"
    },
    {
        "country": "Japan",
        "code": "jp",
        "capital": "Tokyo",
        "continent": "Asia"
    },
    {
        "country": "Kazakhstan",
        "code": "kz",
        "capital": "Astana",
        "continent": "Asia"
    },
    {
        "country": "Kenya",
        "code": "ke",
        "capital": "Nairobi",
        "continent": "Africa"
    },
    {
        "country": "Kyrgyzstan",
        "code": "kg",
        "capital": "Bishkek",
        "continent": "Asia"
    },
    {
        "country": "Cambodia",
        "code": "kh",
        "capital": "Phnom Penh",
        "continent": "Asia"
    },
    {
        "country": "Kiribati",
        "code": "ki",
        "capital": "South Tarawa",
        "continent": "Oceania"
    },
    {
        "country": "Saint Kitts and Nevis",
        "code": "kn",
        "capital": "Basseterre",
        "continent": "North America"
    },
    {
        "country": "South Korea",
        "code": "kr",
        "capital": "Seoul",
        "continent": "Asia"
    },
    {
        "country": "Kuwait",
        "code": "kw",
        "capital": "Kuwait City",
        "continent": "Asia"
    },
    {
        "country": "Laos",
        "code": "la",
        "capital": "Vientiane",
        "continent": "Asia"
    },
    {
        "country": "Lebanon",
        "code": "lb",
        "capital": "Beirut",
        "continent": "Asia"
    },
    {
        "country": "Liberia",
        "code": "lr",
        "capital": "Monrovia",
        "continent": "Africa"
    },
    {
        "country": "Libya",
        "code": "ly",
        "capital": "Tripoli",
        "continent": "Africa"
    },
    {
        "country": "Saint Lucia",
        "code": "lc",
        "capital": "Castries",
        "continent": "North America"
    },
    {
        "country": "Liechtenstein",
        "code": "li",
        "capital": "Vaduz",
        "continent": "Europe"
    },
    {
        "country": "Sri Lanka",
        "code": "lk",
        "capital": "Colombo",
        "continent": "Asia"
    },
    {
        "country": "Lesotho",
        "code": "ls",
        "capital": "Maseru",
        "continent": "Africa"
    },
    {
        "country": "Lithuania",
        "code": "lt",
        "capital": "Vilnius",
        "continent": "Europe"
    },
    {
        "country": "Luxembourg",
        "code": "lu",
        "capital": "Luxembourg",
        "continent": "Europe"
    },
    {
        "country": "Latvia",
        "code": "lv",
        "capital": "Riga",
        "continent": "Europe"
    },
    {
        "country": "Morocco",
        "code": "ma",
        "capital": "Rabat",
        "continent": "Africa"
    },
    {
        "country": "Monaco",
        "code": "mc",
        "capital": "Monaco",
        "continent": "Europe"
    },
    {
        "country": "Moldova",
        "code": "md",
        "capital": "Chișinău",
        "continent": "Europe"
    },
    {
        "country": "Madagascar",
        "code": "mg",
        "capital": "Antananarivo",
        "continent": "Africa"
    },
    {
        "country": "Maldives",
        "code": "mv",
        "capital": "Malé",
        "continent": "Asia"
    },
    {
        "country": "Mexico",
        "code": "mx",
        "capital": "Mexico City",
        "continent": "North America"
    },
    {
        "country": "Marshall Islands",
        "code": "mh",
        "capital": "Majuro",
        "continent": "Oceania"
    },
    {
        "country": "North Macedonia",
        "code": "mk",
        "capital": "Skopje",
        "continent": "Europe"
    },
    {
        "country": "Mali",
        "code": "ml",
        "capital": "Bamako",
        "continent": "Africa"
    },
    {
        "country": "Malta",
        "code": "mt",
        "capital": "Valletta",
        "continent": "Europe"
    },
    {
        "country": "Myanmar",
        "code": "mm",
        "capital": "Naypyidaw",
        "continent": "Asia"
    },
    {
        "country": "Montenegro",
        "code": "me",
        "capital": "Podgorica",
        "continent": "Europe"
    },
    {
        "country": "Mongolia",
        "code": "mn",
        "capital": "Ulan Bator",
        "continent": "Asia"
    },
    {
        "country": "Mozambique",
        "code": "mz",
        "capital": "Maputo",
        "continent": "Africa"
    },
    {
        "country": "Mauritania",
        "code": "mr",
        "capital": "Nouakchott",
        "continent": "Africa"
    },
    {
        "country": "Mauritius",
        "code": "mu",
        "capital": "Port Louis",
        "continent": "Africa"
    },
    {
        "country": "Malawi",
        "code": "mw",
        "capital": "Lilongwe",
        "continent": "Africa"
    },
    {
        "country": "Malaysia",
        "code": "my",
        "capital": "Kuala Lumpur",
        "continent": "Asia"
    },
    {
        "country": "Namibia",
        "code": "na",
        "capital": "Windhoek",
        "continent": "Africa"
    },
    {
        "country": "Niger",
        "code": "ne",
        "capital": "Niamey",
        "continent": "Africa"
    },
    {
        "country": "Nigeria",
        "code": "ng",
        "capital": "Abuja",
        "continent": "Africa"
    },
    {
        "country": "Nicaragua",
        "code": "ni",
        "capital": "Managua",
        "continent": "North America"
    },
    {
        "country": "Netherlands",
        "code": "nl",
        "capital": "Amsterdam",
        "continent": "Europe"
    },
    {
        "country": "Norway",
        "code": "no",
        "capital": "Oslo",
        "continent": "Europe"
    },
    {
        "country": "Nepal",
        "code": "np",
        "capital": "Kathmandu",
        "continent": "Asia"
    },
    {
        "country": "Nauru",
        "code": "nr",
        "capital": "Yaren",
        "continent": "Oceania"
    },
    {
        "country": "New Zealand",
        "code": "nz",
        "capital": "Wellington",
        "continent": "Oceania"
    },
    {
        "country": "Oman",
        "code": "om",
        "capital": "Muscat",
        "continent": "Asia"
    },
    {
        "country": "Pakistan",
        "code": "pk",
        "capital": "Islamabad",
        "continent": "Asia"
    },
    {
        "country": "Panama",
        "code": "pa",
        "capital": "Panama City",
        "continent": "North America"
    },
    {
        "country": "Peru",
        "code": "pe",
        "capital": "Lima",
        "continent": "South America"
    },
    {
        "country": "Philippines",
        "code": "ph",
        "capital": "Manila",
        "continent": "Asia"
    },
    {
        "country": "Palau",
        "code": "pw",
        "capital": "Ngerulmud",
        "continent": "Oceania"
    },
    {
        "country": "Papua New Guinea",
        "code": "pg",
        "capital": "Port Moresby",
        "continent": "Oceania"
    },
    {
        "country": "Poland",
        "code": "pl",
        "capital": "Warsaw",
        "continent": "Europe"
    },
    {
        "country": "North Korea",
        "code": "kp",
        "capital": "Pyongyang",
        "continent": "Asia"
    },
    {
        "country": "Portugal",
        "code": "pt",
        "capital": "Lisbon",
        "continent": "Europe"
    },
    {
        "country": "Paraguay",
        "code": "py",
        "capital": "Asunción",
        "continent": "South America"
    },
    {
        "country": "Qatar",
        "code": "qa",
        "capital": "Doha",
        "continent": "Asia"
    },
    {
        "country": "Romania",
        "code": "ro",
        "capital": "Bucharest",
        "continent": "Europe"
    },
    {
        "country": "Russia",
        "code": "ru",
        "capital": "Moscow",
        "continent": "Europe"
    },
    {
        "country": "Rwanda",
        "code": "rw",
        "capital": "Kigali",
        "continent": "Africa"
    },
    {
        "country": "Saudi Arabia",
        "code": "sa",
        "capital": "Riyadh",
        "continent": "Asia"
    },
    {
        "country": "Sudan",
        "code": "sd",
        "capital": "Khartoum",
        "continent": "Africa"
    },
    {
        "country": "Senegal",
        "code": "sn",
        "capital": "Dakar",
        "continent": "Africa"
    },
    {
        "country": "Singapore",
        "code": "sg",
        "capital": "Singapore",
        "continent": "Asia"
    },
    {
        "country": "Solomon Islands",
        "code": "sb",
        "capital": "Honiara",
        "continent": "Oceania"
    },
    {
        "country": "Sierra Leone",
        "code": "sl",
        "capital": "Freetown",
        "continent": "Africa"
    },
    {
        "country": "El Salvador",
        "code": "sv",
        "capital": "San Salvador",
        "continent": "North America"
    },
    {
        "country": "San Marino",
        "code": "sm",
        "capital": "City of San Marino",
        "continent": "Europe"
    },
    {
        "country": "Somalia",
        "code": "so",
        "capital": "Mogadishu",
        "continent": "Africa"
    },
    {
        "country": "Serbia",
        "code": "rs",
        "capital": "Belgrade",
        "continent": "Europe"
    },
    {
        "country": "South Sudan",
        "code": "ss",
        "capital": "Juba",
        "continent": "Africa"
    },
    {
        "country": "São Tomé and Príncipe",
        "code": "st",
        "capital": "São Tomé",
        "continent": "Africa"
    },
    {
        "country": "Suriname",
        "code": "sr",
        "capital": "Paramaribo",
        "continent": "South America"
    },
    {
        "country": "Slovakia",
        "code": "sk",
        "capital": "Bratislava",
        "continent": "Europe"
    },
    {
        "country": "Slovenia",
        "code": "si",
        "capital": "Ljubljana",
        "continent": "Europe"
    },
    {
        "country": "Sweden",
        "code": "se",
        "capital": "Stockholm",
        "continent": "Europe"
    },
    {
        "country": "Eswatini",
        "code": "sz",
        "capital": "Lobamba",
        "continent": "Africa"
    },
    {
        "country": "Seychelles",
        "code": "sc",
        "capital": "Victoria",
        "continent": "Africa"
    },
    {
        "country": "Syria",
        "code": "sy",
        "capital": "Damascus",
        "continent": "Asia"
    },
    {
        "country": "Chad",
        "code": "td",
        "capital": "N'Djamena",
        "continent": "Africa"
    },
    {
        "country": "Togo",
        "code": "tg",
        "capital": "Lomé",
        "continent": "Africa"
    },
    {
        "country": "Thailand",
        "code": "th",
        "capital": "Bangkok",
        "continent": "Asia"
    },
    {
        "country": "Tajikistan",
        "code": "tj",
        "capital": "Dushanbe",
        "continent": "Asia"
    },
    {
        "country": "Turkmenistan",
        "code": "tm",
        "capital": "Ashgabat",
        "continent": "Asia"
    },
    {
        "country": "Timor-Leste",
        "code": "tl",
        "capital": "Dili",
        "continent": "Asia"
    },
    {
        "country": "Tonga",
        "code": "to",
        "capital": "Nuku'alofa",
        "continent": "Oceania"
    },
    {
        "country": "Trinidad and Tobago",
        "code": "tt",
        "capital": "Port of Spain",
        "continent": "North America"
    },
    {
        "country": "Tunisia",
        "code": "tn",
        "capital": "Tunis",
        "continent": "Africa"
    },
    {
        "country": "Türkiye",
        "code": "tr",
        "capital": "Ankara",
        "continent": "Asia"
    },
    {
        "country": "Tuvalu",
        "code": "tv",
        "capital": "Funafuti",
        "continent": "Oceania"
    },
    {
        "country": "Tanzania",
        "code": "tz",
        "capital": "Dodoma",
        "continent": "Africa"
    },
    {
        "country": "Uganda",
        "code": "ug",
        "capital": "Kampala",
        "continent": "Africa"
    },
    {
        "country": "Ukraine",
        "code": "ua",
        "capital": "Kyiv",
        "continent": "Europe"
    },
    {
        "country": "Uruguay",
        "code": "uy",
        "capital": "Montevideo",
        "continent": "South America"
    },
    {
        "country": "United States",
        "code": "us",
        "capital": "Washington D.C.",
        "continent": "North America"
    },
    {
        "country": "Uzbekistan",
        "code": "uz",
        "capital": "Tashkent",
        "continent": "Asia"
    },
    {
        "country": "Vatican City",
        "code": "va",
        "capital": "Vatican City",
        "continent": "Europe"
    },
    {
        "country": "Saint Vincent and the Grenadines",
        "code": "vc",
        "capital": "Kingstown",
        "continent": "North America"
    },
    {
        "country": "Venezuela",
        "code": "ve",
        "capital": "Caracas",
        "continent": "South America"
    },
    {
        "country": "Vietnam",
        "code": "vn",
        "capital": "Hanoi",
        "continent": "Asia"
    },
    {
        "country": "Vanuatu",
        "code": "vu",
        "capital": "Port Vila",
        "continent": "Oceania"
    },
    {
        "country": "Samoa",
        "code": "ws",
        "capital": "Apia",
        "continent": "Oceania"
    },
    {
        "country": "Yemen",
        "code": "ye",
        "capital": "Sana'a",
        "continent": "Asia"
    },
    {
        "country": "South Africa",
        "code": "za",
        "capital": "Pretoria",
        "continent": "Africa"
    },
    {
        "country": "Zambia",
        "code": "zm",
        "capital": "Lusaka",
        "continent": "Africa"
    },
    {
        "country": "Zimbabwe",
        "code": "zw",
        "capital": "Harare",
        "continent": "Africa"
    },
    {
    "country": "Palestine",
    "code": "ps",
    "capital": "Jerusalem",
    "continent": "Asia"
    }
];