import assert from 'assert';




















let private1 = Symbol('private');
let private2 = Symbol('private'); 

assert( private1 !== private2 );

























let Planet = (function() {

  var gravitySym = Symbol('gravity');

  class Planet {

    constructor(name) {
      this.name = name;
      this[gravitySym] = 0.38;
    }

    get relativeGravity() {
      return this[gravitySym];
    }

  }

  return Planet;

})();

let mercury = new Planet('Mercury');

assert( mercury.relativeGravity === 0.38 );

// same symbol cannot be recreated
// property cannot be reached unless using Object.getOwnPropertySymbols
assert( mercury[Symbol('gravity')] !== 0.38 );























let movie = {

  name: 'Dead Alive',

  [Symbol('UPC')]: '1010101'

};


assert.deepEqual( Object.keys(movie), ['name'] );
// same for Object.getOwnPropertyNames

assert( JSON.stringify(movie) === '{"name":"Dead Alive"}' );

// not really private!
assert( Object.getOwnPropertySymbols(movie).length === 1 );


















// special symbols so as not to crash into userland names

Symbol.iterator

Symbol.unscopables

Symbol.hasInstance

Symbol.toPrimitive 

// ...

