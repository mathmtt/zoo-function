const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  // seu código aqui
  if (!animal) {
    return data.species.reduce(((acc, especie) => {
      acc[`${especie.name}`] = especie.residents.length;
      return acc;
    }
    ), {});
  }
  if (!animal.sex) {
    return data.species.find((especie) => especie.name === animal.especie).residents.length;
  }
  return data.species.find((especie) => especie.name === animal.especie).residents
    .filter((residentA) => residentA.sex === animal.sex).length;
};

module.exports = countAnimals;
