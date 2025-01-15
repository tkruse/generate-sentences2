import { Persons, posessionDE } from "./Person";
import { GrammaticalCase } from "./GrammaticalCase";

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
    expect(
      posessionDE(Persons.ME, "männlich", 1, GrammaticalCase.Nominative),
    ).toBe("mein");
    expect(
      posessionDE(Persons.ME, "weiblich", 1, GrammaticalCase.Nominative),
    ).toBe("meine");
    expect(
      posessionDE(Persons.ME, "neutral", 1, GrammaticalCase.Nominative),
    ).toBe("mein");
    expect(
      posessionDE(Persons.ME, "männlich", 2, GrammaticalCase.Nominative),
    ).toBe("meine");

    expect(
      posessionDE(Persons.YOU, "männlich", 1, GrammaticalCase.Nominative),
    ).toBe("dein");
    expect(
      posessionDE(Persons.YOU, "weiblich", 1, GrammaticalCase.Nominative),
    ).toBe("deine");
    expect(
      posessionDE(Persons.YOU, "neutral", 1, GrammaticalCase.Nominative),
    ).toBe("dein");
    expect(
      posessionDE(Persons.YOU, "männlich", 2, GrammaticalCase.Nominative),
    ).toBe("deine");

    expect(
      posessionDE(Persons.HE, "männlich", 1, GrammaticalCase.Nominative),
    ).toBe("sein");
    expect(
      posessionDE(Persons.HE, "weiblich", 1, GrammaticalCase.Nominative),
    ).toBe("seine");
    expect(
      posessionDE(Persons.HE, "neutral", 1, GrammaticalCase.Nominative),
    ).toBe("sein");
    expect(
      posessionDE(Persons.HE, "männlich", 2, GrammaticalCase.Nominative),
    ).toBe("seine");

    expect(
      posessionDE(Persons.SHE, "männlich", 1, GrammaticalCase.Nominative),
    ).toBe("ihr");
    expect(
      posessionDE(Persons.SHE, "weiblich", 1, GrammaticalCase.Nominative),
    ).toBe("ihre");
    expect(
      posessionDE(Persons.SHE, "neutral", 1, GrammaticalCase.Nominative),
    ).toBe("ihr");
    expect(
      posessionDE(Persons.SHE, "männlich", 2, GrammaticalCase.Nominative),
    ).toBe("ihre");

    expect(
      posessionDE(Persons.IT, "männlich", 1, GrammaticalCase.Nominative),
    ).toBe("sein");
    expect(
      posessionDE(Persons.IT, "weiblich", 1, GrammaticalCase.Nominative),
    ).toBe("seine");
    expect(
      posessionDE(Persons.IT, "neutral", 1, GrammaticalCase.Nominative),
    ).toBe("sein");
    expect(
      posessionDE(Persons.IT, "neutral", 2, GrammaticalCase.Nominative),
    ).toBe("seine");

    expect(
      posessionDE(Persons.WE, "männlich", 1, GrammaticalCase.Nominative),
    ).toBe("unser");
    expect(
      posessionDE(Persons.WE, "weiblich", 1, GrammaticalCase.Nominative),
    ).toBe("unsere");
    expect(
      posessionDE(Persons.WE, "neutral", 1, GrammaticalCase.Nominative),
    ).toBe("unser");
    expect(
      posessionDE(Persons.WE, "männlich", 2, GrammaticalCase.Nominative),
    ).toBe("unsere");

    expect(
      posessionDE(Persons.YALL, "männlich", 1, GrammaticalCase.Nominative),
    ).toBe("euer");
    expect(
      posessionDE(Persons.YALL, "weiblich", 1, GrammaticalCase.Nominative),
    ).toBe("eure");
    expect(
      posessionDE(Persons.YALL, "neutral", 1, GrammaticalCase.Nominative),
    ).toBe("euer");
    expect(
      posessionDE(Persons.YALL, "männlich", 2, GrammaticalCase.Nominative),
    ).toBe("eure");

    expect(
      posessionDE(Persons.THEY, "männlich", 1, GrammaticalCase.Nominative),
    ).toBe("ihr");
    expect(
      posessionDE(Persons.THEY, "weiblich", 1, GrammaticalCase.Nominative),
    ).toBe("ihre");
    expect(
      posessionDE(Persons.THEY, "neutral", 1, GrammaticalCase.Nominative),
    ).toBe("ihr");
    expect(
      posessionDE(Persons.THEY, "männlich", 2, GrammaticalCase.Nominative),
    ).toBe("ihre");
  });

  test("possessive pronouns nominativ", () => {
    expect(
      posessionDE(Persons.ME, "männlich", 1, GrammaticalCase.Accusative),
    ).toBe("meinen");
    expect(
      posessionDE(Persons.ME, "weiblich", 1, GrammaticalCase.Accusative),
    ).toBe("meine");
    expect(
      posessionDE(Persons.ME, "neutral", 1, GrammaticalCase.Accusative),
    ).toBe("mein");
    expect(
      posessionDE(Persons.ME, "männlich", 2, GrammaticalCase.Accusative),
    ).toBe("meine");

    expect(
      posessionDE(Persons.YOU, "männlich", 1, GrammaticalCase.Accusative),
    ).toBe("deinen");
    expect(
      posessionDE(Persons.YOU, "weiblich", 1, GrammaticalCase.Accusative),
    ).toBe("deine");
    expect(
      posessionDE(Persons.YOU, "neutral", 1, GrammaticalCase.Accusative),
    ).toBe("dein");
    expect(
      posessionDE(Persons.YOU, "männlich", 2, GrammaticalCase.Accusative),
    ).toBe("deine");

    expect(
      posessionDE(Persons.HE, "männlich", 1, GrammaticalCase.Accusative),
    ).toBe("seinen");
    expect(
      posessionDE(Persons.HE, "weiblich", 1, GrammaticalCase.Accusative),
    ).toBe("seine");
    expect(
      posessionDE(Persons.HE, "neutral", 1, GrammaticalCase.Accusative),
    ).toBe("sein");
    expect(
      posessionDE(Persons.HE, "männlich", 2, GrammaticalCase.Accusative),
    ).toBe("seine");

    expect(
      posessionDE(Persons.SHE, "männlich", 1, GrammaticalCase.Accusative),
    ).toBe("ihren");
    expect(
      posessionDE(Persons.SHE, "weiblich", 1, GrammaticalCase.Accusative),
    ).toBe("ihre");
    expect(
      posessionDE(Persons.SHE, "neutral", 1, GrammaticalCase.Accusative),
    ).toBe("ihr");
    expect(
      posessionDE(Persons.SHE, "männlich", 2, GrammaticalCase.Accusative),
    ).toBe("ihre");

    expect(
      posessionDE(Persons.IT, "männlich", 1, GrammaticalCase.Accusative),
    ).toBe("seinen");
    expect(
      posessionDE(Persons.IT, "weiblich", 1, GrammaticalCase.Accusative),
    ).toBe("seine");
    expect(
      posessionDE(Persons.IT, "neutral", 1, GrammaticalCase.Accusative),
    ).toBe("sein");
    expect(
      posessionDE(Persons.IT, "neutral", 2, GrammaticalCase.Accusative),
    ).toBe("seine");

    expect(
      posessionDE(Persons.WE, "männlich", 1, GrammaticalCase.Accusative),
    ).toBe("unseren");
    expect(
      posessionDE(Persons.WE, "weiblich", 1, GrammaticalCase.Accusative),
    ).toBe("unsere");
    expect(
      posessionDE(Persons.WE, "neutral", 1, GrammaticalCase.Accusative),
    ).toBe("unser");
    expect(
      posessionDE(Persons.WE, "männlich", 2, GrammaticalCase.Accusative),
    ).toBe("unsere");

    expect(
      posessionDE(Persons.YALL, "männlich", 1, GrammaticalCase.Accusative),
    ).toBe("euren");
    expect(
      posessionDE(Persons.YALL, "weiblich", 1, GrammaticalCase.Accusative),
    ).toBe("eure");
    expect(
      posessionDE(Persons.YALL, "neutral", 1, GrammaticalCase.Accusative),
    ).toBe("euer");
    expect(
      posessionDE(Persons.YALL, "männlich", 2, GrammaticalCase.Accusative),
    ).toBe("eure");

    expect(
      posessionDE(Persons.THEY, "männlich", 1, GrammaticalCase.Accusative),
    ).toBe("ihren");
    expect(
      posessionDE(Persons.THEY, "weiblich", 1, GrammaticalCase.Accusative),
    ).toBe("ihre");
    expect(
      posessionDE(Persons.THEY, "neutral", 1, GrammaticalCase.Accusative),
    ).toBe("ihr");
    expect(
      posessionDE(Persons.THEY, "männlich", 2, GrammaticalCase.Accusative),
    ).toBe("ihre");
  });
  test("possessive pronouns dativ", () => {
    expect(posessionDE(Persons.ME, "männlich", 1, GrammaticalCase.Dative)).toBe(
      "meinem",
    );
    expect(posessionDE(Persons.ME, "weiblich", 1, GrammaticalCase.Dative)).toBe(
      "meiner",
    );
    expect(posessionDE(Persons.ME, "neutral", 1, GrammaticalCase.Dative)).toBe(
      "meinem",
    );
    expect(posessionDE(Persons.ME, "männlich", 2, GrammaticalCase.Dative)).toBe(
      "meinen",
    );

    expect(
      posessionDE(Persons.YOU, "männlich", 1, GrammaticalCase.Dative),
    ).toBe("deinem");
    expect(
      posessionDE(Persons.YOU, "weiblich", 1, GrammaticalCase.Dative),
    ).toBe("deiner");
    expect(posessionDE(Persons.YOU, "neutral", 1, GrammaticalCase.Dative)).toBe(
      "deinem",
    );
    expect(
      posessionDE(Persons.YOU, "männlich", 2, GrammaticalCase.Dative),
    ).toBe("deinen");

    expect(posessionDE(Persons.HE, "männlich", 1, GrammaticalCase.Dative)).toBe(
      "seinem",
    );
    expect(posessionDE(Persons.HE, "weiblich", 1, GrammaticalCase.Dative)).toBe(
      "seiner",
    );
    expect(posessionDE(Persons.HE, "neutral", 1, GrammaticalCase.Dative)).toBe(
      "seinem",
    );
    expect(posessionDE(Persons.HE, "männlich", 2, GrammaticalCase.Dative)).toBe(
      "seinen",
    );

    expect(
      posessionDE(Persons.SHE, "männlich", 1, GrammaticalCase.Dative),
    ).toBe("ihrem");
    expect(
      posessionDE(Persons.SHE, "weiblich", 1, GrammaticalCase.Dative),
    ).toBe("ihrer");
    expect(posessionDE(Persons.SHE, "neutral", 1, GrammaticalCase.Dative)).toBe(
      "ihrem",
    );
    expect(
      posessionDE(Persons.SHE, "männlich", 2, GrammaticalCase.Dative),
    ).toBe("ihren");

    expect(posessionDE(Persons.IT, "männlich", 1, GrammaticalCase.Dative)).toBe(
      "seinem",
    );
    expect(posessionDE(Persons.IT, "weiblich", 1, GrammaticalCase.Dative)).toBe(
      "seiner",
    );
    expect(posessionDE(Persons.IT, "neutral", 1, GrammaticalCase.Dative)).toBe(
      "seinem",
    );
    expect(posessionDE(Persons.IT, "neutral", 2, GrammaticalCase.Dative)).toBe(
      "seinen",
    );

    expect(posessionDE(Persons.WE, "männlich", 1, GrammaticalCase.Dative)).toBe(
      "unserem",
    );
    expect(posessionDE(Persons.WE, "weiblich", 1, GrammaticalCase.Dative)).toBe(
      "unserer",
    );
    expect(posessionDE(Persons.WE, "neutral", 1, GrammaticalCase.Dative)).toBe(
      "unserem",
    );
    expect(posessionDE(Persons.WE, "männlich", 2, GrammaticalCase.Dative)).toBe(
      "unseren",
    );

    expect(
      posessionDE(Persons.YALL, "männlich", 1, GrammaticalCase.Dative),
    ).toBe("eurem");
    expect(
      posessionDE(Persons.YALL, "weiblich", 1, GrammaticalCase.Dative),
    ).toBe("eurer");
    expect(
      posessionDE(Persons.YALL, "neutral", 1, GrammaticalCase.Dative),
    ).toBe("eurem");
    expect(
      posessionDE(Persons.YALL, "männlich", 2, GrammaticalCase.Dative),
    ).toBe("euren");

    expect(
      posessionDE(Persons.THEY, "männlich", 1, GrammaticalCase.Dative),
    ).toBe("ihrem");
    expect(
      posessionDE(Persons.THEY, "weiblich", 1, GrammaticalCase.Dative),
    ).toBe("ihrer");
    expect(
      posessionDE(Persons.THEY, "neutral", 1, GrammaticalCase.Dative),
    ).toBe("ihrem");
    expect(
      posessionDE(Persons.THEY, "männlich", 2, GrammaticalCase.Dative),
    ).toBe("ihren");
  });
  test("possessive pronouns genitiv", () => {
    expect(
      posessionDE(Persons.ME, "männlich", 1, GrammaticalCase.Genitive),
    ).toBe("meines");
    expect(
      posessionDE(Persons.ME, "weiblich", 1, GrammaticalCase.Genitive),
    ).toBe("meiner");
    expect(
      posessionDE(Persons.ME, "neutral", 1, GrammaticalCase.Genitive),
    ).toBe("meines");
    expect(
      posessionDE(Persons.ME, "männlich", 2, GrammaticalCase.Genitive),
    ).toBe("meiner");

    expect(
      posessionDE(Persons.YOU, "männlich", 1, GrammaticalCase.Genitive),
    ).toBe("deines");
    expect(
      posessionDE(Persons.YOU, "weiblich", 1, GrammaticalCase.Genitive),
    ).toBe("deiner");
    expect(
      posessionDE(Persons.YOU, "neutral", 1, GrammaticalCase.Genitive),
    ).toBe("deines");
    expect(
      posessionDE(Persons.YOU, "männlich", 2, GrammaticalCase.Genitive),
    ).toBe("deiner");

    expect(
      posessionDE(Persons.HE, "männlich", 1, GrammaticalCase.Genitive),
    ).toBe("seines");
    expect(
      posessionDE(Persons.HE, "weiblich", 1, GrammaticalCase.Genitive),
    ).toBe("seiner");
    expect(
      posessionDE(Persons.HE, "neutral", 1, GrammaticalCase.Genitive),
    ).toBe("seines");
    expect(
      posessionDE(Persons.HE, "männlich", 2, GrammaticalCase.Genitive),
    ).toBe("seiner");

    expect(
      posessionDE(Persons.SHE, "männlich", 1, GrammaticalCase.Genitive),
    ).toBe("ihres");
    expect(
      posessionDE(Persons.SHE, "weiblich", 1, GrammaticalCase.Genitive),
    ).toBe("ihrer");
    expect(
      posessionDE(Persons.SHE, "neutral", 1, GrammaticalCase.Genitive),
    ).toBe("ihres");
    expect(
      posessionDE(Persons.SHE, "männlich", 2, GrammaticalCase.Genitive),
    ).toBe("ihrer");

    expect(
      posessionDE(Persons.IT, "männlich", 1, GrammaticalCase.Genitive),
    ).toBe("seines");
    expect(
      posessionDE(Persons.IT, "weiblich", 1, GrammaticalCase.Genitive),
    ).toBe("seiner");
    expect(
      posessionDE(Persons.IT, "neutral", 1, GrammaticalCase.Genitive),
    ).toBe("seines");
    expect(
      posessionDE(Persons.IT, "neutral", 2, GrammaticalCase.Genitive),
    ).toBe("seiner");

    expect(
      posessionDE(Persons.WE, "männlich", 1, GrammaticalCase.Genitive),
    ).toBe("unseres");
    expect(
      posessionDE(Persons.WE, "weiblich", 1, GrammaticalCase.Genitive),
    ).toBe("unserer");
    expect(
      posessionDE(Persons.WE, "neutral", 1, GrammaticalCase.Genitive),
    ).toBe("unseres");
    expect(
      posessionDE(Persons.WE, "männlich", 2, GrammaticalCase.Genitive),
    ).toBe("unserer");

    expect(
      posessionDE(Persons.YALL, "männlich", 1, GrammaticalCase.Genitive),
    ).toBe("eures");
    expect(
      posessionDE(Persons.YALL, "weiblich", 1, GrammaticalCase.Genitive),
    ).toBe("eurer");
    expect(
      posessionDE(Persons.YALL, "neutral", 1, GrammaticalCase.Genitive),
    ).toBe("eures");
    expect(
      posessionDE(Persons.YALL, "männlich", 2, GrammaticalCase.Genitive),
    ).toBe("eurer");

    expect(
      posessionDE(Persons.THEY, "männlich", 1, GrammaticalCase.Genitive),
    ).toBe("ihres");
    expect(
      posessionDE(Persons.THEY, "weiblich", 1, GrammaticalCase.Genitive),
    ).toBe("ihrer");
    expect(
      posessionDE(Persons.THEY, "neutral", 1, GrammaticalCase.Genitive),
    ).toBe("ihres");
    expect(
      posessionDE(Persons.THEY, "männlich", 2, GrammaticalCase.Genitive),
    ).toBe("ihrer");
  });
});
