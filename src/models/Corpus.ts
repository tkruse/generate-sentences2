// @ts-nocheck // satzbau templates confuse TS
import { Sentence } from "./Sentence";

import { sentence } from "satzbau";
import {
  getRandomMaterialNoun,
  getRandomPersonNoun,
  NounState,
} from "./corpus/Nouns";
import { GrammaticalCase } from "./GrammaticalCase";

const sentenceGenerators = [
  function (options: any) {
    return new Sentence(
      getRandomPersonNoun(options).affirmed(),
      sentence`Das klingt wie ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomPersonNoun(options),
      sentence`In dem Zimmer wohnt ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomPersonNoun(options).affirmed().dative(),
      sentence`Ein Frühstück mit ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomPersonNoun(options).affirmed().dative(),
      sentence`Ein Foto von ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomPersonNoun(options).dative(),
      sentence`Wir schenken das ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomPersonNoun(options).accusative(),
      sentence`Ich kenne ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomPersonNoun(options).accusative(),
      sentence`Wir vermissen ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomPersonNoun(options).affirmed().accusative(),
      sentence`Ein Geschenk für ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomPersonNoun(options).affirmed().genitive(),
      sentence`Die Augen ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomPersonNoun(options).affirmed().genitive(),
      sentence`Das Zimmer ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomMaterialNoun(options).affirmed(),
      sentence`So schwer wie ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomMaterialNoun(options).affirmed(),
      sentence`Das fühlt sich an wie ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomMaterialNoun(options).accusative(),
      sentence`Ich habe hier ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomMaterialNoun(options).affirmed().accusative(),
      sentence`Ein Buch über ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomMaterialNoun(options).accusative(),
      sentence`Er kauft ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomMaterialNoun(options).accusative(),
      sentence`Dort findet man ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomMaterialNoun(options).affirmed().dative(),
      sentence`Das gehört zu ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomMaterialNoun(options).affirmed().dative(),
      sentence`Der Name von ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomMaterialNoun(options).affirmed().dative(),
      sentence`Ein Bild mit ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomMaterialNoun(options).affirmed().genitive(),
      sentence`Ich sehe den Schatten ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomMaterialNoun(options).genitive(),
      sentence`Sie senken den Preis ${({ noun }) => noun}`,
    );
  },
];

export class Corpus {
  randomSentence(options: {
    attributeMaxCount: number;
    minimum: number;
    maximum: number;
    allowedStates: NounState[];
    allowedGrammaticalCases: GrammaticalCase[];
  }): Sentence {
    const { allowedGrammaticalCases = [GrammaticalCase.Nominative] } = options;
    let s: Sentence;
    do {
      s =
        sentenceGenerators[
          Math.floor(Math.random() * sentenceGenerators.length)
        ](options);
    } while (
      allowedGrammaticalCases.length > 0 &&
      !allowedGrammaticalCases.includes(s.noun.getCase())
    );
    return s;
  }
}
