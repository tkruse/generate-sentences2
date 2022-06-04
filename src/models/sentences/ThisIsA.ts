import { sentence } from 'satzbau';
import { Noun } from '../nouns/Noun';
import { Sentence } from './Sentence';
import { Corpus } from '../Corpus';



export class ThisIsA implements Sentence {
  noun : Noun;
  constructor(noun: Noun) {
    this.noun = noun;
  }

  static create(corpus: Corpus) : Sentence {
    return new ThisIsA(corpus.randomNoun());
  }

  renderDE(): string {
    const sentenceDE = sentence`Das ist ${this.noun.nominative().unspecific().renderDE()}`;
    return sentenceDE.write();
  }
  renderEN() : string {
    return "This is " + this.noun.unspecific().renderEN();
  }
}
