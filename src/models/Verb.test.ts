import { Verb } from "./Verb";
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
    const verb3 = Verb.regularVerb("kaufen");

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
    const verb1 = Verb.irregularVerb("gehen", "ging", "gegangen");

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
    const verb2 = Verb.irregularVerb("essen", "aß", "gegessen", "iss");

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
    const verb3 = Verb.irregularVerb(
      "helfen",
      "half",
      "geholfen",
      "hilf",
    );

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

  test("kneifen conjugation with persons", () => {
    const verb4 = Verb.irregularVerb("kneifen", "kniff", "gekniffen");

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
    const verb5 = Verb.irregularVerb("liegen", "lag", "gelegen");

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
    const verb6 = Verb.irregularVerb("lügen", "log", "gelogen");

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

  test("schlafen conjugation with persons", () => {
    const verb7 = Verb.irregularVerb(
      "schlafen",
      "schlief",
      "geschlafen",
      "schläf",
    );

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
    const verb8 = Verb.irregularVerb(
      "schneiden",
      "schnitt",
      "geschnitten",
    );

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
      const verb9 = Verb.modalVerb("wollen", "wollte", "gewollt", "will", "woll");

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
    const verb10 = Verb.modalVerb("dürfen", "durfte", "gedurft", "darf", "dürf");

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

  test("können conjugation with persons", () => {
    const verb11 = Verb.modalVerb("können", "konnte", "gekonnt", "kann", "könn");

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
    const verb12 = Verb.modalVerb("müssen", "musste", "gemusst", "muss", "müss");

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


});
