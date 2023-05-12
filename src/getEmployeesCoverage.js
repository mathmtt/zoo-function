const data = require('../data/zoo_data');

const acharF = (objeto) => {
  const funcionarioO = data.employees.find((funcionario) => objeto.name === funcionario
    .firstName || objeto.name === funcionario.lastName || objeto.id === funcionario.id);
  if (!funcionarioO) {
    throw new Error('Informações inválidas');
  }
  return funcionarioO;
};

const acharFS = (objeto) => {
  const nameE = {
    id: acharF(objeto).id,
    fullName: `${acharF(objeto).firstName} ${acharF(objeto).lastName}`,
    species: acharF(objeto).responsibleFor.map((id) => data.species.find((especie) => id
    === especie.id).name),
    locations: acharF(objeto).responsibleFor.map((id) => data
      .species.find((especie) => id === especie.id).location),
  };
  return nameE;
};

const getEmployeesCoverage = (objeto) => {
  // seu código aqui
  if (!objeto) {
    return data.employees.map((funcionario) => acharFS(funcionario));
  }
  if (objeto.name || objeto.id) {
    return acharFS(objeto);
  }
};
module.exports = getEmployeesCoverage;
