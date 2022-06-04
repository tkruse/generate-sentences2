import { sentence } from 'satzbau';
import { Noun } from '../nouns/Noun';
import { Sentence } from './Sentence';
import { Corpus } from '../Corpus';



export class IHelp implements Sentence {
  noun : Noun;
  constructor(noun: Noun) {
    this.noun = noun;
  }

  static create(corpus: Corpus) : Sentence {
    return new IHelp(corpus.randomNoun());
  }

  renderDE(): string {
    const sentenceDE = sentence`Ich helfe ${this.noun.unspecific().dative().renderDE()}`;
    return sentenceDE.write();
  }
  renderEN() : string {
    return "I help " + this.noun.unspecific().renderEN();
  }
}
