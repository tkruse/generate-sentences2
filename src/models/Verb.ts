import { Words } from "./Words";
import { Tense } from "./Tense";
import { Person, Persons } from "./Person";

export class Verb implements Words {
  infinitive: string;
  alternativeStem?: string;
  present: string;
  past: string;
  perfect: string;
  tense: Tense = Tense.PRESENT;
  person: Person | undefined;

  constructor(
    infinitive: string,
    present: string,
    past: string,
    perfect: string,
    alternativeStem?: string,
  ) {
    this.infinitive = infinitive;
    this.present = present;
    this.past = past;
    this.perfect = perfect;
    this.alternativeStem = alternativeStem;
  }

  static regularVerb(infinitive: string): Verb {
    const stem = infinitive.slice(0, -2);
    return new Verb(infinitive, stem + "t", stem + "te", "ge" + stem + "t");
  }

  static irregularSecondThirdVerb(infinitive: string, altStem: string): Verb {
    return new Verb(
      infinitive,
      altStem + "t",
      altStem,
      "ge" + altStem + "en",
      altStem,
    );
  }

  static irregularThirdVerb(infinitive: string, thirdPerson: string): Verb {
    return new Verb(
      infinitive,
      thirdPerson,
      infinitive.slice(0, -2),
      "ge" + infinitive.slice(0, -2) + "en",
    );
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
        return this.person ? this.conjugatePresent() : this.present;
      case Tense.PAST:
        return this.person ? this.conjugatePast() : this.past;
      case Tense.PERFECT:
        return this.perfect;
      default:
        return this.present;
    }
  }

  private conjugatePresent(): string {
    const stem = this.infinitive.slice(0, -2);
    const irregularStem = this.alternativeStem || stem;

    if (this.person === Persons.ME) {
      return `${this.infinitive.slice(0, -2)}e`;
    } else if (this.person === Persons.YOU) {
      return this.appendEnding(irregularStem, "st");
    } else if (
      this.person === Persons.HE ||
      this.person === Persons.SHE ||
      this.person === Persons.IT
    ) {
      return this.appendEnding(irregularStem, "t");
    } else if (this.person === Persons.WE) {
      return `${stem}en`;
    } else if (this.person === Persons.YALL) {
      return this.appendEnding(stem, "t");
    } else if (this.person === Persons.THEY) {
      return `${stem}en`;
    } else {
      return "error";
    }
  }

  private conjugatePast(): string {
    const isRegular = this.past.endsWith("te");
    const stem = isRegular ? this.past.slice(0, -2) : this.past;

    if (this.person === Persons.ME) {
      return isRegular ? `${stem}te` : stem;
    } else if (this.person === Persons.YOU) {
      if (isRegular) {
        return `${stem}test`;
      } else {
        return this.appendEnding(stem, "st");
      }
    } else if (
      this.person === Persons.HE ||
      this.person === Persons.SHE ||
      this.person === Persons.IT
    ) {
      return isRegular ? `${stem}te` : stem;
    } else if (this.person === Persons.WE) {
      return isRegular ? `${stem}ten` : `${stem}en`;
    } else if (this.person === Persons.YALL) {
      return isRegular ? `${stem}tet` : this.appendEnding(stem, "t");
    } else if (this.person === Persons.THEY) {
      return isRegular ? `${stem}ten` : `${stem}en`;
    } else {
      return "error";
    }
  }

  private appendEnding(stem: string, ending: string): string {
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
