import { Verb } from "../Verb";

const irregularVerbs: { [key: string]: Verb } = {
  dürfen: Verb.modalVerb("dürfen", "durfte", "gedurft", "darf", "dürf"),
  essen: Verb.irregularVerb("essen", "aß", "gegessen", "iss"),
  gehen: Verb.irregularVerb("gehen", "ging", "gegangen"),
  helfen: Verb.irregularVerb("helfen", "half", "geholfen", "hilf"),
  haben: Verb.irregularVerb("haben", "hatte", "gehabt", "hab"),
  kneifen: Verb.irregularVerb("kneifen", "kniff", "gekniffen"),
  können: Verb.modalVerb("können", "konnte", "gekonnt", "kann", "könn"),
  liegen: Verb.irregularVerb("liegen", "lag", "gelegen"),
  lügen: Verb.irregularVerb("lügen", "log", "gelogen"),
  müssen: Verb.modalVerb("müssen", "musste", "gemacht", "muss", "müss"),
  schlafen: Verb.irregularVerb("schlafen", "schlief", "geschlafen", "schläf"),
  schneiden: Verb.irregularVerb("schneiden", "schnitt", "geschnitten"),
  sein: Verb.irregularVerb("sein", "war", "gewesen", "sei"),
  sprechen: Verb.irregularVerb("sprechen", "sprach", "gesprochen", "sprich"),
  trinken: Verb.irregularVerb("trinken", "trank", "getrunken", "trink"),
  waschen: Verb.irregularVerb("waschen", "wusch", "gewaschen", "wäsch"),
  wollen: Verb.modalVerb("wollen", "wollte", "gewollt", "will", "woll"),
};

export const getVerb = (infinitive: string): Verb => {
  const verb = irregularVerbs[infinitive];
  if (verb) {
    return verb;
  }
  return Verb.regularVerb(infinitive);
};
