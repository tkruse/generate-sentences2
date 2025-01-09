import { Noun } from "./Noun";
import { Persons } from "./Person";

describe("Noun", () => {
  test("renderNounNeutral", () => {
    const noun = () => new Noun("das Bett,-en,-es");
    expect(noun().renderDE(false)).toBe("ein Bett");
    expect(noun().accusative().renderDE(false)).toBe("ein Bett");
    expect(noun().dative().renderDE(false)).toBe("einem Bett");
    expect(noun().genitive().renderDE(false)).toBe("eines Bettes");
    expect(noun().specific().accusative().renderDE(false)).toBe("das Bett");
    expect(noun().specific().dative().renderDE(false)).toBe("dem Bett");
    expect(noun().specific().genitive().renderDE(false)).toBe("des Bettes");
    expect(noun().negated().accusative().renderDE(false)).toBe("kein Bett");
    expect(noun().negated().dative().renderDE(false)).toBe("keinem Bett");
    expect(noun().negated().genitive().renderDE(false)).toBe("keines Bettes");

    expect(noun().possessed(Persons.ME).nominative().renderDE(false)).toBe(
      "mein Bett",
    );
    expect(noun().possessed(Persons.ME).accusative().renderDE(false)).toBe(
      "mein Bett",
    );
    expect(noun().possessed(Persons.ME).dative().renderDE(false)).toBe(
      "meinem Bett",
    );
    expect(noun().possessed(Persons.ME).genitive().renderDE(false)).toBe(
      "meines Bettes",
    );
    expect(noun().possessed(Persons.YOU).nominative().renderDE(false)).toBe(
      "dein Bett",
    );
    expect(noun().possessed(Persons.YOU).accusative().renderDE(false)).toBe(
      "dein Bett",
    );
    expect(noun().possessed(Persons.YOU).dative().renderDE(false)).toBe(
      "deinem Bett",
    );
    expect(noun().possessed(Persons.YOU).genitive().renderDE(false)).toBe(
      "deines Bettes",
    );
    expect(noun().possessed(Persons.SHE).nominative().renderDE(false)).toBe(
      "ihr Bett",
    );
    expect(noun().possessed(Persons.SHE).accusative().renderDE(false)).toBe(
      "ihr Bett",
    );
    expect(noun().possessed(Persons.SHE).dative().renderDE(false)).toBe(
      "ihrem Bett",
    );
    expect(noun().possessed(Persons.SHE).genitive().renderDE(false)).toBe(
      "ihres Bettes",
    );
    expect(noun().possessed(Persons.WE).nominative().renderDE(false)).toBe(
      "unser Bett",
    );
    expect(noun().possessed(Persons.WE).accusative().renderDE(false)).toBe(
      "unser Bett",
    );
    expect(noun().possessed(Persons.WE).dative().renderDE(false)).toBe(
      "unserem Bett",
    );
    expect(noun().possessed(Persons.WE).genitive().renderDE(false)).toBe(
      "unseres Bettes",
    );
    expect(noun().possessed(Persons.YALL).nominative().renderDE(false)).toBe(
      "euer Bett",
    );
    expect(noun().possessed(Persons.YALL).accusative().renderDE(false)).toBe(
      "euer Bett",
    );
    expect(noun().possessed(Persons.YALL).dative().renderDE(false)).toBe(
      "eurem Bett",
    );
    expect(noun().possessed(Persons.YALL).genitive().renderDE(false)).toBe(
      "eures Bettes",
    );
    expect(noun().possessed(Persons.THEY).nominative().renderDE(false)).toBe(
      "ihr Bett",
    );
    expect(noun().possessed(Persons.THEY).accusative().renderDE(false)).toBe(
      "ihr Bett",
    );
    expect(noun().possessed(Persons.THEY).dative().renderDE(false)).toBe(
      "ihrem Bett",
    );
    expect(noun().possessed(Persons.THEY).genitive().renderDE(false)).toBe(
      "ihres Bettes",
    );
  });

  test("renderNounFemale", () => {
    const noun = () => new Noun("die Gabel,-n,-");
    expect(noun().renderDE(false)).toBe("eine Gabel");
    expect(noun().accusative().renderDE(false)).toBe("eine Gabel");
    expect(noun().dative().renderDE(false)).toBe("einer Gabel");
    expect(noun().genitive().renderDE(false)).toBe("einer Gabel");
    expect(noun().specific().accusative().renderDE(false)).toBe("die Gabel");
    expect(noun().specific().dative().renderDE(false)).toBe("der Gabel");
    expect(noun().specific().genitive().renderDE(false)).toBe("der Gabel");
    expect(noun().negated().accusative().renderDE(false)).toBe("keine Gabel");
    expect(noun().negated().dative().renderDE(false)).toBe("keiner Gabel");
    expect(noun().negated().genitive().renderDE(false)).toBe("keiner Gabel");
    expect(noun().possessed(Persons.ME).nominative().renderDE(false)).toBe(
      "meine Gabel",
    );
    expect(noun().possessed(Persons.ME).accusative().renderDE(false)).toBe(
      "meine Gabel",
    );
    expect(noun().possessed(Persons.ME).dative().renderDE(false)).toBe(
      "meiner Gabel",
    );
    expect(noun().possessed(Persons.ME).genitive().renderDE(false)).toBe(
      "meiner Gabel",
    );
    expect(noun().possessed(Persons.YOU).nominative().renderDE(false)).toBe(
      "deine Gabel",
    );
    expect(noun().possessed(Persons.YOU).accusative().renderDE(false)).toBe(
      "deine Gabel",
    );
    expect(noun().possessed(Persons.YOU).dative().renderDE(false)).toBe(
      "deiner Gabel",
    );
    expect(noun().possessed(Persons.YOU).genitive().renderDE(false)).toBe(
      "deiner Gabel",
    );
    expect(noun().possessed(Persons.SHE).nominative().renderDE(false)).toBe(
      "ihre Gabel",
    );
    expect(noun().possessed(Persons.SHE).accusative().renderDE(false)).toBe(
      "ihre Gabel",
    );
    expect(noun().possessed(Persons.SHE).dative().renderDE(false)).toBe(
      "ihrer Gabel",
    );
    expect(noun().possessed(Persons.SHE).genitive().renderDE(false)).toBe(
      "ihrer Gabel",
    );
    expect(noun().possessed(Persons.WE).nominative().renderDE(false)).toBe(
      "unsere Gabel",
    );
    expect(noun().possessed(Persons.WE).accusative().renderDE(false)).toBe(
      "unsere Gabel",
    );
    expect(noun().possessed(Persons.WE).dative().renderDE(false)).toBe(
      "unserer Gabel",
    );
    expect(noun().possessed(Persons.WE).genitive().renderDE(false)).toBe(
      "unserer Gabel",
    );
    expect(noun().possessed(Persons.YALL).nominative().renderDE(false)).toBe(
      "eure Gabel",
    );
    expect(noun().possessed(Persons.YALL).accusative().renderDE(false)).toBe(
      "eure Gabel",
    );
    expect(noun().possessed(Persons.YALL).dative().renderDE(false)).toBe(
      "eurer Gabel",
    );
    expect(noun().possessed(Persons.YALL).genitive().renderDE(false)).toBe(
      "eurer Gabel",
    );
    expect(noun().possessed(Persons.THEY).nominative().renderDE(false)).toBe(
      "ihre Gabel",
    );
    expect(noun().possessed(Persons.THEY).accusative().renderDE(false)).toBe(
      "ihre Gabel",
    );
    expect(noun().possessed(Persons.THEY).dative().renderDE(false)).toBe(
      "ihrer Gabel",
    );
    expect(noun().possessed(Persons.THEY).genitive().renderDE(false)).toBe(
      "ihrer Gabel",
    );
  });

  test("renderNounMale", () => {
    const noun = () => new Noun("der Schuh,-e,-es");
    expect(noun().renderDE(false)).toBe("ein Schuh");
    expect(noun().accusative().renderDE(false)).toBe("einen Schuh");
    expect(noun().dative().renderDE(false)).toBe("einem Schuh");
    expect(noun().genitive().renderDE(false)).toBe("eines Schuhes");
    expect(noun().specific().accusative().renderDE(false)).toBe("den Schuh");
    expect(noun().specific().dative().renderDE(false)).toBe("dem Schuh");
    expect(noun().specific().genitive().renderDE(false)).toBe("des Schuhes");
    expect(noun().negated().accusative().renderDE(false)).toBe("keinen Schuh");
    expect(noun().negated().dative().renderDE(false)).toBe("keinem Schuh");
    expect(noun().negated().genitive().renderDE(false)).toBe("keines Schuhes");
    expect(noun().possessed(Persons.ME).nominative().renderDE(false)).toBe(
      "mein Schuh",
    );
    expect(noun().possessed(Persons.ME).accusative().renderDE(false)).toBe(
      "meinen Schuh",
    );
    expect(noun().possessed(Persons.ME).dative().renderDE(false)).toBe(
      "meinem Schuh",
    );
    expect(noun().possessed(Persons.ME).genitive().renderDE(false)).toBe(
      "meines Schuhes",
    );
    expect(noun().possessed(Persons.YOU).nominative().renderDE(false)).toBe(
      "dein Schuh",
    );
    expect(noun().possessed(Persons.YOU).accusative().renderDE(false)).toBe(
      "deinen Schuh",
    );
    expect(noun().possessed(Persons.YOU).dative().renderDE(false)).toBe(
      "deinem Schuh",
    );
    expect(noun().possessed(Persons.YOU).genitive().renderDE(false)).toBe(
      "deines Schuhes",
    );
    expect(noun().possessed(Persons.SHE).nominative().renderDE(false)).toBe(
      "ihr Schuh",
    );
    expect(noun().possessed(Persons.SHE).accusative().renderDE(false)).toBe(
      "ihren Schuh",
    );
    expect(noun().possessed(Persons.SHE).dative().renderDE(false)).toBe(
      "ihrem Schuh",
    );
    expect(noun().possessed(Persons.SHE).genitive().renderDE(false)).toBe(
      "ihres Schuhes",
    );
    expect(noun().possessed(Persons.WE).nominative().renderDE(false)).toBe(
      "unser Schuh",
    );
    expect(noun().possessed(Persons.WE).accusative().renderDE(false)).toBe(
      "unseren Schuh",
    );
    expect(noun().possessed(Persons.WE).dative().renderDE(false)).toBe(
      "unserem Schuh",
    );
    expect(noun().possessed(Persons.WE).genitive().renderDE(false)).toBe(
      "unseres Schuhes",
    );
    expect(noun().possessed(Persons.YALL).nominative().renderDE(false)).toBe(
      "euer Schuh",
    );
    expect(noun().possessed(Persons.YALL).accusative().renderDE(false)).toBe(
      "euren Schuh",
    );
    expect(noun().possessed(Persons.YALL).dative().renderDE(false)).toBe(
      "eurem Schuh",
    );
    expect(noun().possessed(Persons.YALL).genitive().renderDE(false)).toBe(
      "eures Schuhes",
    );
    expect(noun().possessed(Persons.THEY).nominative().renderDE(false)).toBe(
      "ihr Schuh",
    );
    expect(noun().possessed(Persons.THEY).accusative().renderDE(false)).toBe(
      "ihren Schuh",
    );
    expect(noun().possessed(Persons.THEY).dative().renderDE(false)).toBe(
      "ihrem Schuh",
    );
    expect(noun().possessed(Persons.THEY).genitive().renderDE(false)).toBe(
      "ihres Schuhes",
    );
  });
});
