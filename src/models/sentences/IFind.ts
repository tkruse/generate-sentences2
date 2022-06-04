import { sentence } from 'satzbau';
import { Noun } from '../nouns/Noun';
import { Sentence } from './Sentence';
import { Corpus } from '../Corpus';

export class IFind implements Sentence {
  noun : Noun;
  constructor(noun: Noun) {
    this.noun = noun;
  }

  static create(corpus: Corpus) : Sentence {
    return new IFind(corpus.randomNoun());
  }

  renderDE(): string {
    const sentenceDE = sentence`Ich finde ${this.noun.specific().accusative().renderDE()}`;
    return sentenceDE.write();
  }
  renderEN() : string {
    return "I find " + this.noun.specific().renderEN();
  }
}
