import assert from 'assert';















// let is block-scoped and never hoisted
{
  var age = 35;
  let name = 'John';
}

assert( age === 35 );
name; // ReferenceError: name is not defined





// var is function-scoped and hoisted!

(() => {

  assert( name === undefined );

  var name = 'John';

  assert( name === 'John' );

})();
















// with `const`, the variable itself is immutable,
// but the object stored within is mutable

const bar = 0;

assert.throws(() => {

  bar = 1; // SyntaxError: "bar" is read-only

});





















// TDZ is based on time, not literal location

(() => {

  function puts() {
    console.log(local);
  }

  puts(); // ReferenceError (not in babel!)

  let local = 'present';

  puts(); // logs 'present'

})();