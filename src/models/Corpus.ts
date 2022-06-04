import { Sentence } from './Sentence';
import { Noun } from './Noun';
import { Attribute } from './Attribute';
import { GrammaticalCase } from './GrammaticalCase'
import { noun, sentence } from 'satzbau';



const nouns = [
    new Noun(noun('das Bett,-en,-es'), "bed"),
    new Noun(noun('das Haus,-en,-es'), "house"),
    new Noun(noun('der Tisch,-e,-es'), "table"),
    new Noun(noun('der Koffer,-,-s'), "suitcase"),
    new Noun(noun('die Lampe,-n,-n'), "lamp"),
    new Noun(noun('die Tasse,-n,-'), "cup")
  ];

const sentenceGenerators = [
  function(noun: Noun) {
    return new Sentence(
      noun,
      sentence`Ich finde ${noun.accusative().renderDE()}`,
      `I find ${noun.renderEN()}.`
    )},
  function(noun: Noun) {
    return new Sentence(
      noun,
      sentence `Ich helfe ${noun.dative().renderDE()}`,
      `I help ${noun.renderEN()}.`
    )},
  function(noun: Noun) {
    const article = noun.isPlural ? "are" : "is";
    const pointer = noun.isPlural ? "These" : "This";
    return new Sentence(
      noun,
      sentence `Das ist ${noun.nominative().renderDE()}`,
      `${pointer} ${article} ${noun.renderEN()}.`
    )}
];

const attributes = [
  new Attribute("klein", "small"),
  new Attribute("neu", "new"),
  new Attribute("schön", "nice"),
  new Attribute("schwarz", "black"),
];


export class Corpus {

  randomNoun(): Noun {
    const next = nouns[Math.floor(Math.random() * nouns.length)];
    // Adjectives buggy for plural
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
    const noun = this.randomNoun();
    return sentenceGenerators[Math.floor(Math.random() * sentenceGenerators.length)](noun);
  }
}
