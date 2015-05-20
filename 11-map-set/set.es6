import assert from 'assert';



















let s = new Set();

s.add("hello").add("goodbye").add("hello");

assert( s.size === 2 );

assert( s.has("hello") === true );

// strict equal?


































// can be cleared

s.clear();

assert( s.size === 0 );