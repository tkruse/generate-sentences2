import { Sentence } from "./Sentence";
import { Noun } from "./Noun";
// import { Pronoun } from "./Pronoun";
import { Attribute } from "./Attribute";
import { sentence } from "satzbau";
import { Person, AllPersons } from "./Person";

const nounsGenerator = [
  () => new Noun("das Haus,die Häuser,des Hauses", "house"),
  () => new Noun("das Bett,-en,-es", "bed"),
  () => new Noun("das Bild,-er,-es", "picture"),
  () => new Noun("das Messer,-,-s", "knife"),
  () => new Noun("das Hemd,-en,-es", "shirt"),
  () => new Noun("das Bier,-e,-e", "beer"),
  () => new Noun("der Tisch,-e,-es", "table"),
  () => new Noun("der Teller,-,-s", "plate"),
  () => new Noun("der Koffer,-,-s", "suitcase"),
  () => new Noun("der Kuchen,-,-s", "cake"),
  () => new Noun("der Schuh,-e,-es", "shoe"),
  () => new Noun("der Wein,-e,-es", "wine"),
  () => new Noun("die Lampe,-n,-n", "lamp"),
  () => new Noun("die Tasse,-n,-", "cup"),
  () => new Noun("die Gabel,-n,-", "fork"),
  () => new Noun("die Socke,-n,-", "sock"),
  () => new Noun("die Soße,-n,-", "sauce"),
];

// const pronounsGenerator = [
//   () => new Pronoun("ich", "mich", "mir", "I", "me"),
//   () => new Pronoun("du", "dich", "dir", "you", "you"),
//   () => new Pronoun("er", "sich", "ihm", "he", "him"),
//   () => new Pronoun("sie", "sich", "ihr", "she", "her"),
//   () => new Pronoun("wir", "uns", "uns", "we", "us"),
//   () => new Pronoun("ihr", "euch", "euch", "you", "you"),
//   () => new Pronoun("sie", "sich", "ihnen", "they", "them"),
// ];

const sentenceGenerators = [
  function (noun: Noun) {
    return new Sentence(
      noun,
      sentence`Ich finde ${noun.accusative().renderDE()}`,
      `I find ${noun.renderEN()}.`
    );
  },
  function (noun: Noun) {
    return new Sentence(
      noun,
      sentence`Du hast ${noun.accusative().renderDE()}`,
      `You have ${noun.renderEN()}.`
    );
  },
  function (noun: Noun) {
    return new Sentence(
      noun,
      sentence`Er kauft ${noun.accusative().renderDE()}`,
      `He buys ${noun.renderEN()}.`
    );
  },
  function (noun: Noun) {
    return new Sentence(
      noun,
      sentence`Ich helfe ${noun.dative().renderDE()}`,
      `I help ${noun.renderEN()}.`
    );
  },
  function (noun: Noun) {
    return new Sentence(
      noun,
      sentence`Ich schlafe mit ${noun.dative().renderDE()}`,
      `I sleep with ${noun.renderEN()}.`
    );
  },
  function (noun: Noun) {
    return new Sentence(
      noun,
      sentence`Er steht vor ${noun.dative().renderDE()}`,
      `He stands in front of ${noun.renderEN()}.`
    );
  },
  function (noun: Noun) {
    const articleEN = noun.isPlural() ? "are" : "is";
    const articleDE = noun.isPlural() ? "sind" : "ist";
    const pointerEN = noun.isPlural() ? "These" : "This";
    return new Sentence(
      noun,
      sentence`Das ${articleDE} ${noun.nominative().renderDE()}`,
      `${pointerEN} ${articleEN} ${noun.renderEN()}.`
    );
  },
  function (noun: Noun) {
    const articleEN = noun.isPlural() ? "were" : "was";
    const articleDE = noun.isPlural() ? "waren" : "war";
    return new Sentence(
      noun,
      sentence`Mein Geschenk ${articleDE} ${noun.nominative().renderDE()}`,
      `My gift ${articleEN} ${noun.renderEN()}.`
    );
  },
  function (noun: Noun) {
    const articleEN = noun.isPlural() ? "are" : "is";
    const articleDE = noun.isPlural() ? "sind" : "ist";
    return new Sentence(
      noun,
      sentence`Wo ${articleDE} ${noun.nominative().renderDE()}`.ask(),
      `Where ${articleEN} ${noun.renderEN()}?`
    );
  },
];

const attributes = [
  new Attribute("klein", "small"),
  new Attribute("neu", "new"),
  new Attribute("schön", "nice"),
  new Attribute("schwarz", "black"),
  new Attribute("rot", "red"),
  new Attribute("hell", "bright"),
  new Attribute("billig", "cheap"),
  new Attribute("leicht", "light"),
  new Attribute("gut", "good"),
];

export class Corpus {
  randomNoun(): Noun {
    const next =
      nounsGenerator[Math.floor(Math.random() * nounsGenerator.length)]();

    const newAttributes: Attribute[] = [];
    for (let i = 0; i < Math.floor(Math.random() * 3); i++) {
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
