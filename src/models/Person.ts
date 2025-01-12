import { Gender } from "./Gender";
import { Pronoun } from "./Pronoun";
import { GrammaticalCase } from "./GrammaticalCase";

export class Person {
  caseId: number;
  gender: Gender;
  singular: boolean;
  myPronouns: Pronoun;

  constructor(
    caseId: number,
    gender: Gender,
    singular: boolean,
    pronouns: Pronoun,
  ) {
    this.caseId = caseId;
    this.gender = gender;
    this.singular = singular;
    this.myPronouns = pronouns;
  }

  pronouns(): Pronoun {
    return this.myPronouns;
  }
}

export const Persons = {
  ME: new Person(1, "neutral", true, new Pronoun("ich", "mich", "mir")),
  YOU: new Person(2, "neutral", true, new Pronoun("du", "dich", "dir")),
  HE: new Person(3, "männlich", true, new Pronoun("er", "sich", "ihm")),
  SHE: new Person(3, "weiblich", true, new Pronoun("sie", "sich", "ihr")),
  IT: new Person(3, "neutral", true, new Pronoun("es", "sich", "ihm")),
  WE: new Person(1, "neutral", false, new Pronoun("wir", "uns", "uns")),
  YALL: new Person(2, "neutral", false, new Pronoun("ihr", "euch", "euch")),
  THEY: new Person(3, "neutral", false, new Pronoun("sie", "sich", "ihnen")),
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

export function randomPerson(): Person {
  return AllPersons[Math.floor(Math.random() * AllPersons.length)];
}

export function posessionDE(
  owner: Person,
  gender: Gender,
  count: number = 1,
  grammarCase: GrammaticalCase = "nominative",
): string {
  let result = "";
  switch (owner) {
    case Persons.ME:
      result = "mein";
      break;
    case Persons.YOU:
      result = "dein";
      break;
    case Persons.HE:
      result = "sein";
      break;
    case Persons.SHE:
      result = "ihr";
      break;
    case Persons.IT:
      result = "sein";
      break;
    case Persons.WE:
      result = "unser";
      break;
    case Persons.YALL:
      result = "eur";
      break;
    case Persons.THEY:
      result = "ihr";
      break;
  }
  if (grammarCase === "nominative") {
    if (gender === "weiblich" || count > 1) {
      result = result + "e";
    }
  } else if (grammarCase === "accusative") {
    if (gender === "weiblich" || count > 1) {
      result = result + "e";
    }
    if (count > 1) {
      return result;
    }
    switch (gender) {
      case "männlich":
        result = result + "en";
        break;
    }
  } else if (grammarCase === "genitive") {
    if (count > 1) {
      return result + "er";
    }
    switch (gender) {
      case "männlich":
        result = result + "es";
        break;
      case "neutral":
        result = result + "es";
        break;
      case "weiblich":
        result = result + "er";
        break;
    }
  } else if (grammarCase === "dative") {
    if (gender === "weiblich" || count > 1) {
      result = result + "e";
    }
    if (count > 1) {
      return result + "n";
    }
    switch (gender) {
      case "männlich":
      case "neutral":
        result = result + "em";
        break;
      case "weiblich":
        result = result + "r";
        break;
    }
  }
  if (owner === Persons.YALL && count === 1) {
    if (grammarCase === "nominative" && gender !== "weiblich") {
      return "euer";
    }
    if (grammarCase === "accusative" && gender === "neutral") {
      return "euer";
    }
  }
  return result;
}
