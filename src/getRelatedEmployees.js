const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  if (isManager) {
    return data.employees.some((element) => element.managers.includes(id));
  }
}

const getRelatedEmployees = (managerId) => {
  // seu código aqui
  if (isManager(managerId)) {
    const managers = [];
    data.employees.forEach((elementoA) => {
      if (elementoA.managers.includes(managerId)) {
        managers.push(`${elementoA.firstName} ${elementoA.lastName}`);
      }
    });
    return managers;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
