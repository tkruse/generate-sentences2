import { Verb } from "./Verb";
import { getVerb } from "./corpus/Verbs";
import { Tense } from "./Tense";
import { Persons } from "./Person";

const checkConjugations = (verb: Verb, tense: Tense, expected: string[]) => {
  const [me, you, he, she, it, we, yall, they] = expected;

  expect(verb.setTense(tense).setPerson(Persons.ME).renderDE()).toBe(me);
  expect(verb.setTense(tense).setPerson(Persons.YOU).renderDE()).toBe(you);
  expect(verb.setTense(tense).setPerson(Persons.HE).renderDE()).toBe(he);
  expect(verb.setTense(tense).setPerson(Persons.SHE).renderDE()).toBe(she);
  expect(verb.setTense(tense).setPerson(Persons.IT).renderDE()).toBe(it);
  expect(verb.setTense(tense).setPerson(Persons.WE).renderDE()).toBe(we);
  expect(verb.setTense(tense).setPerson(Persons.YALL).renderDE()).toBe(yall);
  expect(verb.setTense(tense).setPerson(Persons.THEY).renderDE()).toBe(they);
};

describe("Verb", () => {
  test("kaufen conjugation with persons", () => {
    const verb3 = getVerb("kaufen");

    checkConjugations(verb3, Tense.PRESENT, [
      "kaufe",
      "kaufst",
      "kauft",
      "kauft",
      "kauft",
      "kaufen",
      "kauft",
      "kaufen",
    ]);

    checkConjugations(verb3, Tense.PAST, [
      "kaufte",
      "kauftest",
      "kaufte",
      "kaufte",
      "kaufte",
      "kauften",
      "kauftet",
      "kauften",
    ]);
  });

  test("gehen conjugation with persons", () => {
    const verb1 = getVerb("gehen");

    checkConjugations(verb1, Tense.PRESENT, [
      "gehe",
      "gehst",
      "geht",
      "geht",
      "geht",
      "gehen",
      "geht",
      "gehen",
    ]);

    checkConjugations(verb1, Tense.PAST, [
      "ging",
      "gingst",
      "ging",
      "ging",
      "ging",
      "gingen",
      "gingt",
      "gingen",
    ]);
  });

  test("essen conjugation with persons", () => {
    const verb2 = getVerb("essen");

    checkConjugations(verb2, Tense.PRESENT, [
      "esse",
      "isst",
      "isst",
      "isst",
      "isst",
      "essen",
      "esst",
      "essen",
    ]);

    checkConjugations(verb2, Tense.PAST, [
      "aß",
      "aßt",
      "aß",
      "aß",
      "aß",
      "aßen",
      "aßt",
      "aßen",
    ]);
  });

  test("helfen conjugation with persons", () => {
    const verb3 = getVerb("helfen");

    checkConjugations(verb3, Tense.PRESENT, [
      "helfe",
      "hilfst",
      "hilft",
      "hilft",
      "hilft",
      "helfen",
      "helft",
      "helfen",
    ]);

    checkConjugations(verb3, Tense.PAST, [
      "half",
      "halfst",
      "half",
      "half",
      "half",
      "halfen",
      "halft",
      "halfen",
    ]);
  });

  test("haben conjugation with persons", () => {
    const verb3 = getVerb("haben");

    checkConjugations(verb3, Tense.PRESENT, [
      "habe",
      "hast",
      "hat",
      "hat",
      "hat",
      "haben",
      "habt",
      "haben",
    ]);

    checkConjugations(verb3, Tense.PAST, [
      "hatte",
      "hattest",
      "hatte",
      "hatte",
      "hatte",
      "hatten",
      "hattet",
      "hatten",
    ]);
  });

  test("kneifen conjugation with persons", () => {
    const verb4 = getVerb("kneifen");

    checkConjugations(verb4, Tense.PRESENT, [
      "kneife",
      "kneifst",
      "kneift",
      "kneift",
      "kneift",
      "kneifen",
      "kneift",
      "kneifen",
    ]);

    checkConjugations(verb4, Tense.PAST, [
      "kniff",
      "kniffst",
      "kniff",
      "kniff",
      "kniff",
      "kniffen",
      "knifft",
      "kniffen",
    ]);
  });

  test("liegen conjugation with persons", () => {
    const verb5 = getVerb("liegen");

    checkConjugations(verb5, Tense.PRESENT, [
      "liege",
      "liegst",
      "liegt",
      "liegt",
      "liegt",
      "liegen",
      "liegt",
      "liegen",
    ]);

    checkConjugations(verb5, Tense.PAST, [
      "lag",
      "lagst",
      "lag",
      "lag",
      "lag",
      "lagen",
      "lagt",
      "lagen",
    ]);
  });

  test("lügen conjugation with persons", () => {
    const verb6 = getVerb("lügen");

    checkConjugations(verb6, Tense.PRESENT, [
      "lüge",
      "lügst",
      "lügt",
      "lügt",
      "lügt",
      "lügen",
      "lügt",
      "lügen",
    ]);

    checkConjugations(verb6, Tense.PAST, [
      "log",
      "logst",
      "log",
      "log",
      "log",
      "logen",
      "logt",
      "logen",
    ]);
  });

  test("tun conjugation with persons", () => {
    const verb7 = getVerb("tun");
    checkConjugations(verb7, Tense.PRESENT, [
      "tue",
      "tust",
      "tut",
      "tut",
      "tut",
      "tun",
      "tut",
      "tun",
    ]);

    checkConjugations(verb7, Tense.PAST, [
      "tat",
      "tatest",
      "tat",
      "tat",
      "tat",
      "taten",
      "tatet",
      "taten",
    ]);
  });

  test("schlafen conjugation with persons", () => {
    const verb7 = getVerb("schlafen");

    checkConjugations(verb7, Tense.PRESENT, [
      "schlafe",
      "schläfst",
      "schläft",
      "schläft",
      "schläft",
      "schlafen",
      "schlaft",
      "schlafen",
    ]);

    checkConjugations(verb7, Tense.PAST, [
      "schlief",
      "schliefst",
      "schlief",
      "schlief",
      "schlief",
      "schliefen",
      "schlieft",
      "schliefen",
    ]);
  });

  test("schneiden conjugation with persons", () => {
    const verb8 = getVerb("schneiden");

    checkConjugations(verb8, Tense.PRESENT, [
      "schneide",
      "schneidest",
      "schneidet",
      "schneidet",
      "schneidet",
      "schneiden",
      "schneidet",
      "schneiden",
    ]);

    checkConjugations(verb8, Tense.PAST, [
      "schnitt",
      "schnittest",
      "schnitt",
      "schnitt",
      "schnitt",
      "schnitten",
      "schnittet",
      "schnitten",
    ]);
  });

  test("wollen conjugation with persons", () => {
    const verb9 = getVerb("wollen");

    checkConjugations(verb9, Tense.PRESENT, [
      "will",
      "willst",
      "will",
      "will",
      "will",
      "wollen",
      "wollt",
      "wollen",
    ]);

    checkConjugations(verb9, Tense.PAST, [
      "wollte",
      "wolltest",
      "wollte",
      "wollte",
      "wollte",
      "wollten",
      "wolltet",
      "wollten",
    ]);
  });

  test("dürfen conjugation with persons", () => {
    const verb10 = getVerb("dürfen");

    checkConjugations(verb10, Tense.PRESENT, [
      "darf",
      "darfst",
      "darf",
      "darf",
      "darf",
      "dürfen",
      "dürft",
      "dürfen",
    ]);

    checkConjugations(verb10, Tense.PAST, [
      "durfte",
      "durftest",
      "durfte",
      "durfte",
      "durfte",
      "durften",
      "durftet",
      "durften",
    ]);
  });

  test("bedürfen conjugation with persons", () => {
    const verb10 = getVerb("be+dürfen");

    checkConjugations(verb10, Tense.PRESENT, [
      "bedarf",
      "bedarfst",
      "bedarf",
      "bedarf",
      "bedarf",
      "bedürfen",
      "bedürft",
      "bedürfen",
    ]);

    checkConjugations(verb10, Tense.PAST, [
      "bedurfte",
      "bedurftest",
      "bedurfte",
      "bedurfte",
      "bedurfte",
      "bedurften",
      "bedurftet",
      "bedurften",
    ]);
  });

  test("können conjugation with persons", () => {
    const verb11 = getVerb("können");

    checkConjugations(verb11, Tense.PRESENT, [
      "kann",
      "kannst",
      "kann",
      "kann",
      "kann",
      "können",
      "könnt",
      "können",
    ]);

    checkConjugations(verb11, Tense.PAST, [
      "konnte",
      "konntest",
      "konnte",
      "konnte",
      "konnte",
      "konnten",
      "konntet",
      "konnten",
    ]);
  });

  test("müssen conjugation with persons", () => {
    const verb12 = getVerb("müssen");

    checkConjugations(verb12, Tense.PRESENT, [
      "muss",
      "musst",
      "muss",
      "muss",
      "muss",
      "müssen",
      "müsst",
      "müssen",
    ]);

    checkConjugations(verb12, Tense.PAST, [
      "musste",
      "musstest",
      "musste",
      "musste",
      "musste",
      "mussten",
      "musstet",
      "mussten",
    ]);
  });

  test("müssen conjugation with persons", () => {
    const verb12 = getVerb("sollen");

    checkConjugations(verb12, Tense.PRESENT, [
      "soll",
      "sollst",
      "soll",
      "soll",
      "soll",
      "sollen",
      "sollt",
      "sollen",
    ]);

    checkConjugations(verb12, Tense.PAST, [
      "sollte",
      "solltest",
      "sollte",
      "sollte",
      "sollte",
      "sollten",
      "solltet",
      "sollten",
    ]);
  });
});
