import Animal from './4.2-animal'


class Alligator extends Animal {

  constructor() {
    // this.name = '' => SyntaxError! 'this' is not allowed before super()
    super();
    this.genus = 'Alligator';
    this.scaled = true;
  }

  get appearance() {
    return [
      `                           `,
      `           ,^---v----^\\     `,
      `          . (. ) (. ) |    `,
      `  .______/             \\   `,
      ` /                      |.  `,
      ` | .    .          ,.   |>  `,
      `  \\ __/___/  \`\`\`\`\`\`     |.  `,
      `              \\         |>  `,
      `              |         |.  `,
      `                           `
    ].join("\n")

  }

}

export default Alligator;