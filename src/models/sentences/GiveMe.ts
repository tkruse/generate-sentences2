import { sentence } from 'satzbau';
import { Noun } from '../nouns/Noun';
import { Sentence } from './Sentence';



export class GiveMe implements Sentence {
  noun : Noun;
  constructor(noun: Noun) {
    this.noun = noun;
  }

  renderDE(): string {
    const sentenceDE = sentence`Gib mir ${this.noun.specific().renderDE()}`;
    return sentenceDE.write();
  }
  renderEN() : string {
    return "Give me " + this.noun.specific().renderEN();
  }
}
