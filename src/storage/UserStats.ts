import { Repetition } from "./Repetition";
import { Noun } from "../models/Noun";
import { GrammaticalCase } from "../models/GrammaticalCase";

export class UserStats {
  repPerDay: Map<string, Repetition[]>;

  constructor(repPerDay: Map<string, Repetition[]> = new Map()) {
    this.repPerDay = repPerDay;
  }

  summary(
    date: Date = new Date(),
    nounFilter?: (noun: Noun) => boolean,
  ): Record<string, any> {
    const dateString = date.toISOString().split("T")[0];
    let repetitions = [];
    if (!date) {
      repetitions = Array.from(this.repPerDay.values()).flat();
    } else {
      repetitions = this.repPerDay.get(dateString) ?? [];
    }
    if (!repetitions) {
      return {
        date: dateString,
        wrong: 0,
        weak: 0,
        strong: 0,
        total: 0,
      };
    }
    const nounFilterFn = nounFilter ?? (() => true);
    const filteredRepetitions = repetitions.filter((rep) =>
      nounFilterFn(rep.noun),
    );
    const total = filteredRepetitions.length;
    const wrong = filteredRepetitions.filter((rep) => rep.score < 0.3).length;
    const weak = filteredRepetitions.filter(
      (rep) => rep.score >= 0.3 && rep.score <= 0.7,
    ).length;
    const strong = filteredRepetitions.filter((rep) => rep.score > 0.7).length;

    return {
      date: dateString,
      wrong,
      weak,
      strong,
      total,
    };
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
