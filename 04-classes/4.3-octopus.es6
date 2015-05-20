import Animal from './4.2-animal';

class Octopus extends Animal {

  constructor() {
    super();
    this.genus = 'Octopus';
    this.slimey = true;
  }

  get appearance() {
    return [
      "                        ___                              ",
      "                     .-'   `'.                           ",
      "                    /         \                          ",
      "                    |         ;                          ",
      "                    |         |           ___.--,        ",
      "           _.._     |0) ~ (0) |    _.---'`__.-( (_.      ",
      "    __.--'`_.. '.__.\\    '--. \\_.-' ,.--'`     `\"\"`  ",
      "   ( ,.--'`   ',__ /./;   ;, '.__.'`    __               ",
      "   _`) )  .---.__.' / |   |\   \__..--\"\"\"\"\"--.,_    ",
      "  `---' .'.''-._.-'`_./  /\ '.  \ _.-~~~````~~~-._`-.__. ",
      "        | |  .' _.-' |  |  \  \  '.               `~---` ",
      "         \\ \\/ .'   \\  \\   '. '-._)                   ",
      "          \/ /       \\  \\    `=.__`~-.                 ",
      "     jgs  / /\\       `) )    / / `\"\".`\\              ",
      "    , _.-'.'\\ \\      / /    ( (     / /                ",
      "     `--~`   ) )    .-'.'      '.'.  | (                 ",
      "            (/`    ( (`          ) )  '-;                ",
      "             `      '-;         (-'                      "
    ].join("\n");
  }

}

export default Octopus;