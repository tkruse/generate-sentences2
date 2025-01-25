import { Words } from "./Words";
import { Tense } from "./Tense";
import { Person, Persons } from "./Person";

export class Verb implements Words {
  infinitive: string;
  conjugations: Map<Person, [string, string]> = new Map();
  perfect: string;
  tense: Tense = Tense.PRESENT;
  person: Person | undefined;

  constructor(
    infinitive: string,
    conjugations: Map<Person, [string, string]>,
    perfect: string,
  ) {
    this.infinitive = infinitive;
    this.conjugations = conjugations;
    this.perfect = perfect;
  }

  static regularVerb(infinitive: string): Verb {
    const stem = infinitive.slice(0, -2);
    const past = `${stem}te`;
    const conjugations = new Map<Person, [string, string]>();
    conjugations.set(Persons.ME, [
      Verb.conjugatePresent(Persons.ME, infinitive),
      Verb.conjugatePast(Persons.ME, past),
    ]);
    conjugations.set(Persons.YOU, [
      Verb.conjugatePresent(Persons.YOU, infinitive),
      Verb.conjugatePast(Persons.YOU, past),
    ]);
    conjugations.set(Persons.HE, [
      Verb.conjugatePresent(Persons.HE, infinitive),
      Verb.conjugatePast(Persons.HE, past),
    ]);
    conjugations.set(Persons.SHE, [
      Verb.conjugatePresent(Persons.SHE, infinitive),
      Verb.conjugatePast(Persons.SHE, past),
    ]);
    conjugations.set(Persons.IT, [
      Verb.conjugatePresent(Persons.IT, infinitive),
      Verb.conjugatePast(Persons.IT, past),
    ]);
    conjugations.set(Persons.WE, [
      Verb.conjugatePresent(Persons.WE, infinitive),
      Verb.conjugatePast(Persons.WE, past),
    ]);
    conjugations.set(Persons.YALL, [
      Verb.conjugatePresent(Persons.YALL, infinitive),
      Verb.conjugatePast(Persons.YALL, past),
    ]);
    conjugations.set(Persons.THEY, [
      Verb.conjugatePresent(Persons.THEY, infinitive),
      Verb.conjugatePast(Persons.THEY, past),
    ]);
    return new Verb(infinitive, conjugations, "ge" + stem + "t");
  }

  static irregularVerb(
    infinitive: string,
    past: string,
    perfect: string,
    altStem?: string,
  ): Verb {
    const conjugations = new Map<Person, [string, string]>();
    conjugations.set(Persons.ME, [
      Verb.conjugatePresent(Persons.ME, infinitive, altStem),
      Verb.conjugatePast(Persons.ME, past),
    ]);
    conjugations.set(Persons.YOU, [
      Verb.conjugatePresent(Persons.YOU, infinitive, altStem),
      Verb.conjugatePast(Persons.YOU, past),
    ]);
    conjugations.set(Persons.HE, [
      Verb.conjugatePresent(Persons.HE, infinitive, altStem),
      Verb.conjugatePast(Persons.HE, past),
    ]);
    conjugations.set(Persons.SHE, [
      Verb.conjugatePresent(Persons.SHE, infinitive, altStem),
      Verb.conjugatePast(Persons.SHE, past),
    ]);
    conjugations.set(Persons.IT, [
      Verb.conjugatePresent(Persons.IT, infinitive, altStem),
      Verb.conjugatePast(Persons.IT, past),
    ]);
    conjugations.set(Persons.WE, [
      Verb.conjugatePresent(Persons.WE, infinitive, altStem),
      Verb.conjugatePast(Persons.WE, past),
    ]);
    conjugations.set(Persons.YALL, [
      Verb.conjugatePresent(Persons.YALL, infinitive, altStem),
      Verb.conjugatePast(Persons.YALL, past),
    ]);
    conjugations.set(Persons.THEY, [
      Verb.conjugatePresent(Persons.THEY, infinitive, altStem),
      Verb.conjugatePast(Persons.THEY, past),
    ]);
    return new Verb(infinitive, conjugations, perfect);
  }

  static modalVerb(
    infinitive: string,
    past: string,
    perfect: string,
    singularStem: string,
    pluralStem: string,
  ): Verb {
    const conjugations = new Map<Person, [string, string]>();
    conjugations.set(Persons.ME, [
      singularStem,
      Verb.conjugatePast(Persons.ME, past),
    ]);
    conjugations.set(Persons.YOU, [
      Verb.appendEnding(singularStem, "st"),
      Verb.conjugatePast(Persons.YOU, past),
    ]);
    conjugations.set(Persons.HE, [
      singularStem,
      Verb.conjugatePast(Persons.HE, past),
    ]);
    conjugations.set(Persons.SHE, [
      singularStem,
      Verb.conjugatePast(Persons.SHE, past),
    ]);
    conjugations.set(Persons.IT, [
      singularStem,
      Verb.conjugatePast(Persons.IT, past),
    ]);
    conjugations.set(Persons.WE, [
      Verb.conjugatePresent(Persons.WE, infinitive, pluralStem),
      Verb.conjugatePast(Persons.WE, past),
    ]);
    conjugations.set(Persons.YALL, [
      Verb.conjugatePresent(Persons.YALL, infinitive, pluralStem),
      Verb.conjugatePast(Persons.YALL, past),
    ]);
    conjugations.set(Persons.THEY, [
      Verb.conjugatePresent(Persons.THEY, infinitive, pluralStem),
      Verb.conjugatePast(Persons.THEY, past),
    ]);
    return new Verb(infinitive, conjugations, perfect);
  }

  setPerson(person: Person): Verb {
    this.person = person;
    return this;
  }

  setTense(tense: Tense): Verb {
    this.tense = tense;
    return this;
  }

  renderDE(): string {
    switch (this.tense) {
      case Tense.PRESENT:
        return this.person
          ? this.conjugations.get(this.person)![0]
          : this.infinitive;
      case Tense.PAST:
        return this.person
          ? this.conjugations.get(this.person)![1]
          : this.infinitive;
      case Tense.PERFECT:
        return this.perfect;
      default:
        return this.infinitive;
    }
  }

  private static conjugatePresent(
    person: Person,
    infinitive: string,
    alternativeStem?: string,
  ): string {
    const stem = infinitive.slice(0, -2);
    const irregularStem = alternativeStem || stem;

    if (person === Persons.ME) {
      return `${infinitive.slice(0, -2)}e`;
    } else if (person === Persons.YOU) {
      return this.appendEnding(irregularStem, "st");
    } else if (
      person === Persons.HE ||
      person === Persons.SHE ||
      person === Persons.IT
    ) {
      return this.appendEnding(irregularStem, "t");
    } else if (person === Persons.WE) {
      return `${stem}en`;
    } else if (person === Persons.YALL) {
      return this.appendEnding(stem, "t");
    } else if (person === Persons.THEY) {
      return `${stem}en`;
    } else {
      return "error";
    }
  }

  private static conjugatePast(person: Person, past: string): string {
    const isRegular = past.endsWith("te");
    const stem = isRegular ? past.slice(0, -2) : past;

    if (person === Persons.ME) {
      return isRegular ? `${stem}te` : stem;
    } else if (person === Persons.YOU) {
      if (isRegular) {
        return `${stem}test`;
      } else {
        return this.appendEnding(stem, "st");
      }
    } else if (
      person === Persons.HE ||
      person === Persons.SHE ||
      person === Persons.IT
    ) {
      return isRegular ? `${stem}te` : stem;
    } else if (person === Persons.WE) {
      return isRegular ? `${stem}ten` : `${stem}en`;
    } else if (person === Persons.YALL) {
      return isRegular ? `${stem}tet` : this.appendEnding(stem, "t");
    } else if (person === Persons.THEY) {
      return isRegular ? `${stem}ten` : `${stem}en`;
    } else {
      return "error";
    }
  }

  private static appendEnding(stem: string, ending: string): string {
    if (ending.startsWith("s")) {
      if (stem.endsWith("ss") || stem.endsWith("ß")) {
        return `${stem}${ending.slice(1)}`;
      } else if (stem.endsWith("d") || stem.endsWith("t")) {
        return `${stem}e${ending}`;
      }
    }
    if (ending.startsWith("t")) {
      if (stem.endsWith("d") || stem.endsWith("t")) {
        return `${stem}e${ending}`;
      }
    }
    return `${stem}${ending}`;
  }

  renderHidden(): string {
    return "___";
  }

  renderHints(): string {
    return `${this.infinitive} (${this.tense})`;
  }
}
