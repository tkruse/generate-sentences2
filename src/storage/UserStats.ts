import { Repetition } from "./Repetition";
import { Noun } from "../models/Noun";
import { GrammaticalCase } from "../models/GrammaticalCase";

export class UserStats {
  repPerDay: Map<string, Repetition[]>;

  constructor(repPerDay: Map<string, Repetition[]> = new Map()) {
    this.repPerDay = repPerDay;
  }

  summary(
    date: Date | undefined,
    nounFilter?: (noun: Noun) => boolean,
  ): Record<string, any> {
    const dateString = date ? date.toISOString().split("T")[0] : "alle";
    let repetitions = [];
    if (!date) {
      repetitions = Array.from(this.repPerDay.values()).flat();
    } else {
      repetitions = this.repPerDay.get(dateString) ?? [];
    }
    if (!repetitions) {
      return new Analysis(dateString, 0, 0, 0);
    }
    const nounFilterFn = nounFilter ?? (() => true);
    const filteredRepetitions = repetitions.filter((rep) =>
      nounFilterFn(rep.noun),
    );
    const wrong = filteredRepetitions.filter((rep) => rep.score < 0.3).length;
    const weak = filteredRepetitions.filter(
      (rep) => rep.score >= 0.3 && rep.score <= 0.7,
    ).length;
    const strong = filteredRepetitions.filter((rep) => rep.score > 0.7).length;

    return new Analysis(dateString, wrong, weak, strong);
  }
}

export class Analysis {
  constructor(
    private readonly date: string,
    private readonly wrong: number,
    private readonly weak: number,
    private readonly strong: number,
  ) {}

  getDate(): string {
    return this.date;
  }

  getWrong(): number {
    return this.wrong;
  }

  getWeak(): number {
    return this.weak;
  }

  getStrong(): number {
    return this.strong;
  }

  getTotal(): number {
    return this.wrong + this.weak + this.strong;
  }

  getWrongPercent(): string {
    return (
      this.getTotal() === 0 ? 0 : (this.wrong / this.getTotal()) * 100
    ).toFixed(1);
  }

  getWeakPercent(): string {
    return (
      this.getTotal() === 0 ? 0 : (this.weak / this.getTotal()) * 100
    ).toFixed(1);
  }

  getStrongPercent(): string {
    return (
      this.getTotal() === 0 ? 0 : (this.strong / this.getTotal()) * 100
    ).toFixed(1);
  }
}

export class NounFilter {
  constructor(
    public readonly label: string,
    public readonly filter: (noun: Noun) => boolean,
  ) {}
}

export const NounFilters = {
  ALL: new NounFilter("Alle", () => true),
  NOMINATIVE: new NounFilter(
    "Nominativ",
    (noun: Noun) => noun.case === GrammaticalCase.Nominative,
  ),
  ACCUSATIVE: new NounFilter(
    "Accusativ",
    (noun: Noun) => noun.case === GrammaticalCase.Accusative,
  ),
  DATIVE: new NounFilter(
    "Dativ",
    (noun: Noun) => noun.case === GrammaticalCase.Dative,
  ),
  GENITIVE: new NounFilter(
    "Genitiv",
    (noun: Noun) => noun.case === GrammaticalCase.Genitive,
  ),
  SINGULAR: new NounFilter("Singular", (noun: Noun) => noun.hasCount === 1),
  PLURAL: new NounFilter("Plural", (noun: Noun) => noun.hasCount > 1),
  SPECIFIC: new NounFilter(
    "Bestimmt",
    (noun: Noun) => noun.isSpecific && !noun.isDemonstrative,
  ),
  UNSPECIFIC: new NounFilter(
    "Unbestimmt",
    (noun: Noun) => !noun.isSpecific && !noun.possession,
  ),
  DEMONSTRATIVE: new NounFilter(
    "Demonstrativ",
    (noun: Noun) => noun.isDemonstrative,
  ),
  NEGATED: new NounFilter("Negiert", (noun: Noun) => noun.isNegated),
  POSSESSIVE: new NounFilter(
    "Possessiv",
    (noun: Noun) => noun.possession !== undefined,
  ),
} as const;
