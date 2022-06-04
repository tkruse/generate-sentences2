import { Sentence } from './sentences/Sentence';
import { IFind } from './sentences/IFind';
import { ThisIsA } from './sentences/ThisIsA';
import { IHelp } from './sentences/IHelp';
import { Noun } from './nouns/Noun';
import { Cat } from './nouns/Cat';
import { Key } from './nouns/Key';
import { Phone } from './nouns/Phone';

const nouns = [
    new Cat(),
    new Key(),
    new Phone()
  ];

const sentenceGenerators = [
  IFind.create,
  ThisIsA.create,
  IHelp.create
];


export class Corpus {

  randomNoun(): Noun {
    const next = nouns[Math.floor(Math.random() * nouns.length)];
    // if (Math.floor((Math.random() * 100) + 1) > 20) {
    //   next.plural();
    // } else {
    //   next.singular();
    // }
    return next;
  }

  randomSentence() : Sentence {
    return sentenceGenerators[Math.floor(Math.random() * sentenceGenerators.length)](this);
  }
}
