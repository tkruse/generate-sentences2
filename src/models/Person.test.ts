import { Persons, posessionDE } from "./Person";

describe("Pronouns", () => {
  test("personal pronouns nominative", () => {
    expect(Persons.ME.pronouns().nominative()).toBe("ich");
    expect(Persons.YOU.pronouns().nominative()).toBe("du");
    expect(Persons.HE.pronouns().nominative()).toBe("er");
    expect(Persons.SHE.pronouns().nominative()).toBe("sie");
    expect(Persons.IT.pronouns().nominative()).toBe("es");
    expect(Persons.WE.pronouns().nominative()).toBe("wir");
    expect(Persons.YALL.pronouns().nominative()).toBe("ihr");
    expect(Persons.THEY.pronouns().nominative()).toBe("sie");
  });

  test("personal pronouns accusative", () => {
    expect(Persons.ME.pronouns().reflexiveAkkusative()).toBe("mich");
    expect(Persons.YOU.pronouns().reflexiveAkkusative()).toBe("dich");
    expect(Persons.HE.pronouns().reflexiveAkkusative()).toBe("sich");
    expect(Persons.SHE.pronouns().reflexiveAkkusative()).toBe("sich");
    expect(Persons.IT.pronouns().reflexiveAkkusative()).toBe("sich");
    expect(Persons.WE.pronouns().reflexiveAkkusative()).toBe("uns");
    expect(Persons.YALL.pronouns().reflexiveAkkusative()).toBe("euch");
    expect(Persons.THEY.pronouns().reflexiveAkkusative()).toBe("sich");
  });

  test("personal pronouns dative", () => {
    expect(Persons.ME.pronouns().reflexiveDative()).toBe("mir");
    expect(Persons.YOU.pronouns().reflexiveDative()).toBe("dir");
    expect(Persons.HE.pronouns().reflexiveDative()).toBe("ihm");
    expect(Persons.SHE.pronouns().reflexiveDative()).toBe("ihr");
    expect(Persons.IT.pronouns().reflexiveDative()).toBe("ihm");
    expect(Persons.WE.pronouns().reflexiveDative()).toBe("uns");
    expect(Persons.YALL.pronouns().reflexiveDative()).toBe("euch");
    expect(Persons.THEY.pronouns().reflexiveDative()).toBe("ihnen");
  });

  test("possessive pronouns nominativ", () => {
    expect(posessionDE(Persons.ME, "männlich", 1, "nominative")).toBe("mein");
    expect(posessionDE(Persons.ME, "weiblich", 1, "nominative")).toBe("meine");
    expect(posessionDE(Persons.ME, "neutral", 1, "nominative")).toBe("mein");
    expect(posessionDE(Persons.ME, "männlich", 2, "nominative")).toBe("meine");

    expect(posessionDE(Persons.YOU, "männlich", 1, "nominative")).toBe("dein");
    expect(posessionDE(Persons.YOU, "weiblich", 1, "nominative")).toBe("deine");
    expect(posessionDE(Persons.YOU, "neutral", 1, "nominative")).toBe("dein");
    expect(posessionDE(Persons.YOU, "männlich", 2, "nominative")).toBe("deine");

    expect(posessionDE(Persons.HE, "männlich", 1, "nominative")).toBe("sein");
    expect(posessionDE(Persons.HE, "weiblich", 1, "nominative")).toBe("seine");
    expect(posessionDE(Persons.HE, "neutral", 1, "nominative")).toBe("sein");
    expect(posessionDE(Persons.HE, "männlich", 2, "nominative")).toBe("seine");

    expect(posessionDE(Persons.SHE, "männlich", 1, "nominative")).toBe("ihr");
    expect(posessionDE(Persons.SHE, "weiblich", 1, "nominative")).toBe("ihre");
    expect(posessionDE(Persons.SHE, "neutral", 1, "nominative")).toBe("ihr");
    expect(posessionDE(Persons.SHE, "männlich", 2, "nominative")).toBe("ihre");

    expect(posessionDE(Persons.IT, "männlich", 1, "nominative")).toBe("sein");
    expect(posessionDE(Persons.IT, "weiblich", 1, "nominative")).toBe("seine");
    expect(posessionDE(Persons.IT, "neutral", 1, "nominative")).toBe("sein");
    expect(posessionDE(Persons.IT, "neutral", 2, "nominative")).toBe("seine");

    expect(posessionDE(Persons.WE, "männlich", 1, "nominative")).toBe("unser");
    expect(posessionDE(Persons.WE, "weiblich", 1, "nominative")).toBe("unsere");
    expect(posessionDE(Persons.WE, "neutral", 1, "nominative")).toBe("unser");
    expect(posessionDE(Persons.WE, "männlich", 2, "nominative")).toBe("unsere");

    expect(posessionDE(Persons.YALL, "männlich", 1, "nominative")).toBe("euer");
    expect(posessionDE(Persons.YALL, "weiblich", 1, "nominative")).toBe("eure");
    expect(posessionDE(Persons.YALL, "neutral", 1, "nominative")).toBe("euer");
    expect(posessionDE(Persons.YALL, "männlich", 2, "nominative")).toBe("eure");

    expect(posessionDE(Persons.THEY, "männlich", 1, "nominative")).toBe("ihr");
    expect(posessionDE(Persons.THEY, "weiblich", 1, "nominative")).toBe("ihre");
    expect(posessionDE(Persons.THEY, "neutral", 1, "nominative")).toBe("ihr");
    expect(posessionDE(Persons.THEY, "männlich", 2, "nominative")).toBe("ihre");
  });

  test("possessive pronouns nominativ", () => {
    expect(posessionDE(Persons.ME, "männlich", 1, "accusative")).toBe("meinen");
    expect(posessionDE(Persons.ME, "weiblich", 1, "accusative")).toBe("meine");
    expect(posessionDE(Persons.ME, "neutral", 1, "accusative")).toBe("mein");
    expect(posessionDE(Persons.ME, "männlich", 2, "accusative")).toBe("meine");

    expect(posessionDE(Persons.YOU, "männlich", 1, "accusative")).toBe(
      "deinen",
    );
    expect(posessionDE(Persons.YOU, "weiblich", 1, "accusative")).toBe("deine");
    expect(posessionDE(Persons.YOU, "neutral", 1, "accusative")).toBe("dein");
    expect(posessionDE(Persons.YOU, "männlich", 2, "accusative")).toBe("deine");

    expect(posessionDE(Persons.HE, "männlich", 1, "accusative")).toBe("seinen");
    expect(posessionDE(Persons.HE, "weiblich", 1, "accusative")).toBe("seine");
    expect(posessionDE(Persons.HE, "neutral", 1, "accusative")).toBe("sein");
    expect(posessionDE(Persons.HE, "männlich", 2, "accusative")).toBe("seine");

    expect(posessionDE(Persons.SHE, "männlich", 1, "accusative")).toBe("ihren");
    expect(posessionDE(Persons.SHE, "weiblich", 1, "accusative")).toBe("ihre");
    expect(posessionDE(Persons.SHE, "neutral", 1, "accusative")).toBe("ihr");
    expect(posessionDE(Persons.SHE, "männlich", 2, "accusative")).toBe("ihre");

    expect(posessionDE(Persons.IT, "männlich", 1, "accusative")).toBe("seinen");
    expect(posessionDE(Persons.IT, "weiblich", 1, "accusative")).toBe("seine");
    expect(posessionDE(Persons.IT, "neutral", 1, "accusative")).toBe("sein");
    expect(posessionDE(Persons.IT, "neutral", 2, "accusative")).toBe("seine");

    expect(posessionDE(Persons.WE, "männlich", 1, "accusative")).toBe(
      "unseren",
    );
    expect(posessionDE(Persons.WE, "weiblich", 1, "accusative")).toBe("unsere");
    expect(posessionDE(Persons.WE, "neutral", 1, "accusative")).toBe("unser");
    expect(posessionDE(Persons.WE, "männlich", 2, "accusative")).toBe("unsere");

    expect(posessionDE(Persons.YALL, "männlich", 1, "accusative")).toBe(
      "euren",
    );
    expect(posessionDE(Persons.YALL, "weiblich", 1, "accusative")).toBe("eure");
    expect(posessionDE(Persons.YALL, "neutral", 1, "accusative")).toBe("euer");
    expect(posessionDE(Persons.YALL, "männlich", 2, "accusative")).toBe("eure");

    expect(posessionDE(Persons.THEY, "männlich", 1, "accusative")).toBe(
      "ihren",
    );
    expect(posessionDE(Persons.THEY, "weiblich", 1, "accusative")).toBe("ihre");
    expect(posessionDE(Persons.THEY, "neutral", 1, "accusative")).toBe("ihr");
    expect(posessionDE(Persons.THEY, "männlich", 2, "accusative")).toBe("ihre");
  });
  test("possessive pronouns dativ", () => {
    expect(posessionDE(Persons.ME, "männlich", 1, "dative")).toBe("meinem");
    expect(posessionDE(Persons.ME, "weiblich", 1, "dative")).toBe("meiner");
    expect(posessionDE(Persons.ME, "neutral", 1, "dative")).toBe("meinem");
    expect(posessionDE(Persons.ME, "männlich", 2, "dative")).toBe("meinen");

    expect(posessionDE(Persons.YOU, "männlich", 1, "dative")).toBe("deinem");
    expect(posessionDE(Persons.YOU, "weiblich", 1, "dative")).toBe("deiner");
    expect(posessionDE(Persons.YOU, "neutral", 1, "dative")).toBe("deinem");
    expect(posessionDE(Persons.YOU, "männlich", 2, "dative")).toBe("deinen");

    expect(posessionDE(Persons.HE, "männlich", 1, "dative")).toBe("seinem");
    expect(posessionDE(Persons.HE, "weiblich", 1, "dative")).toBe("seiner");
    expect(posessionDE(Persons.HE, "neutral", 1, "dative")).toBe("seinem");
    expect(posessionDE(Persons.HE, "männlich", 2, "dative")).toBe("seinen");

    expect(posessionDE(Persons.SHE, "männlich", 1, "dative")).toBe("ihrem");
    expect(posessionDE(Persons.SHE, "weiblich", 1, "dative")).toBe("ihrer");
    expect(posessionDE(Persons.SHE, "neutral", 1, "dative")).toBe("ihrem");
    expect(posessionDE(Persons.SHE, "männlich", 2, "dative")).toBe("ihren");

    expect(posessionDE(Persons.IT, "männlich", 1, "dative")).toBe("seinem");
    expect(posessionDE(Persons.IT, "weiblich", 1, "dative")).toBe("seiner");
    expect(posessionDE(Persons.IT, "neutral", 1, "dative")).toBe("seinem");
    expect(posessionDE(Persons.IT, "neutral", 2, "dative")).toBe("seinen");

    expect(posessionDE(Persons.WE, "männlich", 1, "dative")).toBe("unserem");
    expect(posessionDE(Persons.WE, "weiblich", 1, "dative")).toBe("unserer");
    expect(posessionDE(Persons.WE, "neutral", 1, "dative")).toBe("unserem");
    expect(posessionDE(Persons.WE, "männlich", 2, "dative")).toBe("unseren");

    expect(posessionDE(Persons.YALL, "männlich", 1, "dative")).toBe("eurem");
    expect(posessionDE(Persons.YALL, "weiblich", 1, "dative")).toBe("eurer");
    expect(posessionDE(Persons.YALL, "neutral", 1, "dative")).toBe("eurem");
    expect(posessionDE(Persons.YALL, "männlich", 2, "dative")).toBe("euren");

    expect(posessionDE(Persons.THEY, "männlich", 1, "dative")).toBe("ihrem");
    expect(posessionDE(Persons.THEY, "weiblich", 1, "dative")).toBe("ihrer");
    expect(posessionDE(Persons.THEY, "neutral", 1, "dative")).toBe("ihrem");
    expect(posessionDE(Persons.THEY, "männlich", 2, "dative")).toBe("ihren");
  });
  test("possessive pronouns genitiv", () => {
    expect(posessionDE(Persons.ME, "männlich", 1, "genitive")).toBe("meines");
    expect(posessionDE(Persons.ME, "weiblich", 1, "genitive")).toBe("meiner");
    expect(posessionDE(Persons.ME, "neutral", 1, "genitive")).toBe("meines");
    expect(posessionDE(Persons.ME, "männlich", 2, "genitive")).toBe("meiner");

    expect(posessionDE(Persons.YOU, "männlich", 1, "genitive")).toBe("deines");
    expect(posessionDE(Persons.YOU, "weiblich", 1, "genitive")).toBe("deiner");
    expect(posessionDE(Persons.YOU, "neutral", 1, "genitive")).toBe("deines");
    expect(posessionDE(Persons.YOU, "männlich", 2, "genitive")).toBe("deiner");

    expect(posessionDE(Persons.HE, "männlich", 1, "genitive")).toBe("seines");
    expect(posessionDE(Persons.HE, "weiblich", 1, "genitive")).toBe("seiner");
    expect(posessionDE(Persons.HE, "neutral", 1, "genitive")).toBe("seines");
    expect(posessionDE(Persons.HE, "männlich", 2, "genitive")).toBe("seiner");

    expect(posessionDE(Persons.SHE, "männlich", 1, "genitive")).toBe("ihres");
    expect(posessionDE(Persons.SHE, "weiblich", 1, "genitive")).toBe("ihrer");
    expect(posessionDE(Persons.SHE, "neutral", 1, "genitive")).toBe("ihres");
    expect(posessionDE(Persons.SHE, "männlich", 2, "genitive")).toBe("ihrer");

    expect(posessionDE(Persons.IT, "männlich", 1, "genitive")).toBe("seines");
    expect(posessionDE(Persons.IT, "weiblich", 1, "genitive")).toBe("seiner");
    expect(posessionDE(Persons.IT, "neutral", 1, "genitive")).toBe("seines");
    expect(posessionDE(Persons.IT, "neutral", 2, "genitive")).toBe("seiner");

    expect(posessionDE(Persons.WE, "männlich", 1, "genitive")).toBe("unseres");
    expect(posessionDE(Persons.WE, "weiblich", 1, "genitive")).toBe("unserer");
    expect(posessionDE(Persons.WE, "neutral", 1, "genitive")).toBe("unseres");
    expect(posessionDE(Persons.WE, "männlich", 2, "genitive")).toBe("unserer");

    expect(posessionDE(Persons.YALL, "männlich", 1, "genitive")).toBe("eures");
    expect(posessionDE(Persons.YALL, "weiblich", 1, "genitive")).toBe("eurer");
    expect(posessionDE(Persons.YALL, "neutral", 1, "genitive")).toBe("eures");
    expect(posessionDE(Persons.YALL, "männlich", 2, "genitive")).toBe("eurer");

    expect(posessionDE(Persons.THEY, "männlich", 1, "genitive")).toBe("ihres");
    expect(posessionDE(Persons.THEY, "weiblich", 1, "genitive")).toBe("ihrer");
    expect(posessionDE(Persons.THEY, "neutral", 1, "genitive")).toBe("ihres");
    expect(posessionDE(Persons.THEY, "männlich", 2, "genitive")).toBe("ihrer");
  });
});
