import 'harmony-reflect'
import assert from 'assert'


























function makeOpenStruct(target = {}) {

  return new Proxy(target, {

    get(target, name, receiver) {

      if (name in target) {

        return Reflect.get(target, name, receiver);

      } else {

        console.log(`Creating OpenStruct at ...${name}`);

        return target[name] = makeOpenStruct();
      }
    }

  });

}














let o = makeOpenStruct();

o.name.first = 'josh';

o.first.second.third.fourth = '!!!';

assert( o.name.first === 'josh' );
assert( o.first.second.third.fourth === '!!!' );





























class OpenStruct {}
OpenStruct.prototype = makeOpenStruct();
OpenStruct.prototype.constructor = OpenStruct;



class S3Directory extends OpenStruct {
  constructor(name = 'untitled') {
    super();
    this.name = name;
  }
}


let folder = new S3Directory('diary');


folder['2015']['May']['20'] = 'I did a thing.';





