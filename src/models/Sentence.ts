import { sentence } from 'satzbau';
import { Words } from './Words';
import { Noun } from './Noun';


export class Sentence implements Words {

  noun : Noun;
  templateDE: any;
  templateEN: any;

  constructor(noun: Noun, templateDE: any, templateEN: any) {
    this.noun = noun;

    const random = Math.floor((Math.random() * 100) + 1);
    console.log(random);

    if (random  < 30) {
      this.noun.specific();
    } else if (random  < 60) {
      this.noun.unspecific();
    } else {
      this.noun.negated();
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
