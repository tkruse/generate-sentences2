import { Sentence } from './sentences/Sentence';
import { IFind } from './sentences/IFind';
import { ThisIsA } from './sentences/ThisIsA';
import { IHelp } from './sentences/IHelp';
import { Noun } from './Noun';
import { Attribute } from './Attribute';
import { noun } from 'satzbau';

const nouns = [
    new Noun(noun('das Bett,-en,-es'), "bed"),
    new Noun(noun('der Tisch,-e,-es'), "table"),
    new Noun(noun('die Lampe,-n,-'), "lamp")
  ];

const sentenceGenerators = [
  IFind.create,
  ThisIsA.create,
  IHelp.create
];

const attributes = [
  new Attribute("klein", "small"),
  new Attribute("neu", "new")
];


export class Corpus {

  randomNoun(): Noun {
    const next = nouns[Math.floor(Math.random() * nouns.length)];
    // if (Math.floor((Math.random() * 100) + 1) > 20) {
    //   next.plural();
    // } else {
    //   next.singular();
    // }

    next.attributes([attributes[Math.floor(Math.random() * attributes.length)]])
    // console.log(next);
    return next;
  }



  randomSentence() : Sentence {
    return sentenceGenerators[Math.floor(Math.random() * sentenceGenerators.length)](this);
  }
}
