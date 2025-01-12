import { Person } from "./Person";

export class Pronoun {
  nominativ: string;
  reflexiveAkkusativ: string;
  reflexiveDativ: string;
  person: Person;

  constructor(
    nominativ: string,
    reflexiveAkkusativ: string,
    reflexiveDativ: string,
    person: Person,
  ) {
    this.nominativ = nominativ;
    this.reflexiveAkkusativ = reflexiveAkkusativ;
    this.reflexiveDativ = reflexiveDativ;
    this.person = person;
  }
}
