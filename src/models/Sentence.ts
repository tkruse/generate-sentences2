import { sentence } from 'satzbau';
import { Words } from './Words';
import { Noun } from './Noun';


export class Sentence implements Words {

  noun : Noun;
  templateDE: any;
  templateEN: any;

  constructor(noun: Noun, templateDE: any, templateEN: any) {
    this.noun = noun;

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
