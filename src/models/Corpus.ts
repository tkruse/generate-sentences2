import { Sentence } from './sentences/Sentence';
import { GiveMe } from './sentences/GiveMe';
import { ThisIsA } from './sentences/ThisIsA';
import { Noun } from './nouns/Noun';
import { Cat } from './nouns/Cat';
import { Key } from './nouns/Key';
import { Phone } from './nouns/Phone';

const nouns = [
    new Cat(),
    new Key(),
    new Phone()
  ];


export class Corpus {

  randomNoun(): Noun {
    return nouns[Math.floor(Math.random() * nouns.length)];
  }

  sentences() : any[] {
    return [
      GiveMe.create(this),
      ThisIsA.create(this)
    ];
  }
}
