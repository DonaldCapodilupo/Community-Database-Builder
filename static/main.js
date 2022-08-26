/* global console*/
/*jshint esversion: 6 */

const car_list = [
    'Toyota', 'Honda', 'Chevrolet', 'Ford', 'Mercedes-Benz', 'Jeep', 'BMW', 'Porsche', 'Subaru', 'Nissan', 'Cadillac',
    'Volkswagen', 'Lexus', 'Audi', 'Volvo', 'Jaguar', 'GMC', 'Buick', 'Acura', 'Dodge', 'Hyundai',
    'Lincoln', 'Mazda', 'Land Rover', 'Tesla', 'Ram Trucks', 'Kia', 'Chrysler', 'Pontiac', 'Infiniti', 'Mitsubishi',
    'Oldsmobile', 'Fiat', 'Mini Cooper', 'Suzuki'
];

const colors = [
    "Black", "Silver", "White", "Grey", "Red", "Blue", "Brown", "Green", "Beige", "Orange", "Gold", "Yellow",
    "Purple"
];

const json = `[
  {
    "brand": "Acura",
    "models": [
      "2.2CL",
      "2.3CL",
      "3.0CL",
      "3.2CL",
      "ILX",
      "Integra",
      "Legend",
      "MDX",
      "NSX",
      "RDX",
      "3.5 RL",
      "RL",
      "RSX",
      "SLX",
      "2.5TL",
      "3.2TL",
      "TL",
      "TSX",
      "Vigor",
      "ZDX"
    ]
  },
  {
    "brand": "Alfa Romeo",
    "models": [
      "164",
      "8C Competizione",
      "GTV-6",
      "Milano",
      "Spider"
    ]
  },
  {
    "brand": "AMC",
    "models": [
      "Alliance",
      "Concord",
      "Eagle",
      "Encore",
      "Spirit"
    ]
  },
  {
    "brand": "Aston Martin",
    "models": [
      "DB7",
      "DB9",
      "DBS",
      "Lagonda",
      "Rapide",
      "V12 Vantage",
      "V8 Vantage",
      "Vanquish",
      "Virage"
    ]
  },
  {
    "brand": "Audi",
    "models": [
      "100",
      "200",
      "4000",
      "5000",
      "80",
      "90",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "allroad",
      "Cabriolet",
      "Coupe",
      "Q3",
      "Q5",
      "Q7",
      "Quattro",
      "R8",
      "RS 4",
      "RS 5",
      "RS 6",
      "S4",
      "S5",
      "S6",
      "S7",
      "S8",
      "TT",
      "TT RS",
      "TTS",
      "V8 Quattro"
    ]
  },
  {
    "brand": "Avanti",
    "models": [
      "Convertible",
      "Coupe",
      "Sedan"
    ]
  },
  {
    "brand": "Bentley",
    "models": [
      "Arnage",
      "Azure",
      "Brooklands",
      "Continental",
      "Corniche",
      "Eight",
      "Mulsanne",
      "Turbo R"
    ]
  },
  {
    "brand": "BMW",
    "models": [
      "128i",
      "135i",
      "135is",
      "318i",
      "318iC",
      "318iS",
      "318ti",
      "320i",
      "323ci",
      "323i",
      "323is",
      "323iT",
      "325Ci",
      "325e",
      "325es",
      "325i",
      "325is",
      "325iX",
      "325xi",
      "328Ci",
      "328i",
      "328iS",
      "328xi",
      "330Ci",
      "330i",
      "330xi",
      "335d",
      "335i",
      "335is",
      "335xi",
      "ActiveHybrid 3",
      "325",
      "524td",
      "525i",
      "525xi",
      "528e",
      "528i",
      "528iT",
      "528xi",
      "530i",
      "530iT",
      "530xi",
      "533i",
      "535i",
      "535i Gran Turismo",
      "535xi",
      "540i",
      "545i",
      "550i",
      "550i Gran Turismo",
      "ActiveHybrid 5",
      "633CSi",
      "635CSi",
      "640i",
      "640i Gran Coupe",
      "645Ci",
      "650i",
      "650i Gran Coupe",
      "L6",
      "733i",
      "735i",
      "735iL",
      "740i",
      "740iL",
      "740Li",
      "745i",
      "745Li",
      "750i",
      "750iL",
      "750Li",
      "760i",
      "760Li",
      "ActiveHybrid 7",
      "Alpina B7",
      "840Ci",
      "850Ci",
      "850CSi",
      "850i",
      "L7",
      "1 Series M",
      "M Coupe",
      "M Roadster",
      "M3",
      "M5",
      "M6",
      "X5 M",
      "X6 M",
      "ActiveHybrid X6",
      "X1",
      "X3",
      "X5",
      "X6",
      "Z3",
      "Z4",
      "Z8"
    ]
  },
  {
    "brand": "Buick",
    "models": [
      "Century",
      "Electra",
      "Enclave",
      "Encore",
      "LaCrosse",
      "Le Sabre",
      "Lucerne",
      "Park Avenue",
      "Rainier",
      "Reatta",
      "Regal",
      "Rendezvous",
      "Riviera",
      "Roadmaster",
      "Skyhawk",
      "Skylark",
      "Somerset",
      "Terraza",
      "Verano"
    ]
  },
  {
    "brand": "Cadillac",
    "models": [
      "Allante",
      "ATS",
      "Brougham",
      "Catera",
      "Cimarron",
      "CTS",
      "De Ville",
      "DTS",
      "Eldorado",
      "Escalade",
      "Escalade ESV",
      "Escalade EXT",
      "Fleetwood",
      "Seville",
      "SRX",
      "STS",
      "XLR",
      "XTS"
    ]
  },
  {
    "brand": "Chevrolet",
    "models": [
      "Astro",
      "Avalanche",
      "Aveo",
      "Aveo5",
      "Beretta",
      "Blazer",
      "Camaro",
      "Caprice",
      "Captiva Sport",
      "Cavalier",
      "Celebrity",
      "Chevette",
      "Citation",
      "Cobalt",
      "Colorado",
      "Corsica",
      "Corvette",
      "Cruze",
      "El Camino",
      "Equinox",
      "Express Van",
      "G Van",
      "HHR",
      "Impala",
      "Kodiak C4500",
      "Lumina",
      "Lumina APV",
      "LUV",
      "Malibu",
      "Metro",
      "Monte Carlo",
      "Nova",
      "Prizm",
      "S10 Blazer",
      "S10 Pickup",
      "Silverado and other C/K1500",
      "Silverado and other C/K2500",
      "Silverado and other C/K3500",
      "Sonic",
      "Spark",
      "Spectrum",
      "Sprint",
      "SSR",
      "Suburban",
      "Tahoe",
      "Tracker",
      "TrailBlazer",
      "TrailBlazer EXT",
      "Traverse",
      "Uplander",
      "Venture",
      "Volt"
    ]
  },
  {
    "brand": "Chrysler",
    "models": [
      "200",
      "300",
      "300M",
      "Aspen",
      "Caravan",
      "Cirrus",
      "Concorde",
      "Conquest",
      "Cordoba",
      "Crossfire",
      "E Class",
      "Fifth Avenue",
      "Grand Voyager",
      "Imperial",
      "Intrepid",
      "Laser",
      "LeBaron",
      "LHS",
      "Neon",
      "New Yorker",
      "Newport",
      "Pacifica",
      "Prowler",
      "PT Cruiser",
      "Sebring",
      "TC by Maserati",
      "Town &amp; Country",
      "Voyager"
    ]
  },
  {
    "brand": "Daewoo",
    "models": [
      "Lanos",
      "Leganza",
      "Nubira"
    ]
  },
  {
    "brand": "Daihatsu",
    "models": [
      "Charade",
      "Rocky"
    ]
  },
  {
    "brand": "Datsun",
    "models": [
      "200SX",
      "210",
      "280ZX",
      "300ZX",
      "310",
      "510",
      "720",
      "810",
      "Maxima",
      "Pickup",
      "Pulsar",
      "Sentra",
      "Stanza"
    ]
  },
  {
    "brand": "DeLorean",
    "models": [
      "DMC-12"
    ]
  },
  {
    "brand": "Dodge",
    "models": [
      "400",
      "600",
      "Aries",
      "Avenger",
      "Caliber",
      "Caravan",
      "Challenger",
      "Charger",
      "Colt",
      "Conquest",
      "D/W Truck",
      "Dakota",
      "Dart",
      "Daytona",
      "Diplomat",
      "Durango",
      "Dynasty",
      "Grand Caravan",
      "Intrepid",
      "Journey",
      "Lancer",
      "Magnum",
      "Mirada",
      "Monaco",
      "Neon",
      "Nitro",
      "Omni",
      "Raider",
      "Ram 1500 Truck",
      "Ram 2500 Truck",
      "Ram 3500 Truck",
      "Ram 4500 Truck",
      "Ram 50 Truck",
      "RAM C/V",
      "Ram SRT-10",
      "Ram Van",
      "Ram Wagon",
      "Ramcharger",
      "Rampage",
      "Shadow",
      "Spirit",
      "Sprinter",
      "SRT-4",
      "St. Regis",
      "Stealth",
      "Stratus",
      "Viper"
    ]
  },
  {
    "brand": "Eagle",
    "models": [
      "Medallion",
      "Premier",
      "Summit",
      "Talon",
      "Vision"
    ]
  },
  {
    "brand": "Ferrari",
    "models": [
      "308 GTB Quattrovalvole",
      "308 GTBI",
      "308 GTS Quattrovalvole",
      "308 GTSI",
      "328 GTB",
      "328 GTS",
      "348 GTB",
      "348 GTS",
      "348 Spider",
      "348 TB",
      "348 TS",
      "360",
      "456 GT",
      "456M GT",
      "458 Italia",
      "512 BBi",
      "512M",
      "512TR",
      "550 Maranello",
      "575M Maranello",
      "599 GTB Fiorano",
      "599 GTO",
      "612 Scaglietti",
      "California",
      "Enzo",
      "F355",
      "F40",
      "F430",
      "F50",
      "FF",
      "Mondial",
      "Testarossa"
    ]
  },
  {
    "brand": "FIAT",
    "models": [
      "2000 Spider",
      "500",
      "Bertone X1/9",
      "Brava",
      "Pininfarina Spider",
      "Strada",
      "X1/9"
    ]
  },
  {
    "brand": "Fisker",
    "models": [
      "Karma"
    ]
  },
  {
    "brand": "Ford",
    "models": [
      "Aerostar",
      "Aspire",
      "Bronco",
      "Bronco II",
      "C-MAX",
      "Club Wagon",
      "Contour",
      "Courier",
      "Crown Victoria",
      "E-150 and Econoline 150",
      "E-250 and Econoline 250",
      "E-350 and Econoline 350",
      "Edge",
      "Escape",
      "Escort",
      "Excursion",
      "EXP",
      "Expedition",
      "Expedition EL",
      "Explorer",
      "Explorer Sport Trac",
      "F100",
      "F150",
      "F250",
      "F350",
      "F450",
      "Fairmont",
      "Festiva",
      "Fiesta",
      "Five Hundred",
      "Flex",
      "Focus",
      "Freestar",
      "Freestyle",
      "Fusion",
      "Granada",
      "GT",
      "LTD",
      "Mustang",
      "Probe",
      "Ranger",
      "Taurus",
      "Taurus X",
      "Tempo",
      "Thunderbird",
      "Transit Connect",
      "Windstar",
      "ZX2 Escort"
    ]
  },
  {
    "brand": "Freightliner",
    "models": [
      "Sprinter"
    ]
  },
  {
    "brand": "Geo",
    "models": [
      "Metro",
      "Prizm",
      "Spectrum",
      "Storm",
      "Tracker"
    ]
  },
  {
    "brand": "GMC",
    "models": [
      "Acadia",
      "Caballero",
      "Canyon",
      "Envoy",
      "Envoy XL",
      "Envoy XUV",
      "Jimmy",
      "Rally Wagon",
      "S15 Jimmy",
      "S15 Pickup",
      "Safari",
      "Savana",
      "Sierra C/K1500",
      "Sierra C/K2500",
      "Sierra C/K3500",
      "Sonoma",
      "Suburban",
      "Syclone",
      "Terrain",
      "TopKick C4500",
      "Typhoon",
      "Vandura",
      "Yukon",
      "Yukon XL"
    ]
  },
  {
    "brand": "Honda",
    "models": [
      "Accord",
      "Civic",
      "CR-V",
      "CR-Z",
      "CRX",
      "Accord Crosstour",
      "Crosstour",
      "Del Sol",
      "Element",
      "Fit",
      "Insight",
      "Odyssey",
      "Passport",
      "Pilot",
      "Prelude",
      "Ridgeline",
      "S2000"
    ]
  },
  {
    "brand": "HUMMER",
    "models": [
      "H1",
      "H2",
      "H3",
      "H3T"
    ]
  },
  {
    "brand": "Hyundai",
    "models": [
      "Accent",
      "Azera",
      "Elantra",
      "Elantra Coupe",
      "Elantra Touring",
      "Entourage",
      "Equus",
      "Excel",
      "Genesis",
      "Genesis Coupe",
      "Santa Fe",
      "Scoupe",
      "Sonata",
      "Tiburon",
      "Tucson",
      "Veloster",
      "Veracruz",
      "XG300",
      "XG350"
    ]
  },
  {
    "brand": "Infiniti",
    "models": [
      "EX35",
      "EX37",
      "FX35",
      "FX37",
      "FX45",
      "FX50",
      "G20",
      "G25",
      "G35",
      "G37",
      "I30",
      "I35",
      "J30",
      "JX35",
      "M30",
      "M35",
      "M35h",
      "M37",
      "M45",
      "M56",
      "Q45",
      "QX4",
      "QX56"
    ]
  },
  {
    "brand": "Isuzu",
    "models": [
      "Amigo",
      "Ascender",
      "Axiom",
      "Hombre",
      "i-280",
      "i-290",
      "i-350",
      "i-370",
      "I-Mark",
      "Impulse",
      "Oasis",
      "Pickup",
      "Rodeo",
      "Stylus",
      "Trooper",
      "Trooper II",
      "VehiCROSS"
    ]
  },
  {
    "brand": "Jaguar",
    "models": [
      "S-Type",
      "X-Type",
      "XF",
      "XJ12",
      "XJ6",
      "XJR",
      "XJR-S",
      "XJS",
      "XJ Vanden Plas",
      "XJ",
      "XJ8",
      "XJ8 L",
      "XJ Sport",
      "XK8",
      "XK",
      "XKR"
    ]
  },
  {
    "brand": "Jeep",
    "models": [
      "Cherokee",
      "CJ",
      "Comanche",
      "Commander",
      "Compass",
      "Grand Cherokee",
      "Grand Wagoneer",
      "Liberty",
      "Patriot",
      "Pickup",
      "Scrambler",
      "Wagoneer",
      "Wrangler"
    ]
  },
  {
    "brand": "Kia",
    "models": [
      "Amanti",
      "Borrego",
      "Forte",
      "Forte Koup",
      "Optima",
      "Rio",
      "Rio5",
      "Rondo",
      "Sedona",
      "Sephia",
      "Sorento",
      "Soul",
      "Spectra",
      "Spectra5",
      "Sportage"
    ]
  },
  {
    "brand": "Lamborghini",
    "models": [
      "Aventador",
      "Countach",
      "Diablo",
      "Gallardo",
      "Jalpa",
      "LM002",
      "Murcielago"
    ]
  },
  {
    "brand": "Lancia",
    "models": [
      "Beta",
      "Zagato"
    ]
  },
  {
    "brand": "Land Rover",
    "models": [
      "Defender",
      "Discovery",
      "Freelander",
      "LR2",
      "LR3",
      "LR4",
      "Range Rover",
      "Range Rover Evoque",
      "Range Rover Sport"
    ]
  },
  {
    "brand": "Lexus",
    "models": [
      "CT 200h",
      "ES 250",
      "ES 300",
      "ES 300h",
      "ES 330",
      "ES 350",
      "GS 300",
      "GS 350",
      "GS 400",
      "GS 430",
      "GS 450h",
      "GS 460",
      "GX 460",
      "GX 470",
      "HS 250h",
      "IS 250",
      "IS 250C",
      "IS 300",
      "IS 350",
      "IS 350C",
      "IS F",
      "LFA",
      "LS 400",
      "LS 430",
      "LS 460",
      "LS 600h",
      "LX 450",
      "LX 470",
      "LX 570",
      "RX 300",
      "RX 330",
      "RX 350",
      "RX 400h",
      "RX 450h",
      "SC 300",
      "SC 400",
      "SC 430"
    ]
  },
  {
    "brand": "Lincoln",
    "models": [
      "Aviator",
      "Blackwood",
      "Continental",
      "LS",
      "Mark LT",
      "Mark VI",
      "Mark VII",
      "Mark VIII",
      "MKS",
      "MKT",
      "MKX",
      "MKZ",
      "Navigator",
      "Navigator L",
      "Town Car",
      "Zephyr"
    ]
  },
  {
    "brand": "Lotus",
    "models": [
      "Elan",
      "Elise",
      "Esprit",
      "Evora",
      "Exige"
    ]
  },
  {
    "brand": "Maserati",
    "models": [
      "430",
      "Biturbo",
      "Coupe",
      "GranSport",
      "GranTurismo",
      "Quattroporte",
      "Spyder"
    ]
  },
  {
    "brand": "Maybach",
    "models": [
      "57",
      "62"
    ]
  },
  {
    "brand": "Mazda",
    "models": [
      "323",
      "626",
      "929",
      "B-Series Pickup",
      "CX-5",
      "CX-7",
      "CX-9",
      "GLC",
      "MAZDA2",
      "MAZDA3",
      "MAZDA5",
      "MAZDA6",
      "MAZDASPEED3",
      "MAZDASPEED6",
      "Miata MX5",
      "Millenia",
      "MPV",
      "MX3",
      "MX6",
      "Navajo",
      "Protege",
      "Protege5",
      "RX-7",
      "RX-8",
      "Tribute"
    ]
  },
  {
    "brand": "McLaren",
    "models": [
      "MP4-12C"
    ]
  },
  {
    "brand": "Mercedes-Benz",
    "models": [
      "190D",
      "190E",
      "240D",
      "300CD",
      "300CE",
      "300D",
      "300E",
      "300TD",
      "300TE",
      "C220",
      "C230",
      "C240",
      "C250",
      "C280",
      "C300",
      "C320",
      "C32 AMG",
      "C350",
      "C36 AMG",
      "C43 AMG",
      "C55 AMG",
      "C63 AMG",
      "CL500",
      "CL550",
      "CL55 AMG",
      "CL600",
      "CL63 AMG",
      "CL65 AMG",
      "CLK320",
      "CLK350",
      "CLK430",
      "CLK500",
      "CLK550",
      "CLK55 AMG",
      "CLK63 AMG",
      "CLS500",
      "CLS550",
      "CLS55 AMG",
      "CLS63 AMG",
      "260E",
      "280CE",
      "280E",
      "400E",
      "500E",
      "E300",
      "E320",
      "E320 Bluetec",
      "E320 CDI",
      "E350",
      "E350 Bluetec",
      "E400 Hybrid",
      "E420",
      "E430",
      "E500",
      "E550",
      "E55 AMG",
      "E63 AMG",
      "G500",
      "G550",
      "G55 AMG",
      "G63 AMG",
      "GL320 Bluetec",
      "GL320 CDI",
      "GL350 Bluetec",
      "GL450",
      "GL550",
      "GLK350",
      "ML320",
      "ML320 Bluetec",
      "ML320 CDI",
      "ML350",
      "ML350 Bluetec",
      "ML430",
      "ML450 Hybrid",
      "ML500",
      "ML550",
      "ML55 AMG",
      "ML63 AMG",
      "R320 Bluetec",
      "R320 CDI",
      "R350",
      "R350 Bluetec",
      "R500",
      "R63 AMG",
      "300SD",
      "300SDL",
      "300SE",
      "300SEL",
      "350SD",
      "350SDL",
      "380SE",
      "380SEC",
      "380SEL",
      "400SE",
      "400SEL",
      "420SEL",
      "500SEC",
      "500SEL",
      "560SEC",
      "560SEL",
      "600SEC",
      "600SEL",
      "S320",
      "S350",
      "S350 Bluetec",
      "S400 Hybrid",
      "S420",
      "S430",
      "S500",
      "S550",
      "S55 AMG",
      "S600",
      "S63 AMG",
      "S65 AMG",
      "300SL",
      "380SL",
      "380SLC",
      "500SL",
      "560SL",
      "600SL",
      "SL320",
      "SL500",
      "SL550",
      "SL55 AMG",
      "SL600",
      "SL63 AMG",
      "SL65 AMG",
      "SLK230",
      "SLK250",
      "SLK280",
      "SLK300",
      "SLK320",
      "SLK32 AMG",
      "SLK350",
      "SLK55 AMG",
      "SLR",
      "SLS AMG",
      "Sprinter"
    ]
  },
  {
    "brand": "Mercury",
    "models": [
      "Capri",
      "Cougar",
      "Grand Marquis",
      "Lynx",
      "Marauder",
      "Mariner",
      "Marquis",
      "Milan",
      "Montego",
      "Monterey",
      "Mountaineer",
      "Mystique",
      "Sable",
      "Topaz",
      "Tracer",
      "Villager",
      "Zephyr"
    ]
  },
  {
    "brand": "Merkur",
    "models": [
      "Scorpio",
      "XR4Ti"
    ]
  },
  {
    "brand": "MINI",
    "models": [
      "Cooper Clubman",
      "Cooper S Clubman",
      "Cooper Countryman",
      "Cooper S Countryman",
      "Cooper Coupe",
      "Cooper S Coupe",
      "Cooper",
      "Cooper S",
      "Cooper Roadster",
      "Cooper S Roadster"
    ]
  },
  {
    "brand": "Mitsubishi",
    "models": [
      "3000GT",
      "Cordia",
      "Diamante",
      "Eclipse",
      "Endeavor",
      "Expo",
      "Galant",
      "i",
      "Lancer",
      "Lancer Evolution",
      "Mighty Max",
      "Mirage",
      "Montero",
      "Montero Sport",
      "Outlander",
      "Outlander Sport",
      "Precis",
      "Raider",
      "Sigma",
      "Starion",
      "Tredia",
      "Van"
    ]
  },
  {
    "brand": "Nissan",
    "models": [
      "200SX",
      "240SX",
      "300ZX",
      "350Z",
      "370Z",
      "Altima",
      "Armada",
      "Axxess",
      "Cube",
      "Frontier",
      "GT-R",
      "Juke",
      "Leaf",
      "Maxima",
      "Murano",
      "Murano CrossCabriolet",
      "NV",
      "NX",
      "Pathfinder",
      "Pickup",
      "Pulsar",
      "Quest",
      "Rogue",
      "Sentra",
      "Stanza",
      "Titan",
      "Van",
      "Versa",
      "Xterra"
    ]
  },
  {
    "brand": "Oldsmobile",
    "models": [
      "88",
      "Achieva",
      "Alero",
      "Aurora",
      "Bravada",
      "Custom Cruiser",
      "Cutlass",
      "Cutlass Calais",
      "Cutlass Ciera",
      "Cutlass Supreme",
      "Firenza",
      "Intrigue",
      "Ninety-Eight",
      "Omega",
      "Regency",
      "Silhouette",
      "Toronado"
    ]
  },
  {
    "brand": "Peugeot",
    "models": [
      "405",
      "504",
      "505",
      "604"
    ]
  },
  {
    "brand": "Plymouth",
    "models": [
      "Acclaim",
      "Arrow",
      "Breeze",
      "Caravelle",
      "Champ",
      "Colt",
      "Conquest",
      "Gran Fury",
      "Grand Voyager",
      "Horizon",
      "Laser",
      "Neon",
      "Prowler",
      "Reliant",
      "Sapporo",
      "Scamp",
      "Sundance",
      "Trailduster",
      "Voyager"
    ]
  },
  {
    "brand": "Pontiac",
    "models": [
      "1000",
      "6000",
      "Aztek",
      "Bonneville",
      "Catalina",
      "Fiero",
      "Firebird",
      "G3",
      "G5",
      "G6",
      "G8",
      "Grand Am",
      "Grand Prix",
      "GTO",
      "J2000",
      "Le Mans",
      "Montana",
      "Parisienne",
      "Phoenix",
      "Safari",
      "Solstice",
      "Sunbird",
      "Sunfire",
      "Torrent",
      "Trans Sport",
      "Vibe"
    ]
  },
  {
    "brand": "Porsche",
    "models": [
      "911",
      "924",
      "928",
      "944",
      "968",
      "Boxster",
      "Carrera GT",
      "Cayenne",
      "Cayman",
      "Panamera"
    ]
  },
  {
    "brand": "RAM",
    "models": [
      "1500",
      "2500",
      "3500",
      "4500"
    ]
  },
  {
    "brand": "Renault",
    "models": [
      "18i",
      "Fuego",
      "Le Car",
      "R18",
      "Sportwagon"
    ]
  },
  {
    "brand": "Rolls-Royce",
    "models": [
      "Camargue",
      "Corniche",
      "Ghost",
      "Park Ward",
      "Phantom",
      "Silver Dawn",
      "Silver Seraph",
      "Silver Spirit",
      "Silver Spur"
    ]
  },
  {
    "brand": "Saab",
    "models": [
      "9-2X",
      "9-3",
      "9-4X",
      "9-5",
      "9-7X",
      "900",
      "9000"
    ]
  },
  {
    "brand": "Saturn",
    "models": [
      "Astra",
      "Aura",
      "ION",
      "L100",
      "L200",
      "L300",
      "LS",
      "LW1",
      "LW2",
      "LW200",
      "LW300",
      "Outlook",
      "Relay",
      "SC1",
      "SC2",
      "Sky",
      "SL",
      "SL1",
      "SL2",
      "SW1",
      "SW2",
      "Vue"
    ]
  },
  {
    "brand": "Scion",
    "models": [
      "FR-S",
      "iQ",
      "tC",
      "xA",
      "xB",
      "xD"
    ]
  },
  {
    "brand": "smart",
    "models": [
      "fortwo"
    ]
  },
  {
    "brand": "SRT",
    "models": [
      "Viper"
    ]
  },
  {
    "brand": "Sterling",
    "models": [
      "825",
      "827"
    ]
  },
  {
    "brand": "Subaru",
    "models": [
      "Baja",
      "Brat",
      "BRZ",
      "Forester",
      "Impreza",
      "Impreza WRX",
      "Justy",
      "L Series",
      "Legacy",
      "Loyale",
      "Outback",
      "SVX",
      "Tribeca",
      "XT",
      "XV Crosstrek"
    ]
  },
  {
    "brand": "Suzuki",
    "models": [
      "Aerio",
      "Equator",
      "Esteem",
      "Forenza",
      "Grand Vitara",
      "Kizashi",
      "Reno",
      "Samurai",
      "Sidekick",
      "Swift",
      "SX4",
      "Verona",
      "Vitara",
      "X-90",
      "XL7"
    ]
  },
  {
    "brand": "Tesla",
    "models": [
      "Roadster",
      "Model S"
    ]
  },
  {
    "brand": "Toyota",
    "models": [
      "4Runner",
      "Avalon",
      "Camry",
      "Celica",
      "Corolla",
      "Corona",
      "Cressida",
      "Echo",
      "FJ Cruiser",
      "Highlander",
      "Land Cruiser",
      "Matrix",
      "MR2",
      "MR2 Spyder",
      "Paseo",
      "Pickup",
      "Previa",
      "Prius",
      "Prius C",
      "Prius V",
      "RAV4",
      "Sequoia",
      "Sienna",
      "Solara",
      "Starlet",
      "Supra",
      "T100",
      "Tacoma",
      "Tercel",
      "Tundra",
      "Van",
      "Venza",
      "Yaris"
    ]
  },
  {
    "brand": "Triumph",
    "models": [
      "TR7",
      "TR8"
    ]
  },
  {
    "brand": "Volkswagen",
    "models": [
      "Beetle",
      "Cabrio",
      "Cabriolet",
      "CC",
      "Corrado",
      "Dasher",
      "Eos",
      "Eurovan",
      "Fox",
      "GLI",
      "Golf R",
      "GTI",
      "Golf",
      "Rabbit",
      "Jetta",
      "Passat",
      "Phaeton",
      "Pickup",
      "Quantum",
      "R32",
      "Routan",
      "Scirocco",
      "Tiguan",
      "Touareg",
      "Vanagon"
    ]
  },
  {
    "brand": "Volvo",
    "models": [
      "240",
      "260",
      "740",
      "760",
      "780",
      "850",
      "940",
      "960",
      "C30",
      "C70",
      "S40",
      "S60",
      "S70",
      "S80",
      "S90",
      "V40",
      "V50",
      "V70",
      "V90",
      "XC60",
      "XC70",
      "XC90"
    ]
  },
  {
    "brand": "Yugo",
    "models": [
      "GV",
      "GVC",
      "GVL",
      "GVS",
      "GVX"
    ]
  }
]`;

const eye_color = ["Amber", "Blue", "Brown", "Gray", "Green", "Hazel", "Red"];

const hair_color = ["Blonde", "Brunette", "Red", "Black"];


function populateLists() {
    var brand_select_list = document.getElementById("Brand");
    var color_select_list = document.getElementById("Color");

    const lists_to_populate = [colors, eye_color, hair_color];

    let car_data = JSON.parse(json);

    for (let i = 0; i < lists_to_populate; i++) {
        for (let i = 0; i < i.length; i++) {
            //console.log(car_data[i]["brand"]);
            var opt = car_data[i]["brand"];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            brand_select_list.appendChild(el);
        }
    }

}

function populateModelList() {
    var selected_brand = document.getElementById("Brand").value;
    var model_select_list = document.getElementById("Model");
    let car_data = JSON.parse(json);

    //Clear current list
    function removeOptions() {
        var i, L = model_select_list.options.length - 1;
        for (i = L; i >= 0; i--) {
            model_select_list.remove(i);
        }
    }

    removeOptions();

    //Find the model list in the JSON and append the list to the drop down menu.
    for (var each_brand = 0; each_brand < car_data.length; each_brand++) {

        if (car_data[each_brand]["brand"] === selected_brand) {


            for (var car_model = 0; car_model < car_data[each_brand]["models"].length; car_model++) {
                var el = document.createElement("option");
                el.textContent = car_data[each_brand]["models"][car_model];
                el.value = car_data[each_brand]["models"][car_model];
                model_select_list.appendChild(el);
            }

        }


    }

}


function getInput() {
    let house_number = document.getElementById("House_Number").value;
    let street_name = document.getElementById("Street").value;
    let brand = document.getElementById("Brand").value;
    let color = document.getElementById("Color").value;
    let license_plate_num = document.getElementById("License Plate #").value;

    console.log(house_number);
    console.log(street_name);
    console.log(brand);
    console.log(color);
    console.log(license_plate_num);


    return [house_number, street_name, brand, color, license_plate_num];

}

