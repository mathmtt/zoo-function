const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  // seu código aqui
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return data.employees.find((elementoA) => [elementoA.firstName,
    elementoA.lastName].includes(employeeName));
};

module.exports = getEmployeeByName;
