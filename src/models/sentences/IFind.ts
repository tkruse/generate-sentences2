import { sentence } from 'satzbau';
import { Noun } from '../Noun';
import { Sentence } from './Sentence';
import { Corpus } from '../Corpus';

export class IFind implements Sentence {
  noun : Noun;
  constructor(noun: Noun) {
    this.noun = noun;
    if (Math.floor((Math.random() * 100) + 1) > 50) {
      this.noun.specific();
    } else {
      this.noun.unspecific();
    }
  }

  static create(corpus: Corpus) : Sentence {
    return new IFind(corpus.randomNoun());
  }

  renderDE(): string {
    const sentenceDE = sentence`Ich finde ${this.noun.accusative().renderDE()}`;
    return sentenceDE.write();
  }
  renderEN() : string {
    return "I find " + this.noun.renderEN();
  }
}
