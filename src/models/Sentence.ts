import { Words } from "./Words";
import { Noun } from "./Noun";

export class Sentence implements Words {
  noun: Noun;
  templateShown: any;
  templateHidden: any;

  constructor(noun: Noun, templateDE: any, templateHidden: any) {
    this.noun = noun;

    this.templateShown = templateDE;
    this.templateHidden = templateHidden;
  }

  renderDE(): string {
    return this.templateShown.write();
  }

  renderHidden(): string {
    return this.templateHidden.write();
  }

  renderHints(): string {
    return this.noun.renderHints();
  }
}
