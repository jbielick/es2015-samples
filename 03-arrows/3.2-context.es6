import assert from 'assert'






function Enclosed() {

  this.x = 0;

  // dynamic `this`
  setTimeout(function() {

    assert( this.x !== 0 );

  }, 1);

  // lexical `this`
  setTimeout(() => {

    assert( this.x === 0 );

  }, 1);
}


let enc = Object.create(Enclosed.prototype);

enc.constructor();



















let bind;

// es5
bind = function(func, ctx) {
  return function() {
    return func.apply(ctx, arguments);
  };
}


// es6
bind = (func, ctx) => () => func.apply(ctx, arguments);


let getContextClosed = function() { return this; };

let getContextLexical = () => { this };


let context               = {};
let boundContext          = bind(getContextClosed, context);
let boundLexicalContext   = bind(getContextLexical, context);

assert( boundContext()         === context );
assert( boundLexicalContext()  === this );



