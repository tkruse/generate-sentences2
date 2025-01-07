import { Sentence } from "./Sentence";
import { Noun } from "./Noun";
// import { Pronoun } from "./Pronoun";
import { Attribute } from "./Attribute";
import { sentence } from "satzbau";
import { Person, AllPersons } from "./Person";

const materialNounsGenerator = [
  () => new Noun("das Haus,die Häuser,des Hauses"),
  () => new Noun("das Bett,-en,-es"),
  () => new Noun("das Bild,-er,-es"),
  () => new Noun("das Messer,-,-s"),
  () => new Noun("das Hemd,-en,-es"),
  () => new Noun("das Bier,-e,-es"),
  () => new Noun("der Tisch,-e,-es"),
  () => new Noun("der Teller,-,-s"),
  () => new Noun("der Koffer,-,-s"),
  () => new Noun("der Kuchen,-,-s"),
  () => new Noun("der Schuh,-e,-es"),
  () => new Noun("der Wein,-e,-es"),
  () => new Noun("die Lampe,-n,-n"),
  () => new Noun("die Tasse,-n,-"),
  () => new Noun("die Gabel,-n,-"),
  () => new Noun("die Socke,-n,-"),
  () => new Noun("die Soße,-n,-"),
];

// const pronounsGenerator = [
//   () => new Pronoun("ich", "mich", "mir"),
//   () => new Pronoun("du", "dich", "dir"),
//   () => new Pronoun("er", "sich", "ihm"),
//   () => new Pronoun("sie", "sich", "ihr"),
//   () => new Pronoun("wir", "uns", "uns"),
//   () => new Pronoun("ihr", "euch", "euch"),
//   () => new Pronoun("sie", "sich", "ihnen"),
// ];

const sentenceGenerators = [
  function (noun: Noun) {
    return new Sentence(
      noun,
      sentence`Ich habe hier ${noun.accusative().renderDE()}`,
      sentence`Ich habe hier ___`
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
      sentence`Er kauft ___`
    );
  },
  function (noun: Noun) {
    return new Sentence(
      noun,
      sentence`Das gehört zu ${noun.dative().renderDE()}`,
      sentence`Das gehört zu ___`
    );
  },
  function (noun: Noun) {
    return new Sentence(
      noun,
      sentence`Es ist schöner mit ${noun.dative().renderDE()}`,
      sentence`Es ist schöner mit ___`
    );
  },
  function (noun: Noun) {
    noun.affirmed();
    return new Sentence(
      noun,
      sentence`Ein Bild mit ${noun.dative().unspecific().renderDE()}`,
      sentence`Ein Bild mit ___`
    );
  },
  function (noun: Noun) {
    noun.affirmed();
    return new Sentence(
      noun,
      sentence`Ich sehe den Schatten ${noun.genitive().renderDE()}`,
      sentence`Ich sehe den Schatten ___`
    );
  },
  function (noun: Noun) {
    noun.affirmed();
    return new Sentence(
      noun,
      sentence`Sie senken den Preis ${noun.genitive().renderDE()}`,
      sentence`Sie senken den Preis ___`
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

const attributes = [
  new Attribute("klein"),
  new Attribute("neu"),
  new Attribute("schön"),
  new Attribute("billig"),
  new Attribute("leicht"),
  new Attribute("gut"),
  new Attribute("lustig"),
  new Attribute("eckig"),
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
      next.count(Math.floor(Math.random() * 4 + 1));
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
