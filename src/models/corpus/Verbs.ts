import { Verb, VerbBase } from "../Verb";
import { Person, Persons } from "../Person";

interface VerbBuilder {
  withUndetachablePrefix(prefix: string): void;
  withDetachablePrefix(prefix: string): void;
  build(): Verb;
}

class ModalVerbBuilder implements VerbBuilder {
  private infinitive: string;
  private past: string;
  private perfect: string;
  private singularStemBase: string;
  private pluralStemBase: string;
  private undetachablePrefix?: string;
  private detachablePrefix?: string;
  constructor(
    infinitive: string,
    past: string,
    perfect: string,
    singularStemBase: string,
    pluralStemBase: string,
  ) {
    this.infinitive = infinitive;
    this.past = past;
    this.perfect = perfect;
    this.singularStemBase = singularStemBase;
    this.pluralStemBase = pluralStemBase;
    this.undetachablePrefix = undefined;
    this.detachablePrefix = undefined;
  }
  withUndetachablePrefix(prefix: string) {
    this.undetachablePrefix = prefix;
  }
  withDetachablePrefix(prefix: string) {
    this.detachablePrefix = prefix;
  }
  build() {
    const verbBase = new VerbBase(
      this.infinitive,
      this.undetachablePrefix,
      this.detachablePrefix,
    );
    return Verb.modalVerb(
      verbBase,
      this.past,
      this.perfect,
      this.singularStemBase,
      this.pluralStemBase,
    );
  }
}

class IrregularVerbBuilder implements VerbBuilder {
  private infinitive: string;
  private past: string;
  private perfect: string;
  private altStemBase: string | undefined;

  private undetachablePrefix?: string;
  private detachablePrefix?: string;
  constructor(
    infinitive: string,
    past: string,
    perfect: string,
    altStemBase?: string,
  ) {
    this.infinitive = infinitive;
    this.past = past;
    this.perfect = perfect;
    this.altStemBase = altStemBase;
    this.undetachablePrefix = undefined;
    this.detachablePrefix = undefined;
  }
  withUndetachablePrefix(prefix: string) {
    this.undetachablePrefix = prefix;
  }
  withDetachablePrefix(prefix: string) {
    this.detachablePrefix = prefix;
  }

  build(): Verb {
    const verbBase = new VerbBase(
      this.infinitive,
      this.undetachablePrefix,
      this.detachablePrefix,
    );
    return Verb.irregularVerb(
      verbBase,
      this.past,
      this.perfect,
      this.altStemBase,
    );
  }
}

class SeinVerbBuilder implements VerbBuilder {
  private undetachablePrefix?: string;
  private detachablePrefix?: string;
  withUndetachablePrefix(prefix: string) {
    this.undetachablePrefix = prefix;
  }
  withDetachablePrefix(prefix: string) {
    this.detachablePrefix = prefix;
  }
  build() {
    const conjugations = new Map<Person, [string, string]>();
    conjugations.set(Persons.ME, ["bin", "war"]);
    conjugations.set(Persons.YOU, ["bist", "warst"]);
    conjugations.set(Persons.HE, ["ist", "war"]);
    conjugations.set(Persons.SHE, ["ist", "war"]);
    conjugations.set(Persons.IT, ["ist", "war"]);
    conjugations.set(Persons.WE, ["sind", "waren"]);
    conjugations.set(Persons.YALL, ["seid", "wart"]);
    conjugations.set(Persons.THEY, ["sind", "waren"]);

    return new Verb(VerbBase.create("sein"), conjugations, "gewesen");
  }
}

const irregularVerbs: { [key: string]: VerbBuilder } = {
  dürfen: new ModalVerbBuilder("dürfen", "durfte", "gedurft", "darf", "dürf"),
  essen: new IrregularVerbBuilder("essen", "aß", "gegessen", "iss"),
  gehen: new IrregularVerbBuilder("gehen", "ging", "gegangen"),
  helfen: new IrregularVerbBuilder("helfen", "half", "geholfen", "hilf"),
  haben: new IrregularVerbBuilder("haben", "hatte", "gehabt", "ha"),
  kneifen: new IrregularVerbBuilder("kneifen", "kniff", "gekniffen"),
  können: new ModalVerbBuilder("können", "konnte", "gekonnt", "kann", "könn"),
  liegen: new IrregularVerbBuilder("liegen", "lag", "gelegen"),
  lügen: new IrregularVerbBuilder("lügen", "log", "gelogen"),
  müssen: new ModalVerbBuilder("müssen", "musste", "gemacht", "muss", "müss"),
  schlafen: new IrregularVerbBuilder(
    "schlafen",
    "schlief",
    "geschlafen",
    "schläf",
  ),
  schneiden: new IrregularVerbBuilder("schneiden", "schnitt", "geschnitten"),
  sehen: new IrregularVerbBuilder("sehen", "sah", "gesehen", "sieh"),
  sein: new SeinVerbBuilder(),
  sollen: new ModalVerbBuilder("sollen", "sollte", "gesollt", "soll", "soll"),
  sprechen: new IrregularVerbBuilder(
    "sprechen",
    "sprach",
    "gesprochen",
    "sprich",
  ),
  trinken: new IrregularVerbBuilder("trinken", "trank", "getrunken", "trink"),
  tun: new IrregularVerbBuilder("tun", "tat", "getan", "tu"),
  waschen: new IrregularVerbBuilder("waschen", "wusch", "gewaschen", "wäsch"),
  wollen: new ModalVerbBuilder("wollen", "wollte", "gewollt", "will", "woll"),
};

/**
 * Returns a verb object for the given infinitiveAndPrefixes.
 * E.g. "ver+kaufen", "nach-schlagen", "an-ver+trauen", "daher-reden"
 * sometimes verb exist in both variants, e.g. um+fahren and um-fahren
 * @param {string} infinitiveAndPrefixes detachablePrefixes separated with -, undetachablePrefixes separated with +
 * @return {Verb} a verb object
 */
export const getVerb = (infinitiveAndPrefixes: string): Verb => {
  // split input into detachable prefixes and rest, then use slice to build a list of prefixes and the rest
  const dashTokens = infinitiveAndPrefixes.split("-");
  const detachablePrefix = dashTokens.slice(0, -1)[0];
  const rest = dashTokens.slice(-1)[0];

  // split rest into undetachable prefix and infinitive
  const plustokens = rest.split("+");
  const undetachablePrefix = plustokens.slice(0, -1)[0];
  const infinitive = plustokens.slice(-1)[0];

  const verbBuilder = irregularVerbs[infinitive];
  if (verbBuilder) {
    // if there was an undetachable prefix, add it to the verb
    if (undetachablePrefix) {
      verbBuilder.withUndetachablePrefix(undetachablePrefix);
    }
    // if there were detachable prefixes, add them to the verb
    if (detachablePrefix) {
      verbBuilder.withDetachablePrefix(detachablePrefix);
    }

    return verbBuilder.build();
  }

  return Verb.regularVerb(
    new VerbBase(infinitive, undetachablePrefix, detachablePrefix),
  );
};
