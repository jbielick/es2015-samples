import assert from 'assert';














let object = {x: 1};

let {x} = object;

assert( x === 1 );
















let position = {
  clientX: 444,
  clientY: 128
};

// key is the source, variable name is the value

let {clientX: top, clientY: left} = position;

assert( top === 444 );
assert( left === 128 );


















let suspenders = {
  map: () => {},
  pick: () => {},
  reduce: () => {}
};


// keys that don't match are safe

let { map, pick, zip } = suspenders;


assert( typeof map === 'function' );
assert( typeof pick === 'function' );
assert( zip === undefined );















// any property can be read
// primitives are coerced to objects and then read

let {slice} = [];

assert( typeof slice === 'function' );


let {toExponential} = 6;

assert( typeof toExponential === 'function' );

















// nesting!

let outer = {inner: {z: 1}};

let {inner: {z}} = outer;

assert( z === 1 );



// go crazy!
















// more nesting!

let params = {
  lpf:  [20,    1, 20],
  lf:   [100,   1, 20],
  lmf:  [300,   1, 20],
  mf:   [750,   1, 20],
  hmf:  [2000,  1, 20],
  hf:   [7000,  1, 20],
  hpf:  [20000, 1, 20]
};


let {hpf: [filter, volume]} = params;

assert( filter === 20000 );
assert( volume === 1 );
