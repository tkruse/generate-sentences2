// @ts-nocheck // satzbau templates confuse TS
import { Sentence } from "./Sentence";

import { sentence } from "satzbau";
import { getRandomNoun, NounState } from "./corpus/Nouns";
import { NounCategory } from "./NounCategory";
import { GrammaticalCase } from "./GrammaticalCase";

const sentenceGenerators = [
  // Person
  function (options: any) {
    const noun = getRandomNoun(NounCategory.Living, options);
    return new Sentence(
      noun,
      sentence`Hier ${noun.renderSubjectVerb("wohnen")} ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    const noun = getRandomNoun(NounCategory.Noisy, options);
    return new Sentence(
      noun,
      sentence`Da ${noun.renderSubjectVerb("sein")} ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Living, options).affirmed().dative(),
      sentence`Ein Frühstück mit ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Drawable, options).affirmed().dative(),
      sentence`Ein Foto von ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Person, options).dative(),
      sentence`Wir schenken das ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Living, options).accusative(),
      sentence`Ich kenne ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Living, options).accusative(),
      sentence`Wir vermissen ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Living, options).affirmed().accusative(),
      sentence`Ein Geschenk für ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Living, options).affirmed().genitive(),
      sentence`Die Augen ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Living, options).affirmed().genitive(),
      sentence`Das Zimmer ${({ noun }) => noun}`,
    );
  },
  // Material
  function (options: any) {
    const noun = getRandomNoun(NounCategory.Material, options);
    return new Sentence(
      noun,
      sentence`${({ noun }) => noun} ${noun.renderSubjectVerb("sehen")} nett aus`,
    );
  },
  function (options: any) {
    const noun = getRandomNoun(NounCategory.Material, options);
    return new Sentence(
      noun,
      sentence`Da ${noun.renderSubjectVerb("stehen")} ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Property, options).accusative(),
      sentence`Ich habe hier ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Material, options).affirmed().accusative(),
      sentence`Ein Buch über ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Property, options).accusative(),
      sentence`Er kauft ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Material, options).accusative(),
      sentence`Dort findet man ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Material, options).affirmed().dative(),
      sentence`Das gehört zu ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Material, options).affirmed().dative(),
      sentence`Der Name von ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Drawable, options).affirmed().dative(),
      sentence`Ein Bild mit ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Material, options).affirmed().genitive(),
      sentence`Ich sehe den Schatten ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Property, options).genitive(),
      sentence`Sie senken den Preis ${({ noun }) => noun}`,
    );
  },
  // Process
  function (options: any) {
    const noun = getRandomNoun(NounCategory.Process, options);
    return new Sentence(
      noun,
      sentence`${({ noun }) => noun} ${noun.renderSubjectVerb("dauern")} zu lange`,
    );
  },
  function (options: any) {
    const noun = getRandomNoun(NounCategory.Process, options)
      .affirmed()
      .accusative();
    return new Sentence(noun, sentence`Ich habe ${({ noun }) => noun}`);
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Process, options).accusative(),
      sentence`Ich brauche ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Process, options).accusative(),
      sentence`Sie unterbrechen ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Process, options).affirmed().dative(),
      sentence`Das kommt nach ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Process, options).affirmed().dative(),
      sentence`Er erzählt von ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Process, options).affirmed().genitive(),
      sentence`Ich mache es während ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Process, options).affirmed().genitive(),
      sentence`Die Dauer ${({ noun }) => noun}`,
    );
  },
  // Food
  function (options: any) {
    const noun = getRandomNoun(NounCategory.Edible, options);
    return new Sentence(
      noun,
      sentence`${({ noun }) => noun} ${noun.renderSubjectVerb("schmecken")} mir gut`,
    );
  },
  function (options: any) {
    const noun = getRandomNoun(NounCategory.Edible, options);
    return new Sentence(
      noun,
      sentence`Im Kühlschrank ${noun.renderSubjectVerb("sein")} ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Edible, options).accusative(),
      sentence`Ich koche heute ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Edible, options).accusative(),
      sentence`Ich esse ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Edible, options).affirmed().dative(),
      sentence`Der Wein passt gut zu ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Edible, options).dative(),
      sentence`Ich probiere von ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Edible, options).affirmed().genitive(),
      sentence`Der Geschmack ${({ noun }) => noun}`,
    );
  },
  function (options: any) {
    return new Sentence(
      getRandomNoun(NounCategory.Edible, options).affirmed().genitive(),
      sentence`Der Geruch ${({ noun }) => noun}`,
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
