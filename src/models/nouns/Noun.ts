import { Words } from '../Words';
import { Noun as SBNoun } from 'satzbau';

type GrammaticalCase =
	| 'nominative'
	| 'accusative'
	| 'dative'
	| 'genitive';

export class Noun implements Words {

  wnoun: SBNoun;
  enoun: string;
  isSpecific = false;
  isPlural = false;
  case: GrammaticalCase;


  constructor(wnoun: SBNoun, enoun: string) {
    this.wnoun = wnoun;
    this.enoun = enoun;
    this.case = 'nominative';
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
    return rNoun.write();
  }
  renderEN() : string {
    return (this.isSpecific ? "the " : "a ")
      + this.enoun
      + (this.isPlural ? "s " : "")
      ;
  }

}
