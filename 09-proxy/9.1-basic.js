import 'harmony-reflect'
import assert from 'assert'






















function makeModel(obj) {

  let dirtyAttributes = new Set();

  return new Proxy(obj, {

    set(target, prop, value, receiver) {

      if (!Object.equal(value, target[prop])) {
        dirtyAttributes.add(prop);
      }

      return Reflect.set(target, prop, value, receiver);
    },

    deleteProperty(target, prop) {
      if (Object.hasOwnProperty(target[prop])) {
        dirtyAttributes.add(prop);
      }
      return Reflect.deleteProperty(target, prop);
    }

  });


  setTimeout(() => console.log(dirtyAttributes), 1200);
}

let user = makeModel({name: 'Charles'});

















