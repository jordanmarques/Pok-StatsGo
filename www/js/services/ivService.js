angular.module('starter.ivservices', [])
  
.factory('levelUpData', ['Levels', function(Levels){

  var service = {};
  
  var levels = Levels.getLevels();
 

  var lookup = {
    byLevel : {},
    byDust : {},
    byCandy : {}
  };

  _.each(levels, function (data) {
    lookup.byLevel[data.level] = data;

    lookup.byDust[data.dust] = lookup.byDust[data.dust] || [];
    lookup.byDust[data.dust].push(data);

    lookup.byCandy[data.candy] = lookup.byCandy[data.candy] || [];
    lookup.byCandy[data.candy].push(data);
  });

  service.allLevels = function () {
    return levels.slice();
  };

  service.levelsByDust = function (dust) {
    dust = parseInt(dust, 10);
    return lookup.byDust[dust].slice();
  };

  service.levelsByCandy = function (candy) {
    candy = parseInt(candy, 10);
    return lookup.byCandy[candy].slice();
  };

  return service;
}])

.factory('pokedex', function(Pkms){
  var service = {};
  
  var pokemon = Pkms.getPokemons();

  const boundsOfInterest = [0, 100, 200];
  service.boundKeyForValue = function(value) {
    var key;
    var idx;
    var boundValue;
    var upperValue;
    for (idx = 0; idx < boundsOfInterest.length; idx++) {
      boundValue = boundsOfInterest[idx];
      upperValue = boundsOfInterest[idx + 1];
      if (!upperValue) {
        //We've reached the end
        return boundValue + '+';
      }
      if (value >= boundValue && value < upperValue) {
        return boundValue + '-' + upperValue;
      }
    }
    return key;
  };
  const boundKeys = _.map(boundsOfInterest, service.boundKeyForValue);

  var lookup = {
    byId : {},
    byName : {},
    byStamina : {},
    byAttack : {},
    byDefense : {},
  };

  [
    'byStamina',
    'byAttack',
    'byDefense'
  ].forEach(function (name) {
    var dict = {
      all : {}
    };
    boundKeys.forEach(function (key) {
      dict[key] = [];
    });
    lookup[name] = dict;
  });

  _.each(pokemon, function (pokeData) {
    lookup.byId[parseInt(pokeData.id)] = pokeData;
    lookup.byName[pokeData.nameEn.toLowerCase()] = pokeData;

    var health = parseInt(pokeData.health);
    lookup.byStamina.all[health] = lookup.byStamina.all[health] || [];
    lookup.byStamina.all[health].push(pokeData);
    lookup.byStamina[service.boundKeyForValue(health)].push(pokeData);

    var attaque = parseInt(pokeData.attaque);
    lookup.byAttack.all[attaque] = lookup.byAttack.all[attaque] || [];
    lookup.byAttack.all[attaque].push(pokeData);
    lookup.byAttack[service.boundKeyForValue(attaque)].push(pokeData);

    var defense = parseInt(pokeData.defense);
    lookup.byDefense.all[defense] = lookup.byDefense.all[defense] || [];
    lookup.byDefense.all[defense].push(pokeData);
    lookup.byDefense[service.boundKeyForValue(defense)].push(pokeData);
  });

  service.pokemonByName = function (name) {
    return lookup.byName[(name + '').toLowerCase()];
  };

  service.pokemonById = function (id) {
    var pokeId = parseInt(id, 10);
    return lookup.byId[pokeId];
  };


  return service;
})

.factory('ivCalculator',['levelUpData', 'pokedex', 'Pkms', function(levelUpData, pokedex){

  service = {};

  function testHP(hp, iv, levelData, pokemon) {
    return hp == parseInt(Math.floor((parseInt(pokemon.health) + iv) * levelData.cpScalar), 10);
  }

  function testCP(cp, attaqueIV, defenseIV, healthIV, levelData, pokemon) {
    const attaqueFactor = parseInt(pokemon.attaque) + attaqueIV;
    const defenseFactor = Math.pow(parseInt(pokemon.defense) + defenseIV, 0.5)
    const healthFactor = Math.pow((parseInt(pokemon.health) + healthIV), 0.5);
    const scalarFactor = Math.pow(levelData.cpScalar, 2);
    return cp == parseInt(attaqueFactor * defenseFactor * healthFactor * scalarFactor / 10, 10);
  }

  function determinePerfection(ivs) {
    const perfection = (ivs.attaqueIV + ivs.defenseIV + ivs.healthIV) / 45
    return Math.round(perfection * 100);
  }

  service.evaluate = function(pokemonQuery, cp, hp, dustCost, neverUpgraded) {
    const pokemon = pokedex.pokemonByName(pokemonQuery) || pokedex.pokemonById(pokemonQuery);

    if (!pokemon) {
      return {error : `Could not find pokemon: ${pokemonQuery}`};
    }
    var potentialIVs = determinePossibleIVs(pokemon, cp, hp, dustCost, neverUpgraded);

    _.each(potentialIVs, function (possibility) {
      possibility.perfection = determinePerfection(possibility);
    });

    potentialIVs.sort(function (a, b) {
      if (a.perfection == b.perfection) {
        return 0;
      }
      return a.perfection > b.perfection ? 1 : -1;
    });

    return potentialIVs;
  };

  function determinePossibleIVs (pokemon, cp, hp, dust, neverUpgraded) {
    var potentialLevels = levelUpData.levelsByDust(dust);
    potentialLevels.sort(function (a, b) {
      return a.level > b.level ? 1 : -1;//no dupes
    });
    if (neverUpgraded) {
      potentialLevels = _.filter(potentialLevels, function (data) {
        return data.level % 2 === 0;
      });
    }

    var healthIV, attaqueIV, defenseIV;
    var potentialHPIVs = [];

    var levelIndex;
    var levelData;
    for (levelIndex = 0; levelIndex < potentialLevels.length; levelIndex++) {
      levelData = potentialLevels[levelIndex];

      for (healthIV = 0; healthIV <= 15; healthIV++) {
        if (testHP(hp, healthIV, levelData, pokemon)) {
          potentialHPIVs.push({
            levelData,
            iv : healthIV
          });
        }
      }

    }

    var hpIVIndex;
    var potentialIVs = [];
    for (hpIVIndex = 0; hpIVIndex < potentialHPIVs.length; hpIVIndex++) {
      healthIV = potentialHPIVs[hpIVIndex].iv;
      levelData = potentialHPIVs[hpIVIndex].levelData;
      for (attaqueIV = 0; attaqueIV <= 15; attaqueIV++) {
        for (defenseIV = 0; defenseIV <= 15; defenseIV++) {
          if (testCP(cp, attaqueIV, defenseIV, healthIV, levelData, pokemon)) {
            potentialIVs.push({
              attaqueIV, defenseIV, healthIV,
              level : levelData.level
            })
          }
        }
      }
    }

    return potentialIVs;
  }

  return service;

}]);
