import { Words } from "./Words";
import { Attribute } from "./Attribute";
import { noun, Noun as SBNoun } from "satzbau";
import { GrammaticalCase } from "./GrammaticalCase";
import { Gender } from "./Gender";
import { NounCategory } from "./NounCategory";
import { Person, posessionDE } from "./Person";
import { renderColorizedByGender } from "./Coloring";

function parseGender(article: any): Gender {
  switch (article) {
    case "die":
      return "weiblich";
    case "das":
      return "neutral";
    case "der":
      return "männlich";
    default:
      return "neutral";
  }
}

export class Noun implements Words {
  wnoun: SBNoun;
  isDemonstrative = false;
  isSpecific = false;
  hasCount = 1;
  isNegated = false;
  case: GrammaticalCase;
  allAttributes: Attribute[];
  gender: Gender;
  possession?: Person;
  categories: NounCategory[];

  // create noun from a SB string template(indicativ, plural, genitiv) and an optional vararg set of NounCategory
  constructor(sbNounTemplate: any, ...categories: NounCategory[]) {
    this.wnoun = noun(sbNounTemplate);
    this.case = GrammaticalCase.Nominative;
    this.allAttributes = [];
    this.gender = parseGender(
      sbNounTemplate.split(",")[0].trim().split(" ")[0].trim(),
    );
    this.categories = categories;
  }

  getCategories(): NounCategory[] {
    return this.categories;
  }

  specific(): Noun {
    this.isSpecific = true;
    return this;
  }
  unspecific(): Noun {
    this.isSpecific = false;
    this.isDemonstrative = false;
    return this;
  }
  demonstrative(): Noun {
    this.isSpecific = true;
    this.isDemonstrative = true;
    return this;
  }

  count(count: number): Noun {
    this.hasCount = count;
    return this;
  }
  public isPlural(): boolean {
    return this.hasCount > 1;
  }
  accusative(): Noun {
    this.case = GrammaticalCase.Accusative;
    return this;
  }
  genitive(): Noun {
    this.case = GrammaticalCase.Genitive;
    return this;
  }
  dative(): Noun {
    this.case = GrammaticalCase.Dative;
    return this;
  }
  nominative(): Noun {
    this.case = GrammaticalCase.Nominative;
    return this;
  }
  getCase(): GrammaticalCase {
    return this.case;
  }

  negated(): Noun {
    this.isNegated = true;
    return this;
  }
  affirmed(): Noun {
    this.isNegated = false;
    return this;
  }

  possessed(p: Person): Noun {
    this.unspecific();
    this.possession = p;
    return this;
  }

  attributes(attributes: Attribute[]) {
    this.allAttributes = attributes;
  }

  renderHidden(): string {
    return "___";
  }

  renderHints(): string {
    return [
      this.isNegated ? "kein*" : "",
      this.isDemonstrative ? "diese*" : this.isSpecific ? "de*/die/das" : "",
      this.possession ? this.renderPossessionHint(this.possession) : "",
      this.hasCount > 1 ? this.hasCount : "",
      this.wnoun
        .unspecific()
        .singular()
        .nominative()
        .write()
        .split(" ")
        .slice(1)
        .join(" "),
      this.allAttributes
        ? this.allAttributes.map((x, _) => x.deWord).join(", ")
        : "",
    ]
      .filter(Boolean)
      .join(", ");
  }

  private renderPossessionHint(possession: Person): string {
    //         let result = possession.caseId + ". Person";
    //         result += " " + (possession.singular ? "Singular" : "Plural");
    //         if (possession.singular && possession.caseId == 3) {
    //           result += ", " + possession.gender;
    //         }
    let result = possession.pronouns().nominative();
    if (
      possession.caseId == 3 &&
      (!possession.singular || possession.gender == "weiblich")
    ) {
      result += " " + (possession.singular ? "Singular" : "Plural");
    }

    return "mein*(" + result + ")";
  }

  private demonstrativeArticle(): string {
    if (this.case === GrammaticalCase.Nominative) {
      if (this.isPlural()) {
        return "diese";
      }
      if (this.gender === "männlich") {
        return "dieser";
      }
      if (this.gender === "weiblich") {
        return "diese";
      }
      if (this.gender === "neutral") {
        return "dieses";
      }
    } else if (this.case === GrammaticalCase.Accusative) {
      if (this.isPlural()) {
        return "diese";
      }
      if (this.gender === "männlich") {
        return "diesen";
      }
      if (this.gender === "weiblich") {
        return "diese";
      }
      if (this.gender === "neutral") {
        return "dieses";
      }
    } else if (this.case === GrammaticalCase.Dative) {
      if (this.isPlural()) {
        return "diesen";
      }
      if (this.gender === "männlich") {
        return "diesem";
      }
      if (this.gender === "weiblich") {
        return "dieser";
      }
      if (this.gender === "neutral") {
        return "diesem";
      }
    } else if (this.case === GrammaticalCase.Genitive) {
      if (this.isPlural()) {
        return "dieser";
      }
      if (this.gender === "männlich") {
        return "dieses";
      }
      if (this.gender === "weiblich") {
        return "dieser";
      }
      if (this.gender === "neutral") {
        return "dieses";
      }
    }
    return "error";
  }

  renderDE(colorize: boolean = true): string {
    let rNoun = this.wnoun;
    if (this.isNegated) {
      rNoun = rNoun.negated();
    } else if (this.isSpecific) {
      rNoun = rNoun.specific();
    } else {
      rNoun = rNoun.unspecific();
    }

    if (this.isPlural()) {
      rNoun = rNoun.count(this.hasCount).plural();
    } else {
      rNoun = rNoun.singular();
    }

    if (this.case === GrammaticalCase.Nominative) {
      rNoun = rNoun.nominative();
    } else if (this.case === GrammaticalCase.Accusative) {
      rNoun = rNoun.accusative();
    } else if (this.case === GrammaticalCase.Dative) {
      rNoun = rNoun.dative();
    } else if (this.case === GrammaticalCase.Genitive) {
      rNoun = rNoun.genitive();
    }
    if (this.allAttributes && this.allAttributes.length > 0) {
      rNoun = rNoun.attributes(...this.allAttributes.map((x, _) => x.deWord));
    }

    let rendered = rNoun.write();
    let articleReplacement = undefined;

    if (this.possession !== undefined) {
      articleReplacement = posessionDE(
        this.possession,
        this.gender,
        this.hasCount,
        this.case,
      );
    } else if (this.isDemonstrative) {
      articleReplacement = this.demonstrativeArticle();
    }
    if (articleReplacement) {
      let noun = rendered;
      if (this.isSpecific || this.hasCount <= 1) {
        noun = rendered.slice(rendered.indexOf(" ") + 1);
      }
      rendered = articleReplacement + " " + noun;
    }

    return colorize ? renderColorizedByGender(this.gender, rendered) : rendered;
  }
}
