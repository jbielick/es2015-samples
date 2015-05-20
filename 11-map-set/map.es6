import assert from 'assert';













let m = new Map();

m.set("string object", 42);

assert( m.get("string object") === 42 );



let func = () => {}

m.set(func, 34);

assert( m.get(func) === 34 );

m.clear();

assert( m.size === 0 );