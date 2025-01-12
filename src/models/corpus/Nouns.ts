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
  () => new Noun("die Socke,-n,-"),
  () => new Noun("die Soße,-n,-"),
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
  SPECIFIC = "specific",
  NEGATED = "negated",
  POSSESSED = "possessed",
}

export const getRandomMaterialNoun = (
  attributeMaxCount: number = Math.floor(Math.random() * 4),
  allowPlural: boolean = true,
  allowedStates: NounState[] = Object.values(NounState),
): Noun => {
  const randomIndex = Math.floor(Math.random() * materialNouns.length);
  const next = materialNouns[randomIndex]();

  const newAttributes: Attribute[] = [];
  for (let i = 0; i < Math.min(Math.max(attributeMaxCount, 0), 3); i++) {
    const randomAttribute =
      attributes[Math.floor(Math.random() * attributes.length)];
    if (!newAttributes.includes(randomAttribute)) {
      newAttributes.push(randomAttribute);
    }
  }
  next.attributes(newAttributes);

  const isPlural = allowPlural && Math.floor(Math.random() * 100 + 1) > 80;
  // Adjectives buggy for plural
  if (isPlural) {
    next.count(Math.floor(Math.random() * 3 + 1));
  } else {
    next.count(1);
  }

  // unspecific plural is bugged in satzbau https://github.com/TimoBechtel/satzbau/pull/1
  if (isPlural) {
    next.specific();
  } else if (allowedStates.length > 0) {
    const randomState =
      allowedStates[Math.floor(Math.random() * allowedStates.length)];
    switch (randomState) {
      case NounState.SPECIFIC:
        next.specific();
        break;
      case NounState.NEGATED:
        next.negated();
        break;
      case NounState.POSSESSED:
        next.possessed(randomPerson());
        break;
    }
  }

  return next;
};
