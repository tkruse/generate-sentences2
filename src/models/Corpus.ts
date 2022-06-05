import { Sentence } from './Sentence';
import { Noun } from './Noun';
import { Attribute } from './Attribute';
import { sentence } from 'satzbau';



const nouns = [
    new Noun('das Haus,-en,-es', "house"),
    new Noun('das Bett,-en,-es', "bed"),
    new Noun('das Bild,-er,-es', "picture"),
    new Noun('das Messer,-,-s', "knife"),
    new Noun('das Hemd,-en,-es', "shirt"),
    new Noun('der Tisch,-e,-es', "table"),
    new Noun('der Teller,-,-s', "plate"),
    new Noun('der Koffer,-,-s', "suitcase"),
    new Noun('der Kuchen,-,-s', "cake"),
    new Noun('der Schuh,-e,-es', "shoe"),
    new Noun('die Lampe,-n,-n', "lamp"),
    new Noun('die Tasse,-n,-', "cup"),
    new Noun('die Gabel,-n,-', "fork"),
    new Noun('die Socke,-n,-', "sock"),
  ];

const sentenceGenerators = [
  function(noun: Noun) {
    return new Sentence(
      noun,
      sentence `Ich finde ${noun.accusative().renderDE()}`,
      `I find ${noun.renderEN()}.`
    )},
  function(noun: Noun) {
    return new Sentence(
      noun,
      sentence `Du suchst ${noun.accusative().renderDE()}`,
      `You look for ${noun.renderEN()}.`
    )},
  function(noun: Noun) {
    return new Sentence(
      noun,
      sentence `Er kauft ${noun.accusative().renderDE()}`,
      `He buys ${noun.renderEN()}.`
    )},
  function(noun: Noun) {
    return new Sentence(
      noun,
      sentence `Ich helfe ${noun.dative().renderDE()}`,
      `I help ${noun.renderEN()}.`
    )},
  function(noun: Noun) {
    return new Sentence(
      noun,
      (sentence `Ich schlafe mit ${noun.dative().renderDE()}`),
      `I sleep with ${noun.renderEN()}.`
    )},
  function(noun: Noun) {
    return new Sentence(
      noun,
      (sentence `Du stehst auf ${noun.dative().renderDE()}`),
      `You stand on ${noun.renderEN()}.`
    )},
  function(noun: Noun) {
    const article = noun.isPlural ? "are" : "is";
    const pointer = noun.isPlural ? "These" : "This";
    return new Sentence(
      noun,
      sentence `Das ist ${noun.nominative().renderDE()}`,
      `${pointer} ${article} ${noun.renderEN()}.`
    )},
  function(noun: Noun) {
    return new Sentence(
      noun,
      sentence `Mein Geschenk war ${noun.nominative().renderDE()}`,
      `My gift was ${noun.renderEN()}.`
    )},
  function(noun: Noun) {
    return new Sentence(
      noun,
      sentence `Wo ist ${noun.nominative().renderDE()}`.ask(),
      `Where is ${noun.renderEN()}?`
    )}
];

const attributes = [
  new Attribute("klein", "small"),
  new Attribute("neu", "new"),
  new Attribute("schön", "nice"),
  new Attribute("schwarz", "black"),
  new Attribute("billig", "cheap"),
  new Attribute("leicht", "light")
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
    const newAttributes: Attribute[] = [];
    for (let i = 0; i < Math.floor(Math.random() * 3); i++) {
      const randomAttribute = attributes[Math.floor(Math.random() * attributes.length)]
      if (!newAttributes.includes(randomAttribute)) {
        newAttributes.push(randomAttribute);
      }
    }

    const random = Math.floor((Math.random() * 100) + 1);

    if (random  < 30) {
      next.specific();
    } else if (random  < 60) {
      next.unspecific();
    } else {
      next.negated();
    }

    next.attributes(newAttributes);
    return next;
  }

  randomSentence() : Sentence {
    const noun = this.randomNoun();
    return sentenceGenerators[Math.floor(Math.random() * sentenceGenerators.length)](noun);
  }
}
