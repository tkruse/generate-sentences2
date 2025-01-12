// @ts-nocheck // satzbau templates confuse TS
import { Sentence } from "./Sentence";
import { Noun } from "./Noun";
import { noun, sentence } from "satzbau";

describe("Sentence", () => {
  test("renderDE should call template.write", () => {
    const template = new Sentence(
      new Noun("der schlüssel,-,-s"),
      sentence`Das ist ${({ noun }) => noun}`,
    );

    expect(template.renderDE()).toBe("Das ist ein Schlüssel.");
    expect(template.renderHidden()).toBe("Das ist ___.");
    expect(template.renderHints()).toBe("Schlüssel");
  });
});
