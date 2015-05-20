import assert from 'assert';
















let myIterable = {};

myIterable[Symbol.iterator] = function() {

  let dead = false;

  return {

    next() {

      if (dead) return {done: true};

      dead = true;

      return {
        value: 'I only had one life to give.',
        done: false
      };

    }
  };

};

for (let quote of myIterable) {
  console.log(quote);
}



















function* wakeUpLazy() {

  yield "It's too early!";

  yield "I don't want to get up!";

  yield "Okay. Fine.";

}


for (let complaint of wakeUpLazy()) {
  // console.log(complaint);
}





















// function* lyricGenerator() {
//   yield 'stop';
//   yield * 'hammertime';
//   yield 'can\'t touch this';
// }


// let mc = lyricGenerator();


// console.log(mc.next().value);

// // iterator keeps state / cursor

// for (let string of mc) {
//   console.log(string);
// }