global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const miniDataPoke=[
  {
  name:"caterpie",
  type:["bug"]
  },
  {
  name:"dragonite",
  type:["dragon"]
  },
  { 
  name:"squirtle",
  type:["water"]
  }
  
];
describe('filterForType', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof filterForType, 'function');
  });

  it('debería retornar "dragonite" al filtrar por tipo "dragon', () => {
    assert.deepEqual(window.filterForType(miniDataPoke,"dragon"), [{
      name:"dragonite",
      type:["dragon"]

    }]);
  });
})
