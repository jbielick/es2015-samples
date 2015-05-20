import assert from 'assert'

import Animal from './4.2-animal'
import Octopus from './4.3-octopus'
import Alligator from './4.4-alligator'
















let protozoa = new Animal();

protozoa.appear();

assert(
  Object.getPrototypeOf(protozoa) === Animal.prototype
);




















let gator = new Alligator();

gator.appear();

assert( gator instanceof Animal );




















let octopus = new Octopus();

octopus.appear();

assert( octopus instanceof Animal );




















let villain = Animal.mate(octopus, gator);

console.log(villain.genus);