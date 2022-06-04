import { sentence } from 'satzbau';
import { Noun } from '../nouns/Noun';
import { Sentence } from './Sentence';



export class ThisIsA implements Sentence {
  noun : Noun;
  constructor(noun: Noun) {
    this.noun = noun;
  }

  renderDE(): string {
    const sentenceDE = sentence`Das ist {noun.unspecific()}`;
    return sentenceDE.write();
  }
  renderEN() : string {
    return "this is " + this.noun.renderEN();
  }
}
