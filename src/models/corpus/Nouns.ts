import { Noun } from "../Noun";
import { Attribute } from "../Attribute";
import { randomPerson } from "../Person";
import { GrammaticalCase } from "../GrammaticalCase";

const materialNouns = [
  () => new Noun("das Haus,die Häuser,des Hauses"),
  () => new Noun("das Bett,-en,-es"),
  () => new Noun("das Buch,die Bücher,des Buches"),
  () => new Noun("das Messer,-,-s"),
  () => new Noun("das Hemd,-en,-es"),
  () => new Noun("das Bier,-e,-es"),
  () => new Noun("der Zug,die Züge,des Zuges"),
  () => new Noun("der Bus,die Busse,des Busses"),
  () => new Noun("der Koffer,-,-s"),
  () => new Noun("der Apfel,die Äpfel,des Apfels"),
  () => new Noun("der Schuh,-e,-es"),
  () => new Noun("der Wein,-e,-es"),
  () => new Noun("die Lampe,-n,-n"),
  () => new Noun("die Tasse,-n,-"),
  () => new Noun("die Gabel,-n,-"),
  () => new Noun("die Uhr,die Uhren,der Uhren"),
  () => new Noun("die Heizung,die Heizungen,der Heizungen"),
  () => new Noun("die Nuss,die Nüsse,der Nüsse"),
];

export const materialAttributes = [
  new Attribute("klein"),
  new Attribute("neu"),
  new Attribute("schön"),
  new Attribute("billig"),
  new Attribute("leicht"),
  new Attribute("gut"),
  new Attribute("lustig"),
  new Attribute("eckig"),
];

const personNouns = [
  () => new Noun("das Kind,die Kinder,des Kindes"),
  () => new Noun("das Tier,die Tiere,des Tieres"),
  () => new Noun("das Baby,die Babys,des Babys"),
  () => new Noun("das Gespenst,die Gespenster,des Gespentes"),
  () => new Noun("der Vater,die Väter,des Vaters"),
  () => new Noun("der Sohn,die Söhne,des Sohnes"),
  () => new Noun("der Enkel,die Enkel,des Enkels"),
  () => new Noun("der Postbote,die Postboten,des Postbotens"),
  () => new Noun("die Mutter,die Mütter,der Mutter"),
  () => new Noun("die Tochter,die Töchter,der Tochter"),
  () => new Noun("die Enkelin,die Enkelinnen,der Enkelin"),
  () => new Noun("die Ärztin, die Ärztinnen,der Ärztin"),
];

export const personAttributes = [
  new Attribute("schlau"),
  new Attribute("schön"),
  new Attribute("schüchtern"),
  new Attribute("groß"),
  new Attribute("gesund"),
  new Attribute("lebhaft"),
  new Attribute("laut"),
];

/* eslint-disable */
export enum NounState {
  UNSPECIFIC = "unbestimmt",
  SPECIFIC = "bestimmt",
  POSSESSED = "possessiv",
}

export const getRandomMaterialNoun = (options: {
  attributeMaxCount: number;
  minimum: number;
  maximum: number;
  allowedStates: NounState[];
  allowedGrammaticalCases: GrammaticalCase[];
}): Noun => {
  const randomIndex = Math.floor(Math.random() * materialNouns.length);
  const next = materialNouns[randomIndex]();
  return randomizeNoun(next, materialAttributes, options);
};

export const getRandomPersonNoun = (options: {
  attributeMaxCount: number;
  minimum: number;
  maximum: number;
  allowedStates: NounState[];
  allowedGrammaticalCases: GrammaticalCase[];
}): Noun => {
  const randomIndex = Math.floor(Math.random() * personNouns.length);
  const next = personNouns[randomIndex]();
  return randomizeNoun(next, personAttributes, options);
};

export const randomizeNoun = (
  next: Noun,
  attributes: Attribute[],
  options: {
    attributeMaxCount: number;
    minimum: number;
    maximum: number;
    allowedStates: NounState[];
    allowedGrammaticalCases: GrammaticalCase[];
  },
): Noun => {
  const { attributeMaxCount, minimum, maximum, allowedStates } = options;

  const newAttributes: Attribute[] = [];
  const attributeQuantity = Math.floor(Math.random() * attributeMaxCount);

  for (let i = 0; i < attributeQuantity; i++) {
    const randomAttribute =
      attributes[Math.floor(Math.random() * attributes.length)];
    if (!newAttributes.includes(randomAttribute)) {
      newAttributes.push(randomAttribute);
    }
  }
  next.attributes(newAttributes);

  const quantity =
    Math.floor(Math.random() * (maximum + 1 - minimum)) + minimum;

  next.count(quantity);
  const isPlural = quantity > 1;

  if (quantity == 0) {
    next.negated();
  }

  if (quantity > 0) {
    let actualAllowedStates = new Set(allowedStates);
    if (isPlural) {
      // unspecific plural is bugged in satzbau https://github.com/TimoBechtel/satzbau/pull/1
      actualAllowedStates.delete(NounState.UNSPECIFIC);
      if (actualAllowedStates.size === 0) {
        actualAllowedStates.add(NounState.SPECIFIC);
      }
    }

    if (actualAllowedStates.size > 0) {
      const randomState =
        Array.from(actualAllowedStates)[
          Math.floor(Math.random() * actualAllowedStates.size)
        ];
      switch (randomState) {
        case NounState.SPECIFIC:
          next.specific();
          break;
        case NounState.POSSESSED:
          next.possessed(randomPerson());
          break;
      }
    }
  }

  return next;
};
