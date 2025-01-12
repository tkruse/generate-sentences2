export class Pronoun {
  nominativ: string;
  reflexiveAkkusativ: string;
  reflexiveDativ: string;

  constructor(
    nominativ: string,
    reflexiveAkkusativ: string,
    reflexiveDativ: string,
  ) {
    this.nominativ = nominativ;
    this.reflexiveAkkusativ = reflexiveAkkusativ;
    this.reflexiveDativ = reflexiveDativ;
  }

  nominative(): string {
    return this.nominativ;
  }

  reflexiveAkkusative(): string {
    return this.reflexiveAkkusativ;
  }

  reflexiveDative(): string {
    return this.reflexiveDativ;
  }
}
