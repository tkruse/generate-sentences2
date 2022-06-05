import { Words } from "./Words";
import { Attribute } from "./Attribute";
import { noun, Noun as SBNoun } from "satzbau";
import { GrammaticalCase } from "./GrammaticalCase";
import { Gender } from "./Gender";

function parseGender(article: any): Gender {
  switch (article) {
    case "die":
      return "female";
    case "das":
      return "neutral";
    case "der":
      return "male";
    default:
      return "neutral";
  }
}

export class Noun implements Words {
  wnoun: SBNoun;
  enoun: string;
  isSpecific = false;
  isPlural = false;
  isNegated = false;
  case: GrammaticalCase;
  allAttributes: Attribute[];
  gender: Gender;

  // TODO: colors: blue man, green neutral, red woman, black plural

  constructor(sbNounTemplate: any, enoun: string) {
    this.wnoun = noun(sbNounTemplate);
    this.enoun = enoun;
    this.case = "nominative";
    this.allAttributes = [];
    this.gender = parseGender(
      sbNounTemplate.split(",")[0].trim().split(" ")[0].trim()
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

  plural(): Noun {
    this.isPlural = true;
    return this;
  }
  singular(): Noun {
    this.isPlural = false;
    return this;
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

  attributes(attributes: Attribute[]) {
    this.allAttributes = attributes;
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

    if (this.isPlural) {
      rNoun = rNoun.plural();
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

    return rNoun.write() + (" (" + this.gender[0] + ")");
  }

  renderEN(): string {
    let attribute = "";
    if (this.allAttributes && this.allAttributes.length > 0) {
      attribute = this.allAttributes.map((x) => x.enWord).join(", ") + " ";
    }

    let article = this.isPlural ? "" : "a";
    if (this.isNegated) {
      article = "no";
    } else if (this.isSpecific) {
      article = "the";
    }

    return article + " " + attribute + this.enoun + (this.isPlural ? "s" : "");
  }
}
