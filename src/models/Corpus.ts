// @ts-nocheck // satzbau templates confuse TS
import { Sentence } from "./Sentence";
import { Noun } from "./Noun";

import { sentence } from "satzbau";
import { getRandomMaterialNoun } from "./corpus/Nouns";

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
  randomNoun(): Noun {
    const next = getRandomMaterialNoun();

    return next;
  }

  randomSentence(): Sentence {
    const noun = this.randomNoun();
    return sentenceGenerators[
      Math.floor(Math.random() * sentenceGenerators.length)
    ](noun);
  }
}
