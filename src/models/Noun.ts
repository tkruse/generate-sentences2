import { Words } from "./Words";
import { Attribute } from "./Attribute";
import { noun, Noun as SBNoun } from "satzbau";
import { GrammaticalCase } from "./GrammaticalCase";
import { Gender } from "./Gender";
import { Person } from "./Person";
import { renderColorizedByGender } from "./Coloring";
import { posessionDE } from "./Person";

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
  isSpecific = false;
  hasCount = 1;
  isNegated = false;
  case: GrammaticalCase;
  allAttributes: Attribute[];
  gender: Gender;
  possession?: Person;

  constructor(sbNounTemplate: any) {
    this.wnoun = noun(sbNounTemplate);
    this.case = "nominative";
    this.allAttributes = [];
    this.gender = parseGender(
      sbNounTemplate.split(",")[0].trim().split(" ")[0].trim(),
    );
  }

  specific(): Noun {
    this.isSpecific = true;
    return this;
  }
  unspecific(): Noun {
    this.isSpecific = false;
    return this;
  }

  count(count: number): Noun {
    this.hasCount = count;
    return this;
  }
  isPlural(): boolean {
    return this.hasCount > 1;
  }
  accusative(): Noun {
    this.case = "accusative";
    return this;
  }
  genitive(): Noun {
    this.case = "genitive";
    return this;
  }
  dative(): Noun {
    this.case = "dative";
    return this;
  }
  nominative(): Noun {
    this.case = "nominative";
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
      this.isSpecific ? "spezifisch" : "",
      this.isNegated ? "negiert" : "",
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

    return "possesiv(" + result + ")";
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

    if (this.case === "nominative") {
      rNoun = rNoun.nominative();
    } else if (this.case === "accusative") {
      rNoun = rNoun.accusative();
    } else if (this.case === "dative") {
      rNoun = rNoun.dative();
    } else if (this.case === "genitive") {
      rNoun = rNoun.genitive();
    }
    if (this.allAttributes && this.allAttributes.length > 0) {
      rNoun = rNoun.attributes(...this.allAttributes.map((x, _) => x.deWord));
    }

    let rendered = rNoun.write();
    if (this.possession !== undefined) {
      const possessionRendered = posessionDE(
        this.possession,
        this.gender,
        this.hasCount,
        this.case,
      );
      let noun = rendered;
      if (this.hasCount <= 1 && this.isSpecific === false) {
        noun = rendered.slice(rendered.indexOf(" ") + 1);
      }
      rendered = possessionRendered + " " + noun;
    }

    return colorize ? renderColorizedByGender(this.gender, rendered) : rendered;
  }
}
