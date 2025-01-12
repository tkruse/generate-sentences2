import { Sentence } from "./Sentence";
import { Noun } from "./Noun";

import { Attribute } from "./Attribute";
import { sentence } from "satzbau";
import { Person, AllPersons } from "./Person";
import { materialNounsGenerator } from "./corpus/Nouns";
import { attributes } from "./corpus/Adjectives";

const sentenceGenerators = [
  function (noun: Noun) {
    return new Sentence(
      noun,
      sentence`Ich habe hier ${noun.accusative().renderDE()}`,
      sentence`Ich habe hier ___`,
    );
  },
  // function (noun: Noun) {
  //   return new Sentence(
  //     noun,
  //     sentence`Du hast ${noun.accusative().renderDE()}`,
  //     `You have ${noun.renderEN()}.`
  //   );
  // },
  function (noun: Noun) {
    return new Sentence(
      noun,
      sentence`Er kauft ${noun.accusative().renderDE()}`,
      sentence`Er kauft ___`,
    );
  },
  function (noun: Noun) {
    return new Sentence(
      noun,
      sentence`Das gehört zu ${noun.dative().renderDE()}`,
      sentence`Das gehört zu ___`,
    );
  },
  function (noun: Noun) {
    return new Sentence(
      noun,
      sentence`Der Name von ${noun.dative().renderDE()}`,
      sentence`Der Name von ___`,
    );
  },
  function (noun: Noun) {
    noun.affirmed();
    return new Sentence(
      noun,
      sentence`Ein Bild mit ${noun.dative().unspecific().renderDE()}`,
      sentence`Ein Bild mit ___`,
    );
  },
  function (noun: Noun) {
    noun.affirmed();
    return new Sentence(
      noun,
      sentence`Ich sehe den Schatten ${noun.genitive().renderDE()}`,
      sentence`Ich sehe den Schatten ___`,
    );
  },
  function (noun: Noun) {
    noun.affirmed();
    return new Sentence(
      noun,
      sentence`Sie senken den Preis ${noun.genitive().renderDE()}`,
      sentence`Sie senken den Preis ___`,
    );
  },
  // function (noun: Noun) {
  //   const articleEN = noun.isPlural() ? "are" : "is";
  //   const articleDE = noun.isPlural() ? "sind" : "ist";
  //   const pointerEN = noun.isPlural() ? "These" : "This";
  //   return new Sentence(
  //     noun,
  //     sentence`Das ${articleDE} ${noun.nominative().renderDE()}`,
  //     `${pointerEN} ${articleEN} ${noun.renderEN()}.`
  //   );
  // },
  // function (noun: Noun) {
  //   const articleEN = noun.isPlural() ? "were" : "was";
  //   const articleDE = noun.isPlural() ? "waren" : "war";
  //   return new Sentence(
  //     noun,
  //     sentence`Mein Geschenk ${articleDE} ${noun.nominative().renderDE()}`,
  //     `My gift ${articleEN} ${noun.renderEN()}.`
  //   );
  // },
  // function (noun: Noun) {
  //   const articleEN = noun.isPlural() ? "are" : "is";
  //   const articleDE = noun.isPlural() ? "sind" : "ist";
  //   return new Sentence(
  //     noun,
  //     sentence`Wo ${articleDE} ${noun.nominative().renderDE()}`.ask(),
  //     `Where ${articleEN} ${noun.renderEN()}?`
  //   );
  // },
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
