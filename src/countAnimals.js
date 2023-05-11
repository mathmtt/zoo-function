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
  const findSpecie = data.species.find((especie) => especie.name === animal.species);
  if (animal.species && animal.sex) {
    const sexAnimale = findSpecie.residents.filter((especie) => especie.sex === animal.sex);
    return sexAnimale.length;
  }
  return findSpecie.residents.length;
};
// Primeira tentativa
// if (!animal.sex) {
//   return data.species.find((especie) => especie.name === animal.especie).residents.length;
// }
// return data.species.find((especie) => especie.name === animal.especie).residents
//   .filter((findSpecie) => findSpecie.sex === animal.sex).length;;
module.exports = countAnimals;
