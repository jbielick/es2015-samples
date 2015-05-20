import assert from 'assert';



// Weak Sets
let ws = new WeakSet();

ws.add({ data: 42 });
// Because the added object has no other references, it will not be held in the set
