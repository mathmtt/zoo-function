const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Primeiro Teste', () => {
    const momento = handlerElephants('count');
    const esperado = 4;
    expect(momento).toEqual(esperado);
  });
  it('Segundo teste', () => {
    const momento = handlerElephants('averageAge');
    const esperado = 10.5;
    expect(momento).toEqual(esperado);
  });
  it('Terceiro Teste', () => {
    const momento = handlerElephants('names');
    const esperado = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(momento).toEqual(esperado);
  });
});
