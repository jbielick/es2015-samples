import assert from 'assert';


















function sum(head, ...tail) {
  return tail.length > 0
    ? head + sum(...tail)
    : head;
}

assert( sum(1) === 1 );
assert( sum(1,2,3,4,5,6,7,8) === 36 );




























// flatten arrays by spread / comprehension

let flattened = [1, 2, 3, ...[4, 5, 6]];

assert.deepEqual( flattened, [1, 2, 3, 4, 5, 6] );

























// spread any iterables

let str = 'some string';
let chars = [...str];

assert.deepEqual(
  chars,
  ['s','o','m','e',' ','s','t','r','i','n','g']
);

















// spread any iterator!

function* genFive() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let five = [...genFive()];

assert.deepEqual( five, [1, 2, 3, 4, 5] );



















// spread iterable that yields and iterates another iterable

function* genSix() {
  yield 1;
  yield 2;
  yield* [3, 4, 5, 6];
}

let six = [...genSix()];

assert.deepEqual( six, [1, 2, 3, 4, 5, 6] );
























// spread a native iterable

let letters = ['a', 'b', 'c'];

// letters.entries() === Iterator
// entries() returns iterator that provides [key, value] arrays

let tuples = [...letters.entries()];

assert.deepEqual(tuples, [[0, 'a'], [1, 'b'], [2, 'c']])