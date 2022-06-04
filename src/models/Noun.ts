import { Words } from './Words';
import { Attribute } from './Attribute';
import { Noun as SBNoun } from 'satzbau';
import { GrammaticalCase } from './GrammaticalCase'


export class Noun implements Words {

  wnoun: SBNoun;
  enoun: string;
  isSpecific = false;
  isPlural = false;
  case: GrammaticalCase;
	allAttributes: Attribute[];


  // TODO: colors: blue man, green neutral, red woman, black plural


  constructor(wnoun: SBNoun, enoun: string) {
    this.wnoun = wnoun;
    this.enoun = enoun;
    this.case = 'nominative';
		this.allAttributes = [];
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
    this.case = 'accusative';
    return this;
  }
	genitive(): Noun {
    this.case = 'genitive';
    return this;
  }
	dative(): Noun {
    this.case = 'dative';
    return this;
  }
	nominative(): Noun {
    this.case = 'nominative';
    return this;
  }

	attributes(attributes: Attribute[]) {
		this.allAttributes = attributes;
	}

  renderDE(): string {
    var rNoun = this.wnoun;
    if (this.isSpecific) {
      rNoun = rNoun.specific();
    } else {
      rNoun = rNoun.unspecific();
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
			rNoun = rNoun.attributes(this.allAttributes[0].deWord);
		}
    return rNoun.write();
  }

  renderEN() : string {
		var attribute = "";
		if (this.allAttributes && this.allAttributes.length > 0) {
			attribute = this.allAttributes[0].enWord + " ";
		}
		return (this.isSpecific ? "the " : "a ")
		  + attribute
      + this.enoun
      + (this.isPlural ? "s " : "")
      ;
  }

}
