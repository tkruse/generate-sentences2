import { Words } from "./Words";
import { Noun } from "./Noun";
import { Text } from "satzbau";

export class Sentence implements Words {
  noun: Noun;
  template: Text;

  constructor(noun: Noun, template: Text) {
    this.noun = noun;
    this.template = template;
  }

  renderDE(): string {
    // @ts-ignore // satzbau templates confuse TS
    return this.template.write({ noun: this.noun.renderDE(false) });
  }

  renderHidden(): string {
    // @ts-ignore // satzbau templates confuse TS
    return this.template.write({ noun: this.noun.renderHidden() });
  }

  renderHints(): string {
    return this.noun.renderHints();
  }
}
