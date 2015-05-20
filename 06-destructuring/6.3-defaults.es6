import assert from 'assert';















// defaults are used if source is undefined _or_ missing

let {name, score = 0} = {name: 'Josh'};

assert( name === 'Josh' );
assert( score === 0 );




let [a, b = 0] = [1, undefined];

assert( a === 1 );
assert( b === 0 );

























// defaults are lazily evaluated!

let findX = () => { throw new Error('Stop!'); }
let findY = (x) => x * 10;

assert.doesNotThrow(function() {

  // each var in the destructure is a let definition

  let [x = findX(), y = findY(x)] = [10];

  assert( x === 10 );
  assert( y === 100 );

});