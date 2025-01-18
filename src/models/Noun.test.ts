import { Noun } from "./Noun";
import { Persons } from "./Person";

describe("Noun", () => {
  test("renderNounNeutral", () => {
    const noun = () => new Noun("das Bett,-en,-es");
    const checkCases = (modifier: (n: Noun) => Noun, expected: string[]) => {
      const [nom, acc, dat, gen] = expected;
      expect(modifier(noun()).renderDE(false)).toBe(nom);
      expect(modifier(noun()).accusative().renderDE(false)).toBe(acc);
      expect(modifier(noun()).dative().renderDE(false)).toBe(dat);
      expect(modifier(noun()).genitive().renderDE(false)).toBe(gen);
    };

    checkCases(
      (n) => n,
      ["ein Bett", "ein Bett", "einem Bett", "eines Bettes"],
    );

    checkCases(
      (n) => n.specific(),
      ["das Bett", "das Bett", "dem Bett", "des Bettes"],
    );

    checkCases(
      (n) => n.negated(),
      ["kein Bett", "kein Bett", "keinem Bett", "keines Bettes"],
    );

    checkCases(
      (n) => n.possessed(Persons.ME),
      ["mein Bett", "mein Bett", "meinem Bett", "meines Bettes"],
    );

    checkCases(
      (n) => n.possessed(Persons.YOU),
      ["dein Bett", "dein Bett", "deinem Bett", "deines Bettes"],
    );

    checkCases(
      (n) => n.possessed(Persons.SHE),
      ["ihr Bett", "ihr Bett", "ihrem Bett", "ihres Bettes"],
    );

    checkCases(
      (n) => n.possessed(Persons.WE),
      ["unser Bett", "unser Bett", "unserem Bett", "unseres Bettes"],
    );

    checkCases(
      (n) => n.possessed(Persons.YALL),
      ["euer Bett", "euer Bett", "eurem Bett", "eures Bettes"],
    );

    checkCases(
      (n) => n.possessed(Persons.THEY),
      ["ihr Bett", "ihr Bett", "ihrem Bett", "ihres Bettes"],
    );
  });
  test("renderNounFemale", () => {
    const noun = () => new Noun("die Gabel,-n,-");
    const checkCases = (
      modifier: (n: Noun) => Noun,
      [nom, acc, dat, gen]: string[],
    ) => {
      expect(modifier(noun()).nominative().renderDE(false)).toBe(nom);
      expect(modifier(noun()).accusative().renderDE(false)).toBe(acc);
      expect(modifier(noun()).dative().renderDE(false)).toBe(dat);
      expect(modifier(noun()).genitive().renderDE(false)).toBe(gen);
    };

    checkCases(
      (n) => n,
      ["eine Gabel", "eine Gabel", "einer Gabel", "einer Gabel"],
    );

    checkCases(
      (n) => n.specific(),
      ["die Gabel", "die Gabel", "der Gabel", "der Gabel"],
    );

    checkCases(
      (n) => n.negated(),
      ["keine Gabel", "keine Gabel", "keiner Gabel", "keiner Gabel"],
    );

    checkCases(
      (n) => n.possessed(Persons.ME),
      ["meine Gabel", "meine Gabel", "meiner Gabel", "meiner Gabel"],
    );

    checkCases(
      (n) => n.possessed(Persons.YOU),
      ["deine Gabel", "deine Gabel", "deiner Gabel", "deiner Gabel"],
    );

    checkCases(
      (n) => n.possessed(Persons.SHE),
      ["ihre Gabel", "ihre Gabel", "ihrer Gabel", "ihrer Gabel"],
    );

    checkCases(
      (n) => n.possessed(Persons.WE),
      ["unsere Gabel", "unsere Gabel", "unserer Gabel", "unserer Gabel"],
    );

    checkCases(
      (n) => n.possessed(Persons.YALL),
      ["eure Gabel", "eure Gabel", "eurer Gabel", "eurer Gabel"],
    );

    checkCases(
      (n) => n.possessed(Persons.THEY),
      ["ihre Gabel", "ihre Gabel", "ihrer Gabel", "ihrer Gabel"],
    );
  });
  test("renderNounMale", () => {
    const noun = () => new Noun("der Schuh,-e,-es");
    const checkCases = (
      modifier: (n: Noun) => Noun,
      [nom, acc, dat, gen]: string[],
    ) => {
      expect(modifier(noun()).renderDE(false)).toBe(nom);
      expect(modifier(noun()).accusative().renderDE(false)).toBe(acc);
      expect(modifier(noun()).dative().renderDE(false)).toBe(dat);
      expect(modifier(noun()).genitive().renderDE(false)).toBe(gen);
    };

    checkCases(
      (n) => n,
      ["ein Schuh", "einen Schuh", "einem Schuh", "eines Schuhes"],
    );

    checkCases(
      (n) => n.specific(),
      ["der Schuh", "den Schuh", "dem Schuh", "des Schuhes"],
    );

    checkCases(
      (n) => n.negated(),
      ["kein Schuh", "keinen Schuh", "keinem Schuh", "keines Schuhes"],
    );

    checkCases(
      (n) => n.possessed(Persons.ME),
      ["mein Schuh", "meinen Schuh", "meinem Schuh", "meines Schuhes"],
    );

    checkCases(
      (n) => n.possessed(Persons.YOU),
      ["dein Schuh", "deinen Schuh", "deinem Schuh", "deines Schuhes"],
    );

    checkCases(
      (n) => n.possessed(Persons.SHE),
      ["ihr Schuh", "ihren Schuh", "ihrem Schuh", "ihres Schuhes"],
    );

    checkCases(
      (n) => n.possessed(Persons.WE),
      ["unser Schuh", "unseren Schuh", "unserem Schuh", "unseres Schuhes"],
    );

    checkCases(
      (n) => n.possessed(Persons.YALL),
      ["euer Schuh", "euren Schuh", "eurem Schuh", "eures Schuhes"],
    );

    checkCases(
      (n) => n.possessed(Persons.THEY),
      ["ihr Schuh", "ihren Schuh", "ihrem Schuh", "ihres Schuhes"],
    );
  });
});
