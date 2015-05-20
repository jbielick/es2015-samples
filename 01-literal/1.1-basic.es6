import assert from 'assert';






let sayHello = () => { console.log('hello'); }


var obj = {

    // Shorthand for ‘sayHello: sayHello’
    sayHello,

    // method declarations
    toString() {
     // Super calls!
     return super.toString() + '... literally!';
    },

    keys() {
      let keys = Object.keys(this);
      keys.push('extraneous!');
      return keys;
    },

    // Computed (dynamic) property names
    [ 'prop_' + (6 * 7)]: 42,

    get name() {
      return 'Object Literal';
    }
};




assert( obj.sayHello === sayHello );

assert( obj.prop_42 === 42 );

assert( obj.toString() === '[object Object]... literally!' );

assert( obj.keys().indexOf('extraneous!') > -1 )