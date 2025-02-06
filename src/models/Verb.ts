import { Words } from "./Words";
import { Tense } from "./Tense";
import { Person, Persons } from "./Person";

export class VerbBase {
  static create(base: string): VerbBase {
    return new VerbBase(base);
  }

  static withDetachablePrefix(base: string, prefix: string): VerbBase {
    return new VerbBase(base, undefined, prefix);
  }

  static withUndetachablePrefix(base: string, prefix: string): VerbBase {
    return new VerbBase(base, prefix);
  }

  static withPrefixes(
    base: string,
    undetachable: string,
    detachable: string,
  ): VerbBase {
    return new VerbBase(base, undetachable, detachable);
  }

  constructor(
    base: string,
    undetachablePrefix: string | undefined = undefined,
    detachablePrefix: string | undefined = undefined,
  ) {
    this.base = base;
    this.undetachablePrefix = undetachablePrefix;
    this.detachablePrefix = detachablePrefix;
  }

  base: string;
  undetachablePrefix?: string;
  detachablePrefix?: string;

  infinitive(): string {
    return this.withStem(this.base);
  }

  withStem(stem: string): string {
    return `${this.detachablePrefix || ""}${this.undetachablePrefix || ""}${stem}`;
  }
}

export class Verb implements Words {
  verbBase: VerbBase;
  // TODO: more tenses
  conjugations: Map<Person, [string, string]> = new Map();
  perfect: string;
  tense: Tense = Tense.PRESENT;
  person: Person | undefined;
  // TODO
  // transitive: boolean;
  // perfectWithBe: boolean;

  constructor(
    verbBase: VerbBase,
    conjugations: Map<Person, [string, string]>,
    perfect: string,
  ) {
    this.verbBase = verbBase;
    this.conjugations = conjugations;
    this.perfect = perfect;
  }

  get infinitive(): string {
    return this.verbBase.infinitive();
  }

  static regularVerb(verbBaseOrString: VerbBase | string): Verb {
    const verbBase =
      typeof verbBaseOrString === "string"
        ? VerbBase.create(verbBaseOrString)
        : verbBaseOrString;
    const infinitive = verbBase.infinitive();
    const stem = verbBase.base.slice(0, -2);
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
    return new Verb(verbBase, conjugations, "ge" + stem + "t");
  }

  static irregularVerb(
    verbBaseOrString: VerbBase | string,
    past: string,
    perfect: string,
    altStemBase?: string,
  ): Verb {
    const verbBase =
      typeof verbBaseOrString === "string"
        ? VerbBase.create(verbBaseOrString)
        : verbBaseOrString;
    const infinitive = verbBase.infinitive();
    const conjugations = new Map<Person, [string, string]>();
    const altStem = altStemBase ? verbBase.withStem(altStemBase) : altStemBase;
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
    return new Verb(verbBase, conjugations, perfect);
  }

  static modalVerb(
    verbBaseOrString: VerbBase | string,
    pastBase: string,
    perfect: string,
    singularStemBase: string,
    pluralStemBase: string,
  ): Verb {
    const verbBase =
      typeof verbBaseOrString === "string"
        ? VerbBase.create(verbBaseOrString)
        : verbBaseOrString;
    const infinitive = verbBase.infinitive();
    const conjugations = new Map<Person, [string, string]>();
    const singularStem = verbBase.withStem(singularStemBase);
    const pluralStem = verbBase.withStem(pluralStemBase);
    const past = verbBase.withStem(pastBase);
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
    return new Verb(verbBase, conjugations, perfect);
  }

  setPerson(person: Person): Verb {
    this.person = person;
    return this;
  }

  setTense(tense: Tense): Verb {
    this.tense = tense;
    return this;
  }

  // TODO: render with adverbs, precisions and transitive Noun
  // e.g. ich habe heute schnell im Supermnarkt Wurst gekauft
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
      case Tense.PAST_PERFECT:
      // TODO
      case Tense.KONJUNKTIVE_ONE:
      // TODO
      case Tense.KONJUNKTIVE_TWO:
      // TODO
      case Tense.IMPERATIVE:
      // TODO
      default:
        return this.infinitive;
    }
  }

  private static conjugatePresent(
    person: Person,
    infinitive: string,
    alternativeStem?: string,
  ): string {
    const stem = infinitive.endsWith("en")
      ? infinitive.slice(0, -2)
      : infinitive.slice(0, -1);
    const irregularStem = alternativeStem || stem;

    if (person === Persons.ME) {
      return `${stem}e`;
    } else if (person === Persons.YOU) {
      return this.appendEnding(irregularStem, "st");
    } else if (
      person === Persons.HE ||
      person === Persons.SHE ||
      person === Persons.IT
    ) {
      return this.appendEnding(irregularStem, "t");
    } else if (person === Persons.WE) {
      return `${infinitive}`;
    } else if (person === Persons.YALL) {
      return this.appendEnding(stem, "t");
    } else if (person === Persons.THEY) {
      return `${infinitive}`;
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
