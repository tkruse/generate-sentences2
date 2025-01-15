// @ts-nocheck // satzbau templates confuse TS
import { Sentence } from "./Sentence";
import { Noun } from "./Noun";

import { sentence } from "satzbau";
import { getRandomMaterialNoun, NounState } from "./corpus/Nouns";

const sentenceGenerators = [
  function (nounMain: Noun) {
    return new Sentence(
      nounMain.accusative(),
      sentence`Ich habe hier ${({ noun }) => noun}`,
    );
  },
  function (nounMain: Noun) {
    return new Sentence(
      nounMain.accusative(),
      sentence`Er kauft ${({ noun }) => noun}`,
    );
  },
  function (nounMain: Noun) {
    return new Sentence(
      nounMain.dative(),
      sentence`Das gehört zu ${({ noun }) => noun}`,
    );
  },
  function (nounMain: Noun) {
    return new Sentence(
      nounMain.dative(),
      sentence`Der Name von ${({ noun }) => noun}`,
    );
  },
  function (nounMain: Noun) {
    return new Sentence(
      nounMain.affirmed().dative(),
      sentence`Ein Bild mit ${({ noun }) => noun}`,
    );
  },
  function (nounMain: Noun) {
    return new Sentence(
      nounMain.affirmed().genitive(),
      sentence`Ich sehe den Schatten ${({ noun }) => noun}`,
    );
  },
  function (nounMain: Noun) {
    return new Sentence(
      nounMain.genitive(),
      sentence`Sie senken den Preis ${({ noun }) => noun}`,
    );
  },
];

export class Corpus {
  randomNoun(options: {
    attributeMaxCount: number;
    minimum: number;
    maximum: number;
    allowedStates: NounState[];
  }): Noun {
    const { attributeMaxCount, minimum, maximum, allowedStates } = options;
    const next = getRandomMaterialNoun(
      attributeMaxCount,
      minimum,
      maximum,
      allowedStates,
    );
    return next;
  }

  randomSentence(options: {
    attributeMaxCount: number;
    minimum: number;
    maximum: number;
    allowedStates: NounState[];
  }): Sentence {
    const noun = this.randomNoun(options);
    return sentenceGenerators[
      Math.floor(Math.random() * sentenceGenerators.length)
    ](noun);
  }
}
