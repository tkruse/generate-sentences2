import { Gender } from "./Gender";

export class Person {
  caseId: number;
  gender: Gender;
  singular: boolean;

  constructor(caseId: number, gender: Gender, singular: boolean) {
    this.caseId = caseId;
    this.gender = gender;
    this.singular = singular;
  }
}

export const Persons = {
  ME: new Person(1, "neutral", true),
  YOU: new Person(2, "neutral", true),
  HE: new Person(3, "männlich", true),
  SHE: new Person(3, "weiblich", true),
  IT: new Person(3, "neutral", true),
  WE: new Person(1, "neutral", false),
  YALL: new Person(2, "neutral", false),
  THEY: new Person(3, "neutral", false),
} as const;

export const AllPersons = [
  Persons.ME,
  Persons.YOU,
  Persons.HE,
  Persons.SHE,
  Persons.IT,
  Persons.WE,
  Persons.YALL,
  Persons.THEY,
];
