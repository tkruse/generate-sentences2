import { sentence } from 'satzbau';
import { Words } from './Words';
import { Noun } from './Noun';


export class Sentence implements Words {

  noun : Noun;
  templateDE: any;
  templateEN: any;

  constructor(noun: Noun, templateDE: any, templateEN: any) {
    this.noun = noun;

    if (Math.floor((Math.random() * 100) + 1) > 50) {
      this.noun.specific();
    } else {
      this.noun.unspecific();
    }
    this.templateDE = templateDE;
    this.templateEN = templateEN;
  }

  renderDE(): string {
    return this.templateDE.write();
  }

  renderEN() : string {
    return this.templateEN;
  }
}
