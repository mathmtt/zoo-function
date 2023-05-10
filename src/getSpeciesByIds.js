const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  const array = [];
  if (ids) {
    const searchAnimal = data.species.filter((animale) => ids.includes(animale.id));
    return searchAnimal;
  }
  return array;
};

module.exports = getSpeciesByIds;
