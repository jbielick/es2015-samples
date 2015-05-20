import assert from 'assert';














// works similarly

let [name, [lat, lng]] = ['Sams', [35.8557775, -78.8534085]];

assert( name === 'Sams' );
assert( lat === 35.8557775 );
















// skip items!

let [first, , third] = [1, 2, 3];

assert( first === 1 );
assert( third === 3 );
















// destructuring iterators will lazily iterate them

function* increment() {
  let i = 1;
  while (true) yield i++;
}

let [one, two, three, four] = increment();

assert( one === 1 );
assert( two === 2 );