const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  // seu código aqui
  if (getAnimalsOlderThan) {
    const ageAnimals = data.species.filter((elemento) => elemento.name === animal)
      .every((elemento) => elemento.residents.map((elementoA) => elementoA.age)
        .every((elementoB) => elementoB >= age));
    return ageAnimals;
  }
};

module.exports = getAnimalsOlderThan;
