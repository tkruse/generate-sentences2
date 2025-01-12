// @ts-nocheck // satzbau templates confuse TS
import { Sentence } from "./Sentence";
import { Noun } from "./Noun";

import { Attribute } from "./Attribute";
import { sentence } from "satzbau";
import { Person, AllPersons } from "./Person";
import { materialNounsGenerator } from "./corpus/Nouns";
import { attributes } from "./corpus/Adjectives";

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
    nounMain.affirmed();
    return new Sentence(
      nounMain.dative(),
      sentence`Ein Bild mit ${({ noun }) => noun}`,
    );
  },
  function (nounMain: Noun) {
    nounMain.affirmed();
    return new Sentence(
      nounMain.genitive(),
      sentence`Ich sehe den Schatten ${({ noun }) => noun}`,
    );
  },
  function (nounMain: Noun) {
    nounMain.affirmed();
    return new Sentence(
      nounMain.genitive(),
      sentence`Sie senken den Preis ${({ noun }) => noun}`,
    );
  },
];

export class Corpus {
  randomNoun(): Noun {
    const next =
      materialNounsGenerator[
        Math.floor(Math.random() * materialNounsGenerator.length)
      ]();

    const newAttributes: Attribute[] = [];
    for (let i = 0; i < Math.floor(Math.random() * 4); i++) {
      const randomAttribute =
        attributes[Math.floor(Math.random() * attributes.length)];
      if (!newAttributes.includes(randomAttribute)) {
        newAttributes.push(randomAttribute);
      }
    }

    const isPlural = Math.floor(Math.random() * 100 + 1) > 80;
    // Adjectives buggy for plural
    if (isPlural) {
      next.count(Math.floor(Math.random() * 3 + 1));
    } else {
      next.count(1);
    }

    const random = Math.floor(Math.random() * 100 + 1);
    // unspecific plural is bugged in satzbau https://github.com/TimoBechtel/satzbau/pull/1
    if (random < 25 || isPlural) {
      next.specific();
    } else if (random < 50) {
      next.unspecific();
    } else if (random < 75) {
      next.negated();
    } else {
      next.possessed(this.randomPerson());
    }

    next.attributes(newAttributes);
    return next;
  }

  randomSentence(): Sentence {
    const noun = this.randomNoun();
    return sentenceGenerators[
      Math.floor(Math.random() * sentenceGenerators.length)
    ](noun);
  }

  randomPerson(): Person {
    return AllPersons[Math.floor(Math.random() * AllPersons.length)];
  }
}
