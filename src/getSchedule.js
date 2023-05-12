const data = require('../data/zoo_data');

let exhibition = '';
let officeHour = '';
const especiesNome = data.species.map((especie) => especie.name);
const diasS = Object.keys(data.hours);

const getDays = () => Object.entries(data.hours).reduce((acc, cur) => {
  // seu código aqui
  if (cur[1].open === 0) {
    exhibition = 'The zoo will be closed!';
    officeHour = 'CLOSED';
  } else {
    officeHour = `Open from ${cur[1].open}am until ${cur[1].close}pm`;
    exhibition = data.species.filter((especie) => especie.availability
      .includes(cur[0])).map((animal) => animal.name);
  }
  if (!acc[cur[0]]) acc[cur[0]] = { officeHour, exhibition };
  return acc;
}, {});

const getSchedule = (scheduleTarget) => {
  if (diasS.includes(scheduleTarget)) {
    return Object.entries(data.hours).reduce((acc, cur) => {
      if (cur[0] === scheduleTarget) {
        acc[scheduleTarget] = Object.values(getDays())[Object.keys(getDays())
          .indexOf(scheduleTarget)];
      }
      return acc;
    }, {});
  }
  if (especiesNome.includes(scheduleTarget)) {
    return data.species.find((especie) => especie.name === scheduleTarget).availability;
  }
  return getDays();
};

module.exports = getSchedule;
