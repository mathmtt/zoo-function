const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const aberto = 'The zoo is open';
  const fechado = 'The zoo is closed';
  it('Primeiro Teste', () => {
    const momento = getOpeningHours('Monday', '09:23-AM');
    const esperado = fechado;
    expect(momento).toEqual(esperado);
  });
  it('Segundo Teste', () => {
    const momento = getOpeningHours('Tuesday', '09:23-AM');
    const esperado = aberto;
    expect(momento).toEqual(esperado);
  });
  it('Terceiro Teste', () => {
    const momento = getOpeningHours('Wednesday', '09:23-AM');
    const esperado = aberto;
    expect(momento).toEqual(esperado);
  });
  it('Quarto Teste', () => {
    const momento = getOpeningHours('Wednesday', '05:23-AM');
    const esperado = fechado;
    expect(momento).toEqual(esperado);
  });
  it('Quinto Teste', () => {
    const momento = getOpeningHours('Thursday', '11:23-AM');
    const esperado = aberto;
    expect(momento).toEqual(esperado);
  });
  it('Sexto Teste', () => {
    const momento = getOpeningHours('Thursday', '05:23-AM');
    const esperado = fechado;
    expect(momento).toEqual(esperado);
  });
  it('Setimo Teste', () => {
    const momento = getOpeningHours('Friday', '11:23-AM');
    const esperado = aberto;
    expect(momento).toEqual(esperado);
  });
  it('Oitavo Teste', () => {
    const momento = getOpeningHours('Friday', '05:23-AM');
    const esperado = fechado;
    expect(momento).toEqual(esperado);
  });
  it('Nono Teste', () => {
    const momento = getOpeningHours('Saturday', '09:23-AM');
    const esperado = aberto;
    expect(momento).toEqual(esperado);
  });
  it('Decimo Teste', () => {
    const momento = getOpeningHours('Saturday', '05:23-AM');
    const esperado = fechado;
    expect(momento).toEqual(esperado);
  });
  it('Decimo Primeiro Teste', () => {
    const momento = getOpeningHours('Sunday', '09:23-AM');
    const esperado = aberto;
    expect(momento).toEqual(esperado);
  });
  it('Decimo Segundo Teste', () => {
    const momento = getOpeningHours('Sunday', '05:23-AM');
    const esperado = fechado;
    expect(momento).toEqual(esperado);
  });
});
