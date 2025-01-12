import { Pronoun } from "../Pronoun";
import { Persons } from "../Person";

export const Pronouns = {
  ME: new Pronoun("ich", "mich", "mir", Persons.ME),
  YOU: new Pronoun("du", "dich", "dir", Persons.YOU),
  HE: new Pronoun("er", "sich", "ihm", Persons.HE),
  SHE: new Pronoun("sie", "sich", "ihr", Persons.SHE),
  IT: new Pronoun("es", "sich", "ihm", Persons.IT),
  WE: new Pronoun("wir", "uns", "uns", Persons.WE),
  YALL: new Pronoun("ihr", "euch", "euch", Persons.YALL),
  THEY: new Pronoun("sie", "sich", "ihnen", Persons.THEY),
} as const;

export const AllPronouns = [
  Pronouns.ME,
  Pronouns.YOU,
  Pronouns.HE,
  Pronouns.SHE,
  Pronouns.IT,
  Pronouns.WE,
  Pronouns.YALL,
  Pronouns.THEY,
];
