angular.module('starter.pokemons', [])

  .factory('Pkms', function() {

    var service = {};

    service.getPokemonById = function(id){
      var data = service.getPokemons();
      for(var i = 0; i < data.length; i++ ){
        if(data[i].id == id){
          return data[i];
        }
      }
    };

    service.getPokemons = function(){
      return [
        {
          "speAbilities": [
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            },
            {
              "typeEn": "grass",
              "dps": "16.67",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "40",
              "duration": "2.40",
              "nameEn": "Seed Bomb",
              "nameFr": "Canon Graine",
              "id": "14",
              "typeFr": "plante"
            },
            {
              "typeEn": "grass",
              "dps": "25.00",
              "CCchance": "0",
              "esquive": "1.3",
              "damage": "70",
              "duration": "2.80",
              "nameEn": "Power Whip",
              "nameFr": "M\u00e9gafouet",
              "id": "47",
              "typeFr": "plante"
            }
          ],
          "attaque": "126",
          "abilities": [
            {
              "typeId": "13",
              "dps": "10.91",
              "sps": "6.36",
              "damage": "12",
              "typeEn": "normal",
              "duration": "1.1",
              "spe": "7",
              "nameEn": "Tackle",
              "nameFr": "Charge",
              "id": "19",
              "typeFr": "normal"
            },
            {
              "typeId": "10",
              "dps": "10.77",
              "sps": "10.77",
              "damage": "7",
              "typeEn": "grass",
              "duration": "0.65",
              "spe": "7",
              "nameEn": "Vine Whip",
              "nameFr": "Fouet Lianes",
              "id": "9",
              "typeFr": "plante"
            }
          ],
          "nameEn": "Bulbasaur",
          "typesEn": [
            "grass",
            "poison"
          ],
          "nameFr": "Bulbizarre",
          "defense": "126",
          "health": "90",
          "typesFr": [
            "plante",
            "poison"
          ],
          "cp": "1071",
          "id": "001"
        },
        {
          "speAbilities": [
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            },
            {
              "typeEn": "grass",
              "dps": "24.49",
              "CCchance": "5",
              "esquive": "1.7",
              "damage": "120",
              "duration": "4.90",
              "nameEn": "Solar Beam",
              "nameFr": "Lance-Soleil",
              "id": "39",
              "typeFr": "plante"
            },
            {
              "typeEn": "grass",
              "dps": "25.00",
              "CCchance": "0",
              "esquive": "1.3",
              "damage": "70",
              "duration": "2.80",
              "nameEn": "Power Whip",
              "nameFr": "M\u00e9gafouet",
              "id": "47",
              "typeFr": "plante"
            }
          ],
          "attaque": "156",
          "abilities": [
            {
              "typeId": "10",
              "dps": "10.34",
              "sps": "4.83",
              "damage": "15",
              "typeEn": "grass",
              "duration": "1.45",
              "spe": "7",
              "nameEn": "Razor Leaf",
              "nameFr": "Tranch'Herbe",
              "id": "22",
              "typeFr": "plante"
            },
            {
              "typeId": "10",
              "dps": "10.77",
              "sps": "10.77",
              "damage": "7",
              "typeEn": "grass",
              "duration": "0.65",
              "spe": "7",
              "nameEn": "Vine Whip",
              "nameFr": "Fouet Lianes",
              "id": "9",
              "typeFr": "plante"
            }
          ],
          "nameEn": "Ivysaur",
          "typesEn": [
            "grass",
            "poison"
          ],
          "nameFr": "Herbizarre",
          "defense": "158",
          "health": "120",
          "typesFr": [
            "plante",
            "poison"
          ],
          "cp": "1632",
          "id": "002"
        },
        {
          "speAbilities": [
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            },
            {
              "typeEn": "grass",
              "dps": "24.49",
              "CCchance": "5",
              "esquive": "1.7",
              "damage": "120",
              "duration": "4.90",
              "nameEn": "Solar Beam",
              "nameFr": "Lance-Soleil",
              "id": "39",
              "typeFr": "plante"
            },
            {
              "typeEn": "grass",
              "dps": "20.31",
              "CCchance": "5",
              "esquive": "1",
              "damage": "65",
              "duration": "3.20",
              "nameEn": "Petal Blizzard",
              "nameFr": "Temp\u00eate Florale",
              "id": "69",
              "typeFr": "plante"
            }
          ],
          "attaque": "198",
          "abilities": [
            {
              "typeId": "10",
              "dps": "10.34",
              "sps": "4.83",
              "damage": "15",
              "typeEn": "grass",
              "duration": "1.45",
              "spe": "7",
              "nameEn": "Razor Leaf",
              "nameFr": "Tranch'Herbe",
              "id": "22",
              "typeFr": "plante"
            },
            {
              "typeId": "10",
              "dps": "10.77",
              "sps": "10.77",
              "damage": "7",
              "typeEn": "grass",
              "duration": "0.65",
              "spe": "7",
              "nameEn": "Vine Whip",
              "nameFr": "Fouet Lianes",
              "id": "9",
              "typeFr": "plante"
            }
          ],
          "nameEn": "Venusaur",
          "typesEn": [
            "grass",
            "poison"
          ],
          "nameFr": "Florizarre",
          "defense": "200",
          "health": "160",
          "typesFr": [
            "plante",
            "poison"
          ],
          "cp": "2580",
          "id": "003"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fire",
              "dps": "14.29",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "30",
              "duration": "2.10",
              "nameEn": "Flame Burst",
              "nameFr": "Rebondifeu",
              "id": "64",
              "typeFr": "feu"
            },
            {
              "typeEn": "fire",
              "dps": "18.97",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "55",
              "duration": "2.90",
              "nameEn": "Flamethrower",
              "nameFr": "Lance-Flammes",
              "id": "38",
              "typeFr": "feu"
            },
            {
              "typeEn": "fire",
              "dps": "8.06",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "25",
              "duration": "3.10",
              "nameEn": "Flame Charge",
              "nameFr": "Nitrocharge",
              "id": "49",
              "typeFr": "feu"
            }
          ],
          "attaque": "128",
          "abilities": [
            {
              "typeId": "13",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "normal",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Scratch",
              "nameFr": "Griffe",
              "id": "4",
              "typeFr": "normal"
            },
            {
              "typeId": "7",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "fire",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Ember",
              "nameFr": "Flamm\u00e8che",
              "id": "26",
              "typeFr": "feu"
            }
          ],
          "nameEn": "Charmander",
          "typesEn": [
            "fire"
          ],
          "nameFr": "Salam\u00e8che",
          "defense": "108",
          "health": "78",
          "typesFr": [
            "feu"
          ],
          "cp": "955",
          "id": "004"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fire",
              "dps": "14.29",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "30",
              "duration": "2.10",
              "nameEn": "Flame Burst",
              "nameFr": "Rebondifeu",
              "id": "64",
              "typeFr": "feu"
            },
            {
              "typeEn": "fire",
              "dps": "18.97",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "55",
              "duration": "2.90",
              "nameEn": "Flamethrower",
              "nameFr": "Lance-Flammes",
              "id": "38",
              "typeFr": "feu"
            },
            {
              "typeEn": "fire",
              "dps": "14.29",
              "CCchance": "5",
              "esquive": "0.51",
              "damage": "40",
              "duration": "2.80",
              "nameEn": "Fire Punch",
              "nameFr": "Poing de Feu",
              "id": "54",
              "typeFr": "feu"
            }
          ],
          "attaque": "160",
          "abilities": [
            {
              "typeId": "13",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "normal",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Scratch",
              "nameFr": "Griffe",
              "id": "4",
              "typeFr": "normal"
            },
            {
              "typeId": "7",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "fire",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Ember",
              "nameFr": "Flamm\u00e8che",
              "id": "26",
              "typeFr": "feu"
            }
          ],
          "nameEn": "Charmeleon",
          "typesEn": [
            "fire"
          ],
          "nameFr": "Reptincel",
          "defense": "140",
          "health": "116",
          "typesFr": [
            "feu"
          ],
          "cp": "1557",
          "id": "005"
        },
        {
          "speAbilities": [
            {
              "typeEn": "dragon",
              "dps": "23.33",
              "CCchance": "25",
              "esquive": "0.2",
              "damage": "35",
              "duration": "1.50",
              "nameEn": "Dragon Claw",
              "nameFr": "Dracogriffe",
              "id": "26",
              "typeFr": "dragon"
            },
            {
              "typeEn": "fire",
              "dps": "18.97",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "55",
              "duration": "2.90",
              "nameEn": "Flamethrower",
              "nameFr": "Lance-Flammes",
              "id": "38",
              "typeFr": "feu"
            },
            {
              "typeEn": "fire",
              "dps": "24.39",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "100",
              "duration": "4.10",
              "nameEn": "Fire Blast",
              "nameFr": "D\u00e9flagration",
              "id": "22",
              "typeFr": "feu"
            }
          ],
          "attaque": "212",
          "abilities": [
            {
              "typeId": "8",
              "dps": "12.00",
              "sps": "9.33",
              "damage": "9",
              "typeEn": "flying",
              "duration": "0.75",
              "spe": "7",
              "nameEn": "Wing Attack",
              "nameFr": "Cru-Aile",
              "id": "8",
              "typeFr": "vol"
            },
            {
              "typeId": "7",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "fire",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Ember",
              "nameFr": "Flamm\u00e8che",
              "id": "26",
              "typeFr": "feu"
            }
          ],
          "nameEn": "Charizard",
          "typesEn": [
            "fire",
            "flying"
          ],
          "nameFr": "Dracaufeu",
          "defense": "182",
          "health": "156",
          "typesFr": [
            "feu",
            "vol"
          ],
          "cp": "2602",
          "id": "006"
        },
        {
          "speAbilities": [
            {
              "typeEn": "water",
              "dps": "10.64",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "25",
              "duration": "2.35",
              "nameEn": "Aqua Jet",
              "nameFr": "Aqua Jet",
              "id": "2",
              "typeFr": "eau"
            },
            {
              "typeEn": "water",
              "dps": "19.15",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "45",
              "duration": "2.35",
              "nameEn": "Aqua Tail",
              "nameFr": "Hydroqueue",
              "id": "34",
              "typeFr": "eau"
            },
            {
              "id": "82",
              "nameEn": "",
              "nameFr": "Vibraqua",
              "typeEn": "water",
              "typeFr": "eau",
              "damage": "25",
              "duration": "3.30",
              "dps": "7.58",
              "CCchance": "5",
              "esquive": "1"
            }
          ],
          "attaque": "112",
          "abilities": [
            {
              "typeId": "13",
              "dps": "10.91",
              "sps": "6.36",
              "damage": "12",
              "typeEn": "normal",
              "duration": "1.1",
              "spe": "7",
              "nameEn": "Tackle",
              "nameFr": "Charge",
              "id": "19",
              "typeFr": "normal"
            },
            {
              "typeId": "18",
              "dps": "10.87",
              "sps": "6.52",
              "damage": "25",
              "typeEn": "water",
              "duration": "2.3",
              "spe": "15",
              "nameEn": "Bubble",
              "nameFr": "\u00c9cume",
              "id": "38",
              "typeFr": "eau"
            }
          ],
          "nameEn": "Squirtle",
          "typesEn": [
            "water"
          ],
          "nameFr": "Carapuce",
          "defense": "142",
          "health": "88",
          "typesFr": [
            "eau"
          ],
          "cp": "1008",
          "id": "007"
        },
        {
          "speAbilities": [
            {
              "typeEn": "water",
              "dps": "10.64",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "25",
              "duration": "2.35",
              "nameEn": "Aqua Jet",
              "nameFr": "Aqua Jet",
              "id": "2",
              "typeFr": "eau"
            },
            {
              "typeEn": "water",
              "dps": "23.68",
              "CCchance": "5",
              "esquive": "2.1",
              "damage": "90",
              "duration": "3.80",
              "nameEn": "Hydro Pump",
              "nameFr": "Hydrocanon",
              "id": "33",
              "typeFr": "eau"
            },
            {
              "typeEn": "ice",
              "dps": "17.81",
              "CCchance": "5",
              "esquive": "1.35",
              "damage": "65",
              "duration": "3.65",
              "nameEn": "Ice Beam",
              "nameFr": "Laser Glace",
              "id": "40",
              "typeFr": "glace"
            }
          ],
          "attaque": "144",
          "abilities": [
            {
              "typeId": "2",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dark",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Bite",
              "nameFr": "Morsure",
              "id": "16",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeId": "18",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "water",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Water Gun",
              "nameFr": "Pistolet \u00e0 O",
              "id": "5",
              "typeFr": "eau"
            }
          ],
          "nameEn": "Wartortle",
          "typesEn": [
            "water"
          ],
          "nameFr": "Carabaffe",
          "defense": "176",
          "health": "118",
          "typesFr": [
            "eau"
          ],
          "cp": "1582",
          "id": "008"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ice",
              "dps": "17.81",
              "CCchance": "5",
              "esquive": "1.35",
              "damage": "65",
              "duration": "3.65",
              "nameEn": "Ice Beam",
              "nameFr": "Laser Glace",
              "id": "40",
              "typeFr": "glace"
            },
            {
              "typeEn": "water",
              "dps": "23.68",
              "CCchance": "5",
              "esquive": "2.1",
              "damage": "90",
              "duration": "3.80",
              "nameEn": "Hydro Pump",
              "nameFr": "Hydrocanon",
              "id": "33",
              "typeFr": "eau"
            },
            {
              "typeEn": "steel",
              "dps": "15.38",
              "CCchance": "5",
              "esquive": "1.1",
              "damage": "60",
              "duration": "3.90",
              "nameEn": "Flash Cannon",
              "nameFr": "Luminocanon",
              "id": "43",
              "typeFr": "acier"
            }
          ],
          "attaque": "186",
          "abilities": [
            {
              "typeId": "2",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dark",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Bite",
              "nameFr": "Morsure",
              "id": "16",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeId": "18",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "water",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Water Gun",
              "nameFr": "Pistolet \u00e0 O",
              "id": "5",
              "typeFr": "eau"
            }
          ],
          "nameEn": "Blastoise",
          "typesEn": [
            "water"
          ],
          "nameFr": "Tortank",
          "defense": "222",
          "health": "158",
          "typesFr": [
            "eau"
          ],
          "cp": "2542",
          "id": "009"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "8.88",
              "CCchance": "0",
              "esquive": "0.7",
              "damage": "15",
              "duration": "1.69",
              "nameEn": "Struggle",
              "nameFr": "Lutte",
              "id": "44",
              "typeFr": "normal"
            }
          ],
          "attaque": "62",
          "abilities": [
            {
              "typeId": "13",
              "dps": "10.91",
              "sps": "6.36",
              "damage": "12",
              "typeEn": "normal",
              "duration": "1.1",
              "spe": "7",
              "nameEn": "Tackle",
              "nameFr": "Charge",
              "id": "19",
              "typeFr": "normal"
            },
            {
              "typeId": "1",
              "dps": "11.11",
              "sps": "15.56",
              "damage": "5",
              "typeEn": "bug",
              "duration": "0.45",
              "spe": "7",
              "nameEn": "Bug Bite",
              "nameFr": "Piq\u00fbre",
              "id": "14",
              "typeFr": "insecte"
            }
          ],
          "nameEn": "Caterpie",
          "typesEn": [
            "bug"
          ],
          "nameFr": "Chenipan",
          "defense": "66",
          "health": "90",
          "typesFr": [
            "insecte"
          ],
          "cp": "443",
          "id": "010"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "8.88",
              "CCchance": "0",
              "esquive": "0.7",
              "damage": "15",
              "duration": "1.69",
              "nameEn": "Struggle",
              "nameFr": "Lutte",
              "id": "44",
              "typeFr": "normal"
            }
          ],
          "attaque": "56",
          "abilities": [
            {
              "typeId": "13",
              "dps": "10.91",
              "sps": "6.36",
              "damage": "12",
              "typeEn": "normal",
              "duration": "1.1",
              "spe": "7",
              "nameEn": "Tackle",
              "nameFr": "Charge",
              "id": "19",
              "typeFr": "normal"
            },
            {
              "typeId": "1",
              "dps": "11.11",
              "sps": "15.56",
              "damage": "5",
              "typeEn": "bug",
              "duration": "0.45",
              "spe": "7",
              "nameEn": "Bug Bite",
              "nameFr": "Piq\u00fbre",
              "id": "14",
              "typeFr": "insecte"
            }
          ],
          "nameEn": "Metapod",
          "typesEn": [
            "bug"
          ],
          "nameFr": "Chrysacier",
          "defense": "86",
          "health": "100",
          "typesFr": [
            "insecte"
          ],
          "cp": "477",
          "id": "011"
        },
        {
          "speAbilities": [
            {
              "typeEn": "psychc",
              "dps": "19.64",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "55",
              "duration": "2.80",
              "nameEn": "Psychic",
              "nameFr": "Psyko",
              "id": "60",
              "typeFr": "psy"
            },
            {
              "typeEn": "bug",
              "dps": "17.65",
              "CCchance": "5",
              "esquive": "1.5",
              "damage": "75",
              "duration": "4.25",
              "nameEn": "Bug Buzz",
              "nameFr": "Bourdon",
              "id": "10",
              "typeFr": "insecte"
            },
            {
              "typeEn": "bug",
              "dps": "14.52",
              "CCchance": "5",
              "esquive": "1",
              "damage": "45",
              "duration": "3.10",
              "nameEn": "Signal Beam",
              "nameFr": "Rayon Signal",
              "id": "63",
              "typeFr": "insecte"
            }
          ],
          "attaque": "144",
          "abilities": [
            {
              "typeId": "15",
              "dps": "9.93",
              "sps": "4.64",
              "damage": "15",
              "typeEn": "psychc",
              "duration": "1.51",
              "spe": "7",
              "nameEn": "Confusion",
              "nameFr": "Choc Mental",
              "id": "33",
              "typeFr": "psy"
            },
            {
              "typeId": "1",
              "dps": "11.11",
              "sps": "15.56",
              "damage": "5",
              "typeEn": "bug",
              "duration": "0.45",
              "spe": "7",
              "nameEn": "Bug Bite",
              "nameFr": "Piq\u00fbre",
              "id": "14",
              "typeFr": "insecte"
            }
          ],
          "nameEn": "Butterfree",
          "typesEn": [
            "bug",
            "flying"
          ],
          "nameFr": "Papillusion",
          "defense": "144",
          "health": "120",
          "typesFr": [
            "insecte",
            "vol"
          ],
          "cp": "1454",
          "id": "012"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "8.88",
              "CCchance": "0",
              "esquive": "0.7",
              "damage": "15",
              "duration": "1.69",
              "nameEn": "Struggle",
              "nameFr": "Lutte",
              "id": "44",
              "typeFr": "normal"
            }
          ],
          "attaque": "68",
          "abilities": [
            {
              "typeId": "1",
              "dps": "11.11",
              "sps": "15.56",
              "damage": "5",
              "typeEn": "bug",
              "duration": "0.45",
              "spe": "7",
              "nameEn": "Bug Bite",
              "nameFr": "Piq\u00fbre",
              "id": "14",
              "typeFr": "insecte"
            },
            {
              "typeId": "14",
              "dps": "10.43",
              "sps": "6.96",
              "damage": "6",
              "typeEn": "poison",
              "duration": "0.575",
              "spe": "4",
              "nameEn": "Poison Sting",
              "nameFr": "Dard-Venin",
              "id": "21",
              "typeFr": "poison"
            }
          ],
          "nameEn": "Weedle",
          "typesEn": [
            "bug",
            "poison"
          ],
          "nameFr": "Aspicot",
          "defense": "64",
          "health": "80",
          "typesFr": [
            "insecte",
            "poison"
          ],
          "cp": "449",
          "id": "013"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "8.88",
              "CCchance": "0",
              "esquive": "0.7",
              "damage": "15",
              "duration": "1.69",
              "nameEn": "Struggle",
              "nameFr": "Lutte",
              "id": "44",
              "typeFr": "normal"
            }
          ],
          "attaque": "62",
          "abilities": [
            {
              "typeId": "1",
              "dps": "11.11",
              "sps": "15.56",
              "damage": "5",
              "typeEn": "bug",
              "duration": "0.45",
              "spe": "7",
              "nameEn": "Bug Bite",
              "nameFr": "Piq\u00fbre",
              "id": "14",
              "typeFr": "insecte"
            },
            {
              "typeId": "14",
              "dps": "10.43",
              "sps": "6.96",
              "damage": "6",
              "typeEn": "poison",
              "duration": "0.575",
              "spe": "4",
              "nameEn": "Poison Sting",
              "nameFr": "Dard-Venin",
              "id": "21",
              "typeFr": "poison"
            }
          ],
          "nameEn": "Kakuna",
          "typesEn": [
            "bug",
            "poison"
          ],
          "nameFr": "Coconfort",
          "defense": "82",
          "health": "90",
          "typesFr": [
            "insecte",
            "poison"
          ],
          "cp": "485",
          "id": "014"
        },
        {
          "speAbilities": [
            {
              "typeEn": "flying",
              "dps": "10.34",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "30",
              "duration": "2.90",
              "nameEn": "Aerial Ace",
              "nameFr": "A\u00e9ropique",
              "id": "1",
              "typeFr": "vol"
            },
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            },
            {
              "typeEn": "bug",
              "dps": "16.67",
              "CCchance": "5",
              "esquive": "0.25",
              "damage": "35",
              "duration": "2.10",
              "nameEn": "X-Scissor",
              "nameFr": "Plaie-Croix",
              "id": "52",
              "typeFr": "insecte"
            }
          ],
          "attaque": "144",
          "abilities": [
            {
              "typeId": "1",
              "dps": "11.11",
              "sps": "15.56",
              "damage": "5",
              "typeEn": "bug",
              "duration": "0.45",
              "spe": "7",
              "nameEn": "Bug Bite",
              "nameFr": "Piq\u00fbre",
              "id": "14",
              "typeFr": "insecte"
            },
            {
              "typeId": "14",
              "dps": "11.43",
              "sps": "6.67",
              "damage": "12",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Poison Jab",
              "nameFr": "Direct Toxik",
              "id": "13",
              "typeFr": "poison"
            }
          ],
          "nameEn": "Beedrill",
          "typesEn": [
            "bug",
            "poison"
          ],
          "nameFr": "Dardargnan",
          "defense": "130",
          "health": "130",
          "typesFr": [
            "insecte",
            "poison"
          ],
          "cp": "1439",
          "id": "015"
        },
        {
          "speAbilities": [
            {
              "typeEn": "dragon",
              "dps": "11.11",
              "CCchance": "5",
              "esquive": "1.75",
              "damage": "30",
              "duration": "2.70",
              "nameEn": "Twister",
              "nameFr": "Ouragan",
              "id": "50",
              "typeFr": "dragon"
            },
            {
              "typeEn": "flying",
              "dps": "10.34",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "30",
              "duration": "2.90",
              "nameEn": "Aerial Ace",
              "nameFr": "A\u00e9ropique",
              "id": "1",
              "typeFr": "vol"
            },
            {
              "typeEn": "flying",
              "dps": "9.09",
              "CCchance": "25",
              "esquive": "0.9",
              "damage": "30",
              "duration": "3.30",
              "nameEn": "Air Cutter",
              "nameFr": "Tranch'Air",
              "id": "73",
              "typeFr": "vol"
            }
          ],
          "attaque": "94",
          "abilities": [
            {
              "typeId": "13",
              "dps": "10.91",
              "sps": "6.36",
              "damage": "12",
              "typeEn": "normal",
              "duration": "1.1",
              "spe": "7",
              "nameEn": "Tackle",
              "nameFr": "Charge",
              "id": "19",
              "typeFr": "normal"
            },
            {
              "typeId": "13",
              "dps": "7.52",
              "sps": "5.26",
              "damage": "10",
              "typeEn": "normal",
              "duration": "1.33",
              "spe": "7",
              "nameEn": "Quick Attack",
              "nameFr": "Vive-Attaque",
              "id": "34",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Pidgey",
          "typesEn": [
            "normal",
            "flying"
          ],
          "nameFr": "Roucool",
          "defense": "90",
          "health": "80",
          "typesFr": [
            "normal",
            "vol"
          ],
          "cp": "679",
          "id": "016"
        },
        {
          "speAbilities": [
            {
              "typeEn": "dragon",
              "dps": "11.11",
              "CCchance": "5",
              "esquive": "1.75",
              "damage": "30",
              "duration": "2.70",
              "nameEn": "Twister",
              "nameFr": "Ouragan",
              "id": "50",
              "typeFr": "dragon"
            },
            {
              "typeEn": "flying",
              "dps": "10.34",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "30",
              "duration": "2.90",
              "nameEn": "Aerial Ace",
              "nameFr": "A\u00e9ropique",
              "id": "1",
              "typeFr": "vol"
            },
            {
              "typeEn": "flying",
              "dps": "9.09",
              "CCchance": "25",
              "esquive": "0.9",
              "damage": "30",
              "duration": "3.30",
              "nameEn": "Air Cutter",
              "nameFr": "Tranch'Air",
              "id": "73",
              "typeFr": "vol"
            }
          ],
          "attaque": "126",
          "abilities": [
            {
              "typeId": "8",
              "dps": "12.00",
              "sps": "9.33",
              "damage": "9",
              "typeEn": "flying",
              "duration": "0.75",
              "spe": "7",
              "nameEn": "Wing Attack",
              "nameFr": "Cru-Aile",
              "id": "8",
              "typeFr": "vol"
            },
            {
              "typeId": "17",
              "dps": "11.28",
              "sps": "3.01",
              "damage": "15",
              "typeEn": "steel",
              "duration": "1.33",
              "spe": "4",
              "nameEn": "Steel Wing",
              "nameFr": "Aile d'Acier",
              "id": "18",
              "typeFr": "acier"
            }
          ],
          "nameEn": "Pidgeotto",
          "typesEn": [
            "normal",
            "flying"
          ],
          "nameFr": "Roucoups",
          "defense": "122",
          "health": "126",
          "typesFr": [
            "normal",
            "vol"
          ],
          "cp": "1223",
          "id": "017"
        },
        {
          "speAbilities": [
            {
              "typeEn": "flying",
              "dps": "25.00",
              "CCchance": "5",
              "esquive": "1.77",
              "damage": "80",
              "duration": "3.20",
              "nameEn": "Hurricane",
              "nameFr": "Vent Violent",
              "id": "81",
              "typeFr": "vol"
            },
            {
              "typeEn": "flying",
              "dps": "10.34",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "30",
              "duration": "2.90",
              "nameEn": "Aerial Ace",
              "nameFr": "A\u00e9ropique",
              "id": "1",
              "typeFr": "vol"
            },
            {
              "typeEn": "flying",
              "dps": "9.09",
              "CCchance": "25",
              "esquive": "0.9",
              "damage": "30",
              "duration": "3.30",
              "nameEn": "Air Cutter",
              "nameFr": "Tranch'Air",
              "id": "73",
              "typeFr": "vol"
            }
          ],
          "attaque": "170",
          "abilities": [
            {
              "typeId": "8",
              "dps": "12.00",
              "sps": "9.33",
              "damage": "9",
              "typeEn": "flying",
              "duration": "0.75",
              "spe": "7",
              "nameEn": "Wing Attack",
              "nameFr": "Cru-Aile",
              "id": "8",
              "typeFr": "vol"
            },
            {
              "typeId": "17",
              "dps": "11.28",
              "sps": "3.01",
              "damage": "15",
              "typeEn": "steel",
              "duration": "1.33",
              "spe": "4",
              "nameEn": "Steel Wing",
              "nameFr": "Aile d'Acier",
              "id": "18",
              "typeFr": "acier"
            }
          ],
          "nameEn": "Pidgeot",
          "typesEn": [
            "normal",
            "flying"
          ],
          "nameFr": "Roucarnage",
          "defense": "166",
          "health": "166",
          "typesFr": [
            "normal",
            "vol"
          ],
          "cp": "2091",
          "id": "018"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ground",
              "dps": "12.07",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "70",
              "duration": "5.80",
              "nameEn": "Dig",
              "nameFr": "Tunnel",
              "id": "75",
              "typeFr": "sol"
            },
            {
              "typeEn": "normal",
              "dps": "16.67",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "35",
              "duration": "2.10",
              "nameEn": "Hyper Fang",
              "nameFr": "Croc de Mort",
              "id": "20",
              "typeFr": "normal"
            },
            {
              "typeEn": "normal",
              "dps": "25.64",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "40",
              "duration": "1.56",
              "nameEn": "Body Slam",
              "nameFr": "Plaquage",
              "id": "53",
              "typeFr": "normal"
            }
          ],
          "attaque": "92",
          "abilities": [
            {
              "typeId": "13",
              "dps": "10.91",
              "sps": "6.36",
              "damage": "12",
              "typeEn": "normal",
              "duration": "1.1",
              "spe": "7",
              "nameEn": "Tackle",
              "nameFr": "Charge",
              "id": "19",
              "typeFr": "normal"
            },
            {
              "typeId": "13",
              "dps": "7.52",
              "sps": "5.26",
              "damage": "10",
              "typeEn": "normal",
              "duration": "1.33",
              "spe": "7",
              "nameEn": "Quick Attack",
              "nameFr": "Vive-Attaque",
              "id": "34",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Rattata",
          "typesEn": [
            "normal"
          ],
          "nameFr": "Rattata",
          "defense": "86",
          "health": "60",
          "typesFr": [
            "normal"
          ],
          "cp": "581",
          "id": "019"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ground",
              "dps": "12.07",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "70",
              "duration": "5.80",
              "nameEn": "Dig",
              "nameFr": "Tunnel",
              "id": "75",
              "typeFr": "sol"
            },
            {
              "typeEn": "normal",
              "dps": "16.67",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "35",
              "duration": "2.10",
              "nameEn": "Hyper Fang",
              "nameFr": "Croc de Mort",
              "id": "20",
              "typeFr": "normal"
            },
            {
              "typeEn": "normal",
              "dps": "24.00",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "120",
              "duration": "5.00",
              "nameEn": "Hyper Beam",
              "nameFr": "Ultralaser",
              "id": "77",
              "typeFr": "normal"
            }
          ],
          "attaque": "146",
          "abilities": [
            {
              "typeId": "2",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dark",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Bite",
              "nameFr": "Morsure",
              "id": "16",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeId": "13",
              "dps": "7.52",
              "sps": "5.26",
              "damage": "10",
              "typeEn": "normal",
              "duration": "1.33",
              "spe": "7",
              "nameEn": "Quick Attack",
              "nameFr": "Vive-Attaque",
              "id": "34",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Raticate",
          "typesEn": [
            "normal"
          ],
          "nameFr": "Rattatac",
          "defense": "150",
          "health": "110",
          "typesFr": [
            "normal"
          ],
          "cp": "1444",
          "id": "020"
        },
        {
          "speAbilities": [
            {
              "typeEn": "flying",
              "dps": "10.34",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "30",
              "duration": "2.90",
              "nameEn": "Aerial Ace",
              "nameFr": "A\u00e9ropique",
              "id": "1",
              "typeFr": "vol"
            },
            {
              "typeEn": "dragon",
              "dps": "11.11",
              "CCchance": "5",
              "esquive": "1.75",
              "damage": "30",
              "duration": "2.70",
              "nameEn": "Twister",
              "nameFr": "Ouragan",
              "id": "50",
              "typeFr": "dragon"
            },
            {
              "typeEn": "flying",
              "dps": "14.81",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "40",
              "duration": "2.70",
              "nameEn": "Drill Peck",
              "nameFr": "Bec Vrille",
              "id": "5",
              "typeFr": "vol"
            }
          ],
          "attaque": "102",
          "abilities": [
            {
              "typeId": "13",
              "dps": "7.52",
              "sps": "5.26",
              "damage": "10",
              "typeEn": "normal",
              "duration": "1.33",
              "spe": "7",
              "nameEn": "Quick Attack",
              "nameFr": "Vive-Attaque",
              "id": "34",
              "typeFr": "normal"
            },
            {
              "typeId": "8",
              "dps": "8.70",
              "sps": "8.70",
              "damage": "10",
              "typeEn": "flying",
              "duration": "1.15",
              "spe": "10",
              "nameEn": "Peck",
              "nameFr": "Picpic",
              "id": "28",
              "typeFr": "vol"
            }
          ],
          "nameEn": "Spearow",
          "typesEn": [
            "normal",
            "flying"
          ],
          "nameFr": "Piafabec",
          "defense": "78",
          "health": "80",
          "typesFr": [
            "normal",
            "vol"
          ],
          "cp": "686",
          "id": "021"
        },
        {
          "speAbilities": [
            {
              "typeEn": "flying",
              "dps": "10.34",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "30",
              "duration": "2.90",
              "nameEn": "Aerial Ace",
              "nameFr": "A\u00e9ropique",
              "id": "1",
              "typeFr": "vol"
            },
            {
              "typeEn": "dragon",
              "dps": "11.11",
              "CCchance": "5",
              "esquive": "1.75",
              "damage": "30",
              "duration": "2.70",
              "nameEn": "Twister",
              "nameFr": "Ouragan",
              "id": "50",
              "typeFr": "dragon"
            },
            {
              "typeEn": "ground",
              "dps": "14.71",
              "CCchance": "25",
              "esquive": "0.7",
              "damage": "50",
              "duration": "3.40",
              "nameEn": "Drill Run",
              "nameFr": "Tunnelier",
              "id": "76",
              "typeFr": "sol"
            }
          ],
          "attaque": "168",
          "abilities": [
            {
              "typeId": "17",
              "dps": "11.28",
              "sps": "3.01",
              "damage": "15",
              "typeEn": "steel",
              "duration": "1.33",
              "spe": "4",
              "nameEn": "Steel Wing",
              "nameFr": "Aile d'Acier",
              "id": "18",
              "typeFr": "acier"
            },
            {
              "typeId": "8",
              "dps": "8.70",
              "sps": "8.70",
              "damage": "10",
              "typeEn": "flying",
              "duration": "1.15",
              "spe": "10",
              "nameEn": "Peck",
              "nameFr": "Picpic",
              "id": "28",
              "typeFr": "vol"
            }
          ],
          "nameEn": "Fearow",
          "typesEn": [
            "normal",
            "flying"
          ],
          "nameFr": "Rapasdepic",
          "defense": "146",
          "health": "130",
          "typesFr": [
            "normal",
            "vol"
          ],
          "cp": "1746",
          "id": "022"
        },
        {
          "speAbilities": [
            {
              "typeEn": "poison",
              "dps": "21.67",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "65",
              "duration": "3.00",
              "nameEn": "Gunk Shot",
              "nameFr": "D\u00e9tricanon",
              "id": "23",
              "typeFr": "poison"
            },
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            },
            {
              "typeEn": "normal",
              "dps": "6.25",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "25",
              "duration": "4.00",
              "nameEn": "Wrap",
              "nameFr": "Ligotage",
              "id": "41",
              "typeFr": "normal"
            }
          ],
          "attaque": "112",
          "abilities": [
            {
              "typeId": "14",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Acid",
              "nameFr": "Acide",
              "id": "25",
              "typeFr": "poison"
            },
            {
              "typeId": "14",
              "dps": "10.43",
              "sps": "6.96",
              "damage": "6",
              "typeEn": "poison",
              "duration": "0.575",
              "spe": "4",
              "nameEn": "Poison Sting",
              "nameFr": "Dard-Venin",
              "id": "21",
              "typeFr": "poison"
            }
          ],
          "nameEn": "Ekans",
          "typesEn": [
            "poison"
          ],
          "nameFr": "Abo",
          "defense": "112",
          "health": "70",
          "typesFr": [
            "poison"
          ],
          "cp": "824",
          "id": "023"
        },
        {
          "speAbilities": [
            {
              "typeEn": "poison",
              "dps": "21.67",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "65",
              "duration": "3.00",
              "nameEn": "Gunk Shot",
              "nameFr": "D\u00e9tricanon",
              "id": "23",
              "typeFr": "poison"
            },
            {
              "typeEn": "poison",
              "dps": "20.59",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "70",
              "duration": "3.40",
              "nameEn": "Sludge Wave",
              "nameFr": "Cradovague",
              "id": "19",
              "typeFr": "poison"
            },
            {
              "typeEn": "dark",
              "dps": "12.86",
              "CCchance": "5",
              "esquive": "1.1",
              "damage": "45",
              "duration": "3.50",
              "nameEn": "Dark Pulse",
              "nameFr": "Vibrobscur",
              "id": "83",
              "typeFr": "t\u00e9n\u00e8bres"
            }
          ],
          "attaque": "166",
          "abilities": [
            {
              "typeId": "14",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Acid",
              "nameFr": "Acide",
              "id": "25",
              "typeFr": "poison"
            },
            {
              "typeId": "2",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dark",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Bite",
              "nameFr": "Morsure",
              "id": "16",
              "typeFr": "t\u00e9n\u00e8bres"
            }
          ],
          "nameEn": "Arbok",
          "typesEn": [
            "poison"
          ],
          "nameFr": "Arbok",
          "defense": "166",
          "health": "120",
          "typesFr": [
            "poison"
          ],
          "cp": "1767",
          "id": "024"
        },
        {
          "speAbilities": [
            {
              "typeEn": "electr",
              "dps": "20.37",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "55",
              "duration": "2.70",
              "nameEn": "Thunderbolt",
              "nameFr": "Tonnerre",
              "id": "72",
              "typeFr": "\u00e9leck"
            },
            {
              "typeEn": "electr",
              "dps": "14.00",
              "CCchance": "5",
              "esquive": "0.7",
              "damage": "35",
              "duration": "2.50",
              "nameEn": "Discharge",
              "nameFr": "Coup d'Jus",
              "id": "17",
              "typeFr": "\u00e9leck"
            },
            {
              "typeEn": "electr",
              "dps": "23.26",
              "CCchance": "5",
              "esquive": "1.55",
              "damage": "100",
              "duration": "4.30",
              "nameEn": "Thunder",
              "nameFr": "Fatal-Foudre",
              "id": "31",
              "typeFr": "\u00e9leck"
            }
          ],
          "attaque": "124",
          "abilities": [
            {
              "typeId": "4",
              "dps": "8.33",
              "sps": "11.67",
              "damage": "5",
              "typeEn": "electr",
              "duration": "0.6",
              "spe": "7",
              "nameEn": "Thunder Shock",
              "nameFr": "\u00c9clair",
              "id": "30",
              "typeFr": "\u00e9leck"
            },
            {
              "typeId": "13",
              "dps": "7.52",
              "sps": "5.26",
              "damage": "10",
              "typeEn": "normal",
              "duration": "1.33",
              "spe": "7",
              "nameEn": "Quick Attack",
              "nameFr": "Vive-Attaque",
              "id": "34",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Pikachu",
          "typesEn": [
            "electr"
          ],
          "nameFr": "Pikachu",
          "defense": "108",
          "health": "70",
          "typesFr": [
            "\u00e9leck"
          ],
          "cp": "887",
          "id": "025"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fight",
              "dps": "18.75",
              "CCchance": "25",
              "esquive": "0.4",
              "damage": "30",
              "duration": "1.60",
              "nameEn": "Brick Break",
              "nameFr": "Casse-Brique",
              "id": "15",
              "typeFr": "combat"
            },
            {
              "typeEn": "electr",
              "dps": "16.67",
              "CCchance": "5",
              "esquive": "0.25",
              "damage": "40",
              "duration": "2.40",
              "nameEn": "Thunder Punch",
              "nameFr": "Poing-\u00c9clair",
              "id": "55",
              "typeFr": "\u00e9leck"
            },
            {
              "typeEn": "electr",
              "dps": "23.26",
              "CCchance": "5",
              "esquive": "1.55",
              "damage": "100",
              "duration": "4.30",
              "nameEn": "Thunder",
              "nameFr": "Fatal-Foudre",
              "id": "31",
              "typeFr": "\u00e9leck"
            }
          ],
          "attaque": "200",
          "abilities": [
            {
              "typeId": "4",
              "dps": "8.33",
              "sps": "11.67",
              "damage": "5",
              "typeEn": "electr",
              "duration": "0.6",
              "spe": "7",
              "nameEn": "Thunder Shock",
              "nameFr": "\u00c9clair",
              "id": "30",
              "typeFr": "\u00e9leck"
            },
            {
              "typeId": "4",
              "dps": "10.00",
              "sps": "5.71",
              "damage": "7",
              "typeEn": "electr",
              "duration": "0.7",
              "spe": "4",
              "nameEn": "Spark",
              "nameFr": "\u00c9tincelle",
              "id": "24",
              "typeFr": "\u00e9leck"
            }
          ],
          "nameEn": "Raichu",
          "typesEn": [
            "electr"
          ],
          "nameFr": "Raichu",
          "defense": "154",
          "health": "120",
          "typesFr": [
            "\u00e9leck"
          ],
          "cp": "2028",
          "id": "026"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ground",
              "dps": "12.07",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "70",
              "duration": "5.80",
              "nameEn": "Dig",
              "nameFr": "Tunnel",
              "id": "75",
              "typeFr": "sol"
            },
            {
              "typeEn": "rock",
              "dps": "15.63",
              "CCchance": "5",
              "esquive": "1.4",
              "damage": "50",
              "duration": "3.20",
              "nameEn": "Rock Slide",
              "nameFr": "\u00c9boulement",
              "id": "27",
              "typeFr": "roche"
            },
            {
              "typeEn": "rock",
              "dps": "8.82",
              "CCchance": "25",
              "esquive": "0.9",
              "damage": "30",
              "duration": "3.40",
              "nameEn": "Rock Tomb",
              "nameFr": "Tomberoche",
              "id": "71",
              "typeFr": "roche"
            }
          ],
          "attaque": "90",
          "abilities": [
            {
              "typeId": "13",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "normal",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Scratch",
              "nameFr": "Griffe",
              "id": "4",
              "typeFr": "normal"
            },
            {
              "typeId": "11",
              "dps": "10.91",
              "sps": "12.73",
              "damage": "6",
              "typeEn": "ground",
              "duration": "0.55",
              "spe": "7",
              "nameEn": "Mud Shot",
              "nameFr": "Tir de Boue",
              "id": "2",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Sandshrew",
          "typesEn": [
            "ground"
          ],
          "nameFr": "Sabelette",
          "defense": "114",
          "health": "100",
          "typesFr": [
            "sol"
          ],
          "cp": "798",
          "id": "027"
        },
        {
          "speAbilities": [
            {
              "typeEn": "rock",
              "dps": "8.82",
              "CCchance": "25",
              "esquive": "0.9",
              "damage": "30",
              "duration": "3.40",
              "nameEn": "Rock Tomb",
              "nameFr": "Tomberoche",
              "id": "71",
              "typeFr": "roche"
            },
            {
              "typeEn": "ground",
              "dps": "10.29",
              "CCchance": "5",
              "esquive": "1.1",
              "damage": "35",
              "duration": "3.40",
              "nameEn": "Bulldoze",
              "nameFr": "Pi\u00e9tisol",
              "id": "51",
              "typeFr": "sol"
            },
            {
              "typeEn": "ground",
              "dps": "23.81",
              "CCchance": "5",
              "esquive": "1.95",
              "damage": "100",
              "duration": "4.20",
              "nameEn": "Earthquake",
              "nameFr": "S\u00e9isme",
              "id": "68",
              "typeFr": "sol"
            }
          ],
          "attaque": "150",
          "abilities": [
            {
              "typeId": "17",
              "dps": "12.70",
              "sps": "11.11",
              "damage": "8",
              "typeEn": "steel",
              "duration": "0.63",
              "spe": "7",
              "nameEn": "Metal Claw",
              "nameFr": "Griffe Acier",
              "id": "6",
              "typeFr": "acier"
            },
            {
              "typeId": "11",
              "dps": "10.91",
              "sps": "12.73",
              "damage": "6",
              "typeEn": "ground",
              "duration": "0.55",
              "spe": "7",
              "nameEn": "Mud Shot",
              "nameFr": "Tir de Boue",
              "id": "2",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Sandslash",
          "typesEn": [
            "ground"
          ],
          "nameFr": "Sablaireau",
          "defense": "172",
          "health": "150",
          "typesFr": [
            "sol"
          ],
          "cp": "1810",
          "id": "028"
        },
        {
          "speAbilities": [
            {
              "typeEn": "poison",
              "dps": "10.42",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "25",
              "duration": "2.40",
              "nameEn": "Poison Fang",
              "nameFr": "Crochet Venin",
              "id": "21",
              "typeFr": "poison"
            },
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            },
            {
              "typeEn": "normal",
              "dps": "25.64",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "40",
              "duration": "1.56",
              "nameEn": "Body Slam",
              "nameFr": "Plaquage",
              "id": "53",
              "typeFr": "normal"
            }
          ],
          "attaque": "100",
          "abilities": [
            {
              "typeId": "14",
              "dps": "10.43",
              "sps": "6.96",
              "damage": "6",
              "typeEn": "poison",
              "duration": "0.575",
              "spe": "4",
              "nameEn": "Poison Sting",
              "nameFr": "Dard-Venin",
              "id": "21",
              "typeFr": "poison"
            },
            {
              "typeId": "2",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dark",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Bite",
              "nameFr": "Morsure",
              "id": "16",
              "typeFr": "t\u00e9n\u00e8bres"
            }
          ],
          "nameEn": "Nidoran\u2640",
          "typesEn": [
            "poison"
          ],
          "nameFr": "Nidoran F",
          "defense": "104",
          "health": "110",
          "typesFr": [
            "poison"
          ],
          "cp": "876",
          "id": "029"
        },
        {
          "speAbilities": [
            {
              "typeEn": "poison",
              "dps": "10.42",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "25",
              "duration": "2.40",
              "nameEn": "Poison Fang",
              "nameFr": "Crochet Venin",
              "id": "21",
              "typeFr": "poison"
            },
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            },
            {
              "typeEn": "ground",
              "dps": "12.07",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "70",
              "duration": "5.80",
              "nameEn": "Dig",
              "nameFr": "Tunnel",
              "id": "75",
              "typeFr": "sol"
            }
          ],
          "attaque": "132",
          "abilities": [
            {
              "typeId": "14",
              "dps": "10.43",
              "sps": "6.96",
              "damage": "6",
              "typeEn": "poison",
              "duration": "0.575",
              "spe": "4",
              "nameEn": "Poison Sting",
              "nameFr": "Dard-Venin",
              "id": "21",
              "typeFr": "poison"
            },
            {
              "typeId": "2",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dark",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Bite",
              "nameFr": "Morsure",
              "id": "16",
              "typeFr": "t\u00e9n\u00e8bres"
            }
          ],
          "nameEn": "Nidorina",
          "typesEn": [
            "poison"
          ],
          "nameFr": "Nidorina",
          "defense": "136",
          "health": "140",
          "typesFr": [
            "poison"
          ],
          "cp": "1404",
          "id": "030"
        },
        {
          "speAbilities": [
            {
              "typeEn": "rock",
              "dps": "25.81",
              "CCchance": "50",
              "esquive": "0.4",
              "damage": "80",
              "duration": "3.10",
              "nameEn": "Stone Edge",
              "nameFr": "Lame de Roc",
              "id": "36",
              "typeFr": "roche"
            },
            {
              "typeEn": "poison",
              "dps": "20.59",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "70",
              "duration": "3.40",
              "nameEn": "Sludge Wave",
              "nameFr": "Cradovague",
              "id": "19",
              "typeFr": "poison"
            },
            {
              "typeEn": "ground",
              "dps": "23.81",
              "CCchance": "5",
              "esquive": "1.95",
              "damage": "100",
              "duration": "4.20",
              "nameEn": "Earthquake",
              "nameFr": "S\u00e9isme",
              "id": "68",
              "typeFr": "sol"
            }
          ],
          "attaque": "184",
          "abilities": [
            {
              "typeId": "14",
              "dps": "11.43",
              "sps": "6.67",
              "damage": "12",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Poison Jab",
              "nameFr": "Direct Toxik",
              "id": "13",
              "typeFr": "poison"
            },
            {
              "typeId": "2",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dark",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Bite",
              "nameFr": "Morsure",
              "id": "16",
              "typeFr": "t\u00e9n\u00e8bres"
            }
          ],
          "nameEn": "Nidoqueen",
          "typesEn": [
            "poison",
            "ground"
          ],
          "nameFr": "Nidoqueen",
          "defense": "190",
          "health": "180",
          "typesFr": [
            "poison",
            "sol"
          ],
          "cp": "2485",
          "id": "031"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "11.36",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "25",
              "duration": "2.20",
              "nameEn": "Horn Attack",
              "nameFr": "Koud'Korne",
              "id": "35",
              "typeFr": "normal"
            },
            {
              "typeEn": "normal",
              "dps": "25.64",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "40",
              "duration": "1.56",
              "nameEn": "Body Slam",
              "nameFr": "Plaquage",
              "id": "53",
              "typeFr": "normal"
            },
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            }
          ],
          "attaque": "110",
          "abilities": [
            {
              "typeId": "14",
              "dps": "10.43",
              "sps": "6.96",
              "damage": "6",
              "typeEn": "poison",
              "duration": "0.575",
              "spe": "4",
              "nameEn": "Poison Sting",
              "nameFr": "Dard-Venin",
              "id": "21",
              "typeFr": "poison"
            },
            {
              "typeId": "8",
              "dps": "8.70",
              "sps": "8.70",
              "damage": "10",
              "typeEn": "flying",
              "duration": "1.15",
              "spe": "10",
              "nameEn": "Peck",
              "nameFr": "Picpic",
              "id": "28",
              "typeFr": "vol"
            }
          ],
          "nameEn": "Nidoran\u2642",
          "typesEn": [
            "poison"
          ],
          "nameFr": "Nidoran M",
          "defense": "94",
          "health": "92",
          "typesFr": [
            "poison"
          ],
          "cp": "843",
          "id": "032"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "11.36",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "25",
              "duration": "2.20",
              "nameEn": "Horn Attack",
              "nameFr": "Koud'Korne",
              "id": "35",
              "typeFr": "normal"
            },
            {
              "typeEn": "ground",
              "dps": "12.07",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "70",
              "duration": "5.80",
              "nameEn": "Dig",
              "nameFr": "Tunnel",
              "id": "75",
              "typeFr": "sol"
            },
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            }
          ],
          "attaque": "142",
          "abilities": [
            {
              "typeId": "14",
              "dps": "11.43",
              "sps": "6.67",
              "damage": "12",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Poison Jab",
              "nameFr": "Direct Toxik",
              "id": "13",
              "typeFr": "poison"
            },
            {
              "typeId": "2",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dark",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Bite",
              "nameFr": "Morsure",
              "id": "16",
              "typeFr": "t\u00e9n\u00e8bres"
            }
          ],
          "nameEn": "Nidorino",
          "typesEn": [
            "poison"
          ],
          "nameFr": "Nidorino",
          "defense": "128",
          "health": "122",
          "typesFr": [
            "poison"
          ],
          "cp": "1372",
          "id": "033"
        },
        {
          "speAbilities": [
            {
              "typeEn": "bug",
              "dps": "25.00",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "80",
              "duration": "3.20",
              "nameEn": "Megahorn",
              "nameFr": "M\u00e9gacorne",
              "id": "46",
              "typeFr": "insecte"
            },
            {
              "typeEn": "ground",
              "dps": "23.81",
              "CCchance": "5",
              "esquive": "1.95",
              "damage": "100",
              "duration": "4.20",
              "nameEn": "Earthquake",
              "nameFr": "S\u00e9isme",
              "id": "68",
              "typeFr": "sol"
            },
            {
              "typeEn": "poison",
              "dps": "20.59",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "70",
              "duration": "3.40",
              "nameEn": "Sludge Wave",
              "nameFr": "Cradovague",
              "id": "19",
              "typeFr": "poison"
            }
          ],
          "attaque": "204",
          "abilities": [
            {
              "typeId": "14",
              "dps": "11.43",
              "sps": "6.67",
              "damage": "12",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Poison Jab",
              "nameFr": "Direct Toxik",
              "id": "13",
              "typeFr": "poison"
            },
            {
              "typeId": "1",
              "dps": "7.50",
              "sps": "30.00",
              "damage": "3",
              "typeEn": "bug",
              "duration": "0.4",
              "spe": "12",
              "nameEn": "Fury Cutter",
              "nameFr": "Taillade",
              "id": "35",
              "typeFr": "insecte"
            }
          ],
          "nameEn": "Nidoking",
          "typesEn": [
            "poison",
            "ground"
          ],
          "nameFr": "Nidoking",
          "defense": "170",
          "health": "162",
          "typesFr": [
            "poison",
            "sol"
          ],
          "cp": "2475",
          "id": "034"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "25.64",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "40",
              "duration": "1.56",
              "nameEn": "Body Slam",
              "nameFr": "Plaquage",
              "id": "53",
              "typeFr": "normal"
            },
            {
              "typeEn": "fairy",
              "dps": "6.41",
              "CCchance": "5",
              "esquive": "1.8",
              "damage": "25",
              "duration": "3.90",
              "nameEn": "Disarming Voice",
              "nameFr": "Voix Enj\u00f6leuse",
              "id": "84",
              "typeFr": "f\u00e9e"
            },
            {
              "typeEn": "fairy",
              "dps": "20.73",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "85",
              "duration": "4.10",
              "nameEn": "Moonblast",
              "nameFr": "Pouvoir Lunaire",
              "id": "59",
              "typeFr": "f\u00e9e"
            }
          ],
          "attaque": "116",
          "abilities": [
            {
              "typeId": "15",
              "dps": "11.43",
              "sps": "3.81",
              "damage": "12",
              "typeEn": "psychc",
              "duration": "1.05",
              "spe": "4",
              "nameEn": "Zen Headbutt",
              "nameFr": "Psykoud'Boul",
              "id": "12",
              "typeFr": "psy"
            },
            {
              "typeId": "13",
              "dps": "12.96",
              "sps": "12.96",
              "damage": "7",
              "typeEn": "normal",
              "duration": "0.54",
              "spe": "7",
              "nameEn": "Pound",
              "nameFr": "\u00c9cras'Face",
              "id": "10",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Clefairy",
          "typesEn": [
            "fairy"
          ],
          "nameFr": "M\u00e9lof\u00e9e",
          "defense": "124",
          "health": "140",
          "typesFr": [
            "f\u00e9e"
          ],
          "cp": "1200",
          "id": "035"
        },
        {
          "speAbilities": [
            {
              "typeEn": "psychc",
              "dps": "19.64",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "55",
              "duration": "2.80",
              "nameEn": "Psychic",
              "nameFr": "Psyko",
              "id": "60",
              "typeFr": "psy"
            },
            {
              "typeEn": "fairy",
              "dps": "13.10",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "55",
              "duration": "4.20",
              "nameEn": "Dazzling Gleam",
              "nameFr": "\u00c9clat Magique",
              "id": "29",
              "typeFr": "f\u00e9e"
            },
            {
              "typeEn": "fairy",
              "dps": "20.73",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "85",
              "duration": "4.10",
              "nameEn": "Moonblast",
              "nameFr": "Pouvoir Lunaire",
              "id": "59",
              "typeFr": "f\u00e9e"
            }
          ],
          "attaque": "178",
          "abilities": [
            {
              "typeId": "15",
              "dps": "11.43",
              "sps": "3.81",
              "damage": "12",
              "typeEn": "psychc",
              "duration": "1.05",
              "spe": "4",
              "nameEn": "Zen Headbutt",
              "nameFr": "Psykoud'Boul",
              "id": "12",
              "typeFr": "psy"
            },
            {
              "typeId": "13",
              "dps": "12.96",
              "sps": "12.96",
              "damage": "7",
              "typeEn": "normal",
              "duration": "0.54",
              "spe": "7",
              "nameEn": "Pound",
              "nameFr": "\u00c9cras'Face",
              "id": "10",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Clefable",
          "typesEn": [
            "fairy"
          ],
          "nameFr": "M\u00e9lodelfe",
          "defense": "178",
          "health": "190",
          "typesFr": [
            "f\u00e9e"
          ],
          "cp": "2397",
          "id": "036"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fire",
              "dps": "18.97",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "55",
              "duration": "2.90",
              "nameEn": "Flamethrower",
              "nameFr": "Lance-Flammes",
              "id": "38",
              "typeFr": "feu"
            },
            {
              "typeEn": "normal",
              "dps": "25.64",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "40",
              "duration": "1.56",
              "nameEn": "Body Slam",
              "nameFr": "Plaquage",
              "id": "53",
              "typeFr": "normal"
            },
            {
              "typeEn": "fire",
              "dps": "8.06",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "25",
              "duration": "3.10",
              "nameEn": "Flame Charge",
              "nameFr": "Nitrocharge",
              "id": "49",
              "typeFr": "feu"
            }
          ],
          "attaque": "106",
          "abilities": [
            {
              "typeId": "13",
              "dps": "7.52",
              "sps": "5.26",
              "damage": "10",
              "typeEn": "normal",
              "duration": "1.33",
              "spe": "7",
              "nameEn": "Quick Attack",
              "nameFr": "Vive-Attaque",
              "id": "34",
              "typeFr": "normal"
            },
            {
              "typeId": "7",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "fire",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Ember",
              "nameFr": "Flamm\u00e8che",
              "id": "26",
              "typeFr": "feu"
            }
          ],
          "nameEn": "Vulpix",
          "typesEn": [
            "fire"
          ],
          "nameFr": "Goupix",
          "defense": "118",
          "health": "76",
          "typesFr": [
            "feu"
          ],
          "cp": "831",
          "id": "037"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fire",
              "dps": "21.05",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "80",
              "duration": "3.80",
              "nameEn": "Heat Wave",
              "nameFr": "Canicule",
              "id": "13",
              "typeFr": "feu"
            },
            {
              "typeEn": "fire",
              "dps": "24.39",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "100",
              "duration": "4.10",
              "nameEn": "Fire Blast",
              "nameFr": "D\u00e9flagration",
              "id": "22",
              "typeFr": "feu"
            },
            {
              "typeEn": "fire",
              "dps": "18.97",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "55",
              "duration": "2.90",
              "nameEn": "Flamethrower",
              "nameFr": "Lance-Flammes",
              "id": "38",
              "typeFr": "feu"
            }
          ],
          "attaque": "176",
          "abilities": [
            {
              "typeId": "2",
              "dps": "11.54",
              "sps": "6.73",
              "damage": "12",
              "typeEn": "dark",
              "duration": "1.04",
              "spe": "7",
              "nameEn": "Feint Attack",
              "nameFr": "Feinte",
              "id": "17",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeId": "7",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "fire",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Ember",
              "nameFr": "Flamm\u00e8che",
              "id": "26",
              "typeFr": "feu"
            }
          ],
          "nameEn": "Ninetales",
          "typesEn": [
            "fire"
          ],
          "nameFr": "Feunard",
          "defense": "194",
          "health": "146",
          "typesFr": [
            "feu"
          ],
          "cp": "2188",
          "id": "038"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fairy",
              "dps": "6.41",
              "CCchance": "5",
              "esquive": "1.8",
              "damage": "25",
              "duration": "3.90",
              "nameEn": "Disarming Voice",
              "nameFr": "Voix Enj\u00f6leuse",
              "id": "84",
              "typeFr": "f\u00e9e"
            },
            {
              "typeEn": "normal",
              "dps": "25.64",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "40",
              "duration": "1.56",
              "nameEn": "Body Slam",
              "nameFr": "Plaquage",
              "id": "53",
              "typeFr": "normal"
            },
            {
              "typeEn": "fairy",
              "dps": "18.97",
              "CCchance": "5",
              "esquive": "1.3",
              "damage": "55",
              "duration": "2.90",
              "nameEn": "Play Rough",
              "nameFr": "C\u00e2linerie",
              "id": "12",
              "typeFr": "f\u00e9e"
            }
          ],
          "attaque": "98",
          "abilities": [
            {
              "typeId": "2",
              "dps": "11.54",
              "sps": "6.73",
              "damage": "12",
              "typeEn": "dark",
              "duration": "1.04",
              "spe": "7",
              "nameEn": "Feint Attack",
              "nameFr": "Feinte",
              "id": "17",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeId": "13",
              "dps": "12.96",
              "sps": "12.96",
              "damage": "7",
              "typeEn": "normal",
              "duration": "0.54",
              "spe": "7",
              "nameEn": "Pound",
              "nameFr": "\u00c9cras'Face",
              "id": "10",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Jigglypuff",
          "typesEn": [
            "normal",
            "fairy"
          ],
          "nameFr": "Rondoudou",
          "defense": "54",
          "health": "230",
          "typesFr": [
            "normal",
            "f\u00e9e"
          ],
          "cp": "917",
          "id": "039"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fairy",
              "dps": "13.10",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "55",
              "duration": "4.20",
              "nameEn": "Dazzling Gleam",
              "nameFr": "\u00c9clat Magique",
              "id": "29",
              "typeFr": "f\u00e9e"
            },
            {
              "typeEn": "normal",
              "dps": "24.00",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "120",
              "duration": "5.00",
              "nameEn": "Hyper Beam",
              "nameFr": "Ultralaser",
              "id": "77",
              "typeFr": "normal"
            },
            {
              "typeEn": "fairy",
              "dps": "18.97",
              "CCchance": "5",
              "esquive": "1.3",
              "damage": "55",
              "duration": "2.90",
              "nameEn": "Play Rough",
              "nameFr": "C\u00e2linerie",
              "id": "12",
              "typeFr": "f\u00e9e"
            }
          ],
          "attaque": "168",
          "abilities": [
            {
              "typeId": "2",
              "dps": "11.54",
              "sps": "6.73",
              "damage": "12",
              "typeEn": "dark",
              "duration": "1.04",
              "spe": "7",
              "nameEn": "Feint Attack",
              "nameFr": "Feinte",
              "id": "17",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeId": "13",
              "dps": "12.96",
              "sps": "12.96",
              "damage": "7",
              "typeEn": "normal",
              "duration": "0.54",
              "spe": "7",
              "nameEn": "Pound",
              "nameFr": "\u00c9cras'Face",
              "id": "10",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Wigglytuff",
          "typesEn": [
            "normal",
            "fairy"
          ],
          "nameFr": "Grodoudou",
          "defense": "108",
          "health": "280",
          "typesFr": [
            "normal",
            "f\u00e9e"
          ],
          "cp": "2177",
          "id": "040"
        },
        {
          "speAbilities": [
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            },
            {
              "typeEn": "poison",
              "dps": "10.42",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "25",
              "duration": "2.40",
              "nameEn": "Poison Fang",
              "nameFr": "Crochet Venin",
              "id": "21",
              "typeFr": "poison"
            },
            {
              "typeEn": "flying",
              "dps": "9.09",
              "CCchance": "25",
              "esquive": "0.9",
              "damage": "30",
              "duration": "3.30",
              "nameEn": "Air Cutter",
              "nameFr": "Tranch'Air",
              "id": "73",
              "typeFr": "vol"
            }
          ],
          "attaque": "88",
          "abilities": [
            {
              "typeId": "2",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dark",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Bite",
              "nameFr": "Morsure",
              "id": "16",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeId": "13",
              "dps": "7.52",
              "sps": "5.26",
              "damage": "10",
              "typeEn": "normal",
              "duration": "1.33",
              "spe": "7",
              "nameEn": "Quick Attack",
              "nameFr": "Vive-Attaque",
              "id": "34",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Zubat",
          "typesEn": [
            "poison",
            "flying"
          ],
          "nameFr": "Nosf\u00e9rapti",
          "defense": "90",
          "health": "80",
          "typesFr": [
            "poison",
            "vol"
          ],
          "cp": "642",
          "id": "041"
        },
        {
          "speAbilities": [
            {
              "id": "80",
              "nameEn": "Ominous wind",
              "nameFr": "Vent Mauvais",
              "typeEn": "dark",
              "typeFr": "ténèbres",
              "damage": "30",
              "duration": "3.10",
              "dps": "9.68",
              "CCchance": "5",
              "esquive": "0.25"
            },
            {
              "typeEn": "poison",
              "dps": "10.42",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "25",
              "duration": "2.40",
              "nameEn": "Poison Fang",
              "nameFr": "Crochet Venin",
              "id": "21",
              "typeFr": "poison"
            },
            {
              "typeEn": "flying",
              "dps": "9.09",
              "CCchance": "25",
              "esquive": "0.9",
              "damage": "30",
              "duration": "3.30",
              "nameEn": "Air Cutter",
              "nameFr": "Tranch'Air",
              "id": "73",
              "typeFr": "vol"
            }
          ],
          "attaque": "164",
          "abilities": [
            {
              "typeId": "2",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dark",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Bite",
              "nameFr": "Morsure",
              "id": "16",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeId": "8",
              "dps": "12.00",
              "sps": "9.33",
              "damage": "9",
              "typeEn": "flying",
              "duration": "0.75",
              "spe": "7",
              "nameEn": "Wing Attack",
              "nameFr": "Cru-Aile",
              "id": "8",
              "typeFr": "vol"
            }
          ],
          "nameEn": "Golbat",
          "typesEn": [
            "poison",
            "flying"
          ],
          "nameFr": "Nosf\u00e9ralto",
          "defense": "164",
          "health": "150",
          "typesFr": [
            "poison",
            "vol"
          ],
          "cp": "1921",
          "id": "042"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fairy",
              "dps": "20.73",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "85",
              "duration": "4.10",
              "nameEn": "Moonblast",
              "nameFr": "Pouvoir Lunaire",
              "id": "59",
              "typeFr": "f\u00e9e"
            },
            {
              "typeEn": "grass",
              "dps": "16.67",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "40",
              "duration": "2.40",
              "nameEn": "Seed Bomb",
              "nameFr": "Canon Graine",
              "id": "14",
              "typeFr": "plante"
            },
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            }
          ],
          "attaque": "134",
          "abilities": [
            {
              "typeId": "10",
              "dps": "10.34",
              "sps": "4.83",
              "damage": "15",
              "typeEn": "grass",
              "duration": "1.45",
              "spe": "7",
              "nameEn": "Razor Leaf",
              "nameFr": "Tranch'Herbe",
              "id": "22",
              "typeFr": "plante"
            },
            {
              "typeId": "14",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Acid",
              "nameFr": "Acide",
              "id": "25",
              "typeFr": "poison"
            }
          ],
          "nameEn": "Oddish",
          "typesEn": [
            "grass",
            "poison"
          ],
          "nameFr": "Mystherbe",
          "defense": "130",
          "health": "90",
          "typesFr": [
            "plante",
            "poison"
          ],
          "cp": "1148",
          "id": "043"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fairy",
              "dps": "20.73",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "85",
              "duration": "4.10",
              "nameEn": "Moonblast",
              "nameFr": "Pouvoir Lunaire",
              "id": "59",
              "typeFr": "f\u00e9e"
            },
            {
              "typeEn": "grass",
              "dps": "20.31",
              "CCchance": "5",
              "esquive": "1",
              "damage": "65",
              "duration": "3.20",
              "nameEn": "Petal Blizzard",
              "nameFr": "Temp\u00eate Florale",
              "id": "69",
              "typeFr": "plante"
            },
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            }
          ],
          "attaque": "162",
          "abilities": [
            {
              "typeId": "10",
              "dps": "10.34",
              "sps": "4.83",
              "damage": "15",
              "typeEn": "grass",
              "duration": "1.45",
              "spe": "7",
              "nameEn": "Razor Leaf",
              "nameFr": "Tranch'Herbe",
              "id": "22",
              "typeFr": "plante"
            },
            {
              "typeId": "14",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Acid",
              "nameFr": "Acide",
              "id": "25",
              "typeFr": "poison"
            }
          ],
          "nameEn": "Gloom",
          "typesEn": [
            "grass",
            "poison"
          ],
          "nameFr": "Ortide",
          "defense": "158",
          "health": "120",
          "typesFr": [
            "plante",
            "poison"
          ],
          "cp": "1689",
          "id": "044"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fairy",
              "dps": "20.73",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "85",
              "duration": "4.10",
              "nameEn": "Moonblast",
              "nameFr": "Pouvoir Lunaire",
              "id": "59",
              "typeFr": "f\u00e9e"
            },
            {
              "typeEn": "grass",
              "dps": "20.31",
              "CCchance": "5",
              "esquive": "1",
              "damage": "65",
              "duration": "3.20",
              "nameEn": "Petal Blizzard",
              "nameFr": "Temp\u00eate Florale",
              "id": "69",
              "typeFr": "plante"
            },
            {
              "typeEn": "grass",
              "dps": "24.49",
              "CCchance": "5",
              "esquive": "1.7",
              "damage": "120",
              "duration": "4.90",
              "nameEn": "Solar Beam",
              "nameFr": "Lance-Soleil",
              "id": "39",
              "typeFr": "plante"
            }
          ],
          "attaque": "202",
          "abilities": [
            {
              "typeId": "10",
              "dps": "10.34",
              "sps": "4.83",
              "damage": "15",
              "typeEn": "grass",
              "duration": "1.45",
              "spe": "7",
              "nameEn": "Razor Leaf",
              "nameFr": "Tranch'Herbe",
              "id": "22",
              "typeFr": "plante"
            },
            {
              "typeId": "14",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Acid",
              "nameFr": "Acide",
              "id": "25",
              "typeFr": "poison"
            }
          ],
          "nameEn": "Vileplume",
          "typesEn": [
            "grass",
            "poison"
          ],
          "nameFr": "Raffl\u00e9sia",
          "defense": "190",
          "health": "150",
          "typesFr": [
            "plante",
            "poison"
          ],
          "cp": "2492",
          "id": "045"
        },
        {
          "speAbilities": [
            {
              "typeEn": "grass",
              "dps": "16.67",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "40",
              "duration": "2.40",
              "nameEn": "Seed Bomb",
              "nameFr": "Canon Graine",
              "id": "14",
              "typeFr": "plante"
            },
            {
              "typeEn": "bug",
              "dps": "16.67",
              "CCchance": "5",
              "esquive": "0.25",
              "damage": "35",
              "duration": "2.10",
              "nameEn": "X-Scissor",
              "nameFr": "Plaie-Croix",
              "id": "52",
              "typeFr": "insecte"
            },
            {
              "typeEn": "poison",
              "dps": "16.67",
              "CCchance": "25",
              "esquive": "0.3",
              "damage": "25",
              "duration": "1.50",
              "nameEn": "Cross Poison",
              "nameFr": "Poison-Croix",
              "id": "57",
              "typeFr": "poison"
            }
          ],
          "attaque": "122",
          "abilities": [
            {
              "typeId": "1",
              "dps": "11.11",
              "sps": "15.56",
              "damage": "5",
              "typeEn": "bug",
              "duration": "0.45",
              "spe": "7",
              "nameEn": "Bug Bite",
              "nameFr": "Piq\u00fbre",
              "id": "14",
              "typeFr": "insecte"
            },
            {
              "typeId": "13",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "normal",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Scratch",
              "nameFr": "Griffe",
              "id": "4",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Paras",
          "typesEn": [
            "bug",
            "grass"
          ],
          "nameFr": "Paras",
          "defense": "120",
          "health": "70",
          "typesFr": [
            "insecte",
            "plante"
          ],
          "cp": "916",
          "id": "046"
        },
        {
          "speAbilities": [
            {
              "typeEn": "grass",
              "dps": "24.49",
              "CCchance": "5",
              "esquive": "1.7",
              "damage": "120",
              "duration": "4.90",
              "nameEn": "Solar Beam",
              "nameFr": "Lance-Soleil",
              "id": "39",
              "typeFr": "plante"
            },
            {
              "typeEn": "bug",
              "dps": "16.67",
              "CCchance": "5",
              "esquive": "0.25",
              "damage": "35",
              "duration": "2.10",
              "nameEn": "X-Scissor",
              "nameFr": "Plaie-Croix",
              "id": "52",
              "typeFr": "insecte"
            },
            {
              "typeEn": "poison",
              "dps": "16.67",
              "CCchance": "25",
              "esquive": "0.3",
              "damage": "25",
              "duration": "1.50",
              "nameEn": "Cross Poison",
              "nameFr": "Poison-Croix",
              "id": "57",
              "typeFr": "poison"
            }
          ],
          "attaque": "162",
          "abilities": [
            {
              "typeId": "1",
              "dps": "11.11",
              "sps": "15.56",
              "damage": "5",
              "typeEn": "bug",
              "duration": "0.45",
              "spe": "7",
              "nameEn": "Bug Bite",
              "nameFr": "Piq\u00fbre",
              "id": "14",
              "typeFr": "insecte"
            },
            {
              "typeId": "1",
              "dps": "7.50",
              "sps": "30.00",
              "damage": "3",
              "typeEn": "bug",
              "duration": "0.4",
              "spe": "12",
              "nameEn": "Fury Cutter",
              "nameFr": "Taillade",
              "id": "35",
              "typeFr": "insecte"
            }
          ],
          "nameEn": "Parasect",
          "typesEn": [
            "bug",
            "grass"
          ],
          "nameFr": "Parasect",
          "defense": "170",
          "health": "120",
          "typesFr": [
            "insecte",
            "plante"
          ],
          "cp": "1747",
          "id": "047"
        },
        {
          "speAbilities": [
            {
              "typeEn": "bug",
              "dps": "14.52",
              "CCchance": "5",
              "esquive": "1",
              "damage": "45",
              "duration": "3.10",
              "nameEn": "Signal Beam",
              "nameFr": "Rayon Signal",
              "id": "63",
              "typeFr": "insecte"
            },
            {
              "typeEn": "poison",
              "dps": "10.42",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "25",
              "duration": "2.40",
              "nameEn": "Poison Fang",
              "nameFr": "Crochet Venin",
              "id": "21",
              "typeFr": "poison"
            },
            {
              "typeEn": "psychc",
              "dps": "10.53",
              "CCchance": "5",
              "esquive": "1.3",
              "damage": "40",
              "duration": "3.80",
              "nameEn": "Psybeam",
              "nameFr": "Rafale Psy",
              "id": "61",
              "typeFr": "psy"
            }
          ],
          "attaque": "108",
          "abilities": [
            {
              "typeId": "15",
              "dps": "9.93",
              "sps": "4.64",
              "damage": "15",
              "typeEn": "psychc",
              "duration": "1.51",
              "spe": "7",
              "nameEn": "Confusion",
              "nameFr": "Choc Mental",
              "id": "33",
              "typeFr": "psy"
            },
            {
              "typeId": "1",
              "dps": "11.11",
              "sps": "15.56",
              "damage": "5",
              "typeEn": "bug",
              "duration": "0.45",
              "spe": "7",
              "nameEn": "Bug Bite",
              "nameFr": "Piq\u00fbre",
              "id": "14",
              "typeFr": "insecte"
            }
          ],
          "nameEn": "Venonat",
          "typesEn": [
            "bug",
            "poison"
          ],
          "nameFr": "Mimitoss",
          "defense": "118",
          "health": "120",
          "typesFr": [
            "insecte",
            "poison"
          ],
          "cp": "1029",
          "id": "048"
        },
        {
          "speAbilities": [
            {
              "typeEn": "bug",
              "dps": "17.65",
              "CCchance": "5",
              "esquive": "1.5",
              "damage": "75",
              "duration": "4.25",
              "nameEn": "Bug Buzz",
              "nameFr": "Bourdon",
              "id": "10",
              "typeFr": "insecte"
            },
            {
              "typeEn": "poison",
              "dps": "10.42",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "25",
              "duration": "2.40",
              "nameEn": "Poison Fang",
              "nameFr": "Crochet Venin",
              "id": "21",
              "typeFr": "poison"
            },
            {
              "typeEn": "psychc",
              "dps": "19.64",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "55",
              "duration": "2.80",
              "nameEn": "Psychic",
              "nameFr": "Psyko",
              "id": "60",
              "typeFr": "psy"
            }
          ],
          "attaque": "172",
          "abilities": [
            {
              "typeId": "15",
              "dps": "9.93",
              "sps": "4.64",
              "damage": "15",
              "typeEn": "psychc",
              "duration": "1.51",
              "spe": "7",
              "nameEn": "Confusion",
              "nameFr": "Choc Mental",
              "id": "33",
              "typeFr": "psy"
            },
            {
              "typeId": "1",
              "dps": "11.11",
              "sps": "15.56",
              "damage": "5",
              "typeEn": "bug",
              "duration": "0.45",
              "spe": "7",
              "nameEn": "Bug Bite",
              "nameFr": "Piq\u00fbre",
              "id": "14",
              "typeFr": "insecte"
            }
          ],
          "nameEn": "Venomoth",
          "typesEn": [
            "bug",
            "poison"
          ],
          "nameFr": "A\u00e9romite",
          "defense": "154",
          "health": "140",
          "typesFr": [
            "insecte",
            "poison"
          ],
          "cp": "1890",
          "id": "049"
        },
        {
          "speAbilities": [
            {
              "typeEn": "rock",
              "dps": "8.82",
              "CCchance": "25",
              "esquive": "0.9",
              "damage": "30",
              "duration": "3.40",
              "nameEn": "Rock Tomb",
              "nameFr": "Tomberoche",
              "id": "71",
              "typeFr": "roche"
            },
            {
              "typeEn": "ground",
              "dps": "12.07",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "70",
              "duration": "5.80",
              "nameEn": "Dig",
              "nameFr": "Tunnel",
              "id": "75",
              "typeFr": "sol"
            },
            {
              "typeEn": "ground",
              "dps": "11.54",
              "CCchance": "5",
              "esquive": "0.45",
              "damage": "30",
              "duration": "2.60",
              "nameEn": "Mud Bomb",
              "nameFr": "Boue-Bombe",
              "id": "9",
              "typeFr": "sol"
            }
          ],
          "attaque": "108",
          "abilities": [
            {
              "typeId": "13",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "normal",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Scratch",
              "nameFr": "Griffe",
              "id": "4",
              "typeFr": "normal"
            },
            {
              "typeId": "11",
              "dps": "10.91",
              "sps": "12.73",
              "damage": "6",
              "typeEn": "ground",
              "duration": "0.55",
              "spe": "7",
              "nameEn": "Mud Shot",
              "nameFr": "Tir de Boue",
              "id": "2",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Diglett",
          "typesEn": [
            "ground"
          ],
          "nameFr": "Taupiqueur",
          "defense": "86",
          "health": "20",
          "typesFr": [
            "sol"
          ],
          "cp": "456",
          "id": "050"
        },
        {
          "speAbilities": [
            {
              "typeEn": "rock",
              "dps": "25.81",
              "CCchance": "50",
              "esquive": "0.4",
              "damage": "80",
              "duration": "3.10",
              "nameEn": "Stone Edge",
              "nameFr": "Lame de Roc",
              "id": "36",
              "typeFr": "roche"
            },
            {
              "typeEn": "ground",
              "dps": "23.81",
              "CCchance": "5",
              "esquive": "1.95",
              "damage": "100",
              "duration": "4.20",
              "nameEn": "Earthquake",
              "nameFr": "S\u00e9isme",
              "id": "68",
              "typeFr": "sol"
            },
            {
              "typeEn": "ground",
              "dps": "11.54",
              "CCchance": "5",
              "esquive": "0.45",
              "damage": "30",
              "duration": "2.60",
              "nameEn": "Mud Bomb",
              "nameFr": "Boue-Bombe",
              "id": "9",
              "typeFr": "sol"
            }
          ],
          "attaque": "148",
          "abilities": [
            {
              "typeId": "2",
              "dps": "10.00",
              "sps": "5.71",
              "damage": "7",
              "typeEn": "dark",
              "duration": "0.7",
              "spe": "4",
              "nameEn": "Sucker Punch",
              "nameFr": "Coup Bas",
              "id": "23",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeId": "11",
              "dps": "10.91",
              "sps": "12.73",
              "damage": "6",
              "typeEn": "ground",
              "duration": "0.55",
              "spe": "7",
              "nameEn": "Mud Shot",
              "nameFr": "Tir de Boue",
              "id": "2",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Dugtrio",
          "typesEn": [
            "ground"
          ],
          "nameFr": "Triopikeur",
          "defense": "140",
          "health": "70",
          "typesFr": [
            "sol"
          ],
          "cp": "1168",
          "id": "051"
        },
        {
          "speAbilities": [
            {
              "typeEn": "dark",
              "dps": "12.86",
              "CCchance": "5",
              "esquive": "1.1",
              "damage": "45",
              "duration": "3.50",
              "nameEn": "Dark Pulse",
              "nameFr": "Vibrobscur",
              "id": "83",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeEn": "dark",
              "dps": "11.11",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "30",
              "duration": "2.70",
              "nameEn": "Night Slash",
              "nameFr": "Tranche-Nuit",
              "id": "74",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeEn": "normal",
              "dps": "25.64",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "40",
              "duration": "1.56",
              "nameEn": "Body Slam",
              "nameFr": "Plaquage",
              "id": "53",
              "typeFr": "normal"
            }
          ],
          "attaque": "104",
          "abilities": [
            {
              "typeId": "13",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "normal",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Scratch",
              "nameFr": "Griffe",
              "id": "4",
              "typeFr": "normal"
            },
            {
              "typeId": "2",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dark",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Bite",
              "nameFr": "Morsure",
              "id": "16",
              "typeFr": "t\u00e9n\u00e8bres"
            }
          ],
          "nameEn": "Meowth",
          "typesEn": [
            "normal"
          ],
          "nameFr": "Miaouss",
          "defense": "94",
          "health": "80",
          "typesFr": [
            "normal"
          ],
          "cp": "756",
          "id": "052"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fairy",
              "dps": "18.97",
              "CCchance": "5",
              "esquive": "1.3",
              "damage": "55",
              "duration": "2.90",
              "nameEn": "Play Rough",
              "nameFr": "C\u00e2linerie",
              "id": "12",
              "typeFr": "f\u00e9e"
            },
            {
              "typeEn": "rock",
              "dps": "13.79",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "40",
              "duration": "2.90",
              "nameEn": "Power Gem",
              "nameFr": "Rayon Gemme",
              "id": "62",
              "typeFr": "roche"
            },
            {
              "typeEn": "dark",
              "dps": "11.11",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "30",
              "duration": "2.70",
              "nameEn": "Night Slash",
              "nameFr": "Tranche-Nuit",
              "id": "74",
              "typeFr": "t\u00e9n\u00e8bres"
            }
          ],
          "attaque": "156",
          "abilities": [
            {
              "typeId": "13",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "normal",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Scratch",
              "nameFr": "Griffe",
              "id": "4",
              "typeFr": "normal"
            },
            {
              "typeId": "2",
              "dps": "11.54",
              "sps": "6.73",
              "damage": "12",
              "typeEn": "dark",
              "duration": "1.04",
              "spe": "7",
              "nameEn": "Feint Attack",
              "nameFr": "Feinte",
              "id": "17",
              "typeFr": "t\u00e9n\u00e8bres"
            }
          ],
          "nameEn": "Persian",
          "typesEn": [
            "normal"
          ],
          "nameFr": "Persian",
          "defense": "146",
          "health": "130",
          "typesFr": [
            "normal"
          ],
          "cp": "1631",
          "id": "053"
        },
        {
          "speAbilities": [
            {
              "typeEn": "water",
              "dps": "19.15",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "45",
              "duration": "2.35",
              "nameEn": "Aqua Tail",
              "nameFr": "Hydroqueue",
              "id": "34",
              "typeFr": "eau"
            },
            {
              "typeEn": "fight",
              "dps": "30.00",
              "CCchance": "25",
              "esquive": "0.3",
              "damage": "60",
              "duration": "2.00",
              "nameEn": "Cross Chop",
              "nameFr": "Coup-Croix",
              "id": "18",
              "typeFr": "combat"
            },
            {
              "typeEn": "psychc",
              "dps": "10.53",
              "CCchance": "5",
              "esquive": "1.3",
              "damage": "40",
              "duration": "3.80",
              "nameEn": "Psybeam",
              "nameFr": "Rafale Psy",
              "id": "61",
              "typeFr": "psy"
            }
          ],
          "attaque": "132",
          "abilities": [
            {
              "typeId": "15",
              "dps": "11.43",
              "sps": "3.81",
              "damage": "12",
              "typeEn": "psychc",
              "duration": "1.05",
              "spe": "4",
              "nameEn": "Zen Headbutt",
              "nameFr": "Psykoud'Boul",
              "id": "12",
              "typeFr": "psy"
            },
            {
              "typeId": "18",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "water",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Water Gun",
              "nameFr": "Pistolet \u00e0 O",
              "id": "5",
              "typeFr": "eau"
            }
          ],
          "nameEn": "Psyduck",
          "typesEn": [
            "water"
          ],
          "nameFr": "Psykokwak",
          "defense": "112",
          "health": "100",
          "typesFr": [
            "eau"
          ],
          "cp": "1109",
          "id": "054"
        },
        {
          "speAbilities": [
            {
              "typeEn": "water",
              "dps": "23.68",
              "CCchance": "5",
              "esquive": "2.1",
              "damage": "90",
              "duration": "3.80",
              "nameEn": "Hydro Pump",
              "nameFr": "Hydrocanon",
              "id": "33",
              "typeFr": "eau"
            },
            {
              "typeEn": "ice",
              "dps": "17.81",
              "CCchance": "5",
              "esquive": "1.35",
              "damage": "65",
              "duration": "3.65",
              "nameEn": "Ice Beam",
              "nameFr": "Laser Glace",
              "id": "40",
              "typeFr": "glace"
            },
            {
              "typeEn": "psychc",
              "dps": "19.64",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "55",
              "duration": "2.80",
              "nameEn": "Psychic",
              "nameFr": "Psyko",
              "id": "60",
              "typeFr": "psy"
            }
          ],
          "attaque": "194",
          "abilities": [
            {
              "typeId": "15",
              "dps": "9.93",
              "sps": "4.64",
              "damage": "15",
              "typeEn": "psychc",
              "duration": "1.51",
              "spe": "7",
              "nameEn": "Confusion",
              "nameFr": "Choc Mental",
              "id": "33",
              "typeFr": "psy"
            },
            {
              "typeId": "18",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "water",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Water Gun",
              "nameFr": "Pistolet \u00e0 O",
              "id": "5",
              "typeFr": "eau"
            }
          ],
          "nameEn": "Golduck",
          "typesEn": [
            "water"
          ],
          "nameFr": "Akwakwak",
          "defense": "176",
          "health": "160",
          "typesFr": [
            "eau"
          ],
          "cp": "2386",
          "id": "055"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fight",
              "dps": "18.75",
              "CCchance": "25",
              "esquive": "0.4",
              "damage": "30",
              "duration": "1.60",
              "nameEn": "Brick Break",
              "nameFr": "Casse-Brique",
              "id": "15",
              "typeFr": "combat"
            },
            {
              "typeEn": "fight",
              "dps": "30.00",
              "CCchance": "25",
              "esquive": "0.3",
              "damage": "60",
              "duration": "2.00",
              "nameEn": "Cross Chop",
              "nameFr": "Coup-Croix",
              "id": "18",
              "typeFr": "combat"
            },
            {
              "typeEn": "fight",
              "dps": "13.33",
              "CCchance": "5",
              "esquive": "0.15",
              "damage": "30",
              "duration": "2.25",
              "nameEn": "Low Sweep",
              "nameFr": "Balayette",
              "id": "3",
              "typeFr": "combat"
            }
          ],
          "attaque": "122",
          "abilities": [
            {
              "typeId": "6",
              "dps": "7.50",
              "sps": "8.75",
              "damage": "6",
              "typeEn": "fight",
              "duration": "0.8",
              "spe": "7",
              "nameEn": "Karate Chop",
              "nameFr": "Poing-Karat\u00e9",
              "id": "36",
              "typeFr": "combat"
            },
            {
              "typeId": "13",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "normal",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Scratch",
              "nameFr": "Griffe",
              "id": "4",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Mankey",
          "typesEn": [
            "fight"
          ],
          "nameFr": "F\u00e9rosinge",
          "defense": "96",
          "health": "80",
          "typesFr": [
            "combat"
          ],
          "cp": "878",
          "id": "056"
        },
        {
          "speAbilities": [
            {
              "typeEn": "dark",
              "dps": "11.11",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "30",
              "duration": "2.70",
              "nameEn": "Night Slash",
              "nameFr": "Tranche-Nuit",
              "id": "74",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeEn": "fight",
              "dps": "30.00",
              "CCchance": "25",
              "esquive": "0.3",
              "damage": "60",
              "duration": "2.00",
              "nameEn": "Cross Chop",
              "nameFr": "Coup-Croix",
              "id": "18",
              "typeFr": "combat"
            },
            {
              "typeEn": "fight",
              "dps": "13.33",
              "CCchance": "5",
              "esquive": "0.15",
              "damage": "30",
              "duration": "2.25",
              "nameEn": "Low Sweep",
              "nameFr": "Balayette",
              "id": "3",
              "typeFr": "combat"
            }
          ],
          "attaque": "178",
          "abilities": [
            {
              "typeId": "6",
              "dps": "7.50",
              "sps": "8.75",
              "damage": "6",
              "typeEn": "fight",
              "duration": "0.8",
              "spe": "7",
              "nameEn": "Karate Chop",
              "nameFr": "Poing-Karat\u00e9",
              "id": "36",
              "typeFr": "combat"
            },
            {
              "typeId": "6",
              "dps": "8.33",
              "sps": "11.67",
              "damage": "5",
              "typeEn": "fight",
              "duration": "0.6",
              "spe": "7",
              "nameEn": "Low Kick",
              "nameFr": "Balayage",
              "id": "32",
              "typeFr": "combat"
            }
          ],
          "nameEn": "Primeape",
          "typesEn": [
            "fight"
          ],
          "nameFr": "Colossinge",
          "defense": "150",
          "health": "130",
          "typesFr": [
            "combat"
          ],
          "cp": "1864",
          "id": "057"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fire",
              "dps": "8.70",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "40",
              "duration": "4.60",
              "nameEn": "Flame Wheel",
              "nameFr": "Roue de Feu",
              "id": "65",
              "typeFr": "feu"
            },
            {
              "typeEn": "normal",
              "dps": "25.64",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "40",
              "duration": "1.56",
              "nameEn": "Body Slam",
              "nameFr": "Plaquage",
              "id": "53",
              "typeFr": "normal"
            },
            {
              "typeEn": "fire",
              "dps": "18.97",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "55",
              "duration": "2.90",
              "nameEn": "Flamethrower",
              "nameFr": "Lance-Flammes",
              "id": "38",
              "typeFr": "feu"
            }
          ],
          "attaque": "156",
          "abilities": [
            {
              "typeId": "7",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "fire",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Ember",
              "nameFr": "Flamm\u00e8che",
              "id": "26",
              "typeFr": "feu"
            },
            {
              "typeId": "2",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dark",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Bite",
              "nameFr": "Morsure",
              "id": "16",
              "typeFr": "t\u00e9n\u00e8bres"
            }
          ],
          "nameEn": "Growlithe",
          "typesEn": [
            "fire"
          ],
          "nameFr": "Caninos",
          "defense": "110",
          "health": "110",
          "typesFr": [
            "feu"
          ],
          "cp": "1335",
          "id": "058"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fire",
              "dps": "24.39",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "100",
              "duration": "4.10",
              "nameEn": "Fire Blast",
              "nameFr": "D\u00e9flagration",
              "id": "22",
              "typeFr": "feu"
            },
            {
              "typeEn": "ground",
              "dps": "10.29",
              "CCchance": "5",
              "esquive": "1.1",
              "damage": "35",
              "duration": "3.40",
              "nameEn": "Bulldoze",
              "nameFr": "Pi\u00e9tisol",
              "id": "51",
              "typeFr": "sol"
            },
            {
              "typeEn": "fire",
              "dps": "18.97",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "55",
              "duration": "2.90",
              "nameEn": "Flamethrower",
              "nameFr": "Lance-Flammes",
              "id": "38",
              "typeFr": "feu"
            }
          ],
          "attaque": "230",
          "abilities": [
            {
              "typeId": "7",
              "dps": "11.90",
              "sps": "4.76",
              "damage": "10",
              "typeEn": "fire",
              "duration": "0.84",
              "spe": "4",
              "nameEn": "Fire Fang",
              "nameFr": "Crocs de Feu",
              "id": "31",
              "typeFr": "feu"
            },
            {
              "typeId": "2",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dark",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Bite",
              "nameFr": "Morsure",
              "id": "16",
              "typeFr": "t\u00e9n\u00e8bres"
            }
          ],
          "nameEn": "Arcanine",
          "typesEn": [
            "fire"
          ],
          "nameFr": "Arcanin",
          "defense": "180",
          "health": "180",
          "typesFr": [
            "feu"
          ],
          "cp": "2983",
          "id": "059"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "25.64",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "40",
              "duration": "1.56",
              "nameEn": "Body Slam",
              "nameFr": "Plaquage",
              "id": "53",
              "typeFr": "normal"
            },
            {
              "typeEn": "water",
              "dps": "10.34",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "30",
              "duration": "2.90",
              "nameEn": "Bubble Beam",
              "nameFr": "Bulles d'O",
              "id": "11",
              "typeFr": "eau"
            },
            {
              "typeEn": "ground",
              "dps": "11.54",
              "CCchance": "5",
              "esquive": "0.45",
              "damage": "30",
              "duration": "2.60",
              "nameEn": "Mud Bomb",
              "nameFr": "Boue-Bombe",
              "id": "9",
              "typeFr": "sol"
            }
          ],
          "attaque": "108",
          "abilities": [
            {
              "typeId": "18",
              "dps": "10.87",
              "sps": "6.52",
              "damage": "25",
              "typeEn": "water",
              "duration": "2.3",
              "spe": "15",
              "nameEn": "Bubble",
              "nameFr": "\u00c9cume",
              "id": "38",
              "typeFr": "eau"
            },
            {
              "typeId": "11",
              "dps": "10.91",
              "sps": "12.73",
              "damage": "6",
              "typeEn": "ground",
              "duration": "0.55",
              "spe": "7",
              "nameEn": "Mud Shot",
              "nameFr": "Tir de Boue",
              "id": "2",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Poliwag",
          "typesEn": [
            "water"
          ],
          "nameFr": "Ptitard",
          "defense": "98",
          "health": "80",
          "typesFr": [
            "eau"
          ],
          "cp": "795",
          "id": "060"
        },
        {
          "speAbilities": [
            {
              "typeEn": "water",
              "dps": "13.75",
              "CCchance": "5",
              "esquive": "2.1",
              "damage": "55",
              "duration": "4.00",
              "nameEn": "Scald",
              "nameFr": "\u00c9bullition",
              "id": "28",
              "typeFr": "eau"
            },
            {
              "typeEn": "water",
              "dps": "10.34",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "30",
              "duration": "2.90",
              "nameEn": "Bubble Beam",
              "nameFr": "Bulles d'O",
              "id": "11",
              "typeFr": "eau"
            },
            {
              "typeEn": "ground",
              "dps": "11.54",
              "CCchance": "5",
              "esquive": "0.45",
              "damage": "30",
              "duration": "2.60",
              "nameEn": "Mud Bomb",
              "nameFr": "Boue-Bombe",
              "id": "9",
              "typeFr": "sol"
            }
          ],
          "attaque": "132",
          "abilities": [
            {
              "typeId": "18",
              "dps": "10.87",
              "sps": "6.52",
              "damage": "25",
              "typeEn": "water",
              "duration": "2.3",
              "spe": "15",
              "nameEn": "Bubble",
              "nameFr": "\u00c9cume",
              "id": "38",
              "typeFr": "eau"
            },
            {
              "typeId": "11",
              "dps": "10.91",
              "sps": "12.73",
              "damage": "6",
              "typeEn": "ground",
              "duration": "0.55",
              "spe": "7",
              "nameEn": "Mud Shot",
              "nameFr": "Tir de Boue",
              "id": "2",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Poliwhirl",
          "typesEn": [
            "water"
          ],
          "nameFr": "T\u00e9tarte",
          "defense": "132",
          "health": "130",
          "typesFr": [
            "eau"
          ],
          "cp": "1340",
          "id": "061"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ice",
              "dps": "12.86",
              "CCchance": "5",
              "esquive": "1.1",
              "damage": "45",
              "duration": "3.50",
              "nameEn": "Ice Punch",
              "nameFr": "Poing-Glace",
              "id": "56",
              "typeFr": "glace"
            },
            {
              "typeEn": "water",
              "dps": "23.68",
              "CCchance": "5",
              "esquive": "2.1",
              "damage": "90",
              "duration": "3.80",
              "nameEn": "Hydro Pump",
              "nameFr": "Hydrocanon",
              "id": "33",
              "typeFr": "eau"
            },
            {
              "typeEn": "fight",
              "dps": "14.29",
              "CCchance": "5",
              "esquive": "0.15",
              "damage": "30",
              "duration": "2.10",
              "nameEn": "Submission",
              "nameFr": "Sacrifice",
              "id": "66",
              "typeFr": "combat"
            }
          ],
          "attaque": "180",
          "abilities": [
            {
              "typeId": "18",
              "dps": "10.87",
              "sps": "6.52",
              "damage": "25",
              "typeEn": "water",
              "duration": "2.3",
              "spe": "15",
              "nameEn": "Bubble",
              "nameFr": "\u00c9cume",
              "id": "38",
              "typeFr": "eau"
            },
            {
              "typeId": "11",
              "dps": "10.91",
              "sps": "12.73",
              "damage": "6",
              "typeEn": "ground",
              "duration": "0.55",
              "spe": "7",
              "nameEn": "Mud Shot",
              "nameFr": "Tir de Boue",
              "id": "2",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Poliwrath",
          "typesEn": [
            "water",
            "fight"
          ],
          "nameFr": "Tartard",
          "defense": "202",
          "health": "180",
          "typesFr": [
            "eau",
            "combat"
          ],
          "cp": "2505",
          "id": "062"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ghost",
              "dps": "14.61",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "45",
              "duration": "3.08",
              "nameEn": "Shadow Ball",
              "nameFr": "Ball'Ombre",
              "id": "4",
              "typeFr": "spectre"
            },
            {
              "typeEn": "bug",
              "dps": "14.52",
              "CCchance": "5",
              "esquive": "1",
              "damage": "45",
              "duration": "3.10",
              "nameEn": "Signal Beam",
              "nameFr": "Rayon Signal",
              "id": "63",
              "typeFr": "insecte"
            },
            {
              "typeEn": "psychc",
              "dps": "14.81",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "40",
              "duration": "2.70",
              "nameEn": "Psyshock",
              "nameFr": "Choc Psy",
              "id": "16",
              "typeFr": "psy"
            }
          ],
          "attaque": "110",
          "abilities": [
            {
              "typeId": "15",
              "dps": "11.43",
              "sps": "3.81",
              "damage": "12",
              "typeEn": "psychc",
              "duration": "1.05",
              "spe": "4",
              "nameEn": "Zen Headbutt",
              "nameFr": "Psykoud'Boul",
              "id": "12",
              "typeFr": "psy"
            }
          ],
          "nameEn": "Abra",
          "typesEn": [
            "psychc"
          ],
          "nameFr": "Abra",
          "defense": "76",
          "health": "50",
          "typesFr": [
            "psy"
          ],
          "cp": "600",
          "id": "063"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ghost",
              "dps": "14.61",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "45",
              "duration": "3.08",
              "nameEn": "Shadow Ball",
              "nameFr": "Ball'Ombre",
              "id": "4",
              "typeFr": "spectre"
            },
            {
              "typeEn": "fairy",
              "dps": "13.10",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "55",
              "duration": "4.20",
              "nameEn": "Dazzling Gleam",
              "nameFr": "\u00c9clat Magique",
              "id": "29",
              "typeFr": "f\u00e9e"
            },
            {
              "typeEn": "psychc",
              "dps": "10.53",
              "CCchance": "5",
              "esquive": "1.3",
              "damage": "40",
              "duration": "3.80",
              "nameEn": "Psybeam",
              "nameFr": "Rafale Psy",
              "id": "61",
              "typeFr": "psy"
            }
          ],
          "attaque": "150",
          "abilities": [
            {
              "typeId": "15",
              "dps": "9.93",
              "sps": "4.64",
              "damage": "15",
              "typeEn": "psychc",
              "duration": "1.51",
              "spe": "7",
              "nameEn": "Confusion",
              "nameFr": "Choc Mental",
              "id": "33",
              "typeFr": "psy"
            },
            {
              "typeId": "15",
              "dps": "12.28",
              "sps": "12.28",
              "damage": "7",
              "typeEn": "psychc",
              "duration": "0.57",
              "spe": "7",
              "nameEn": "Psycho Cut",
              "nameFr": "Coupe Psycho",
              "id": "1",
              "typeFr": "psy"
            }
          ],
          "nameEn": "Kadabra",
          "typesEn": [
            "psychc"
          ],
          "nameFr": "Kadabra",
          "defense": "112",
          "health": "80",
          "typesFr": [
            "psy"
          ],
          "cp": "1131",
          "id": "064"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ghost",
              "dps": "14.61",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "45",
              "duration": "3.08",
              "nameEn": "Shadow Ball",
              "nameFr": "Ball'Ombre",
              "id": "4",
              "typeFr": "spectre"
            },
            {
              "typeEn": "fairy",
              "dps": "13.10",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "55",
              "duration": "4.20",
              "nameEn": "Dazzling Gleam",
              "nameFr": "\u00c9clat Magique",
              "id": "29",
              "typeFr": "f\u00e9e"
            },
            {
              "typeEn": "psychc",
              "dps": "19.64",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "55",
              "duration": "2.80",
              "nameEn": "Psychic",
              "nameFr": "Psyko",
              "id": "60",
              "typeFr": "psy"
            }
          ],
          "attaque": "186",
          "abilities": [
            {
              "typeId": "15",
              "dps": "9.93",
              "sps": "4.64",
              "damage": "15",
              "typeEn": "psychc",
              "duration": "1.51",
              "spe": "7",
              "nameEn": "Confusion",
              "nameFr": "Choc Mental",
              "id": "33",
              "typeFr": "psy"
            },
            {
              "typeId": "15",
              "dps": "12.28",
              "sps": "12.28",
              "damage": "7",
              "typeEn": "psychc",
              "duration": "0.57",
              "spe": "7",
              "nameEn": "Psycho Cut",
              "nameFr": "Coupe Psycho",
              "id": "1",
              "typeFr": "psy"
            }
          ],
          "nameEn": "Alakazam",
          "typesEn": [
            "psychc"
          ],
          "nameFr": "Alakazam",
          "defense": "152",
          "health": "110",
          "typesFr": [
            "psy"
          ],
          "cp": "1813",
          "id": "065"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fight",
              "dps": "18.75",
              "CCchance": "25",
              "esquive": "0.4",
              "damage": "30",
              "duration": "1.60",
              "nameEn": "Brick Break",
              "nameFr": "Casse-Brique",
              "id": "15",
              "typeFr": "combat"
            },
            {
              "typeEn": "fight",
              "dps": "30.00",
              "CCchance": "25",
              "esquive": "0.3",
              "damage": "60",
              "duration": "2.00",
              "nameEn": "Cross Chop",
              "nameFr": "Coup-Croix",
              "id": "18",
              "typeFr": "combat"
            },
            {
              "typeEn": "fight",
              "dps": "13.33",
              "CCchance": "5",
              "esquive": "0.15",
              "damage": "30",
              "duration": "2.25",
              "nameEn": "Low Sweep",
              "nameFr": "Balayette",
              "id": "3",
              "typeFr": "combat"
            }
          ],
          "attaque": "118",
          "abilities": [
            {
              "typeId": "6",
              "dps": "8.33",
              "sps": "11.67",
              "damage": "5",
              "typeEn": "fight",
              "duration": "0.6",
              "spe": "7",
              "nameEn": "Low Kick",
              "nameFr": "Balayage",
              "id": "32",
              "typeFr": "combat"
            },
            {
              "typeId": "6",
              "dps": "7.50",
              "sps": "8.75",
              "damage": "6",
              "typeEn": "fight",
              "duration": "0.8",
              "spe": "7",
              "nameEn": "Karate Chop",
              "nameFr": "Poing-Karat\u00e9",
              "id": "36",
              "typeFr": "combat"
            }
          ],
          "nameEn": "Machop",
          "typesEn": [
            "fight"
          ],
          "nameFr": "Machoc",
          "defense": "96",
          "health": "140",
          "typesFr": [
            "combat"
          ],
          "cp": "1089",
          "id": "066"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fight",
              "dps": "18.75",
              "CCchance": "25",
              "esquive": "0.4",
              "damage": "30",
              "duration": "1.60",
              "nameEn": "Brick Break",
              "nameFr": "Casse-Brique",
              "id": "15",
              "typeFr": "combat"
            },
            {
              "typeEn": "fight",
              "dps": "30.00",
              "CCchance": "25",
              "esquive": "0.3",
              "damage": "60",
              "duration": "2.00",
              "nameEn": "Cross Chop",
              "nameFr": "Coup-Croix",
              "id": "18",
              "typeFr": "combat"
            },
            {
              "typeEn": "fight",
              "dps": "14.29",
              "CCchance": "5",
              "esquive": "0.15",
              "damage": "30",
              "duration": "2.10",
              "nameEn": "Submission",
              "nameFr": "Sacrifice",
              "id": "66",
              "typeFr": "combat"
            }
          ],
          "attaque": "154",
          "abilities": [
            {
              "typeId": "6",
              "dps": "8.33",
              "sps": "11.67",
              "damage": "5",
              "typeEn": "fight",
              "duration": "0.6",
              "spe": "7",
              "nameEn": "Low Kick",
              "nameFr": "Balayage",
              "id": "32",
              "typeFr": "combat"
            },
            {
              "typeId": "6",
              "dps": "7.50",
              "sps": "8.75",
              "damage": "6",
              "typeEn": "fight",
              "duration": "0.8",
              "spe": "7",
              "nameEn": "Karate Chop",
              "nameFr": "Poing-Karat\u00e9",
              "id": "36",
              "typeFr": "combat"
            }
          ],
          "nameEn": "Machoke",
          "typesEn": [
            "fight"
          ],
          "nameFr": "Machopeur",
          "defense": "144",
          "health": "160",
          "typesFr": [
            "combat"
          ],
          "cp": "1760",
          "id": "067"
        },
        {
          "speAbilities": [
            {
              "typeEn": "rock",
              "dps": "25.81",
              "CCchance": "50",
              "esquive": "0.4",
              "damage": "80",
              "duration": "3.10",
              "nameEn": "Stone Edge",
              "nameFr": "Lame de Roc",
              "id": "36",
              "typeFr": "roche"
            },
            {
              "typeEn": "fight",
              "dps": "30.00",
              "CCchance": "25",
              "esquive": "0.3",
              "damage": "60",
              "duration": "2.00",
              "nameEn": "Cross Chop",
              "nameFr": "Coup-Croix",
              "id": "18",
              "typeFr": "combat"
            },
            {
              "typeEn": "fight",
              "dps": "14.29",
              "CCchance": "5",
              "esquive": "0.15",
              "damage": "30",
              "duration": "2.10",
              "nameEn": "Submission",
              "nameFr": "Sacrifice",
              "id": "66",
              "typeFr": "combat"
            }
          ],
          "attaque": "198",
          "abilities": [
            {
              "typeId": "17",
              "dps": "8.33",
              "sps": "5.83",
              "damage": "10",
              "typeEn": "steel",
              "duration": "1.2",
              "spe": "7",
              "nameEn": "Bullet Punch",
              "nameFr": "Pisto-Poing",
              "id": "29",
              "typeFr": "acier"
            },
            {
              "typeId": "6",
              "dps": "7.50",
              "sps": "8.75",
              "damage": "6",
              "typeEn": "fight",
              "duration": "0.8",
              "spe": "7",
              "nameEn": "Karate Chop",
              "nameFr": "Poing-Karat\u00e9",
              "id": "36",
              "typeFr": "combat"
            }
          ],
          "nameEn": "Machamp",
          "typesEn": [
            "fight"
          ],
          "nameFr": "Mackogneur",
          "defense": "180",
          "health": "180",
          "typesFr": [
            "combat"
          ],
          "cp": "2594",
          "id": "068"
        },
        {
          "speAbilities": [
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            },
            {
              "typeEn": "grass",
              "dps": "25.00",
              "CCchance": "0",
              "esquive": "1.3",
              "damage": "70",
              "duration": "2.80",
              "nameEn": "Power Whip",
              "nameFr": "M\u00e9gafouet",
              "id": "47",
              "typeFr": "plante"
            },
            {
              "typeEn": "normal",
              "dps": "6.25",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "25",
              "duration": "4.00",
              "nameEn": "Wrap",
              "nameFr": "Ligotage",
              "id": "41",
              "typeFr": "normal"
            }
          ],
          "attaque": "158",
          "abilities": [
            {
              "typeId": "14",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Acid",
              "nameFr": "Acide",
              "id": "25",
              "typeFr": "poison"
            },
            {
              "typeId": "10",
              "dps": "10.77",
              "sps": "10.77",
              "damage": "7",
              "typeEn": "grass",
              "duration": "0.65",
              "spe": "7",
              "nameEn": "Vine Whip",
              "nameFr": "Fouet Lianes",
              "id": "9",
              "typeFr": "plante"
            }
          ],
          "nameEn": "Bellsprout",
          "typesEn": [
            "grass",
            "poison"
          ],
          "nameFr": "Ch\u00e9tiflor",
          "defense": "78",
          "health": "100",
          "typesFr": [
            "plante",
            "poison"
          ],
          "cp": "1117",
          "id": "069"
        },
        {
          "speAbilities": [
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            },
            {
              "typeEn": "grass",
              "dps": "25.00",
              "CCchance": "0",
              "esquive": "1.3",
              "damage": "70",
              "duration": "2.80",
              "nameEn": "Power Whip",
              "nameFr": "M\u00e9gafouet",
              "id": "47",
              "typeFr": "plante"
            },
            {
              "typeEn": "grass",
              "dps": "16.67",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "40",
              "duration": "2.40",
              "nameEn": "Seed Bomb",
              "nameFr": "Canon Graine",
              "id": "14",
              "typeFr": "plante"
            }
          ],
          "attaque": "190",
          "abilities": [
            {
              "typeId": "14",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Acid",
              "nameFr": "Acide",
              "id": "25",
              "typeFr": "poison"
            },
            {
              "typeId": "10",
              "dps": "10.34",
              "sps": "4.83",
              "damage": "15",
              "typeEn": "grass",
              "duration": "1.45",
              "spe": "7",
              "nameEn": "Razor Leaf",
              "nameFr": "Tranch'Herbe",
              "id": "22",
              "typeFr": "plante"
            }
          ],
          "nameEn": "Weepinbell",
          "typesEn": [
            "grass",
            "poison"
          ],
          "nameFr": "Boustiflor",
          "defense": "110",
          "health": "130",
          "typesFr": [
            "plante",
            "poison"
          ],
          "cp": "1723",
          "id": "070"
        },
        {
          "speAbilities": [
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            },
            {
              "typeEn": "grass",
              "dps": "19.64",
              "CCchance": "25",
              "esquive": "1",
              "damage": "55",
              "duration": "2.80",
              "nameEn": "Leaf Blade",
              "nameFr": "Lame-Feuille",
              "id": "37",
              "typeFr": "plante"
            },
            {
              "typeEn": "grass",
              "dps": "24.49",
              "CCchance": "5",
              "esquive": "1.7",
              "damage": "120",
              "duration": "4.90",
              "nameEn": "Solar Beam",
              "nameFr": "Lance-Soleil",
              "id": "39",
              "typeFr": "plante"
            }
          ],
          "attaque": "222",
          "abilities": [
            {
              "typeId": "14",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Acid",
              "nameFr": "Acide",
              "id": "25",
              "typeFr": "poison"
            },
            {
              "typeId": "10",
              "dps": "10.34",
              "sps": "4.83",
              "damage": "15",
              "typeEn": "grass",
              "duration": "1.45",
              "spe": "7",
              "nameEn": "Razor Leaf",
              "nameFr": "Tranch'Herbe",
              "id": "22",
              "typeFr": "plante"
            }
          ],
          "nameEn": "Victreebel",
          "typesEn": [
            "grass",
            "poison"
          ],
          "nameFr": "Empiflor",
          "defense": "152",
          "health": "160",
          "typesFr": [
            "plante",
            "poison"
          ],
          "cp": "2530",
          "id": "071"
        },
        {
          "speAbilities": [
            {
              "typeEn": "water",
              "dps": "10.34",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "30",
              "duration": "2.90",
              "nameEn": "Bubble Beam",
              "nameFr": "Bulles d'O",
              "id": "11",
              "typeFr": "eau"
            },
            {
              "id": "82",
              "nameEn": "",
              "nameFr": "Vibraqua",
              "typeEn": "water",
              "typeFr": "eau",
              "damage": "25",
              "duration": "3.30",
              "dps": "7.58",
              "CCchance": "5",
              "esquive": "1"
            },
            {
              "typeEn": "normal",
              "dps": "6.25",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "25",
              "duration": "4.00",
              "nameEn": "Wrap",
              "nameFr": "Ligotage",
              "id": "41",
              "typeFr": "normal"
            }
          ],
          "attaque": "106",
          "abilities": [
            {
              "typeId": "18",
              "dps": "10.87",
              "sps": "6.52",
              "damage": "25",
              "typeEn": "water",
              "duration": "2.3",
              "spe": "15",
              "nameEn": "Bubble",
              "nameFr": "\u00c9cume",
              "id": "38",
              "typeFr": "eau"
            },
            {
              "typeId": "14",
              "dps": "10.43",
              "sps": "6.96",
              "damage": "6",
              "typeEn": "poison",
              "duration": "0.575",
              "spe": "4",
              "nameEn": "Poison Sting",
              "nameFr": "Dard-Venin",
              "id": "21",
              "typeFr": "poison"
            }
          ],
          "nameEn": "Tentacool",
          "typesEn": [
            "water",
            "poison"
          ],
          "nameFr": "Tentacool",
          "defense": "136",
          "health": "80",
          "typesFr": [
            "eau",
            "poison"
          ],
          "cp": "905",
          "id": "072"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ice",
              "dps": "25.64",
              "CCchance": "5",
              "esquive": "0",
              "damage": "100",
              "duration": "3.90",
              "nameEn": "Blizzard",
              "nameFr": "Blizzard",
              "id": "6",
              "typeFr": "glace"
            },
            {
              "typeEn": "water",
              "dps": "23.68",
              "CCchance": "5",
              "esquive": "2.1",
              "damage": "90",
              "duration": "3.80",
              "nameEn": "Hydro Pump",
              "nameFr": "Hydrocanon",
              "id": "33",
              "typeFr": "eau"
            },
            {
              "typeEn": "poison",
              "dps": "20.59",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "70",
              "duration": "3.40",
              "nameEn": "Sludge Wave",
              "nameFr": "Cradovague",
              "id": "19",
              "typeFr": "poison"
            }
          ],
          "attaque": "170",
          "abilities": [
            {
              "typeId": "14",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Acid",
              "nameFr": "Acide",
              "id": "25",
              "typeFr": "poison"
            },
            {
              "typeId": "14",
              "dps": "11.43",
              "sps": "6.67",
              "damage": "12",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Poison Jab",
              "nameFr": "Direct Toxik",
              "id": "13",
              "typeFr": "poison"
            }
          ],
          "nameEn": "Tentacruel",
          "typesEn": [
            "water",
            "poison"
          ],
          "nameFr": "Tetacruel",
          "defense": "196",
          "health": "160",
          "typesFr": [
            "eau",
            "poison"
          ],
          "cp": "2220",
          "id": "073"
        },
        {
          "speAbilities": [
            {
              "typeEn": "rock",
              "dps": "15.63",
              "CCchance": "5",
              "esquive": "1.4",
              "damage": "50",
              "duration": "3.20",
              "nameEn": "Rock Slide",
              "nameFr": "\u00c9boulement",
              "id": "27",
              "typeFr": "roche"
            },
            {
              "typeEn": "ground",
              "dps": "12.07",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "70",
              "duration": "5.80",
              "nameEn": "Dig",
              "nameFr": "Tunnel",
              "id": "75",
              "typeFr": "sol"
            },
            {
              "typeEn": "rock",
              "dps": "8.82",
              "CCchance": "25",
              "esquive": "0.9",
              "damage": "30",
              "duration": "3.40",
              "nameEn": "Rock Tomb",
              "nameFr": "Tomberoche",
              "id": "71",
              "typeFr": "roche"
            }
          ],
          "attaque": "106",
          "abilities": [
            {
              "typeId": "16",
              "dps": "8.82",
              "sps": "5.15",
              "damage": "12",
              "typeEn": "rock",
              "duration": "1.36",
              "spe": "7",
              "nameEn": "Rock Throw",
              "nameFr": "Jet-Pierres",
              "id": "27",
              "typeFr": "roche"
            },
            {
              "typeId": "13",
              "dps": "10.91",
              "sps": "6.36",
              "damage": "12",
              "typeEn": "normal",
              "duration": "1.1",
              "spe": "7",
              "nameEn": "Tackle",
              "nameFr": "Charge",
              "id": "19",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Geodude",
          "typesEn": [
            "rock",
            "ground"
          ],
          "nameFr": "Racaillou",
          "defense": "118",
          "health": "80",
          "typesFr": [
            "roche",
            "sol"
          ],
          "cp": "849",
          "id": "074"
        },
        {
          "speAbilities": [
            {
              "typeEn": "rock",
              "dps": "15.63",
              "CCchance": "5",
              "esquive": "1.4",
              "damage": "50",
              "duration": "3.20",
              "nameEn": "Rock Slide",
              "nameFr": "\u00c9boulement",
              "id": "27",
              "typeFr": "roche"
            },
            {
              "typeEn": "ground",
              "dps": "12.07",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "70",
              "duration": "5.80",
              "nameEn": "Dig",
              "nameFr": "Tunnel",
              "id": "75",
              "typeFr": "sol"
            },
            {
              "typeEn": "rock",
              "dps": "25.81",
              "CCchance": "50",
              "esquive": "0.4",
              "damage": "80",
              "duration": "3.10",
              "nameEn": "Stone Edge",
              "nameFr": "Lame de Roc",
              "id": "36",
              "typeFr": "roche"
            }
          ],
          "attaque": "142",
          "abilities": [
            {
              "typeId": "16",
              "dps": "8.82",
              "sps": "5.15",
              "damage": "12",
              "typeEn": "rock",
              "duration": "1.36",
              "spe": "7",
              "nameEn": "Rock Throw",
              "nameFr": "Jet-Pierres",
              "id": "27",
              "typeFr": "roche"
            },
            {
              "typeId": "11",
              "dps": "10.91",
              "sps": "12.73",
              "damage": "6",
              "typeEn": "ground",
              "duration": "0.55",
              "spe": "7",
              "nameEn": "Mud Shot",
              "nameFr": "Tir de Boue",
              "id": "2",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Graveler",
          "typesEn": [
            "rock",
            "ground"
          ],
          "nameFr": "Gravalanch",
          "defense": "156",
          "health": "110",
          "typesFr": [
            "roche",
            "sol"
          ],
          "cp": "1433",
          "id": "075"
        },
        {
          "speAbilities": [
            {
              "typeEn": "rock",
              "dps": "9.72",
              "CCchance": "5",
              "esquive": "0.35",
              "damage": "35",
              "duration": "3.60",
              "nameEn": "Ancient Power",
              "nameFr": "Pouvoir Antique",
              "id": "58",
              "typeFr": "roche"
            },
            {
              "typeEn": "ground",
              "dps": "23.81",
              "CCchance": "5",
              "esquive": "1.95",
              "damage": "100",
              "duration": "4.20",
              "nameEn": "Earthquake",
              "nameFr": "S\u00e9isme",
              "id": "68",
              "typeFr": "sol"
            },
            {
              "typeEn": "rock",
              "dps": "25.81",
              "CCchance": "50",
              "esquive": "0.4",
              "damage": "80",
              "duration": "3.10",
              "nameEn": "Stone Edge",
              "nameFr": "Lame de Roc",
              "id": "36",
              "typeFr": "roche"
            }
          ],
          "attaque": "176",
          "abilities": [
            {
              "typeId": "16",
              "dps": "8.82",
              "sps": "5.15",
              "damage": "12",
              "typeEn": "rock",
              "duration": "1.36",
              "spe": "7",
              "nameEn": "Rock Throw",
              "nameFr": "Jet-Pierres",
              "id": "27",
              "typeFr": "roche"
            },
            {
              "typeId": "11",
              "dps": "10.91",
              "sps": "12.73",
              "damage": "6",
              "typeEn": "ground",
              "duration": "0.55",
              "spe": "7",
              "nameEn": "Mud Shot",
              "nameFr": "Tir de Boue",
              "id": "2",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Golem",
          "typesEn": [
            "rock",
            "ground"
          ],
          "nameFr": "Grolem",
          "defense": "198",
          "health": "160",
          "typesFr": [
            "roche",
            "sol"
          ],
          "cp": "2303",
          "id": "076"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fire",
              "dps": "8.70",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "40",
              "duration": "4.60",
              "nameEn": "Flame Wheel",
              "nameFr": "Roue de Feu",
              "id": "65",
              "typeFr": "feu"
            },
            {
              "typeEn": "fire",
              "dps": "24.39",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "100",
              "duration": "4.10",
              "nameEn": "Fire Blast",
              "nameFr": "D\u00e9flagration",
              "id": "22",
              "typeFr": "feu"
            },
            {
              "typeEn": "fire",
              "dps": "8.06",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "25",
              "duration": "3.10",
              "nameEn": "Flame Charge",
              "nameFr": "Nitrocharge",
              "id": "49",
              "typeFr": "feu"
            }
          ],
          "attaque": "168",
          "abilities": [
            {
              "typeId": "13",
              "dps": "10.91",
              "sps": "6.36",
              "damage": "12",
              "typeEn": "normal",
              "duration": "1.1",
              "spe": "7",
              "nameEn": "Tackle",
              "nameFr": "Charge",
              "id": "19",
              "typeFr": "normal"
            },
            {
              "typeId": "7",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "fire",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Ember",
              "nameFr": "Flamm\u00e8che",
              "id": "26",
              "typeFr": "feu"
            }
          ],
          "nameEn": "Ponyta",
          "typesEn": [
            "fire"
          ],
          "nameFr": "Ponyta",
          "defense": "138",
          "health": "100",
          "typesFr": [
            "feu"
          ],
          "cp": "1516",
          "id": "077"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fire",
              "dps": "21.05",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "80",
              "duration": "3.80",
              "nameEn": "Heat Wave",
              "nameFr": "Canicule",
              "id": "13",
              "typeFr": "feu"
            },
            {
              "typeEn": "fire",
              "dps": "24.39",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "100",
              "duration": "4.10",
              "nameEn": "Fire Blast",
              "nameFr": "D\u00e9flagration",
              "id": "22",
              "typeFr": "feu"
            },
            {
              "typeEn": "ground",
              "dps": "14.71",
              "CCchance": "25",
              "esquive": "0.7",
              "damage": "50",
              "duration": "3.40",
              "nameEn": "Drill Run",
              "nameFr": "Tunnelier",
              "id": "76",
              "typeFr": "sol"
            }
          ],
          "attaque": "200",
          "abilities": [
            {
              "typeId": "6",
              "dps": "8.33",
              "sps": "11.67",
              "damage": "5",
              "typeEn": "fight",
              "duration": "0.6",
              "spe": "7",
              "nameEn": "Low Kick",
              "nameFr": "Balayage",
              "id": "32",
              "typeFr": "combat"
            },
            {
              "typeId": "7",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "fire",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Ember",
              "nameFr": "Flamm\u00e8che",
              "id": "26",
              "typeFr": "feu"
            }
          ],
          "nameEn": "Rapidash",
          "typesEn": [
            "fire"
          ],
          "nameFr": "Galopa",
          "defense": "170",
          "health": "130",
          "typesFr": [
            "feu"
          ],
          "cp": "2199",
          "id": "078"
        },
        {
          "speAbilities": [
            {
              "typeEn": "psychc",
              "dps": "19.64",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "55",
              "duration": "2.80",
              "nameEn": "Psychic",
              "nameFr": "Psyko",
              "id": "60",
              "typeFr": "psy"
            },
            {
              "id": "82",
              "nameEn": "",
              "nameFr": "Vibraqua",
              "typeEn": "water",
              "typeFr": "eau",
              "damage": "25",
              "duration": "3.30",
              "dps": "7.58",
              "CCchance": "5",
              "esquive": "1"
            },
            {
              "typeEn": "psychc",
              "dps": "14.81",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "40",
              "duration": "2.70",
              "nameEn": "Psyshock",
              "nameFr": "Choc Psy",
              "id": "16",
              "typeFr": "psy"
            }
          ],
          "attaque": "110",
          "abilities": [
            {
              "typeId": "18",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "water",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Water Gun",
              "nameFr": "Pistolet \u00e0 O",
              "id": "5",
              "typeFr": "eau"
            },
            {
              "typeId": "15",
              "dps": "9.93",
              "sps": "4.64",
              "damage": "15",
              "typeEn": "psychc",
              "duration": "1.51",
              "spe": "7",
              "nameEn": "Confusion",
              "nameFr": "Choc Mental",
              "id": "33",
              "typeFr": "psy"
            }
          ],
          "nameEn": "Slowpoke",
          "typesEn": [
            "water",
            "psychc"
          ],
          "nameFr": "Ramoloss",
          "defense": "110",
          "health": "180",
          "typesFr": [
            "eau",
            "psy"
          ],
          "cp": "1218",
          "id": "079"
        },
        {
          "speAbilities": [
            {
              "typeEn": "psychc",
              "dps": "19.64",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "55",
              "duration": "2.80",
              "nameEn": "Psychic",
              "nameFr": "Psyko",
              "id": "60",
              "typeFr": "psy"
            },
            {
              "id": "82",
              "nameEn": "",
              "nameFr": "Vibraqua",
              "typeEn": "water",
              "typeFr": "eau",
              "damage": "25",
              "duration": "3.30",
              "dps": "7.58",
              "CCchance": "5",
              "esquive": "1"
            },
            {
              "typeEn": "ice",
              "dps": "17.81",
              "CCchance": "5",
              "esquive": "1.35",
              "damage": "65",
              "duration": "3.65",
              "nameEn": "Ice Beam",
              "nameFr": "Laser Glace",
              "id": "40",
              "typeFr": "glace"
            }
          ],
          "attaque": "184",
          "abilities": [
            {
              "typeId": "18",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "water",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Water Gun",
              "nameFr": "Pistolet \u00e0 O",
              "id": "5",
              "typeFr": "eau"
            },
            {
              "typeId": "15",
              "dps": "9.93",
              "sps": "4.64",
              "damage": "15",
              "typeEn": "psychc",
              "duration": "1.51",
              "spe": "7",
              "nameEn": "Confusion",
              "nameFr": "Choc Mental",
              "id": "33",
              "typeFr": "psy"
            }
          ],
          "nameEn": "Slowbro",
          "typesEn": [
            "water",
            "psychc"
          ],
          "nameFr": "Flagadoss",
          "defense": "198",
          "health": "190",
          "typesFr": [
            "eau",
            "psy"
          ],
          "cp": "2597",
          "id": "080"
        },
        {
          "speAbilities": [
            {
              "typeEn": "steel",
              "dps": "10.71",
              "CCchance": "5",
              "esquive": "0.55",
              "damage": "30",
              "duration": "2.80",
              "nameEn": "Magnet Bomb",
              "nameFr": "Bombaimant",
              "id": "8",
              "typeFr": "acier"
            },
            {
              "typeEn": "electr",
              "dps": "14.00",
              "CCchance": "5",
              "esquive": "0.7",
              "damage": "35",
              "duration": "2.50",
              "nameEn": "Discharge",
              "nameFr": "Coup d'Jus",
              "id": "17",
              "typeFr": "\u00e9leck"
            },
            {
              "typeEn": "electr",
              "dps": "20.37",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "55",
              "duration": "2.70",
              "nameEn": "Thunderbolt",
              "nameFr": "Tonnerre",
              "id": "72",
              "typeFr": "\u00e9leck"
            }
          ],
          "attaque": "128",
          "abilities": [
            {
              "typeId": "4",
              "dps": "10.00",
              "sps": "5.71",
              "damage": "7",
              "typeEn": "electr",
              "duration": "0.7",
              "spe": "4",
              "nameEn": "Spark",
              "nameFr": "\u00c9tincelle",
              "id": "24",
              "typeFr": "\u00e9leck"
            },
            {
              "typeId": "4",
              "dps": "8.33",
              "sps": "11.67",
              "damage": "5",
              "typeEn": "electr",
              "duration": "0.6",
              "spe": "7",
              "nameEn": "Thunder Shock",
              "nameFr": "\u00c9clair",
              "id": "30",
              "typeFr": "\u00e9leck"
            }
          ],
          "nameEn": "Magnemite",
          "typesEn": [
            "electr",
            "steel"
          ],
          "nameFr": "Magn\u00e9ti",
          "defense": "138",
          "health": "50",
          "typesFr": [
            "\u00e9leck",
            "acier"
          ],
          "cp": "890",
          "id": "081"
        },
        {
          "speAbilities": [
            {
              "typeEn": "steel",
              "dps": "10.71",
              "CCchance": "5",
              "esquive": "0.55",
              "damage": "30",
              "duration": "2.80",
              "nameEn": "Magnet Bomb",
              "nameFr": "Bombaimant",
              "id": "8",
              "typeFr": "acier"
            },
            {
              "typeEn": "electr",
              "dps": "14.00",
              "CCchance": "5",
              "esquive": "0.7",
              "damage": "35",
              "duration": "2.50",
              "nameEn": "Discharge",
              "nameFr": "Coup d'Jus",
              "id": "17",
              "typeFr": "\u00e9leck"
            },
            {
              "typeEn": "steel",
              "dps": "15.38",
              "CCchance": "5",
              "esquive": "1.1",
              "damage": "60",
              "duration": "3.90",
              "nameEn": "Flash Cannon",
              "nameFr": "Luminocanon",
              "id": "43",
              "typeFr": "acier"
            }
          ],
          "attaque": "186",
          "abilities": [
            {
              "typeId": "4",
              "dps": "10.00",
              "sps": "5.71",
              "damage": "7",
              "typeEn": "electr",
              "duration": "0.7",
              "spe": "4",
              "nameEn": "Spark",
              "nameFr": "\u00c9tincelle",
              "id": "24",
              "typeFr": "\u00e9leck"
            },
            {
              "typeId": "4",
              "dps": "8.33",
              "sps": "11.67",
              "damage": "5",
              "typeEn": "electr",
              "duration": "0.6",
              "spe": "7",
              "nameEn": "Thunder Shock",
              "nameFr": "\u00c9clair",
              "id": "30",
              "typeFr": "\u00e9leck"
            }
          ],
          "nameEn": "Magneton",
          "typesEn": [
            "electr",
            "steel"
          ],
          "nameFr": "Magn\u00e9ton",
          "defense": "180",
          "health": "100",
          "typesFr": [
            "\u00e9leck",
            "acier"
          ],
          "cp": "1879",
          "id": "082"
        },
        {
          "speAbilities": [
            {
              "typeEn": "flying",
              "dps": "9.09",
              "CCchance": "25",
              "esquive": "0.9",
              "damage": "30",
              "duration": "3.30",
              "nameEn": "Air Cutter",
              "nameFr": "Tranch'Air",
              "id": "73",
              "typeFr": "vol"
            },
            {
              "typeEn": "flying",
              "dps": "10.34",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "30",
              "duration": "2.90",
              "nameEn": "Aerial Ace",
              "nameFr": "A\u00e9ropique",
              "id": "1",
              "typeFr": "vol"
            },
            {
              "typeEn": "grass",
              "dps": "19.64",
              "CCchance": "25",
              "esquive": "1",
              "damage": "55",
              "duration": "2.80",
              "nameEn": "Leaf Blade",
              "nameFr": "Lame-Feuille",
              "id": "37",
              "typeFr": "plante"
            }
          ],
          "attaque": "138",
          "abilities": [
            {
              "typeId": "1",
              "dps": "7.50",
              "sps": "30.00",
              "damage": "3",
              "typeEn": "bug",
              "duration": "0.4",
              "spe": "12",
              "nameEn": "Fury Cutter",
              "nameFr": "Taillade",
              "id": "35",
              "typeFr": "insecte"
            },
            {
              "typeId": "13",
              "dps": "10.62",
              "sps": "6.19",
              "damage": "12",
              "typeEn": "normal",
              "duration": "1.13",
              "spe": "7",
              "nameEn": "Cut",
              "nameFr": "Coupe",
              "id": "20",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Farfetch'd",
          "typesEn": [
            "normal",
            "flying"
          ],
          "nameFr": "Canarticho",
          "defense": "132",
          "health": "104",
          "typesFr": [
            "normal",
            "vol"
          ],
          "cp": "1263",
          "id": "083"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "10.00",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "30",
              "duration": "3.00",
              "nameEn": "Swift",
              "nameFr": "M\u00e9t\u00e9ores",
              "id": "48",
              "typeFr": "normal"
            },
            {
              "typeEn": "flying",
              "dps": "10.34",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "30",
              "duration": "2.90",
              "nameEn": "Aerial Ace",
              "nameFr": "A\u00e9ropique",
              "id": "1",
              "typeFr": "vol"
            },
            {
              "typeEn": "flying",
              "dps": "14.81",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "40",
              "duration": "2.70",
              "nameEn": "Drill Peck",
              "nameFr": "Bec Vrille",
              "id": "5",
              "typeFr": "vol"
            }
          ],
          "attaque": "126",
          "abilities": [
            {
              "typeId": "8",
              "dps": "8.70",
              "sps": "8.70",
              "damage": "10",
              "typeEn": "flying",
              "duration": "1.15",
              "spe": "10",
              "nameEn": "Peck",
              "nameFr": "Picpic",
              "id": "28",
              "typeFr": "vol"
            },
            {
              "typeId": "13",
              "dps": "7.52",
              "sps": "5.26",
              "damage": "10",
              "typeEn": "normal",
              "duration": "1.33",
              "spe": "7",
              "nameEn": "Quick Attack",
              "nameFr": "Vive-Attaque",
              "id": "34",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Doduo",
          "typesEn": [
            "normal",
            "flying"
          ],
          "nameFr": "Doduo",
          "defense": "96",
          "health": "70",
          "typesFr": [
            "normal",
            "vol"
          ],
          "cp": "855",
          "id": "084"
        },
        {
          "speAbilities": [
            {
              "typeEn": "flying",
              "dps": "14.81",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "40",
              "duration": "2.70",
              "nameEn": "Drill Peck",
              "nameFr": "Bec Vrille",
              "id": "5",
              "typeFr": "vol"
            },
            {
              "typeEn": "flying",
              "dps": "10.34",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "30",
              "duration": "2.90",
              "nameEn": "Aerial Ace",
              "nameFr": "A\u00e9ropique",
              "id": "1",
              "typeFr": "vol"
            },
            {
              "typeEn": "flying",
              "dps": "9.09",
              "CCchance": "25",
              "esquive": "0.9",
              "damage": "30",
              "duration": "3.30",
              "nameEn": "Air Cutter",
              "nameFr": "Tranch'Air",
              "id": "73",
              "typeFr": "vol"
            }
          ],
          "attaque": "182",
          "abilities": [
            {
              "typeId": "17",
              "dps": "11.28",
              "sps": "3.01",
              "damage": "15",
              "typeEn": "steel",
              "duration": "1.33",
              "spe": "4",
              "nameEn": "Steel Wing",
              "nameFr": "Aile d'Acier",
              "id": "18",
              "typeFr": "acier"
            },
            {
              "typeId": "2",
              "dps": "11.54",
              "sps": "6.73",
              "damage": "12",
              "typeEn": "dark",
              "duration": "1.04",
              "spe": "7",
              "nameEn": "Feint Attack",
              "nameFr": "Feinte",
              "id": "17",
              "typeFr": "t\u00e9n\u00e8bres"
            }
          ],
          "nameEn": "Dodrio",
          "typesEn": [
            "normal",
            "flying"
          ],
          "nameFr": "Dodrio",
          "defense": "150",
          "health": "120",
          "typesFr": [
            "normal",
            "vol"
          ],
          "cp": "1836",
          "id": "085"
        },
        {
          "speAbilities": [
            {
              "typeEn": "water",
              "dps": "10.64",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "25",
              "duration": "2.35",
              "nameEn": "Aqua Jet",
              "nameFr": "Aqua Jet",
              "id": "2",
              "typeFr": "eau"
            },
            {
              "typeEn": "ice",
              "dps": "6.58",
              "CCchance": "5",
              "esquive": "0.7",
              "damage": "25",
              "duration": "3.80",
              "nameEn": "Icy Wind",
              "nameFr": "Vent Glace",
              "id": "79",
              "typeFr": "glace"
            },
            {
              "typeEn": "water",
              "dps": "19.15",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "45",
              "duration": "2.35",
              "nameEn": "Aqua Tail",
              "nameFr": "Hydroqueue",
              "id": "34",
              "typeFr": "eau"
            }
          ],
          "attaque": "104",
          "abilities": [
            {
              "typeId": "18",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "water",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Water Gun",
              "nameFr": "Pistolet \u00e0 O",
              "id": "5",
              "typeFr": "eau"
            },
            {
              "typeId": "12",
              "dps": "10.71",
              "sps": "5.00",
              "damage": "15",
              "typeEn": "",
              "duration": "1.4",
              "spe": "7",
              "nameEn": "Ice Shard",
              "nameFr": "\u00c9clats Glace",
              "id": "37",
              "typeFr": "glace"
            }
          ],
          "nameEn": "Seel",
          "typesEn": [
            "water"
          ],
          "nameFr": "Otaria",
          "defense": "138",
          "health": "130",
          "typesFr": [
            "eau"
          ],
          "cp": "1107",
          "id": "086"
        },
        {
          "speAbilities": [
            {
              "typeEn": "water",
              "dps": "10.64",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "25",
              "duration": "2.35",
              "nameEn": "Aqua Jet",
              "nameFr": "Aqua Jet",
              "id": "2",
              "typeFr": "eau"
            },
            {
              "typeEn": "ice",
              "dps": "6.58",
              "CCchance": "5",
              "esquive": "0.7",
              "damage": "25",
              "duration": "3.80",
              "nameEn": "Icy Wind",
              "nameFr": "Vent Glace",
              "id": "79",
              "typeFr": "glace"
            },
            {
              "typeEn": "ice",
              "dps": "25.64",
              "CCchance": "5",
              "esquive": "0",
              "damage": "100",
              "duration": "3.90",
              "nameEn": "Blizzard",
              "nameFr": "Blizzard",
              "id": "6",
              "typeFr": "glace"
            }
          ],
          "attaque": "156",
          "abilities": [
            {
              "typeId": "12",
              "dps": "11.11",
              "sps": "8.64",
              "damage": "9",
              "typeEn": "ice",
              "duration": "0.81",
              "spe": "7",
              "nameEn": "Frost Breath",
              "nameFr": "Souffle Glac\u00e9",
              "id": "11",
              "typeFr": "glace"
            },
            {
              "typeId": "12",
              "dps": "10.71",
              "sps": "5.00",
              "damage": "15",
              "typeEn": "",
              "duration": "1.4",
              "spe": "7",
              "nameEn": "Ice Shard",
              "nameFr": "\u00c9clats Glace",
              "id": "37",
              "typeFr": "glace"
            }
          ],
          "nameEn": "Dewgong",
          "typesEn": [
            "water",
            "ice"
          ],
          "nameFr": "Lamantine",
          "defense": "192",
          "health": "180",
          "typesFr": [
            "eau",
            "glace"
          ],
          "cp": "2145",
          "id": "087"
        },
        {
          "speAbilities": [
            {
              "typeEn": "poison",
              "dps": "11.54",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "30",
              "duration": "2.60",
              "nameEn": "Sludge",
              "nameFr": "D\u00e9tritus",
              "id": "24",
              "typeFr": "poison"
            },
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            },
            {
              "typeEn": "ground",
              "dps": "11.54",
              "CCchance": "5",
              "esquive": "0.45",
              "damage": "30",
              "duration": "2.60",
              "nameEn": "Mud Bomb",
              "nameFr": "Boue-Bombe",
              "id": "9",
              "typeFr": "sol"
            }
          ],
          "attaque": "124",
          "abilities": [
            {
              "typeId": "11",
              "dps": "11.11",
              "sps": "6.67",
              "damage": "15",
              "typeEn": "ground",
              "duration": "1.35",
              "spe": "9",
              "nameEn": "Mud Slap",
              "nameFr": "Coud'Boue",
              "id": "39",
              "typeFr": "sol"
            },
            {
              "typeId": "14",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Acid",
              "nameFr": "Acide",
              "id": "25",
              "typeFr": "poison"
            }
          ],
          "nameEn": "Grimer",
          "typesEn": [
            "poison"
          ],
          "nameFr": "Tadmorv",
          "defense": "110",
          "health": "160",
          "typesFr": [
            "poison"
          ],
          "cp": "1284",
          "id": "088"
        },
        {
          "speAbilities": [
            {
              "typeEn": "poison",
              "dps": "20.59",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "70",
              "duration": "3.40",
              "nameEn": "Sludge Wave",
              "nameFr": "Cradovague",
              "id": "19",
              "typeFr": "poison"
            },
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            },
            {
              "typeEn": "dark",
              "dps": "12.86",
              "CCchance": "5",
              "esquive": "1.1",
              "damage": "45",
              "duration": "3.50",
              "nameEn": "Dark Pulse",
              "nameFr": "Vibrobscur",
              "id": "83",
              "typeFr": "t\u00e9n\u00e8bres"
            }
          ],
          "attaque": "180",
          "abilities": [
            {
              "typeId": "14",
              "dps": "11.43",
              "sps": "6.67",
              "damage": "12",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Poison Jab",
              "nameFr": "Direct Toxik",
              "id": "13",
              "typeFr": "poison"
            },
            {
              "typeId": "14",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Acid",
              "nameFr": "Acide",
              "id": "25",
              "typeFr": "poison"
            }
          ],
          "nameEn": "Muk",
          "typesEn": [
            "poison"
          ],
          "nameFr": "Grotadmorv",
          "defense": "188",
          "health": "210",
          "typesFr": [
            "poison"
          ],
          "cp": "2602",
          "id": "089"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ice",
              "dps": "6.58",
              "CCchance": "5",
              "esquive": "0.7",
              "damage": "25",
              "duration": "3.80",
              "nameEn": "Icy Wind",
              "nameFr": "Vent Glace",
              "id": "79",
              "typeFr": "glace"
            },
            {
              "id": "82",
              "nameEn": "",
              "nameFr": "Vibraqua",
              "typeEn": "water",
              "typeFr": "eau",
              "damage": "25",
              "duration": "3.30",
              "dps": "7.58",
              "CCchance": "5",
              "esquive": "1"
            },
            {
              "typeEn": "water",
              "dps": "10.34",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "30",
              "duration": "2.90",
              "nameEn": "Bubble Beam",
              "nameFr": "Bulles d'O",
              "id": "11",
              "typeFr": "eau"
            }
          ],
          "attaque": "120",
          "abilities": [
            {
              "typeId": "12",
              "dps": "10.71",
              "sps": "5.00",
              "damage": "15",
              "typeEn": "",
              "duration": "1.4",
              "spe": "7",
              "nameEn": "Ice Shard",
              "nameFr": "\u00c9clats Glace",
              "id": "37",
              "typeFr": "glace"
            },
            {
              "typeId": "13",
              "dps": "10.91",
              "sps": "6.36",
              "damage": "12",
              "typeEn": "normal",
              "duration": "1.1",
              "spe": "7",
              "nameEn": "Tackle",
              "nameFr": "Charge",
              "id": "19",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Shellder",
          "typesEn": [
            "water"
          ],
          "nameFr": "Kokiyas",
          "defense": "112",
          "health": "60",
          "typesFr": [
            "eau"
          ],
          "cp": "822",
          "id": "090"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ice",
              "dps": "6.58",
              "CCchance": "5",
              "esquive": "0.7",
              "damage": "25",
              "duration": "3.80",
              "nameEn": "Icy Wind",
              "nameFr": "Vent Glace",
              "id": "79",
              "typeFr": "glace"
            },
            {
              "typeEn": "ice",
              "dps": "25.64",
              "CCchance": "5",
              "esquive": "0",
              "damage": "100",
              "duration": "3.90",
              "nameEn": "Blizzard",
              "nameFr": "Blizzard",
              "id": "6",
              "typeFr": "glace"
            },
            {
              "typeEn": "water",
              "dps": "23.68",
              "CCchance": "5",
              "esquive": "2.1",
              "damage": "90",
              "duration": "3.80",
              "nameEn": "Hydro Pump",
              "nameFr": "Hydrocanon",
              "id": "33",
              "typeFr": "eau"
            }
          ],
          "attaque": "196",
          "abilities": [
            {
              "typeId": "12",
              "dps": "10.71",
              "sps": "5.00",
              "damage": "15",
              "typeEn": "",
              "duration": "1.4",
              "spe": "7",
              "nameEn": "Ice Shard",
              "nameFr": "\u00c9clats Glace",
              "id": "37",
              "typeFr": "glace"
            },
            {
              "typeId": "12",
              "dps": "11.11",
              "sps": "8.64",
              "damage": "9",
              "typeEn": "ice",
              "duration": "0.81",
              "spe": "7",
              "nameEn": "Frost Breath",
              "nameFr": "Souffle Glac\u00e9",
              "id": "11",
              "typeFr": "glace"
            }
          ],
          "nameEn": "Cloyster",
          "typesEn": [
            "water",
            "ice"
          ],
          "nameFr": "Crustabri",
          "defense": "196",
          "health": "100",
          "typesFr": [
            "eau",
            "glace"
          ],
          "cp": "2052",
          "id": "091"
        },
        {
          "speAbilities": [
            {
              "typeEn": "dark",
              "dps": "12.86",
              "CCchance": "5",
              "esquive": "1.1",
              "damage": "45",
              "duration": "3.50",
              "nameEn": "Dark Pulse",
              "nameFr": "Vibrobscur",
              "id": "83",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            },
            {
              "id": "80",
              "nameEn": "Ominous wind",
              "nameFr": "Vent Mauvais",
              "typeEn": "dark",
              "typeFr": "ténèbres",
              "damage": "30",
              "duration": "3.10",
              "dps": "9.68",
              "CCchance": "5",
              "esquive": "0.25"
            }
          ],
          "attaque": "136",
          "abilities": [
            {
              "typeId": "9",
              "dps": "10.00",
              "sps": "14.00",
              "damage": "5",
              "typeEn": "ghost",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Lick",
              "nameFr": "L\u00e9chouille",
              "id": "3",
              "typeFr": "spectre"
            },
            {
              "typeId": "2",
              "dps": "10.00",
              "sps": "5.71",
              "damage": "7",
              "typeEn": "dark",
              "duration": "0.7",
              "spe": "4",
              "nameEn": "Sucker Punch",
              "nameFr": "Coup Bas",
              "id": "23",
              "typeFr": "t\u00e9n\u00e8bres"
            }
          ],
          "nameEn": "Gastly",
          "typesEn": [
            "ghost",
            "poison"
          ],
          "nameFr": "Fantominus",
          "defense": "82",
          "health": "60",
          "typesFr": [
            "spectre",
            "poison"
          ],
          "cp": "804",
          "id": "092"
        },
        {
          "speAbilities": [
            {
              "typeEn": "dark",
              "dps": "12.86",
              "CCchance": "5",
              "esquive": "1.1",
              "damage": "45",
              "duration": "3.50",
              "nameEn": "Dark Pulse",
              "nameFr": "Vibrobscur",
              "id": "83",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            },
            {
              "typeEn": "ghost",
              "dps": "14.61",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "45",
              "duration": "3.08",
              "nameEn": "Shadow Ball",
              "nameFr": "Ball'Ombre",
              "id": "4",
              "typeFr": "spectre"
            }
          ],
          "attaque": "172",
          "abilities": [
            {
              "typeId": "9",
              "dps": "10.00",
              "sps": "14.00",
              "damage": "5",
              "typeEn": "ghost",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Lick",
              "nameFr": "L\u00e9chouille",
              "id": "3",
              "typeFr": "spectre"
            },
            {
              "typeId": "9",
              "dps": "11.58",
              "sps": "7.37",
              "damage": "11",
              "typeEn": "ghost",
              "duration": "0.95",
              "spe": "7",
              "nameEn": "Shadow Claw",
              "nameFr": "Griffe Ombre",
              "id": "7",
              "typeFr": "spectre"
            }
          ],
          "nameEn": "Haunter",
          "typesEn": [
            "ghost",
            "poison"
          ],
          "nameFr": "Spectrum",
          "defense": "118",
          "health": "90",
          "typesFr": [
            "spectre",
            "poison"
          ],
          "cp": "1380",
          "id": "093"
        },
        {
          "speAbilities": [
            {
              "typeEn": "dark",
              "dps": "12.86",
              "CCchance": "5",
              "esquive": "1.1",
              "damage": "45",
              "duration": "3.50",
              "nameEn": "Dark Pulse",
              "nameFr": "Vibrobscur",
              "id": "83",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeEn": "poison",
              "dps": "20.59",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "70",
              "duration": "3.40",
              "nameEn": "Sludge Wave",
              "nameFr": "Cradovague",
              "id": "19",
              "typeFr": "poison"
            },
            {
              "typeEn": "ghost",
              "dps": "14.61",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "45",
              "duration": "3.08",
              "nameEn": "Shadow Ball",
              "nameFr": "Ball'Ombre",
              "id": "4",
              "typeFr": "spectre"
            }
          ],
          "attaque": "204",
          "abilities": [
            {
              "typeId": "9",
              "dps": "11.58",
              "sps": "7.37",
              "damage": "11",
              "typeEn": "ghost",
              "duration": "0.95",
              "spe": "7",
              "nameEn": "Shadow Claw",
              "nameFr": "Griffe Ombre",
              "id": "7",
              "typeFr": "spectre"
            },
            {
              "typeId": "2",
              "dps": "10.00",
              "sps": "5.71",
              "damage": "7",
              "typeEn": "dark",
              "duration": "0.7",
              "spe": "4",
              "nameEn": "Sucker Punch",
              "nameFr": "Coup Bas",
              "id": "23",
              "typeFr": "t\u00e9n\u00e8bres"
            }
          ],
          "nameEn": "Gengar",
          "typesEn": [
            "ghost",
            "poison"
          ],
          "nameFr": "Ectoplasma",
          "defense": "156",
          "health": "120",
          "typesFr": [
            "spectre",
            "poison"
          ],
          "cp": "2078",
          "id": "094"
        },
        {
          "speAbilities": [
            {
              "typeEn": "rock",
              "dps": "15.63",
              "CCchance": "5",
              "esquive": "1.4",
              "damage": "50",
              "duration": "3.20",
              "nameEn": "Rock Slide",
              "nameFr": "\u00c9boulement",
              "id": "27",
              "typeFr": "roche"
            },
            {
              "typeEn": "rock",
              "dps": "25.81",
              "CCchance": "50",
              "esquive": "0.4",
              "damage": "80",
              "duration": "3.10",
              "nameEn": "Stone Edge",
              "nameFr": "Lame de Roc",
              "id": "36",
              "typeFr": "roche"
            },
            {
              "typeEn": "steel",
              "dps": "15.00",
              "CCchance": "5",
              "esquive": "0.25",
              "damage": "30",
              "duration": "2.00",
              "nameEn": "Iron Head",
              "nameFr": "T\u00eate de Fer",
              "id": "70",
              "typeFr": "acier"
            }
          ],
          "attaque": "90",
          "abilities": [
            {
              "typeId": "16",
              "dps": "8.82",
              "sps": "5.15",
              "damage": "12",
              "typeEn": "rock",
              "duration": "1.36",
              "spe": "7",
              "nameEn": "Rock Throw",
              "nameFr": "Jet-Pierres",
              "id": "27",
              "typeFr": "roche"
            },
            {
              "typeId": "13",
              "dps": "10.91",
              "sps": "6.36",
              "damage": "12",
              "typeEn": "normal",
              "duration": "1.1",
              "spe": "7",
              "nameEn": "Tackle",
              "nameFr": "Charge",
              "id": "19",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Onix",
          "typesEn": [
            "rock",
            "ground"
          ],
          "nameFr": "Onix",
          "defense": "186",
          "health": "70",
          "typesFr": [
            "roche",
            "sol"
          ],
          "cp": "857",
          "id": "095"
        },
        {
          "speAbilities": [
            {
              "typeEn": "psychc",
              "dps": "19.64",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "55",
              "duration": "2.80",
              "nameEn": "Psychic",
              "nameFr": "Psyko",
              "id": "60",
              "typeFr": "psy"
            },
            {
              "typeEn": "psychc",
              "dps": "14.81",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "40",
              "duration": "2.70",
              "nameEn": "Psyshock",
              "nameFr": "Choc Psy",
              "id": "16",
              "typeFr": "psy"
            },
            {
              "typeEn": "psychc",
              "dps": "10.53",
              "CCchance": "5",
              "esquive": "1.3",
              "damage": "40",
              "duration": "3.80",
              "nameEn": "Psybeam",
              "nameFr": "Rafale Psy",
              "id": "61",
              "typeFr": "psy"
            }
          ],
          "attaque": "104",
          "abilities": [
            {
              "typeId": "13",
              "dps": "12.96",
              "sps": "12.96",
              "damage": "7",
              "typeEn": "normal",
              "duration": "0.54",
              "spe": "7",
              "nameEn": "Pound",
              "nameFr": "\u00c9cras'Face",
              "id": "10",
              "typeFr": "normal"
            },
            {
              "typeId": "15",
              "dps": "9.93",
              "sps": "4.64",
              "damage": "15",
              "typeEn": "psychc",
              "duration": "1.51",
              "spe": "7",
              "nameEn": "Confusion",
              "nameFr": "Choc Mental",
              "id": "33",
              "typeFr": "psy"
            }
          ],
          "nameEn": "Drowzee",
          "typesEn": [
            "psychc"
          ],
          "nameFr": "Soporifik",
          "defense": "140",
          "health": "120",
          "typesFr": [
            "psy"
          ],
          "cp": "1075",
          "id": "096"
        },
        {
          "speAbilities": [
            {
              "typeEn": "psychc",
              "dps": "19.64",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "55",
              "duration": "2.80",
              "nameEn": "Psychic",
              "nameFr": "Psyko",
              "id": "60",
              "typeFr": "psy"
            },
            {
              "typeEn": "psychc",
              "dps": "14.81",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "40",
              "duration": "2.70",
              "nameEn": "Psyshock",
              "nameFr": "Choc Psy",
              "id": "16",
              "typeFr": "psy"
            },
            {
              "typeEn": "ghost",
              "dps": "14.61",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "45",
              "duration": "3.08",
              "nameEn": "Shadow Ball",
              "nameFr": "Ball'Ombre",
              "id": "4",
              "typeFr": "spectre"
            }
          ],
          "attaque": "162",
          "abilities": [
            {
              "typeId": "15",
              "dps": "11.43",
              "sps": "3.81",
              "damage": "12",
              "typeEn": "psychc",
              "duration": "1.05",
              "spe": "4",
              "nameEn": "Zen Headbutt",
              "nameFr": "Psykoud'Boul",
              "id": "12",
              "typeFr": "psy"
            },
            {
              "typeId": "15",
              "dps": "9.93",
              "sps": "4.64",
              "damage": "15",
              "typeEn": "psychc",
              "duration": "1.51",
              "spe": "7",
              "nameEn": "Confusion",
              "nameFr": "Choc Mental",
              "id": "33",
              "typeFr": "psy"
            }
          ],
          "nameEn": "Hypno",
          "typesEn": [
            "psychc"
          ],
          "nameFr": "Hypnomade",
          "defense": "196",
          "health": "170",
          "typesFr": [
            "psy"
          ],
          "cp": "2184",
          "id": "097"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "7.14",
              "CCchance": "5",
              "esquive": "0.25",
              "damage": "15",
              "duration": "2.10",
              "nameEn": "Vice Grip",
              "nameFr": "Force Poigne",
              "id": "32",
              "typeFr": "normal"
            },
            {
              "id": "82",
              "nameEn": "",
              "nameFr": "Vibraqua",
              "typeEn": "water",
              "typeFr": "eau",
              "damage": "25",
              "duration": "3.30",
              "dps": "7.58",
              "CCchance": "5",
              "esquive": "1"
            },
            {
              "typeEn": "water",
              "dps": "10.34",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "30",
              "duration": "2.90",
              "nameEn": "Bubble Beam",
              "nameFr": "Bulles d'O",
              "id": "11",
              "typeFr": "eau"
            }
          ],
          "attaque": "116",
          "abilities": [
            {
              "typeId": "18",
              "dps": "10.87",
              "sps": "6.52",
              "damage": "25",
              "typeEn": "water",
              "duration": "2.3",
              "spe": "15",
              "nameEn": "Bubble",
              "nameFr": "\u00c9cume",
              "id": "38",
              "typeFr": "eau"
            },
            {
              "typeId": "11",
              "dps": "10.91",
              "sps": "12.73",
              "damage": "6",
              "typeEn": "ground",
              "duration": "0.55",
              "spe": "7",
              "nameEn": "Mud Shot",
              "nameFr": "Tir de Boue",
              "id": "2",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Krabby",
          "typesEn": [
            "water"
          ],
          "nameFr": "Krabby",
          "defense": "110",
          "health": "60",
          "typesFr": [
            "eau"
          ],
          "cp": "792",
          "id": "098"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "7.14",
              "CCchance": "5",
              "esquive": "0.25",
              "damage": "15",
              "duration": "2.10",
              "nameEn": "Vice Grip",
              "nameFr": "Force Poigne",
              "id": "32",
              "typeFr": "normal"
            },
            {
              "id": "82",
              "nameEn": "",
              "nameFr": "Vibraqua",
              "typeEn": "water",
              "typeFr": "eau",
              "damage": "25",
              "duration": "3.30",
              "dps": "7.58",
              "CCchance": "5",
              "esquive": "1"
            },
            {
              "typeEn": "bug",
              "dps": "16.67",
              "CCchance": "5",
              "esquive": "0.25",
              "damage": "35",
              "duration": "2.10",
              "nameEn": "X-Scissor",
              "nameFr": "Plaie-Croix",
              "id": "52",
              "typeFr": "insecte"
            }
          ],
          "attaque": "178",
          "abilities": [
            {
              "typeId": "17",
              "dps": "12.70",
              "sps": "11.11",
              "damage": "8",
              "typeEn": "steel",
              "duration": "0.63",
              "spe": "7",
              "nameEn": "Metal Claw",
              "nameFr": "Griffe Acier",
              "id": "6",
              "typeFr": "acier"
            },
            {
              "typeId": "11",
              "dps": "10.91",
              "sps": "12.73",
              "damage": "6",
              "typeEn": "ground",
              "duration": "0.55",
              "spe": "7",
              "nameEn": "Mud Shot",
              "nameFr": "Tir de Boue",
              "id": "2",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Kingler",
          "typesEn": [
            "water"
          ],
          "nameFr": "Krabboss",
          "defense": "168",
          "health": "110",
          "typesFr": [
            "eau"
          ],
          "cp": "1823",
          "id": "099"
        },
        {
          "speAbilities": [
            {
              "typeEn": "electr",
              "dps": "20.37",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "55",
              "duration": "2.70",
              "nameEn": "Thunderbolt",
              "nameFr": "Tonnerre",
              "id": "72",
              "typeFr": "\u00e9leck"
            },
            {
              "typeEn": "electr",
              "dps": "14.00",
              "CCchance": "5",
              "esquive": "0.7",
              "damage": "35",
              "duration": "2.50",
              "nameEn": "Discharge",
              "nameFr": "Coup d'Jus",
              "id": "17",
              "typeFr": "\u00e9leck"
            },
            {
              "typeEn": "bug",
              "dps": "14.52",
              "CCchance": "5",
              "esquive": "1",
              "damage": "45",
              "duration": "3.10",
              "nameEn": "Signal Beam",
              "nameFr": "Rayon Signal",
              "id": "63",
              "typeFr": "insecte"
            }
          ],
          "attaque": "102",
          "abilities": [
            {
              "typeId": "13",
              "dps": "10.91",
              "sps": "6.36",
              "damage": "12",
              "typeEn": "normal",
              "duration": "1.1",
              "spe": "7",
              "nameEn": "Tackle",
              "nameFr": "Charge",
              "id": "19",
              "typeFr": "normal"
            },
            {
              "typeId": "4",
              "dps": "10.00",
              "sps": "5.71",
              "damage": "7",
              "typeEn": "electr",
              "duration": "0.7",
              "spe": "4",
              "nameEn": "Spark",
              "nameFr": "\u00c9tincelle",
              "id": "24",
              "typeFr": "\u00e9leck"
            }
          ],
          "nameEn": "Voltorb",
          "typesEn": [
            "electr"
          ],
          "nameFr": "Voltorbe",
          "defense": "124",
          "health": "80",
          "typesFr": [
            "\u00e9leck"
          ],
          "cp": "839",
          "id": "100"
        },
        {
          "speAbilities": [
            {
              "typeEn": "electr",
              "dps": "20.37",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "55",
              "duration": "2.70",
              "nameEn": "Thunderbolt",
              "nameFr": "Tonnerre",
              "id": "72",
              "typeFr": "\u00e9leck"
            },
            {
              "typeEn": "electr",
              "dps": "14.00",
              "CCchance": "5",
              "esquive": "0.7",
              "damage": "35",
              "duration": "2.50",
              "nameEn": "Discharge",
              "nameFr": "Coup d'Jus",
              "id": "17",
              "typeFr": "\u00e9leck"
            },
            {
              "typeEn": "normal",
              "dps": "24.00",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "120",
              "duration": "5.00",
              "nameEn": "Hyper Beam",
              "nameFr": "Ultralaser",
              "id": "77",
              "typeFr": "normal"
            }
          ],
          "attaque": "150",
          "abilities": [
            {
              "typeId": "13",
              "dps": "10.91",
              "sps": "6.36",
              "damage": "12",
              "typeEn": "normal",
              "duration": "1.1",
              "spe": "7",
              "nameEn": "Tackle",
              "nameFr": "Charge",
              "id": "19",
              "typeFr": "normal"
            },
            {
              "typeId": "4",
              "dps": "10.00",
              "sps": "5.71",
              "damage": "7",
              "typeEn": "electr",
              "duration": "0.7",
              "spe": "4",
              "nameEn": "Spark",
              "nameFr": "\u00c9tincelle",
              "id": "24",
              "typeFr": "\u00e9leck"
            }
          ],
          "nameEn": "Electrode",
          "typesEn": [
            "electr"
          ],
          "nameFr": "Electrode",
          "defense": "174",
          "health": "120",
          "typesFr": [
            "\u00e9leck"
          ],
          "cp": "1646",
          "id": "101"
        },
        {
          "speAbilities": [
            {
              "typeEn": "psychc",
              "dps": "19.64",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "55",
              "duration": "2.80",
              "nameEn": "Psychic",
              "nameFr": "Psyko",
              "id": "60",
              "typeFr": "psy"
            },
            {
              "typeEn": "grass",
              "dps": "16.67",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "40",
              "duration": "2.40",
              "nameEn": "Seed Bomb",
              "nameFr": "Canon Graine",
              "id": "14",
              "typeFr": "plante"
            },
            {
              "typeEn": "rock",
              "dps": "9.72",
              "CCchance": "5",
              "esquive": "0.35",
              "damage": "35",
              "duration": "3.60",
              "nameEn": "Ancient Power",
              "nameFr": "Pouvoir Antique",
              "id": "58",
              "typeFr": "roche"
            }
          ],
          "attaque": "110",
          "abilities": [
            {
              "typeId": "15",
              "dps": "9.93",
              "sps": "4.64",
              "damage": "15",
              "typeEn": "psychc",
              "duration": "1.51",
              "spe": "7",
              "nameEn": "Confusion",
              "nameFr": "Choc Mental",
              "id": "33",
              "typeFr": "psy"
            }
          ],
          "nameEn": "Exeggcute",
          "typesEn": [
            "grass",
            "psychc"
          ],
          "nameFr": "Noeunoeuf",
          "defense": "132",
          "health": "120",
          "typesFr": [
            "plante",
            "psy"
          ],
          "cp": "1099",
          "id": "102"
        },
        {
          "speAbilities": [
            {
              "typeEn": "psychc",
              "dps": "19.64",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "55",
              "duration": "2.80",
              "nameEn": "Psychic",
              "nameFr": "Psyko",
              "id": "60",
              "typeFr": "psy"
            },
            {
              "typeEn": "grass",
              "dps": "16.67",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "40",
              "duration": "2.40",
              "nameEn": "Seed Bomb",
              "nameFr": "Canon Graine",
              "id": "14",
              "typeFr": "plante"
            },
            {
              "typeEn": "grass",
              "dps": "24.49",
              "CCchance": "5",
              "esquive": "1.7",
              "damage": "120",
              "duration": "4.90",
              "nameEn": "Solar Beam",
              "nameFr": "Lance-Soleil",
              "id": "39",
              "typeFr": "plante"
            }
          ],
          "attaque": "232",
          "abilities": [
            {
              "typeId": "15",
              "dps": "9.93",
              "sps": "4.64",
              "damage": "15",
              "typeEn": "psychc",
              "duration": "1.51",
              "spe": "7",
              "nameEn": "Confusion",
              "nameFr": "Choc Mental",
              "id": "33",
              "typeFr": "psy"
            },
            {
              "typeId": "15",
              "dps": "11.43",
              "sps": "3.81",
              "damage": "12",
              "typeEn": "psychc",
              "duration": "1.05",
              "spe": "4",
              "nameEn": "Zen Headbutt",
              "nameFr": "Psykoud'Boul",
              "id": "12",
              "typeFr": "psy"
            }
          ],
          "nameEn": "Exeggutor",
          "typesEn": [
            "grass",
            "psychc"
          ],
          "nameFr": "Noadkoko",
          "defense": "164",
          "health": "190",
          "typesFr": [
            "plante",
            "psy"
          ],
          "cp": "2955",
          "id": "103"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ground",
              "dps": "15.63",
              "CCchance": "5",
              "esquive": "0.25",
              "damage": "25",
              "duration": "1.60",
              "nameEn": "Bone Club",
              "nameFr": "Massd'Os",
              "id": "45",
              "typeFr": "sol"
            },
            {
              "typeEn": "ground",
              "dps": "12.07",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "70",
              "duration": "5.80",
              "nameEn": "Dig",
              "nameFr": "Tunnel",
              "id": "75",
              "typeFr": "sol"
            },
            {
              "typeEn": "ground",
              "dps": "10.29",
              "CCchance": "5",
              "esquive": "1.1",
              "damage": "35",
              "duration": "3.40",
              "nameEn": "Bulldoze",
              "nameFr": "Pi\u00e9tisol",
              "id": "51",
              "typeFr": "sol"
            }
          ],
          "attaque": "102",
          "abilities": [
            {
              "typeId": "6",
              "dps": "10.64",
              "sps": "4.96",
              "damage": "15",
              "typeEn": "fight",
              "duration": "1.41",
              "spe": "7",
              "nameEn": "Rock Smash",
              "nameFr": "\u00c9clate-Roc",
              "id": "40",
              "typeFr": "combat"
            },
            {
              "typeId": "11",
              "dps": "11.11",
              "sps": "6.67",
              "damage": "15",
              "typeEn": "ground",
              "duration": "1.35",
              "spe": "9",
              "nameEn": "Mud Slap",
              "nameFr": "Coud'Boue",
              "id": "39",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Cubone",
          "typesEn": [
            "ground"
          ],
          "nameFr": "Osselait",
          "defense": "150",
          "health": "100",
          "typesFr": [
            "sol"
          ],
          "cp": "1006",
          "id": "104"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ground",
              "dps": "15.63",
              "CCchance": "5",
              "esquive": "0.25",
              "damage": "25",
              "duration": "1.60",
              "nameEn": "Bone Club",
              "nameFr": "Massd'Os",
              "id": "45",
              "typeFr": "sol"
            },
            {
              "typeEn": "ground",
              "dps": "12.07",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "70",
              "duration": "5.80",
              "nameEn": "Dig",
              "nameFr": "Tunnel",
              "id": "75",
              "typeFr": "sol"
            },
            {
              "typeEn": "ground",
              "dps": "23.81",
              "CCchance": "5",
              "esquive": "1.95",
              "damage": "100",
              "duration": "4.20",
              "nameEn": "Earthquake",
              "nameFr": "S\u00e9isme",
              "id": "68",
              "typeFr": "sol"
            }
          ],
          "attaque": "140",
          "abilities": [
            {
              "typeId": "6",
              "dps": "10.64",
              "sps": "4.96",
              "damage": "15",
              "typeEn": "fight",
              "duration": "1.41",
              "spe": "7",
              "nameEn": "Rock Smash",
              "nameFr": "\u00c9clate-Roc",
              "id": "40",
              "typeFr": "combat"
            },
            {
              "typeId": "11",
              "dps": "11.11",
              "sps": "6.67",
              "damage": "15",
              "typeEn": "ground",
              "duration": "1.35",
              "spe": "9",
              "nameEn": "Mud Slap",
              "nameFr": "Coud'Boue",
              "id": "39",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Marowak",
          "typesEn": [
            "ground"
          ],
          "nameFr": "Ossatueur",
          "defense": "202",
          "health": "120",
          "typesFr": [
            "sol"
          ],
          "cp": "1656",
          "id": "105"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fight",
              "dps": "13.33",
              "CCchance": "5",
              "esquive": "0.15",
              "damage": "30",
              "duration": "2.25",
              "nameEn": "Low Sweep",
              "nameFr": "Balayette",
              "id": "3",
              "typeFr": "combat"
            },
            {
              "typeEn": "rock",
              "dps": "25.81",
              "CCchance": "50",
              "esquive": "0.4",
              "damage": "80",
              "duration": "3.10",
              "nameEn": "Stone Edge",
              "nameFr": "Lame de Roc",
              "id": "36",
              "typeFr": "roche"
            },
            {
              "typeEn": "normal",
              "dps": "14.29",
              "CCchance": "5",
              "esquive": "0.7",
              "damage": "30",
              "duration": "2.10",
              "nameEn": "Stomp",
              "nameFr": "\u00c9crasement",
              "id": "30",
              "typeFr": "normal"
            }
          ],
          "attaque": "148",
          "abilities": [
            {
              "typeId": "6",
              "dps": "8.33",
              "sps": "11.67",
              "damage": "5",
              "typeEn": "fight",
              "duration": "0.6",
              "spe": "7",
              "nameEn": "Low Kick",
              "nameFr": "Balayage",
              "id": "32",
              "typeFr": "combat"
            },
            {
              "typeId": "6",
              "dps": "10.64",
              "sps": "4.96",
              "damage": "15",
              "typeEn": "fight",
              "duration": "1.41",
              "spe": "7",
              "nameEn": "Rock Smash",
              "nameFr": "\u00c9clate-Roc",
              "id": "40",
              "typeFr": "combat"
            }
          ],
          "nameEn": "Hitmonlee",
          "typesEn": [
            "fight"
          ],
          "nameFr": "Kicklee",
          "defense": "172",
          "health": "100",
          "typesFr": [
            "combat"
          ],
          "cp": "1492",
          "id": "106"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fire",
              "dps": "14.29",
              "CCchance": "5",
              "esquive": "0.51",
              "damage": "40",
              "duration": "2.80",
              "nameEn": "Fire Punch",
              "nameFr": "Poing de Feu",
              "id": "54",
              "typeFr": "feu"
            },
            {
              "typeEn": "ice",
              "dps": "12.86",
              "CCchance": "5",
              "esquive": "1.1",
              "damage": "45",
              "duration": "3.50",
              "nameEn": "Ice Punch",
              "nameFr": "Poing-Glace",
              "id": "56",
              "typeFr": "glace"
            },
            {
              "typeEn": "electr",
              "dps": "16.67",
              "CCchance": "5",
              "esquive": "0.25",
              "damage": "40",
              "duration": "2.40",
              "nameEn": "Thunder Punch",
              "nameFr": "Poing-\u00c9clair",
              "id": "55",
              "typeFr": "\u00e9leck"
            },
            {
              "typeEn": "fight",
              "dps": "18.75",
              "CCchance": "25",
              "esquive": "0.4",
              "damage": "30",
              "duration": "1.60",
              "nameEn": "Brick Break",
              "nameFr": "Casse-Brique",
              "id": "15",
              "typeFr": "combat"
            }
          ],
          "attaque": "138",
          "abilities": [
            {
              "typeId": "17",
              "dps": "8.33",
              "sps": "5.83",
              "damage": "10",
              "typeEn": "steel",
              "duration": "1.2",
              "spe": "7",
              "nameEn": "Bullet Punch",
              "nameFr": "Pisto-Poing",
              "id": "29",
              "typeFr": "acier"
            },
            {
              "typeId": "6",
              "dps": "10.64",
              "sps": "4.96",
              "damage": "15",
              "typeEn": "fight",
              "duration": "1.41",
              "spe": "7",
              "nameEn": "Rock Smash",
              "nameFr": "\u00c9clate-Roc",
              "id": "40",
              "typeFr": "combat"
            }
          ],
          "nameEn": "Hitmonchan",
          "typesEn": [
            "fight"
          ],
          "nameFr": "Tygnon",
          "defense": "204",
          "health": "100",
          "typesFr": [
            "combat"
          ],
          "cp": "1516",
          "id": "107"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "24.00",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "120",
              "duration": "5.00",
              "nameEn": "Hyper Beam",
              "nameFr": "Ultralaser",
              "id": "77",
              "typeFr": "normal"
            },
            {
              "typeEn": "normal",
              "dps": "14.29",
              "CCchance": "5",
              "esquive": "0.7",
              "damage": "30",
              "duration": "2.10",
              "nameEn": "Stomp",
              "nameFr": "\u00c9crasement",
              "id": "30",
              "typeFr": "normal"
            },
            {
              "typeEn": "grass",
              "dps": "25.00",
              "CCchance": "0",
              "esquive": "1.3",
              "damage": "70",
              "duration": "2.80",
              "nameEn": "Power Whip",
              "nameFr": "M\u00e9gafouet",
              "id": "47",
              "typeFr": "plante"
            }
          ],
          "attaque": "126",
          "abilities": [
            {
              "typeId": "9",
              "dps": "10.00",
              "sps": "14.00",
              "damage": "5",
              "typeEn": "ghost",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Lick",
              "nameFr": "L\u00e9chouille",
              "id": "3",
              "typeFr": "spectre"
            },
            {
              "typeId": "15",
              "dps": "11.43",
              "sps": "3.81",
              "damage": "12",
              "typeEn": "psychc",
              "duration": "1.05",
              "spe": "4",
              "nameEn": "Zen Headbutt",
              "nameFr": "Psykoud'Boul",
              "id": "12",
              "typeFr": "psy"
            }
          ],
          "nameEn": "Lickitung",
          "typesEn": [
            "normal"
          ],
          "nameFr": "Excellangue",
          "defense": "160",
          "health": "180",
          "typesFr": [
            "normal"
          ],
          "cp": "1626",
          "id": "108"
        },
        {
          "speAbilities": [
            {
              "typeEn": "dark",
              "dps": "12.86",
              "CCchance": "5",
              "esquive": "1.1",
              "damage": "45",
              "duration": "3.50",
              "nameEn": "Dark Pulse",
              "nameFr": "Vibrobscur",
              "id": "83",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeEn": "poison",
              "dps": "11.54",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "30",
              "duration": "2.60",
              "nameEn": "Sludge",
              "nameFr": "D\u00e9tritus",
              "id": "24",
              "typeFr": "poison"
            },
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            }
          ],
          "attaque": "136",
          "abilities": [
            {
              "typeId": "13",
              "dps": "10.91",
              "sps": "6.36",
              "damage": "12",
              "typeEn": "normal",
              "duration": "1.1",
              "spe": "7",
              "nameEn": "Tackle",
              "nameFr": "Charge",
              "id": "19",
              "typeFr": "normal"
            },
            {
              "typeId": "14",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Acid",
              "nameFr": "Acide",
              "id": "25",
              "typeFr": "poison"
            }
          ],
          "nameEn": "Koffing",
          "typesEn": [
            "poison"
          ],
          "nameFr": "Smogo",
          "defense": "142",
          "health": "80",
          "typesFr": [
            "poison"
          ],
          "cp": "1151",
          "id": "109"
        },
        {
          "speAbilities": [
            {
              "typeEn": "dark",
              "dps": "12.86",
              "CCchance": "5",
              "esquive": "1.1",
              "damage": "45",
              "duration": "3.50",
              "nameEn": "Dark Pulse",
              "nameFr": "Vibrobscur",
              "id": "83",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeEn": "ghost",
              "dps": "14.61",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "45",
              "duration": "3.08",
              "nameEn": "Shadow Ball",
              "nameFr": "Ball'Ombre",
              "id": "4",
              "typeFr": "spectre"
            },
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            }
          ],
          "attaque": "190",
          "abilities": [
            {
              "typeId": "13",
              "dps": "10.91",
              "sps": "6.36",
              "damage": "12",
              "typeEn": "normal",
              "duration": "1.1",
              "spe": "7",
              "nameEn": "Tackle",
              "nameFr": "Charge",
              "id": "19",
              "typeFr": "normal"
            },
            {
              "typeId": "14",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Acid",
              "nameFr": "Acide",
              "id": "25",
              "typeFr": "poison"
            }
          ],
          "nameEn": "Weezing",
          "typesEn": [
            "poison"
          ],
          "nameFr": "Smogogo",
          "defense": "198",
          "health": "130",
          "typesFr": [
            "poison"
          ],
          "cp": "2250",
          "id": "110"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ground",
              "dps": "10.29",
              "CCchance": "5",
              "esquive": "1.1",
              "damage": "35",
              "duration": "3.40",
              "nameEn": "Bulldoze",
              "nameFr": "Pi\u00e9tisol",
              "id": "51",
              "typeFr": "sol"
            },
            {
              "typeEn": "normal",
              "dps": "14.29",
              "CCchance": "5",
              "esquive": "0.7",
              "damage": "30",
              "duration": "2.10",
              "nameEn": "Stomp",
              "nameFr": "\u00c9crasement",
              "id": "30",
              "typeFr": "normal"
            },
            {
              "typeEn": "normal",
              "dps": "11.36",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "25",
              "duration": "2.20",
              "nameEn": "Horn Attack",
              "nameFr": "Koud'Korne",
              "id": "35",
              "typeFr": "normal"
            }
          ],
          "attaque": "110",
          "abilities": [
            {
              "typeId": "6",
              "dps": "10.64",
              "sps": "4.96",
              "damage": "15",
              "typeEn": "fight",
              "duration": "1.41",
              "spe": "7",
              "nameEn": "Rock Smash",
              "nameFr": "\u00c9clate-Roc",
              "id": "40",
              "typeFr": "combat"
            },
            {
              "typeId": "11",
              "dps": "11.11",
              "sps": "6.67",
              "damage": "15",
              "typeEn": "ground",
              "duration": "1.35",
              "spe": "9",
              "nameEn": "Mud Slap",
              "nameFr": "Coud'Boue",
              "id": "39",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Rhyhorn",
          "typesEn": [
            "rock",
            "ground"
          ],
          "nameFr": "Rhinocorne",
          "defense": "116",
          "health": "160",
          "typesFr": [
            "roche",
            "sol"
          ],
          "cp": "1182",
          "id": "111"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ground",
              "dps": "23.81",
              "CCchance": "5",
              "esquive": "1.95",
              "damage": "100",
              "duration": "4.20",
              "nameEn": "Earthquake",
              "nameFr": "S\u00e9isme",
              "id": "68",
              "typeFr": "sol"
            },
            {
              "typeEn": "rock",
              "dps": "25.81",
              "CCchance": "50",
              "esquive": "0.4",
              "damage": "80",
              "duration": "3.10",
              "nameEn": "Stone Edge",
              "nameFr": "Lame de Roc",
              "id": "36",
              "typeFr": "roche"
            },
            {
              "typeEn": "bug",
              "dps": "25.00",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "80",
              "duration": "3.20",
              "nameEn": "Megahorn",
              "nameFr": "M\u00e9gacorne",
              "id": "46",
              "typeFr": "insecte"
            }
          ],
          "attaque": "166",
          "abilities": [
            {
              "typeId": "6",
              "dps": "10.64",
              "sps": "4.96",
              "damage": "15",
              "typeEn": "fight",
              "duration": "1.41",
              "spe": "7",
              "nameEn": "Rock Smash",
              "nameFr": "\u00c9clate-Roc",
              "id": "40",
              "typeFr": "combat"
            },
            {
              "typeId": "11",
              "dps": "11.11",
              "sps": "6.67",
              "damage": "15",
              "typeEn": "ground",
              "duration": "1.35",
              "spe": "9",
              "nameEn": "Mud Slap",
              "nameFr": "Coud'Boue",
              "id": "39",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Rhydon",
          "typesEn": [
            "rock",
            "ground"
          ],
          "nameFr": "Rhinof\u00e9ros",
          "defense": "160",
          "health": "210",
          "typesFr": [
            "roche",
            "sol"
          ],
          "cp": "2243",
          "id": "112"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fairy",
              "dps": "13.10",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "55",
              "duration": "4.20",
              "nameEn": "Dazzling Gleam",
              "nameFr": "\u00c9clat Magique",
              "id": "29",
              "typeFr": "f\u00e9e"
            },
            {
              "typeEn": "psychc",
              "dps": "10.53",
              "CCchance": "5",
              "esquive": "1.3",
              "damage": "40",
              "duration": "3.80",
              "nameEn": "Psybeam",
              "nameFr": "Rafale Psy",
              "id": "61",
              "typeFr": "psy"
            },
            {
              "typeEn": "psychc",
              "dps": "19.64",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "55",
              "duration": "2.80",
              "nameEn": "Psychic",
              "nameFr": "Psyko",
              "id": "60",
              "typeFr": "psy"
            }
          ],
          "attaque": "40",
          "abilities": [
            {
              "typeId": "13",
              "dps": "12.96",
              "sps": "12.96",
              "damage": "7",
              "typeEn": "normal",
              "duration": "0.54",
              "spe": "7",
              "nameEn": "Pound",
              "nameFr": "\u00c9cras'Face",
              "id": "10",
              "typeFr": "normal"
            },
            {
              "typeId": "15",
              "dps": "11.43",
              "sps": "3.81",
              "damage": "12",
              "typeEn": "psychc",
              "duration": "1.05",
              "spe": "4",
              "nameEn": "Zen Headbutt",
              "nameFr": "Psykoud'Boul",
              "id": "12",
              "typeFr": "psy"
            }
          ],
          "nameEn": "Chansey",
          "typesEn": [
            "normal"
          ],
          "nameFr": "Leveinard",
          "defense": "60",
          "health": "500",
          "typesFr": [
            "normal"
          ],
          "cp": "675",
          "id": "113"
        },
        {
          "speAbilities": [
            {
              "typeEn": "poison",
              "dps": "21.15",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "55",
              "duration": "2.60",
              "nameEn": "Sludge Bomb",
              "nameFr": "Bomb-Beurk",
              "id": "7",
              "typeFr": "poison"
            },
            {
              "typeEn": "grass",
              "dps": "24.49",
              "CCchance": "5",
              "esquive": "1.7",
              "damage": "120",
              "duration": "4.90",
              "nameEn": "Solar Beam",
              "nameFr": "Lance-Soleil",
              "id": "39",
              "typeFr": "plante"
            },
            {
              "typeEn": "grass",
              "dps": "25.00",
              "CCchance": "0",
              "esquive": "1.3",
              "damage": "70",
              "duration": "2.80",
              "nameEn": "Power Whip",
              "nameFr": "M\u00e9gafouet",
              "id": "47",
              "typeFr": "plante"
            }
          ],
          "attaque": "164",
          "abilities": [
            {
              "typeId": "10",
              "dps": "10.77",
              "sps": "10.77",
              "damage": "7",
              "typeEn": "grass",
              "duration": "0.65",
              "spe": "7",
              "nameEn": "Vine Whip",
              "nameFr": "Fouet Lianes",
              "id": "9",
              "typeFr": "plante"
            }
          ],
          "nameEn": "Tangela",
          "typesEn": [
            "grass"
          ],
          "nameFr": "Saquedeneu",
          "defense": "152",
          "health": "130",
          "typesFr": [
            "plante"
          ],
          "cp": "1739",
          "id": "114"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ground",
              "dps": "23.81",
              "CCchance": "5",
              "esquive": "1.95",
              "damage": "100",
              "duration": "4.20",
              "nameEn": "Earthquake",
              "nameFr": "S\u00e9isme",
              "id": "68",
              "typeFr": "sol"
            },
            {
              "typeEn": "fight",
              "dps": "18.75",
              "CCchance": "25",
              "esquive": "0.4",
              "damage": "30",
              "duration": "1.60",
              "nameEn": "Brick Break",
              "nameFr": "Casse-Brique",
              "id": "15",
              "typeFr": "combat"
            },
            {
              "typeEn": "normal",
              "dps": "14.29",
              "CCchance": "5",
              "esquive": "0.7",
              "damage": "30",
              "duration": "2.10",
              "nameEn": "Stomp",
              "nameFr": "\u00c9crasement",
              "id": "30",
              "typeFr": "normal"
            }
          ],
          "attaque": "142",
          "abilities": [
            {
              "typeId": "6",
              "dps": "8.33",
              "sps": "11.67",
              "damage": "5",
              "typeEn": "fight",
              "duration": "0.6",
              "spe": "7",
              "nameEn": "Low Kick",
              "nameFr": "Balayage",
              "id": "32",
              "typeFr": "combat"
            },
            {
              "typeId": "11",
              "dps": "11.11",
              "sps": "6.67",
              "damage": "15",
              "typeEn": "ground",
              "duration": "1.35",
              "spe": "9",
              "nameEn": "Mud Slap",
              "nameFr": "Coud'Boue",
              "id": "39",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Kangaskhan",
          "typesEn": [
            "normal"
          ],
          "nameFr": "Kangourex",
          "defense": "178",
          "health": "210",
          "typesFr": [
            "normal"
          ],
          "cp": "2043",
          "id": "115"
        },
        {
          "speAbilities": [
            {
              "typeEn": "water",
              "dps": "10.34",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "30",
              "duration": "2.90",
              "nameEn": "Bubble Beam",
              "nameFr": "Bulles d'O",
              "id": "11",
              "typeFr": "eau"
            },
            {
              "typeEn": "dragon",
              "dps": "18.06",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "65",
              "duration": "3.60",
              "nameEn": "Dragon Pulse",
              "nameFr": "Dracochoc",
              "id": "25",
              "typeFr": "dragon"
            },
            {
              "typeEn": "steel",
              "dps": "15.38",
              "CCchance": "5",
              "esquive": "1.1",
              "damage": "60",
              "duration": "3.90",
              "nameEn": "Flash Cannon",
              "nameFr": "Luminocanon",
              "id": "43",
              "typeFr": "acier"
            }
          ],
          "attaque": "122",
          "abilities": [
            {
              "typeId": "18",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "water",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Water Gun",
              "nameFr": "Pistolet \u00e0 O",
              "id": "5",
              "typeFr": "eau"
            },
            {
              "typeId": "18",
              "dps": "10.87",
              "sps": "6.52",
              "damage": "25",
              "typeEn": "water",
              "duration": "2.3",
              "spe": "15",
              "nameEn": "Bubble",
              "nameFr": "\u00c9cume",
              "id": "38",
              "typeFr": "eau"
            }
          ],
          "nameEn": "Horsea",
          "typesEn": [
            "water"
          ],
          "nameFr": "Hypotrempe",
          "defense": "100",
          "health": "60",
          "typesFr": [
            "eau"
          ],
          "cp": "794",
          "id": "116"
        },
        {
          "speAbilities": [
            {
              "typeEn": "water",
              "dps": "23.68",
              "CCchance": "5",
              "esquive": "2.1",
              "damage": "90",
              "duration": "3.80",
              "nameEn": "Hydro Pump",
              "nameFr": "Hydrocanon",
              "id": "33",
              "typeFr": "eau"
            },
            {
              "typeEn": "dragon",
              "dps": "18.06",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "65",
              "duration": "3.60",
              "nameEn": "Dragon Pulse",
              "nameFr": "Dracochoc",
              "id": "25",
              "typeFr": "dragon"
            },
            {
              "typeEn": "ice",
              "dps": "25.64",
              "CCchance": "5",
              "esquive": "0",
              "damage": "100",
              "duration": "3.90",
              "nameEn": "Blizzard",
              "nameFr": "Blizzard",
              "id": "6",
              "typeFr": "glace"
            }
          ],
          "attaque": "176",
          "abilities": [
            {
              "typeId": "18",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "water",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Water Gun",
              "nameFr": "Pistolet \u00e0 O",
              "id": "5",
              "typeFr": "eau"
            },
            {
              "typeId": "3",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dragon",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Dragon Breath",
              "nameFr": "Dracosouffle",
              "id": "15",
              "typeFr": "dragon"
            }
          ],
          "nameEn": "Seadra",
          "typesEn": [
            "water"
          ],
          "nameFr": "Hypoc\u00e9an",
          "defense": "150",
          "health": "110",
          "typesFr": [
            "eau"
          ],
          "cp": "1713",
          "id": "117"
        },
        {
          "speAbilities": [
            {
              "typeEn": "water",
              "dps": "19.15",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "45",
              "duration": "2.35",
              "nameEn": "Aqua Tail",
              "nameFr": "Hydroqueue",
              "id": "34",
              "typeFr": "eau"
            },
            {
              "typeEn": "normal",
              "dps": "11.36",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "25",
              "duration": "2.20",
              "nameEn": "Horn Attack",
              "nameFr": "Koud'Korne",
              "id": "35",
              "typeFr": "normal"
            },
            {
              "id": "82",
              "nameEn": "",
              "nameFr": "Vibraqua",
              "typeEn": "water",
              "typeFr": "eau",
              "damage": "25",
              "duration": "3.30",
              "dps": "7.58",
              "CCchance": "5",
              "esquive": "1"
            }
          ],
          "attaque": "112",
          "abilities": [
            {
              "typeId": "11",
              "dps": "10.91",
              "sps": "12.73",
              "damage": "6",
              "typeEn": "ground",
              "duration": "0.55",
              "spe": "7",
              "nameEn": "Mud Shot",
              "nameFr": "Tir de Boue",
              "id": "2",
              "typeFr": "sol"
            },
            {
              "typeId": "8",
              "dps": "8.70",
              "sps": "8.70",
              "damage": "10",
              "typeEn": "flying",
              "duration": "1.15",
              "spe": "10",
              "nameEn": "Peck",
              "nameFr": "Picpic",
              "id": "28",
              "typeFr": "vol"
            }
          ],
          "nameEn": "Goldeen",
          "typesEn": [
            "water"
          ],
          "nameFr": "Poissir\u00e8ne",
          "defense": "126",
          "health": "90",
          "typesFr": [
            "eau"
          ],
          "cp": "965",
          "id": "118"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ground",
              "dps": "14.71",
              "CCchance": "25",
              "esquive": "0.7",
              "damage": "50",
              "duration": "3.40",
              "nameEn": "Drill Run",
              "nameFr": "Tunnelier",
              "id": "76",
              "typeFr": "sol"
            },
            {
              "typeEn": "bug",
              "dps": "25.00",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "80",
              "duration": "3.20",
              "nameEn": "Megahorn",
              "nameFr": "M\u00e9gacorne",
              "id": "46",
              "typeFr": "insecte"
            },
            {
              "typeEn": "ice",
              "dps": "6.58",
              "CCchance": "5",
              "esquive": "0.7",
              "damage": "25",
              "duration": "3.80",
              "nameEn": "Icy Wind",
              "nameFr": "Vent Glace",
              "id": "79",
              "typeFr": "glace"
            }
          ],
          "attaque": "172",
          "abilities": [
            {
              "typeId": "14",
              "dps": "11.43",
              "sps": "6.67",
              "damage": "12",
              "typeEn": "poison",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Poison Jab",
              "nameFr": "Direct Toxik",
              "id": "13",
              "typeFr": "poison"
            },
            {
              "typeId": "8",
              "dps": "8.70",
              "sps": "8.70",
              "damage": "10",
              "typeEn": "flying",
              "duration": "1.15",
              "spe": "10",
              "nameEn": "Peck",
              "nameFr": "Picpic",
              "id": "28",
              "typeFr": "vol"
            }
          ],
          "nameEn": "Seaking",
          "typesEn": [
            "water"
          ],
          "nameFr": "Poissoroy",
          "defense": "160",
          "health": "160",
          "typesFr": [
            "eau"
          ],
          "cp": "2043",
          "id": "119"
        },
        {
          "speAbilities": [
            {
              "typeEn": "water",
              "dps": "10.34",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "30",
              "duration": "2.90",
              "nameEn": "Bubble Beam",
              "nameFr": "Bulles d'O",
              "id": "11",
              "typeFr": "eau"
            },
            {
              "typeEn": "rock",
              "dps": "13.79",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "40",
              "duration": "2.90",
              "nameEn": "Power Gem",
              "nameFr": "Rayon Gemme",
              "id": "62",
              "typeFr": "roche"
            },
            {
              "typeEn": "normal",
              "dps": "10.00",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "30",
              "duration": "3.00",
              "nameEn": "Swift",
              "nameFr": "M\u00e9t\u00e9ores",
              "id": "48",
              "typeFr": "normal"
            }
          ],
          "attaque": "130",
          "abilities": [
            {
              "typeId": "18",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "water",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Water Gun",
              "nameFr": "Pistolet \u00e0 O",
              "id": "5",
              "typeFr": "eau"
            },
            {
              "typeId": "13",
              "dps": "7.52",
              "sps": "5.26",
              "damage": "10",
              "typeEn": "normal",
              "duration": "1.33",
              "spe": "7",
              "nameEn": "Quick Attack",
              "nameFr": "Vive-Attaque",
              "id": "34",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Staryu",
          "typesEn": [
            "water"
          ],
          "nameFr": "Stari",
          "defense": "128",
          "health": "60",
          "typesFr": [
            "eau"
          ],
          "cp": "937",
          "id": "120"
        },
        {
          "speAbilities": [
            {
              "typeEn": "water",
              "dps": "23.68",
              "CCchance": "5",
              "esquive": "2.1",
              "damage": "90",
              "duration": "3.80",
              "nameEn": "Hydro Pump",
              "nameFr": "Hydrocanon",
              "id": "33",
              "typeFr": "eau"
            },
            {
              "typeEn": "rock",
              "dps": "13.79",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "40",
              "duration": "2.90",
              "nameEn": "Power Gem",
              "nameFr": "Rayon Gemme",
              "id": "62",
              "typeFr": "roche"
            },
            {
              "typeEn": "psychc",
              "dps": "10.53",
              "CCchance": "5",
              "esquive": "1.3",
              "damage": "40",
              "duration": "3.80",
              "nameEn": "Psybeam",
              "nameFr": "Rafale Psy",
              "id": "61",
              "typeFr": "psy"
            }
          ],
          "attaque": "194",
          "abilities": [
            {
              "typeId": "18",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "water",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Water Gun",
              "nameFr": "Pistolet \u00e0 O",
              "id": "5",
              "typeFr": "eau"
            },
            {
              "typeId": "13",
              "dps": "7.52",
              "sps": "5.26",
              "damage": "10",
              "typeEn": "normal",
              "duration": "1.33",
              "spe": "7",
              "nameEn": "Quick Attack",
              "nameFr": "Vive-Attaque",
              "id": "34",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Starmie",
          "typesEn": [
            "water",
            "psychc"
          ],
          "nameFr": "Staross",
          "defense": "192",
          "health": "120",
          "typesFr": [
            "eau",
            "psy"
          ],
          "cp": "2182",
          "id": "121"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ghost",
              "dps": "14.61",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "45",
              "duration": "3.08",
              "nameEn": "Shadow Ball",
              "nameFr": "Ball'Ombre",
              "id": "4",
              "typeFr": "spectre"
            },
            {
              "typeEn": "psychc",
              "dps": "10.53",
              "CCchance": "5",
              "esquive": "1.3",
              "damage": "40",
              "duration": "3.80",
              "nameEn": "Psybeam",
              "nameFr": "Rafale Psy",
              "id": "61",
              "typeFr": "psy"
            },
            {
              "typeEn": "psychc",
              "dps": "19.64",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "55",
              "duration": "2.80",
              "nameEn": "Psychic",
              "nameFr": "Psyko",
              "id": "60",
              "typeFr": "psy"
            }
          ],
          "attaque": "154",
          "abilities": [
            {
              "typeId": "15",
              "dps": "9.93",
              "sps": "4.64",
              "damage": "15",
              "typeEn": "psychc",
              "duration": "1.51",
              "spe": "7",
              "nameEn": "Confusion",
              "nameFr": "Choc Mental",
              "id": "33",
              "typeFr": "psy"
            },
            {
              "typeId": "15",
              "dps": "11.43",
              "sps": "3.81",
              "damage": "12",
              "typeEn": "psychc",
              "duration": "1.05",
              "spe": "4",
              "nameEn": "Zen Headbutt",
              "nameFr": "Psykoud'Boul",
              "id": "12",
              "typeFr": "psy"
            }
          ],
          "nameEn": "Mr. Mime",
          "typesEn": [
            "psychc",
            "fairy"
          ],
          "nameFr": "M.Mime",
          "defense": "196",
          "health": "80",
          "typesFr": [
            "psy",
            "f\u00e9e"
          ],
          "cp": "1494",
          "id": "122"
        },
        {
          "speAbilities": [
            {
              "typeEn": "bug",
              "dps": "17.65",
              "CCchance": "5",
              "esquive": "1.5",
              "damage": "75",
              "duration": "4.25",
              "nameEn": "Bug Buzz",
              "nameFr": "Bourdon",
              "id": "10",
              "typeFr": "insecte"
            },
            {
              "typeEn": "bug",
              "dps": "16.67",
              "CCchance": "5",
              "esquive": "0.25",
              "damage": "35",
              "duration": "2.10",
              "nameEn": "X-Scissor",
              "nameFr": "Plaie-Croix",
              "id": "52",
              "typeFr": "insecte"
            },
            {
              "typeEn": "dark",
              "dps": "11.11",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "30",
              "duration": "2.70",
              "nameEn": "Night Slash",
              "nameFr": "Tranche-Nuit",
              "id": "74",
              "typeFr": "t\u00e9n\u00e8bres"
            }
          ],
          "attaque": "176",
          "abilities": [
            {
              "typeId": "17",
              "dps": "11.28",
              "sps": "3.01",
              "damage": "15",
              "typeEn": "steel",
              "duration": "1.33",
              "spe": "4",
              "nameEn": "Steel Wing",
              "nameFr": "Aile d'Acier",
              "id": "18",
              "typeFr": "acier"
            },
            {
              "typeId": "1",
              "dps": "7.50",
              "sps": "30.00",
              "damage": "3",
              "typeEn": "bug",
              "duration": "0.4",
              "spe": "12",
              "nameEn": "Fury Cutter",
              "nameFr": "Taillade",
              "id": "35",
              "typeFr": "insecte"
            }
          ],
          "nameEn": "Scyther",
          "typesEn": [
            "bug",
            "flying"
          ],
          "nameFr": "Ins\u00e9cateur",
          "defense": "180",
          "health": "140",
          "typesFr": [
            "insecte",
            "vol"
          ],
          "cp": "2073",
          "id": "123"
        },
        {
          "speAbilities": [
            {
              "typeEn": "psychc",
              "dps": "14.81",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "40",
              "duration": "2.70",
              "nameEn": "Psyshock",
              "nameFr": "Choc Psy",
              "id": "16",
              "typeFr": "psy"
            },
            {
              "typeEn": "ice",
              "dps": "12.86",
              "CCchance": "5",
              "esquive": "1.1",
              "damage": "45",
              "duration": "3.50",
              "nameEn": "Ice Punch",
              "nameFr": "Poing-Glace",
              "id": "56",
              "typeFr": "glace"
            },
            {
              "typeEn": "fairy",
              "dps": "8.93",
              "CCchance": "5",
              "esquive": "0.1",
              "damage": "25",
              "duration": "2.80",
              "nameEn": "Draining Kiss",
              "nameFr": "Vampibaier",
              "id": "78",
              "typeFr": "f\u00e9e"
            }
          ],
          "attaque": "172",
          "abilities": [
            {
              "typeId": "13",
              "dps": "12.96",
              "sps": "12.96",
              "damage": "7",
              "typeEn": "normal",
              "duration": "0.54",
              "spe": "7",
              "nameEn": "Pound",
              "nameFr": "\u00c9cras'Face",
              "id": "10",
              "typeFr": "normal"
            },
            {
              "typeId": "12",
              "dps": "11.11",
              "sps": "8.64",
              "damage": "9",
              "typeEn": "ice",
              "duration": "0.81",
              "spe": "7",
              "nameEn": "Frost Breath",
              "nameFr": "Souffle Glac\u00e9",
              "id": "11",
              "typeFr": "glace"
            }
          ],
          "nameEn": "Jynx",
          "typesEn": [
            "ice",
            "psychc"
          ],
          "nameFr": "Lippoutou",
          "defense": "134",
          "health": "130",
          "typesFr": [
            "glace",
            "psy"
          ],
          "cp": "1716",
          "id": "124"
        },
        {
          "speAbilities": [
            {
              "typeEn": "electr",
              "dps": "20.37",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "55",
              "duration": "2.70",
              "nameEn": "Thunderbolt",
              "nameFr": "Tonnerre",
              "id": "72",
              "typeFr": "\u00e9leck"
            },
            {
              "typeEn": "electr",
              "dps": "23.26",
              "CCchance": "5",
              "esquive": "1.55",
              "damage": "100",
              "duration": "4.30",
              "nameEn": "Thunder",
              "nameFr": "Fatal-Foudre",
              "id": "31",
              "typeFr": "\u00e9leck"
            },
            {
              "typeEn": "electr",
              "dps": "16.67",
              "CCchance": "5",
              "esquive": "0.25",
              "damage": "40",
              "duration": "2.40",
              "nameEn": "Thunder Punch",
              "nameFr": "Poing-\u00c9clair",
              "id": "55",
              "typeFr": "\u00e9leck"
            }
          ],
          "attaque": "198",
          "abilities": [
            {
              "typeId": "6",
              "dps": "8.33",
              "sps": "11.67",
              "damage": "5",
              "typeEn": "fight",
              "duration": "0.6",
              "spe": "7",
              "nameEn": "Low Kick",
              "nameFr": "Balayage",
              "id": "32",
              "typeFr": "combat"
            },
            {
              "typeId": "4",
              "dps": "8.33",
              "sps": "11.67",
              "damage": "5",
              "typeEn": "electr",
              "duration": "0.6",
              "spe": "7",
              "nameEn": "Thunder Shock",
              "nameFr": "\u00c9clair",
              "id": "30",
              "typeFr": "\u00e9leck"
            }
          ],
          "nameEn": "Electabuzz",
          "typesEn": [
            "electr"
          ],
          "nameFr": "Elektek",
          "defense": "160",
          "health": "130",
          "typesFr": [
            "\u00e9leck"
          ],
          "cp": "2119",
          "id": "125"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fire",
              "dps": "24.39",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "100",
              "duration": "4.10",
              "nameEn": "Fire Blast",
              "nameFr": "D\u00e9flagration",
              "id": "22",
              "typeFr": "feu"
            },
            {
              "typeEn": "fire",
              "dps": "18.97",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "55",
              "duration": "2.90",
              "nameEn": "Flamethrower",
              "nameFr": "Lance-Flammes",
              "id": "38",
              "typeFr": "feu"
            },
            {
              "typeEn": "fire",
              "dps": "14.29",
              "CCchance": "5",
              "esquive": "0.51",
              "damage": "40",
              "duration": "2.80",
              "nameEn": "Fire Punch",
              "nameFr": "Poing de Feu",
              "id": "54",
              "typeFr": "feu"
            }
          ],
          "attaque": "214",
          "abilities": [
            {
              "typeId": "6",
              "dps": "7.50",
              "sps": "8.75",
              "damage": "6",
              "typeEn": "fight",
              "duration": "0.8",
              "spe": "7",
              "nameEn": "Karate Chop",
              "nameFr": "Poing-Karat\u00e9",
              "id": "36",
              "typeFr": "combat"
            },
            {
              "typeId": "7",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "fire",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Ember",
              "nameFr": "Flamm\u00e8che",
              "id": "26",
              "typeFr": "feu"
            }
          ],
          "nameEn": "Magmar",
          "typesEn": [
            "fire"
          ],
          "nameFr": "Magmar",
          "defense": "158",
          "health": "130",
          "typesFr": [
            "feu"
          ],
          "cp": "2265",
          "id": "126"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fight",
              "dps": "14.29",
              "CCchance": "5",
              "esquive": "0.15",
              "damage": "30",
              "duration": "2.10",
              "nameEn": "Submission",
              "nameFr": "Sacrifice",
              "id": "66",
              "typeFr": "combat"
            },
            {
              "typeEn": "normal",
              "dps": "7.14",
              "CCchance": "5",
              "esquive": "0.25",
              "damage": "15",
              "duration": "2.10",
              "nameEn": "Vice Grip",
              "nameFr": "Force Poigne",
              "id": "32",
              "typeFr": "normal"
            },
            {
              "typeEn": "bug",
              "dps": "16.67",
              "CCchance": "5",
              "esquive": "0.25",
              "damage": "35",
              "duration": "2.10",
              "nameEn": "X-Scissor",
              "nameFr": "Plaie-Croix",
              "id": "52",
              "typeFr": "insecte"
            }
          ],
          "attaque": "184",
          "abilities": [
            {
              "typeId": "1",
              "dps": "7.50",
              "sps": "30.00",
              "damage": "3",
              "typeEn": "bug",
              "duration": "0.4",
              "spe": "12",
              "nameEn": "Fury Cutter",
              "nameFr": "Taillade",
              "id": "35",
              "typeFr": "insecte"
            },
            {
              "typeId": "6",
              "dps": "10.64",
              "sps": "4.96",
              "damage": "15",
              "typeEn": "fight",
              "duration": "1.41",
              "spe": "7",
              "nameEn": "Rock Smash",
              "nameFr": "\u00c9clate-Roc",
              "id": "40",
              "typeFr": "combat"
            }
          ],
          "nameEn": "Pinsir",
          "typesEn": [
            "bug"
          ],
          "nameFr": "Scarabrute",
          "defense": "186",
          "health": "130",
          "typesFr": [
            "insecte"
          ],
          "cp": "2121",
          "id": "127"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ground",
              "dps": "23.81",
              "CCchance": "5",
              "esquive": "1.95",
              "damage": "100",
              "duration": "4.20",
              "nameEn": "Earthquake",
              "nameFr": "S\u00e9isme",
              "id": "68",
              "typeFr": "sol"
            },
            {
              "typeEn": "steel",
              "dps": "15.00",
              "CCchance": "5",
              "esquive": "0.25",
              "damage": "30",
              "duration": "2.00",
              "nameEn": "Iron Head",
              "nameFr": "T\u00eate de Fer",
              "id": "70",
              "typeFr": "acier"
            },
            {
              "typeEn": "normal",
              "dps": "11.36",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "25",
              "duration": "2.20",
              "nameEn": "Horn Attack",
              "nameFr": "Koud'Korne",
              "id": "35",
              "typeFr": "normal"
            }
          ],
          "attaque": "148",
          "abilities": [
            {
              "typeId": "13",
              "dps": "10.91",
              "sps": "6.36",
              "damage": "12",
              "typeEn": "normal",
              "duration": "1.1",
              "spe": "7",
              "nameEn": "Tackle",
              "nameFr": "Charge",
              "id": "19",
              "typeFr": "normal"
            },
            {
              "typeId": "15",
              "dps": "11.43",
              "sps": "3.81",
              "damage": "12",
              "typeEn": "psychc",
              "duration": "1.05",
              "spe": "4",
              "nameEn": "Zen Headbutt",
              "nameFr": "Psykoud'Boul",
              "id": "12",
              "typeFr": "psy"
            }
          ],
          "nameEn": "Tauros",
          "typesEn": [
            "normal"
          ],
          "nameFr": "Tauros",
          "defense": "184",
          "health": "150",
          "typesFr": [
            "normal"
          ],
          "cp": "1844",
          "id": "128"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "8.88",
              "CCchance": "0",
              "esquive": "0.7",
              "damage": "15",
              "duration": "1.69",
              "nameEn": "Struggle",
              "nameFr": "Lutte",
              "id": "44",
              "typeFr": "normal"
            }
          ],
          "attaque": "42",
          "abilities": [
            {
              "typeId": "18",
              "dps": "0.00",
              "sps": "5.69",
              "damage": "0",
              "typeEn": "water",
              "duration": "1.23",
              "spe": "7",
              "nameEn": "Splash",
              "nameFr": "Trempette",
              "id": "41",
              "typeFr": "eau"
            }
          ],
          "nameEn": "Magikarp",
          "typesEn": [
            "water"
          ],
          "nameFr": "Magicarpe",
          "defense": "84",
          "health": "40",
          "typesFr": [
            "eau"
          ],
          "cp": "262",
          "id": "129"
        },
        {
          "speAbilities": [
            {
              "typeEn": "dragon",
              "dps": "11.11",
              "CCchance": "5",
              "esquive": "1.75",
              "damage": "30",
              "duration": "2.70",
              "nameEn": "Twister",
              "nameFr": "Ouragan",
              "id": "50",
              "typeFr": "dragon"
            },
            {
              "typeEn": "water",
              "dps": "23.68",
              "CCchance": "5",
              "esquive": "2.1",
              "damage": "90",
              "duration": "3.80",
              "nameEn": "Hydro Pump",
              "nameFr": "Hydrocanon",
              "id": "33",
              "typeFr": "eau"
            },
            {
              "typeEn": "dragon",
              "dps": "18.06",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "65",
              "duration": "3.60",
              "nameEn": "Dragon Pulse",
              "nameFr": "Dracochoc",
              "id": "25",
              "typeFr": "dragon"
            }
          ],
          "attaque": "192",
          "abilities": [
            {
              "typeId": "2",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dark",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Bite",
              "nameFr": "Morsure",
              "id": "16",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeId": "3",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dragon",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Dragon Breath",
              "nameFr": "Dracosouffle",
              "id": "15",
              "typeFr": "dragon"
            }
          ],
          "nameEn": "Gyarados",
          "typesEn": [
            "water",
            "flying"
          ],
          "nameFr": "L\u00e9viator",
          "defense": "196",
          "health": "190",
          "typesFr": [
            "eau",
            "vol"
          ],
          "cp": "2688",
          "id": "130"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ice",
              "dps": "17.81",
              "CCchance": "5",
              "esquive": "1.35",
              "damage": "65",
              "duration": "3.65",
              "nameEn": "Ice Beam",
              "nameFr": "Laser Glace",
              "id": "40",
              "typeFr": "glace"
            },
            {
              "typeEn": "dragon",
              "dps": "18.06",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "65",
              "duration": "3.60",
              "nameEn": "Dragon Pulse",
              "nameFr": "Dracochoc",
              "id": "25",
              "typeFr": "dragon"
            },
            {
              "typeEn": "ice",
              "dps": "25.64",
              "CCchance": "5",
              "esquive": "0",
              "damage": "100",
              "duration": "3.90",
              "nameEn": "Blizzard",
              "nameFr": "Blizzard",
              "id": "6",
              "typeFr": "glace"
            }
          ],
          "attaque": "186",
          "abilities": [
            {
              "typeId": "12",
              "dps": "11.11",
              "sps": "8.64",
              "damage": "9",
              "typeEn": "ice",
              "duration": "0.81",
              "spe": "7",
              "nameEn": "Frost Breath",
              "nameFr": "Souffle Glac\u00e9",
              "id": "11",
              "typeFr": "glace"
            },
            {
              "typeId": "12",
              "dps": "10.71",
              "sps": "5.00",
              "damage": "15",
              "typeEn": "",
              "duration": "1.4",
              "spe": "7",
              "nameEn": "Ice Shard",
              "nameFr": "\u00c9clats Glace",
              "id": "37",
              "typeFr": "glace"
            }
          ],
          "nameEn": "Lapras",
          "typesEn": [
            "water",
            "ice"
          ],
          "nameFr": "Lokhlass",
          "defense": "190",
          "health": "260",
          "typesFr": [
            "eau",
            "glace"
          ],
          "cp": "2980",
          "id": "131"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "8.88",
              "CCchance": "0",
              "esquive": "0.7",
              "damage": "15",
              "duration": "1.69",
              "nameEn": "Struggle",
              "nameFr": "Lutte",
              "id": "44",
              "typeFr": "normal"
            }
          ],
          "attaque": "110",
          "abilities": [
            {
              "typeId": "13",
              "dps": "12.96",
              "sps": "12.96",
              "damage": "7",
              "typeEn": "normal",
              "duration": "0.54",
              "spe": "7",
              "nameEn": "Pound",
              "nameFr": "\u00c9cras'Face",
              "id": "10",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Ditto",
          "typesEn": [
            "normal"
          ],
          "nameFr": "M\u00e9tamorph",
          "defense": "110",
          "health": "96",
          "typesFr": [
            "normal"
          ],
          "cp": "919",
          "id": "132"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "25.64",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "40",
              "duration": "1.56",
              "nameEn": "Body Slam",
              "nameFr": "Plaquage",
              "id": "53",
              "typeFr": "normal"
            },
            {
              "typeEn": "ground",
              "dps": "12.07",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "70",
              "duration": "5.80",
              "nameEn": "Dig",
              "nameFr": "Tunnel",
              "id": "75",
              "typeFr": "sol"
            },
            {
              "typeEn": "normal",
              "dps": "10.00",
              "CCchance": "5",
              "esquive": "0.5",
              "damage": "30",
              "duration": "3.00",
              "nameEn": "Swift",
              "nameFr": "M\u00e9t\u00e9ores",
              "id": "48",
              "typeFr": "normal"
            }
          ],
          "attaque": "114",
          "abilities": [
            {
              "typeId": "13",
              "dps": "10.91",
              "sps": "6.36",
              "damage": "12",
              "typeEn": "normal",
              "duration": "1.1",
              "spe": "7",
              "nameEn": "Tackle",
              "nameFr": "Charge",
              "id": "19",
              "typeFr": "normal"
            },
            {
              "typeId": "13",
              "dps": "7.52",
              "sps": "5.26",
              "damage": "10",
              "typeEn": "normal",
              "duration": "1.33",
              "spe": "7",
              "nameEn": "Quick Attack",
              "nameFr": "Vive-Attaque",
              "id": "34",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Eevee",
          "typesEn": [
            "normal"
          ],
          "nameFr": "Evoli",
          "defense": "128",
          "health": "110",
          "typesFr": [
            "normal"
          ],
          "cp": "1077",
          "id": "133"
        },
        {
          "speAbilities": [
            {
              "typeEn": "water",
              "dps": "19.15",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "45",
              "duration": "2.35",
              "nameEn": "Aqua Tail",
              "nameFr": "Hydroqueue",
              "id": "34",
              "typeFr": "eau"
            },
            {
              "id": "82",
              "nameEn": "",
              "nameFr": "Vibraqua",
              "typeEn": "water",
              "typeFr": "eau",
              "damage": "25",
              "duration": "3.30",
              "dps": "7.58",
              "CCchance": "5",
              "esquive": "1"
            },
            {
              "typeEn": "water",
              "dps": "23.68",
              "CCchance": "5",
              "esquive": "2.1",
              "damage": "90",
              "duration": "3.80",
              "nameEn": "Hydro Pump",
              "nameFr": "Hydrocanon",
              "id": "33",
              "typeFr": "eau"
            }
          ],
          "attaque": "186",
          "abilities": [
            {
              "typeId": "18",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "water",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Water Gun",
              "nameFr": "Pistolet \u00e0 O",
              "id": "5",
              "typeFr": "eau"
            }
          ],
          "nameEn": "Vaporeon",
          "typesEn": [
            "water"
          ],
          "nameFr": "Aquali",
          "defense": "168",
          "health": "260",
          "typesFr": [
            "eau"
          ],
          "cp": "2816",
          "id": "134"
        },
        {
          "speAbilities": [
            {
              "typeEn": "electr",
              "dps": "20.37",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "55",
              "duration": "2.70",
              "nameEn": "Thunderbolt",
              "nameFr": "Tonnerre",
              "id": "72",
              "typeFr": "\u00e9leck"
            },
            {
              "typeEn": "electr",
              "dps": "14.00",
              "CCchance": "5",
              "esquive": "0.7",
              "damage": "35",
              "duration": "2.50",
              "nameEn": "Discharge",
              "nameFr": "Coup d'Jus",
              "id": "17",
              "typeFr": "\u00e9leck"
            },
            {
              "typeEn": "electr",
              "dps": "23.26",
              "CCchance": "5",
              "esquive": "1.55",
              "damage": "100",
              "duration": "4.30",
              "nameEn": "Thunder",
              "nameFr": "Fatal-Foudre",
              "id": "31",
              "typeFr": "\u00e9leck"
            }
          ],
          "attaque": "192",
          "abilities": [
            {
              "typeId": "4",
              "dps": "8.33",
              "sps": "11.67",
              "damage": "5",
              "typeEn": "electr",
              "duration": "0.6",
              "spe": "7",
              "nameEn": "Thunder Shock",
              "nameFr": "\u00c9clair",
              "id": "30",
              "typeFr": "\u00e9leck"
            }
          ],
          "nameEn": "Jolteon",
          "typesEn": [
            "electr"
          ],
          "nameFr": "Voltali",
          "defense": "174",
          "health": "130",
          "typesFr": [
            "\u00e9leck"
          ],
          "cp": "2140",
          "id": "135"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fire",
              "dps": "18.97",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "55",
              "duration": "2.90",
              "nameEn": "Flamethrower",
              "nameFr": "Lance-Flammes",
              "id": "38",
              "typeFr": "feu"
            },
            {
              "typeEn": "fire",
              "dps": "24.39",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "100",
              "duration": "4.10",
              "nameEn": "Fire Blast",
              "nameFr": "D\u00e9flagration",
              "id": "22",
              "typeFr": "feu"
            },
            {
              "typeEn": "fire",
              "dps": "21.05",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "80",
              "duration": "3.80",
              "nameEn": "Heat Wave",
              "nameFr": "Canicule",
              "id": "13",
              "typeFr": "feu"
            }
          ],
          "attaque": "238",
          "abilities": [
            {
              "typeId": "7",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "fire",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Ember",
              "nameFr": "Flamm\u00e8che",
              "id": "26",
              "typeFr": "feu"
            }
          ],
          "nameEn": "Flareon",
          "typesEn": [
            "fire"
          ],
          "nameFr": "Pyroli",
          "defense": "178",
          "health": "130",
          "typesFr": [
            "feu"
          ],
          "cp": "2140",
          "id": "136"
        },
        {
          "speAbilities": [
            {
              "typeEn": "electr",
              "dps": "14.00",
              "CCchance": "5",
              "esquive": "0.7",
              "damage": "35",
              "duration": "2.50",
              "nameEn": "Discharge",
              "nameFr": "Coup d'Jus",
              "id": "17",
              "typeFr": "\u00e9leck"
            },
            {
              "typeEn": "psychc",
              "dps": "10.53",
              "CCchance": "5",
              "esquive": "1.3",
              "damage": "40",
              "duration": "3.80",
              "nameEn": "Psybeam",
              "nameFr": "Rafale Psy",
              "id": "61",
              "typeFr": "psy"
            },
            {
              "typeEn": "bug",
              "dps": "14.52",
              "CCchance": "5",
              "esquive": "1",
              "damage": "45",
              "duration": "3.10",
              "nameEn": "Signal Beam",
              "nameFr": "Rayon Signal",
              "id": "63",
              "typeFr": "insecte"
            }
          ],
          "attaque": "156",
          "abilities": [
            {
              "typeId": "13",
              "dps": "10.91",
              "sps": "6.36",
              "damage": "12",
              "typeEn": "normal",
              "duration": "1.1",
              "spe": "7",
              "nameEn": "Tackle",
              "nameFr": "Charge",
              "id": "19",
              "typeFr": "normal"
            },
            {
              "typeId": "13",
              "dps": "7.52",
              "sps": "5.26",
              "damage": "10",
              "typeEn": "normal",
              "duration": "1.33",
              "spe": "7",
              "nameEn": "Quick Attack",
              "nameFr": "Vive-Attaque",
              "id": "34",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Porygon",
          "typesEn": [
            "normal"
          ],
          "nameFr": "Porygon",
          "defense": "158",
          "health": "130",
          "typesFr": [
            "normal"
          ],
          "cp": "1691",
          "id": "137"
        },
        {
          "speAbilities": [
            {
              "typeEn": "rock",
              "dps": "8.82",
              "CCchance": "25",
              "esquive": "0.9",
              "damage": "30",
              "duration": "3.40",
              "nameEn": "Rock Tomb",
              "nameFr": "Tomberoche",
              "id": "71",
              "typeFr": "roche"
            },
            {
              "typeEn": "rock",
              "dps": "9.72",
              "CCchance": "5",
              "esquive": "0.35",
              "damage": "35",
              "duration": "3.60",
              "nameEn": "Ancient Power",
              "nameFr": "Pouvoir Antique",
              "id": "58",
              "typeFr": "roche"
            },
            {
              "typeEn": "water",
              "dps": "10.42",
              "CCchance": "5",
              "esquive": "0.35",
              "damage": "25",
              "duration": "2.40",
              "nameEn": "Brine",
              "nameFr": "Saumure",
              "id": "67",
              "typeFr": "eau"
            }
          ],
          "attaque": "132",
          "abilities": [
            {
              "typeId": "18",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "water",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Water Gun",
              "nameFr": "Pistolet \u00e0 O",
              "id": "5",
              "typeFr": "eau"
            },
            {
              "typeId": "11",
              "dps": "10.91",
              "sps": "12.73",
              "damage": "6",
              "typeEn": "ground",
              "duration": "0.55",
              "spe": "7",
              "nameEn": "Mud Shot",
              "nameFr": "Tir de Boue",
              "id": "2",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Omanyte",
          "typesEn": [
            "rock",
            "water"
          ],
          "nameFr": "Amonita",
          "defense": "160",
          "health": "70",
          "typesFr": [
            "roche",
            "eau"
          ],
          "cp": "1119",
          "id": "138"
        },
        {
          "speAbilities": [
            {
              "typeEn": "rock",
              "dps": "15.63",
              "CCchance": "5",
              "esquive": "1.4",
              "damage": "50",
              "duration": "3.20",
              "nameEn": "Rock Slide",
              "nameFr": "\u00c9boulement",
              "id": "27",
              "typeFr": "roche"
            },
            {
              "typeEn": "rock",
              "dps": "9.72",
              "CCchance": "5",
              "esquive": "0.35",
              "damage": "35",
              "duration": "3.60",
              "nameEn": "Ancient Power",
              "nameFr": "Pouvoir Antique",
              "id": "58",
              "typeFr": "roche"
            },
            {
              "typeEn": "water",
              "dps": "23.68",
              "CCchance": "5",
              "esquive": "2.1",
              "damage": "90",
              "duration": "3.80",
              "nameEn": "Hydro Pump",
              "nameFr": "Hydrocanon",
              "id": "33",
              "typeFr": "eau"
            }
          ],
          "attaque": "180",
          "abilities": [
            {
              "typeId": "18",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "water",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Water Gun",
              "nameFr": "Pistolet \u00e0 O",
              "id": "5",
              "typeFr": "eau"
            },
            {
              "typeId": "16",
              "dps": "8.82",
              "sps": "5.15",
              "damage": "12",
              "typeEn": "rock",
              "duration": "1.36",
              "spe": "7",
              "nameEn": "Rock Throw",
              "nameFr": "Jet-Pierres",
              "id": "27",
              "typeFr": "roche"
            }
          ],
          "nameEn": "Omastar",
          "typesEn": [
            "rock",
            "water"
          ],
          "nameFr": "Amonistar",
          "defense": "202",
          "health": "140",
          "typesFr": [
            "roche",
            "eau"
          ],
          "cp": "2233",
          "id": "139"
        },
        {
          "speAbilities": [
            {
              "typeEn": "water",
              "dps": "10.64",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "25",
              "duration": "2.35",
              "nameEn": "Aqua Jet",
              "nameFr": "Aqua Jet",
              "id": "2",
              "typeFr": "eau"
            },
            {
              "typeEn": "rock",
              "dps": "8.82",
              "CCchance": "25",
              "esquive": "0.9",
              "damage": "30",
              "duration": "3.40",
              "nameEn": "Rock Tomb",
              "nameFr": "Tomberoche",
              "id": "71",
              "typeFr": "roche"
            },
            {
              "typeEn": "rock",
              "dps": "9.72",
              "CCchance": "5",
              "esquive": "0.35",
              "damage": "35",
              "duration": "3.60",
              "nameEn": "Ancient Power",
              "nameFr": "Pouvoir Antique",
              "id": "58",
              "typeFr": "roche"
            }
          ],
          "attaque": "148",
          "abilities": [
            {
              "typeId": "13",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "normal",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Scratch",
              "nameFr": "Griffe",
              "id": "4",
              "typeFr": "normal"
            },
            {
              "typeId": "11",
              "dps": "10.91",
              "sps": "12.73",
              "damage": "6",
              "typeEn": "ground",
              "duration": "0.55",
              "spe": "7",
              "nameEn": "Mud Shot",
              "nameFr": "Tir de Boue",
              "id": "2",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Kabuto",
          "typesEn": [
            "rock",
            "water"
          ],
          "nameFr": "Kabuto",
          "defense": "142",
          "health": "60",
          "typesFr": [
            "roche",
            "eau"
          ],
          "cp": "1104",
          "id": "140"
        },
        {
          "speAbilities": [
            {
              "id": "82",
              "nameEn": "",
              "nameFr": "Vibraqua",
              "typeEn": "water",
              "typeFr": "eau",
              "damage": "25",
              "duration": "3.30",
              "dps": "7.58",
              "CCchance": "5",
              "esquive": "1"
            },
            {
              "typeEn": "rock",
              "dps": "25.81",
              "CCchance": "50",
              "esquive": "0.4",
              "damage": "80",
              "duration": "3.10",
              "nameEn": "Stone Edge",
              "nameFr": "Lame de Roc",
              "id": "36",
              "typeFr": "roche"
            },
            {
              "typeEn": "rock",
              "dps": "9.72",
              "CCchance": "5",
              "esquive": "0.35",
              "damage": "35",
              "duration": "3.60",
              "nameEn": "Ancient Power",
              "nameFr": "Pouvoir Antique",
              "id": "58",
              "typeFr": "roche"
            }
          ],
          "attaque": "190",
          "abilities": [
            {
              "typeId": "1",
              "dps": "7.50",
              "sps": "30.00",
              "damage": "3",
              "typeEn": "bug",
              "duration": "0.4",
              "spe": "12",
              "nameEn": "Fury Cutter",
              "nameFr": "Taillade",
              "id": "35",
              "typeFr": "insecte"
            },
            {
              "typeId": "11",
              "dps": "10.91",
              "sps": "12.73",
              "damage": "6",
              "typeEn": "ground",
              "duration": "0.55",
              "spe": "7",
              "nameEn": "Mud Shot",
              "nameFr": "Tir de Boue",
              "id": "2",
              "typeFr": "sol"
            }
          ],
          "nameEn": "Kabutops",
          "typesEn": [
            "rock",
            "water"
          ],
          "nameFr": "Kabutops",
          "defense": "190",
          "health": "120",
          "typesFr": [
            "roche",
            "eau"
          ],
          "cp": "2130",
          "id": "141"
        },
        {
          "speAbilities": [
            {
              "typeEn": "steel",
              "dps": "15.00",
              "CCchance": "5",
              "esquive": "0.25",
              "damage": "30",
              "duration": "2.00",
              "nameEn": "Iron Head",
              "nameFr": "T\u00eate de Fer",
              "id": "70",
              "typeFr": "acier"
            },
            {
              "typeEn": "normal",
              "dps": "24.00",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "120",
              "duration": "5.00",
              "nameEn": "Hyper Beam",
              "nameFr": "Ultralaser",
              "id": "77",
              "typeFr": "normal"
            },
            {
              "typeEn": "rock",
              "dps": "9.72",
              "CCchance": "5",
              "esquive": "0.35",
              "damage": "35",
              "duration": "3.60",
              "nameEn": "Ancient Power",
              "nameFr": "Pouvoir Antique",
              "id": "58",
              "typeFr": "roche"
            }
          ],
          "attaque": "182",
          "abilities": [
            {
              "typeId": "2",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dark",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Bite",
              "nameFr": "Morsure",
              "id": "16",
              "typeFr": "t\u00e9n\u00e8bres"
            },
            {
              "typeId": "17",
              "dps": "11.28",
              "sps": "3.01",
              "damage": "15",
              "typeEn": "steel",
              "duration": "1.33",
              "spe": "4",
              "nameEn": "Steel Wing",
              "nameFr": "Aile d'Acier",
              "id": "18",
              "typeFr": "acier"
            }
          ],
          "nameEn": "Aerodactyl",
          "typesEn": [
            "rock",
            "flying"
          ],
          "nameFr": "Pt\u00e9ra",
          "defense": "162",
          "health": "160",
          "typesFr": [
            "roche",
            "vol"
          ],
          "cp": "2165",
          "id": "142"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "24.00",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "120",
              "duration": "5.00",
              "nameEn": "Hyper Beam",
              "nameFr": "Ultralaser",
              "id": "77",
              "typeFr": "normal"
            },
            {
              "typeEn": "ground",
              "dps": "23.81",
              "CCchance": "5",
              "esquive": "1.95",
              "damage": "100",
              "duration": "4.20",
              "nameEn": "Earthquake",
              "nameFr": "S\u00e9isme",
              "id": "68",
              "typeFr": "sol"
            },
            {
              "typeEn": "normal",
              "dps": "25.64",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "40",
              "duration": "1.56",
              "nameEn": "Body Slam",
              "nameFr": "Plaquage",
              "id": "53",
              "typeFr": "normal"
            }
          ],
          "attaque": "180",
          "abilities": [
            {
              "typeId": "9",
              "dps": "10.00",
              "sps": "14.00",
              "damage": "5",
              "typeEn": "ghost",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Lick",
              "nameFr": "L\u00e9chouille",
              "id": "3",
              "typeFr": "spectre"
            },
            {
              "typeId": "15",
              "dps": "11.43",
              "sps": "3.81",
              "damage": "12",
              "typeEn": "psychc",
              "duration": "1.05",
              "spe": "4",
              "nameEn": "Zen Headbutt",
              "nameFr": "Psykoud'Boul",
              "id": "12",
              "typeFr": "psy"
            }
          ],
          "nameEn": "Snorlax",
          "typesEn": [
            "normal"
          ],
          "nameFr": "Ronflex",
          "defense": "180",
          "health": "320",
          "typesFr": [
            "normal"
          ],
          "cp": "3112",
          "id": "143"
        },
        {
          "speAbilities": [
            {
              "typeEn": "ice",
              "dps": "17.81",
              "CCchance": "5",
              "esquive": "1.35",
              "damage": "65",
              "duration": "3.65",
              "nameEn": "Ice Beam",
              "nameFr": "Laser Glace",
              "id": "40",
              "typeFr": "glace"
            },
            {
              "typeEn": "ice",
              "dps": "6.58",
              "CCchance": "5",
              "esquive": "0.7",
              "damage": "25",
              "duration": "3.80",
              "nameEn": "Icy Wind",
              "nameFr": "Vent Glace",
              "id": "79",
              "typeFr": "glace"
            },
            {
              "typeEn": "ice",
              "dps": "25.64",
              "CCchance": "5",
              "esquive": "0",
              "damage": "100",
              "duration": "3.90",
              "nameEn": "Blizzard",
              "nameFr": "Blizzard",
              "id": "6",
              "typeFr": "glace"
            }
          ],
          "attaque": "198",
          "abilities": [
            {
              "typeId": "12",
              "dps": "11.11",
              "sps": "8.64",
              "damage": "9",
              "typeEn": "ice",
              "duration": "0.81",
              "spe": "7",
              "nameEn": "Frost Breath",
              "nameFr": "Souffle Glac\u00e9",
              "id": "11",
              "typeFr": "glace"
            }
          ],
          "nameEn": "Articuno",
          "typesEn": [
            "ice",
            "flying"
          ],
          "nameFr": "Artikodin",
          "defense": "242",
          "health": "180",
          "typesFr": [
            "glace",
            "vol"
          ],
          "cp": "2978",
          "id": "144"
        },
        {
          "speAbilities": [
            {
              "typeEn": "electr",
              "dps": "14.00",
              "CCchance": "5",
              "esquive": "0.7",
              "damage": "35",
              "duration": "2.50",
              "nameEn": "Discharge",
              "nameFr": "Coup d'Jus",
              "id": "17",
              "typeFr": "\u00e9leck"
            },
            {
              "typeEn": "electr",
              "dps": "20.37",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "55",
              "duration": "2.70",
              "nameEn": "Thunderbolt",
              "nameFr": "Tonnerre",
              "id": "72",
              "typeFr": "\u00e9leck"
            },
            {
              "typeEn": "electr",
              "dps": "23.26",
              "CCchance": "5",
              "esquive": "1.55",
              "damage": "100",
              "duration": "4.30",
              "nameEn": "Thunder",
              "nameFr": "Fatal-Foudre",
              "id": "31",
              "typeFr": "\u00e9leck"
            }
          ],
          "attaque": "232",
          "abilities": [
            {
              "typeId": "4",
              "dps": "8.33",
              "sps": "11.67",
              "damage": "5",
              "typeEn": "electr",
              "duration": "0.6",
              "spe": "7",
              "nameEn": "Thunder Shock",
              "nameFr": "\u00c9clair",
              "id": "30",
              "typeFr": "\u00e9leck"
            }
          ],
          "nameEn": "Zapdos",
          "typesEn": [
            "electr",
            "flying"
          ],
          "nameFr": "Electhor",
          "defense": "194",
          "health": "180",
          "typesFr": [
            "\u00e9leck",
            "vol"
          ],
          "cp": "3114",
          "id": "145"
        },
        {
          "speAbilities": [
            {
              "typeEn": "fire",
              "dps": "24.39",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "100",
              "duration": "4.10",
              "nameEn": "Fire Blast",
              "nameFr": "D\u00e9flagration",
              "id": "22",
              "typeFr": "feu"
            },
            {
              "typeEn": "fire",
              "dps": "21.05",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "80",
              "duration": "3.80",
              "nameEn": "Heat Wave",
              "nameFr": "Canicule",
              "id": "13",
              "typeFr": "feu"
            },
            {
              "typeEn": "fire",
              "dps": "18.97",
              "CCchance": "5",
              "esquive": "0.9",
              "damage": "55",
              "duration": "2.90",
              "nameEn": "Flamethrower",
              "nameFr": "Lance-Flammes",
              "id": "38",
              "typeFr": "feu"
            }
          ],
          "attaque": "242",
          "abilities": [
            {
              "typeId": "7",
              "dps": "9.52",
              "sps": "6.67",
              "damage": "10",
              "typeEn": "fire",
              "duration": "1.05",
              "spe": "7",
              "nameEn": "Ember",
              "nameFr": "Flamm\u00e8che",
              "id": "26",
              "typeFr": "feu"
            }
          ],
          "nameEn": "Moltres",
          "typesEn": [
            "fire",
            "flying"
          ],
          "nameFr": "Sulfura",
          "defense": "194",
          "health": "180",
          "typesFr": [
            "feu",
            "vol"
          ],
          "cp": "3240",
          "id": "146"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "6.25",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "25",
              "duration": "4.00",
              "nameEn": "Wrap",
              "nameFr": "Ligotage",
              "id": "41",
              "typeFr": "normal"
            },
            {
              "typeEn": "water",
              "dps": "19.15",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "45",
              "duration": "2.35",
              "nameEn": "Aqua Tail",
              "nameFr": "Hydroqueue",
              "id": "34",
              "typeFr": "eau"
            },
            {
              "typeEn": "dragon",
              "dps": "11.11",
              "CCchance": "5",
              "esquive": "1.75",
              "damage": "30",
              "duration": "2.70",
              "nameEn": "Twister",
              "nameFr": "Ouragan",
              "id": "50",
              "typeFr": "dragon"
            }
          ],
          "attaque": "128",
          "abilities": [
            {
              "typeId": "3",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dragon",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Dragon Breath",
              "nameFr": "Dracosouffle",
              "id": "15",
              "typeFr": "dragon"
            }
          ],
          "nameEn": "Dratini",
          "typesEn": [
            "dragon"
          ],
          "nameFr": "Minidraco",
          "defense": "110",
          "health": "82",
          "typesFr": [
            "dragon"
          ],
          "cp": "983",
          "id": "147"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "6.25",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "25",
              "duration": "4.00",
              "nameEn": "Wrap",
              "nameFr": "Ligotage",
              "id": "41",
              "typeFr": "normal"
            },
            {
              "typeEn": "water",
              "dps": "19.15",
              "CCchance": "5",
              "esquive": "0.2",
              "damage": "45",
              "duration": "2.35",
              "nameEn": "Aqua Tail",
              "nameFr": "Hydroqueue",
              "id": "34",
              "typeFr": "eau"
            },
            {
              "typeEn": "dragon",
              "dps": "18.06",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "65",
              "duration": "3.60",
              "nameEn": "Dragon Pulse",
              "nameFr": "Dracochoc",
              "id": "25",
              "typeFr": "dragon"
            }
          ],
          "attaque": "170",
          "abilities": [
            {
              "typeId": "3",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dragon",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Dragon Breath",
              "nameFr": "Dracosouffle",
              "id": "15",
              "typeFr": "dragon"
            }
          ],
          "nameEn": "Dragonair",
          "typesEn": [
            "dragon"
          ],
          "nameFr": "Draco",
          "defense": "152",
          "health": "122",
          "typesFr": [
            "dragon"
          ],
          "cp": "1747",
          "id": "148"
        },
        {
          "speAbilities": [
            {
              "typeEn": "normal",
              "dps": "24.00",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "120",
              "duration": "5.00",
              "nameEn": "Hyper Beam",
              "nameFr": "Ultralaser",
              "id": "77",
              "typeFr": "normal"
            },
            {
              "typeEn": "dragon",
              "dps": "23.33",
              "CCchance": "25",
              "esquive": "0.2",
              "damage": "35",
              "duration": "1.50",
              "nameEn": "Dragon Claw",
              "nameFr": "Dracogriffe",
              "id": "26",
              "typeFr": "dragon"
            },
            {
              "typeEn": "dragon",
              "dps": "18.06",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "65",
              "duration": "3.60",
              "nameEn": "Dragon Pulse",
              "nameFr": "Dracochoc",
              "id": "25",
              "typeFr": "dragon"
            }
          ],
          "attaque": "250",
          "abilities": [
            {
              "typeId": "3",
              "dps": "12.00",
              "sps": "14.00",
              "damage": "6",
              "typeEn": "dragon",
              "duration": "0.5",
              "spe": "7",
              "nameEn": "Dragon Breath",
              "nameFr": "Dracosouffle",
              "id": "15",
              "typeFr": "dragon"
            },
            {
              "typeId": "17",
              "dps": "11.28",
              "sps": "3.01",
              "damage": "15",
              "typeEn": "steel",
              "duration": "1.33",
              "spe": "4",
              "nameEn": "Steel Wing",
              "nameFr": "Aile d'Acier",
              "id": "18",
              "typeFr": "acier"
            }
          ],
          "nameEn": "Dragonite",
          "typesEn": [
            "dragon",
            "flying"
          ],
          "nameFr": "Dracolosse",
          "defense": "212",
          "health": "182",
          "typesFr": [
            "dragon",
            "vol"
          ],
          "cp": "3500",
          "id": "149"
        },
        {
          "speAbilities": [
            {
              "typeEn": "psychc",
              "dps": "19.64",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "55",
              "duration": "2.80",
              "nameEn": "Psychic",
              "nameFr": "Psyko",
              "id": "60",
              "typeFr": "psy"
            },
            {
              "typeEn": "ghost",
              "dps": "14.61",
              "CCchance": "5",
              "esquive": "0.3",
              "damage": "45",
              "duration": "3.08",
              "nameEn": "Shadow Ball",
              "nameFr": "Ball'Ombre",
              "id": "4",
              "typeFr": "spectre"
            },
            {
              "typeEn": "normal",
              "dps": "24.00",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "120",
              "duration": "5.00",
              "nameEn": "Hyper Beam",
              "nameFr": "Ultralaser",
              "id": "77",
              "typeFr": "normal"
            }
          ],
          "attaque": "284",
          "abilities": [
            {
              "typeId": "15",
              "dps": "9.93",
              "sps": "4.64",
              "damage": "15",
              "typeEn": "psychc",
              "duration": "1.51",
              "spe": "7",
              "nameEn": "Confusion",
              "nameFr": "Choc Mental",
              "id": "33",
              "typeFr": "psy"
            },
            {
              "typeId": "15",
              "dps": "12.28",
              "sps": "12.28",
              "damage": "7",
              "typeEn": "psychc",
              "duration": "0.57",
              "spe": "7",
              "nameEn": "Psycho Cut",
              "nameFr": "Coupe Psycho",
              "id": "1",
              "typeFr": "psy"
            }
          ],
          "nameEn": "Mewtwo",
          "typesEn": [
            "psychc"
          ],
          "nameFr": "Mewtwo",
          "defense": "202",
          "health": "212",
          "typesFr": [
            "psy"
          ],
          "cp": "4144",
          "id": "150"
        },
        {
          "speAbilities": [
            {
              "typeEn": "flying",
              "dps": "25.00",
              "CCchance": "5",
              "esquive": "1.77",
              "damage": "80",
              "duration": "3.20",
              "nameEn": "Hurricane",
              "nameFr": "Vent Violent",
              "id": "81",
              "typeFr": "vol"
            },
            {
              "typeEn": "ground",
              "dps": "23.81",
              "CCchance": "5",
              "esquive": "1.95",
              "damage": "100",
              "duration": "4.20",
              "nameEn": "Earthquake",
              "nameFr": "S\u00e9isme",
              "id": "68",
              "typeFr": "sol"
            },
            {
              "typeEn": "psychc",
              "dps": "19.64",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "55",
              "duration": "2.80",
              "nameEn": "Psychic",
              "nameFr": "Psyko",
              "id": "60",
              "typeFr": "psy"
            },
            {
              "typeEn": "dragon",
              "dps": "18.06",
              "CCchance": "5",
              "esquive": "1.2",
              "damage": "65",
              "duration": "3.60",
              "nameEn": "Dragon Pulse",
              "nameFr": "Dracochoc",
              "id": "25",
              "typeFr": "dragon"
            },
            {
              "typeEn": "electr",
              "dps": "23.26",
              "CCchance": "5",
              "esquive": "1.55",
              "damage": "100",
              "duration": "4.30",
              "nameEn": "Thunder",
              "nameFr": "Fatal-Foudre",
              "id": "31",
              "typeFr": "\u00e9leck"
            },
            {
              "typeEn": "fairy",
              "dps": "20.73",
              "CCchance": "5",
              "esquive": "0.6",
              "damage": "85",
              "duration": "4.10",
              "nameEn": "Moonblast",
              "nameFr": "Pouvoir Lunaire",
              "id": "59",
              "typeFr": "f\u00e9e"
            },
            {
              "typeEn": "fire",
              "dps": "24.39",
              "CCchance": "5",
              "esquive": "0.4",
              "damage": "100",
              "duration": "4.10",
              "nameEn": "Fire Blast",
              "nameFr": "D\u00e9flagration",
              "id": "22",
              "typeFr": "feu"
            },
            {
              "typeEn": "grass",
              "dps": "24.49",
              "CCchance": "5",
              "esquive": "1.7",
              "damage": "120",
              "duration": "4.90",
              "nameEn": "Solar Beam",
              "nameFr": "Lance-Soleil",
              "id": "39",
              "typeFr": "plante"
            },
            {
              "typeEn": "normal",
              "dps": "24.00",
              "CCchance": "5",
              "esquive": "0.8",
              "damage": "120",
              "duration": "5.00",
              "nameEn": "Hyper Beam",
              "nameFr": "Ultralaser",
              "id": "77",
              "typeFr": "normal"
            }
          ],
          "attaque": "220",
          "abilities": [
            {
              "typeId": "13",
              "dps": "12.96",
              "sps": "12.96",
              "damage": "7",
              "typeEn": "normal",
              "duration": "0.54",
              "spe": "7",
              "nameEn": "Pound",
              "nameFr": "\u00c9cras'Face",
              "id": "10",
              "typeFr": "normal"
            }
          ],
          "nameEn": "Mew",
          "typesEn": [
            "psychc"
          ],
          "nameFr": "Mew",
          "defense": "220",
          "health": "200",
          "typesFr": [
            "psy"
          ],
          "cp": "3299",
          "id": "151"
        }
      ]
    }

    return service;
  });
