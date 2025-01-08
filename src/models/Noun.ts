import { Words } from "./Words";
import { Attribute } from "./Attribute";
import { noun, Noun as SBNoun } from "satzbau";
import { GrammaticalCase } from "./GrammaticalCase";
import { Gender } from "./Gender";
import { Person, Persons } from "./Person";

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
  negated(): Noun {
    this.isNegated = true;
    return this;
  }
  affirmed(): Noun {
    this.isNegated = false;
    return this;
  }
  possessed(p: Person) {
    this.unspecific();
    this.possession = p;
  }

  attributes(attributes: Attribute[]) {
    this.allAttributes = attributes;
  }

  posessionDE() {
    let stem = "";
    switch (this.possession) {
      case Persons.ME:
        stem = "mein";
        break;
      case Persons.YOU:
        stem = "dein";
        break;
      case Persons.HE:
        stem = "sein";
        break;
      case Persons.SHE:
        stem = "ihr";
        break;
      case Persons.IT:
        stem = "sein";
        break;
      case Persons.WE:
        stem = "unser";
        break;
      case Persons.YALL:
        stem = "eur";
        break;
      case Persons.THEY:
        stem = "ihr";
        break;
    }
    if (this.gender === "weiblich" || this.hasCount > 1) {
      stem = stem + "e";
    }
    if (this.case === "accusative") {
      if (this.hasCount > 1) {
        return stem;
      }
      switch (this.gender) {
        case "männlich":
          stem = stem + "en";
          break;
      }
    }
    if (this.case === "genitive") {
      if (this.hasCount > 1) {
        return stem + "es";
      }
      switch (this.gender) {
        case "männlich":
          stem = stem + "es";
          break;
        case "neutral":
          stem = stem + "es";
          break;
      }
    }
    if (this.case === "dative") {
      if (this.hasCount > 1) {
        return stem + "n";
      }
      switch (this.gender) {
        case "männlich":
        case "neutral":
          stem = stem + "em";
          break;
        case "weiblich":
          stem = stem + "r";
          break;
      }
    }
    if (this.possession === Persons.YALL && this.hasCount === 1) {
      if (this.case === "nominative" && this.gender !== "weiblich") {
        return "euer";
      }
      if (this.case === "accusative" && this.gender === "neutral") {
        return "euer";
      }
    }
    return stem;
  }

  renderHidden(): string {
    return "___";
  }

  renderHints(): string {
    return [
      this.isSpecific ? "spezifisch" : "",
      this.isNegated ? "negiert" : "",
      this.hasCount > 1 ? this.hasCount : "",
      this.wnoun
        .unspecific()
        .singular()
        .nominative()
        .write()
        .split(" ")
        .slice(1)
        .join(" "),
      this.possession ? this.renderPossessionHint(this.possession) : "",
      this.allAttributes
        ? this.allAttributes.map((x, _) => x.deWord).join(", ")
        : "",
    ]
      .filter(Boolean)
      .join(", ");
  }

  private renderPossessionHint(possession: Person): string {
    let result = possession.caseId + ". Person";
    result += " " + (possession.singular ? "Singular" : "Plural");
    if (possession.singular && possession.caseId == 3) {
      result += ", " + possession.gender;
    }
    return "possesiv(" + result + ")";
  }

  renderDE(): string {
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

    // colors: blue man, green neutral, red woman, black plural
    let gendercolor;
    if (this.isPlural()) {
      gendercolor = "black";
    } else {
      switch (this.gender) {
        case "männlich":
          gendercolor = "blue";
          break;
        case "weiblich":
          gendercolor = "red";
          break;
        case "neutral":
          gendercolor = "green";
          break;
        default:
          gendercolor = "black";
          break;
      }
    }
    let rendered = rNoun.write();
    if (this.possession !== undefined) {
      const possession = this.posessionDE();
      let noun = rendered;
      if (this.hasCount <= 1 && this.isSpecific === false) {
        noun = rendered.substr(rendered.indexOf(" ") + 1);
      }
      rendered = possession + " " + noun;
    }
    return '<font color="' + gendercolor + '">' + rendered + "</font>";
  }
}
