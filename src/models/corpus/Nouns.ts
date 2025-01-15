import { Noun } from "../Noun";
import { Attribute } from "../Attribute";
import { randomPerson } from "../Person";

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

export const attributes = [
  new Attribute("klein"),
  new Attribute("neu"),
  new Attribute("schön"),
  new Attribute("billig"),
  new Attribute("leicht"),
  new Attribute("gut"),
  new Attribute("lustig"),
  new Attribute("eckig"),
];

/* eslint-disable */
export enum NounState {
  UNSPECIFIC = "unspezifisch",
  SPECIFIC = "spezifisch",
  POSSESSED = "possessiv",
}

export const getRandomMaterialNoun = (
  attributeMaxCount: number = Math.floor(Math.random() * 4),
  minimum: number = 0,
  maximum: number = 3,
  allowedStates: NounState[] = Object.values(NounState),
): Noun => {
  const randomIndex = Math.floor(Math.random() * materialNouns.length);
  const next = materialNouns[randomIndex]();

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
