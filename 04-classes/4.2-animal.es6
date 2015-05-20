
class Animal {

  constructor(genus = 'protozoa') {
    this.genus = genus;
  }

  static mate(top, bottom) {
    return new Animal(`${top.genus.slice(0, 4)}${bottom.genus.slice(4)}`);
  }

  get appearance() {
    return '<^>';
  }

  appear() {
    console.log(`a wild ${this.genus} appeared!`);
    console.log(this.appearance);
    console.log();
  }

};

export default Animal;