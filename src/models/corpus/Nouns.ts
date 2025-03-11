import { Noun } from "../Noun";
import { NounCategory } from "../NounCategory";
import { Attribute } from "../Attribute";
import { randomPerson } from "../Person";
import { GrammaticalCase } from "../GrammaticalCase";

// use constructor(sbNounTemplate: any, ...categories: NounCategory[])
const Nouns = [
  () =>
    new Noun(
      "das Haus,die Häuser,des Hauses",
      NounCategory.Drawable,
      NounCategory.Material,
      NounCategory.Property,
    ),
  () =>
    new Noun(
      "das Bett,-en,-es",
      NounCategory.Movable,
      NounCategory.Material,
      NounCategory.Property,
    ),
  () =>
    new Noun(
      "das Buch,die Bücher,des Buches",
      NounCategory.Movable,
      NounCategory.Material,
      NounCategory.Property,
    ),
  () =>
    new Noun(
      "das Messer,-,-s",
      NounCategory.Movable,
      NounCategory.Material,
      NounCategory.Property,
    ),
  () =>
    new Noun(
      "das Hemd,-en,-es",
      NounCategory.Movable,
      NounCategory.Material,
      NounCategory.Property,
    ),
  () =>
    new Noun("das Bier,-e,-es", NounCategory.Material, NounCategory.Property),
  () =>
    new Noun(
      "das Glas,die Gläser,des Glases",
      NounCategory.Movable,
      NounCategory.Material,
      NounCategory.Property,
    ),
  () =>
    new Noun(
      "das Auto,-s,-s",
      NounCategory.Movable,
      NounCategory.Material,
      NounCategory.Property,
      NounCategory.Noisy,
    ),
  () =>
    new Noun(
      "der Zug,die Züge,des Zuges",
      NounCategory.Movable,
      NounCategory.Material,
      NounCategory.Property,
      NounCategory.Noisy,
    ),
  () =>
    new Noun(
      "der Bus,die Busse,des Busses",
      NounCategory.Movable,
      NounCategory.Material,
      NounCategory.Property,
      NounCategory.Noisy,
    ),
  () =>
    new Noun(
      "der Koffer,-,-s",
      NounCategory.Movable,
      NounCategory.Material,
      NounCategory.Property,
    ),
  () =>
    new Noun(
      "der Turm,die Türme,-s",
      NounCategory.Drawable,
      NounCategory.Material,
      NounCategory.Property,
    ),
  () =>
    new Noun(
      "der Apfel,die Äpfel,des Apfels",
      NounCategory.Edible,
      NounCategory.Cookable,
      NounCategory.Material,
      NounCategory.Property,
    ),
  () =>
    new Noun(
      "der Ast,die Äste,des Astes",
      NounCategory.Drawable,
      NounCategory.Material,
      NounCategory.Property,
    ),
  () =>
    new Noun(
      "der Schuh,-e,-es",
      NounCategory.Drawable,
      NounCategory.Movable,
      NounCategory.Material,
      NounCategory.Property,
    ),
  () =>
    new Noun("der Stein,-e,-es", NounCategory.Drawable, NounCategory.Material),
  () =>
    new Noun("der Zettel,-,-s", NounCategory.Drawable, NounCategory.Material),
  () =>
    new Noun(
      "der Kasten,die Kästen,-s",
      NounCategory.Drawable,
      NounCategory.Material,
    ),
  () =>
    new Noun("die Lampe,-n,-", NounCategory.Drawable, NounCategory.Material),
  () =>
    new Noun("die Tasse,-n,-", NounCategory.Drawable, NounCategory.Material),
  () =>
    new Noun("die Gabel,-n,-", NounCategory.Drawable, NounCategory.Material),
  () =>
    new Noun("die Leiter,-n,-", NounCategory.Drawable, NounCategory.Material),
  () =>
    new Noun(
      "die Uhr,die Uhren,der Uhr",
      NounCategory.Drawable,
      NounCategory.Material,
      NounCategory.Noisy,
    ),
  () =>
    new Noun(
      "die Heizung,die Heizungen,der Heizung",
      NounCategory.Drawable,
      NounCategory.Material,
    ),
  () =>
    new Noun(
      "die Nuss,die Nüsse,der Nuss",
      NounCategory.Drawable,
      NounCategory.Material,
    ),
  () =>
    new Noun(
      "das Kind,die Kinder,des Kindes",
      NounCategory.Person,
      NounCategory.Living,
      NounCategory.Drawable,
      NounCategory.Noisy,
    ),
  () =>
    new Noun(
      "das Tier,die Tiere,des Tieres",
      NounCategory.Living,
      NounCategory.Drawable,
      NounCategory.Noisy,
    ),
  () =>
    new Noun(
      "das Huhn,die Hühner,des Huhnes",
      NounCategory.Living,
      NounCategory.Drawable,
      NounCategory.Noisy,
    ),
  () =>
    new Noun(
      "das Baby,die Babys,des Babys",
      NounCategory.Person,
      NounCategory.Living,
      NounCategory.Drawable,
      NounCategory.Noisy,
    ),
  () =>
    new Noun(
      "das Lama,die Lamas,des Lamas",
      NounCategory.Living,
      NounCategory.Drawable,
      NounCategory.Noisy,
    ),
  () =>
    new Noun(
      "das Gespenst,die Gespenster,des Gespenstes",
      NounCategory.Person,
      NounCategory.Living,
      NounCategory.Drawable,
      NounCategory.Noisy,
    ),
  () =>
    new Noun(
      "der Sohn,die Söhne,des Sohnes",
      NounCategory.Person,
      NounCategory.Living,
    ),
  () =>
    new Noun(
      "der Enkel,-,-s",
      NounCategory.Person,
      NounCategory.Living,
      NounCategory.Drawable,
    ),
  () =>
    new Noun(
      "der Esel,-,-s",
      NounCategory.Person,
      NounCategory.Living,
      NounCategory.Drawable,
      NounCategory.Noisy,
    ),
  () =>
    new Noun(
      "der Lehrer,die Lehrer,des Lehrers",
      NounCategory.Person,
      NounCategory.Living,
      NounCategory.Noisy,
    ),
  () =>
    new Noun(
      "der Soldat,die Soldaten,des Soldaten",
      NounCategory.Person,
      NounCategory.Living,
      NounCategory.Drawable,
    ),
  () =>
    new Noun(
      "der Postbote,die Postboten,des Postboten",
      NounCategory.Person,
      NounCategory.Living,
      NounCategory.Drawable,
      NounCategory.Noisy,
    ),
  () =>
    new Noun(
      "der Wurm,die Würmer,des Wurms",
      NounCategory.Living,
      NounCategory.Drawable,
    ),
  () =>
    new Noun(
      "die Tochter,die Töchter,der Tochter",
      NounCategory.Person,
      NounCategory.Living,
    ),
  () =>
    new Noun(
      "die Enkelin,die Enkelinnen,der Enkelin",
      NounCategory.Person,
      NounCategory.Living,
    ),
  () =>
    new Noun(
      "die Ärztin,die Ärztinnen,der Ärztin",
      NounCategory.Person,
      NounCategory.Living,
    ),
  () =>
    new Noun(
      "die Kuh,die Kühe,der Kuh",
      NounCategory.Living,
      NounCategory.Drawable,
    ),
  () =>
    new Noun(
      "die Taube,die Tauben,der Taube",
      NounCategory.Living,
      NounCategory.Drawable,
    ),
  () =>
    new Noun(
      "das Fest,-e,-es",
      NounCategory.Process,
      NounCategory.Drawable,
      NounCategory.Noisy,
    ),
  () => new Noun("das Spiel,-e,-es", NounCategory.Process),
  () => new Noun("das Essen,-,-s", NounCategory.Process),
  () => new Noun("die Pause,-n,-", NounCategory.Process),
  () => new Noun("die Arbeit,-en,-", NounCategory.Process),
  () => new Noun("die Stunde,-n,-", NounCategory.Process),
  () => new Noun("die Prüfung,-en,-", NounCategory.Process),
  () => new Noun("der Urlaub,-e,-s", NounCategory.Process),
  () =>
    new Noun(
      "der Sturm,die Stürme,-es",
      NounCategory.Process,
      NounCategory.Drawable,
      NounCategory.Noisy,
    ),
  () => new Noun("der Umzug,die Umzüge,-es", NounCategory.Process),
  () => new Noun("das Fleisch,-,-es", NounCategory.Edible),
  () =>
    new Noun(
      "das Tofu,-s,-s",
      NounCategory.Edible,
      NounCategory.Cookable,
      NounCategory.Drawable,
      NounCategory.Material,
      NounCategory.Property,
    ),
  () => new Noun("das Sashimi,-s,-s", NounCategory.Edible),
  () =>
    new Noun(
      "der Fisch,-e,-es",
      NounCategory.Edible,
      NounCategory.Cookable,
      NounCategory.Drawable,
      NounCategory.Material,
      NounCategory.Property,
    ),
  () =>
    new Noun(
      "der Käse,-,-s",
      NounCategory.Edible,
      NounCategory.Cookable,
      NounCategory.Drawable,
      NounCategory.Material,
      NounCategory.Property,
    ),
  () =>
    new Noun(
      "der Quark,-s,-es",
      NounCategory.Edible,
      NounCategory.Cookable,
      NounCategory.Material,
      NounCategory.Property,
    ),
  () =>
    new Noun(
      "die Zwiebel,-n,-",
      NounCategory.Edible,
      NounCategory.Cookable,
      NounCategory.Drawable,
      NounCategory.Material,
    ),
  () =>
    new Noun(
      "die Paprika,-s,-",
      NounCategory.Edible,
      NounCategory.Cookable,
      NounCategory.Drawable,
      NounCategory.Material,
    ),
  () =>
    new Noun(
      "die Nuss,die Nüsse,der Nuss",
      NounCategory.Edible,
      NounCategory.Cookable,
      NounCategory.Drawable,
      NounCategory.Material,
    ),
];

export const attributes = [
  new Attribute("interessant", NounCategory.Material, NounCategory.Process),
  new Attribute("neu", NounCategory.Material),
  new Attribute("schön", NounCategory.Material),
  new Attribute("billig", NounCategory.Material),
  new Attribute("leicht", NounCategory.Material),
  new Attribute("gut", NounCategory.Material),
  new Attribute("lustig", NounCategory.Material, NounCategory.Person),
  new Attribute("eckig", NounCategory.Material),
  new Attribute("schlau", NounCategory.Person, NounCategory.Living),
  new Attribute(
    "schön",
    NounCategory.Person,
    NounCategory.Living,
    NounCategory.Drawable,
    NounCategory.Process,
  ),
  new Attribute("schüchtern", NounCategory.Person, NounCategory.Living),
  new Attribute(
    "groß",
    NounCategory.Person,
    NounCategory.Living,
    NounCategory.Material,
  ),
  new Attribute("gesund", NounCategory.Person, NounCategory.Living),
  new Attribute("lebhaft", NounCategory.Person, NounCategory.Living),
  new Attribute(
    "laut",
    NounCategory.Person,
    NounCategory.Living,
    NounCategory.Noisy,
  ),
  new Attribute("lang", NounCategory.Process),
  new Attribute("einfach", NounCategory.Process),
  new Attribute("roh", NounCategory.Cookable),
  new Attribute("gekocht", NounCategory.Cookable),
  new Attribute("gebraten", NounCategory.Cookable),
  new Attribute("frisch", NounCategory.Cookable),
  new Attribute("süß", NounCategory.Edible, NounCategory.Cookable),
  new Attribute("gesalzen", NounCategory.Edible, NounCategory.Cookable),
];

/* eslint-disable */
export enum NounState {
  UNSPECIFIC = "unbestimmt",
  SPECIFIC = "bestimmt",
  DEMONSTRATIVE = "demonstrativ",
  POSSESSED = "possessiv",
}

export const getRandomNoun = (
  nounCategory: NounCategory,
  options: {
    attributeMaxCount: number;
    minimum: number;
    maximum: number;
    allowedStates: NounState[];
    allowedGrammaticalCases: GrammaticalCase[];
  },
): Noun => {
  do {
    const randomIndex = Math.floor(Math.random() * Nouns.length);
    const next = Nouns[randomIndex]();
    if (next.getCategories().some((category) => category === nounCategory)) {
      return randomizeNoun(next, options);
    }
  } while (true);
};

export const randomizeNoun = (
  next: Noun,
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
    let randomAttribute;
    do {
      randomAttribute =
        attributes[Math.floor(Math.random() * attributes.length)];
      // repeat until an attribute is found who has an overlap of getCategories with next noun getCategories
    } while (
      !randomAttribute
        .getCategories()
        .some((x) => next.getCategories().includes(x))
    );

    if (!newAttributes.includes(randomAttribute)) {
      newAttributes.push(randomAttribute);
    }
  }
  next.attributes(newAttributes);

  // fairly decide between 0, 1 or many
  const lowMaximum = Math.min(2, maximum);
  const lowQuantity =
    Math.floor(Math.random() * (lowMaximum + 1 - minimum)) + minimum;
  // if many, randomize quantity between 2 and maximum
  const quantity = lowQuantity <= 1 ? lowQuantity : Math.floor(Math.random() * (maximum + 1 - 2)) + 2;


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
        case NounState.DEMONSTRATIVE:
          next.demonstrative();
          break;
        case NounState.POSSESSED:
          next.possessed(randomPerson());
          break;
      }
    }
  }

  return next;
};
