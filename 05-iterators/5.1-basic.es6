import assert from 'assert';















for (let letter of 'some string') {
  console.log(letter);
}


assert( typeof 'some string'[Symbol.iterator] === 'function' );

assert( typeof [1,2,3,4][Symbol.iterator] === 'function');





