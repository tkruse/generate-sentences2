import { Words } from "./Words";
import { Attribute } from "./Attribute";
import { noun, Noun as SBNoun } from "satzbau";
import { GrammaticalCase } from "./GrammaticalCase";
import { Gender } from "./Gender";
import { Person, Persons } from "./Person";

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

function numberEn(n: number): string {
  const abs = Math.abs(n);
  return (
    (n < 0 ? "minus " : "") +
    (simpleNumberMapEN.get(abs) || (abs + "").replace(".", ","))
  );
}

const simpleNumberMapEN = new Map<number, string>();
simpleNumberMapEN.set(2, "two");
simpleNumberMapEN.set(3, "three");
simpleNumberMapEN.set(4, "four");
simpleNumberMapEN.set(5, "five");
simpleNumberMapEN.set(6, "six");
simpleNumberMapEN.set(7, "seven");
simpleNumberMapEN.set(8, "eight");
simpleNumberMapEN.set(9, "nine");
simpleNumberMapEN.set(10, "ten");

export class Noun implements Words {
  wnoun: SBNoun;
  enoun: string;
  isSpecific = false;
  hasCount = 1;
  isNegated = false;
  case: GrammaticalCase;
  allAttributes: Attribute[];
  gender: Gender;
  possession?: Person;

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
    if (this.gender === "female" || this.hasCount > 1) {
      stem = stem + "e";
    }
    if (this.case === "accusative") {
      if (this.hasCount > 1) {
        return stem;
      }
      switch (this.gender) {
        case "male":
          stem = stem + "en";
          break;
      }
    }
    if (this.case === "dative") {
      if (this.hasCount > 1) {
        return stem + "n";
      }
      switch (this.gender) {
        case "male":
        case "neutral":
          stem = stem + "em";
          break;
        case "female":
          stem = stem + "r";
          break;
      }
    }
    if (this.possession === Persons.YALL && this.hasCount === 1) {
      if (this.case === "nominative" && this.gender !== "female") {
        return "euer";
      }
      if (this.case === "accusative" && this.gender === "neutral") {
        return "euer";
      }
    }
    return stem;
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
        case "male":
          gendercolor = "blue";
          break;
        case "female":
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

  renderEN(): string {
    let attribute = "";
    if (this.allAttributes && this.allAttributes.length > 0) {
      attribute = this.allAttributes.map((x) => x.enWord).join(", ") + " ";
    }

    let article = this.isPlural() ? "" : "a";
    if (this.isNegated) {
      article = "no";
    } else if (this.isSpecific) {
      article = "the";
    }

    if (this.possession !== undefined) {
      switch (this.possession) {
        case Persons.ME:
          article = "my";
          break;
        case Persons.YOU:
          article = "your";
          break;
        case Persons.HE:
          article = "his";
          break;
        case Persons.SHE:
          article = "her";
          break;
        case Persons.IT:
          article = "its";
          break;
        case Persons.WE:
          article = "our";
          break;
        case Persons.YALL:
          article = "y'alls";
          break;
        case Persons.THEY:
          article = "their";
          break;
      }
    }

    let count = "";
    if (this.isPlural()) {
      count = numberEn(this.hasCount) + " ";
    }

    return (
      article +
      " " +
      count +
      attribute +
      this.enoun +
      (this.isPlural() ? "s" : "")
    );
  }
}
