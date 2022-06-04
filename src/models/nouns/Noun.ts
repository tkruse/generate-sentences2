import { Words } from '../Words';
import { Noun as SBNoun } from 'satzbau';

export class Noun implements Words {

  wnoun: SBNoun;
  enoun: string;
  isSpecific = false;

  constructor(wnoun: SBNoun, enoun: string) {
    this.wnoun = wnoun;
    this.enoun = enoun;
  }

  specific(): Noun {
    this.isSpecific = true;
    return this;
  }
  unspecific(): Noun {
    this.isSpecific = false;
    return this;
  }
  renderDE(): string {
    var rNoun = this.wnoun;
    if (this.isSpecific) {
      rNoun = rNoun.specific();
    } else {
      rNoun = rNoun.unspecific();
    }
    return rNoun.write();
  }
  renderEN() : string {
    return (this.isSpecific ? "the " : "a ") + this.enoun;
  }

}
