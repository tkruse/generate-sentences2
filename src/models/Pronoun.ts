export class Pronoun {
  nominativ: string;
  reflexiveAkkusativ: string;
  reflexiveDatic: string;

  constructor(
    nominativ: string,
    reflexiveAkkusativ: string,
    reflexiveDatic: string
  ) {
    this.nominativ = nominativ;
    this.reflexiveAkkusativ = reflexiveAkkusativ;
    this.reflexiveDatic = reflexiveDatic;
  }
}
