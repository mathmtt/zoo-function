const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  // seu código aqui
  const resultado = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((pessoa) => {
    if (pessoa.age < 18) {
      resultado.child += 1;
    } else if (pessoa.age >= 18 && pessoa.age < 50) {
      resultado.adult += 1;
    } else {
      resultado.senior += 1;
    }
  });
  return resultado;
};

const calculateEntry = (entrants) => {
  // seu código aqui
  if (entrants === [] || !entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const qntPpl = Object.entries(countEntrants(entrants));
  return qntPpl.reduce((acc, cur) => acc + cur[1] * data.prices[cur[0]], 0);
};

module.exports = { calculateEntry, countEntrants };
