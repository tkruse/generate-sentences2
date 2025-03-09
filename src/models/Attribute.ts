import { NounCategory } from "./NounCategory";

export class Attribute {
  deWord: string;
  categories: NounCategory[];
  constructor(deWord: string, ...categories: NounCategory[]) {
    this.deWord = deWord;
    this.categories = categories;
  }

  getCategories(): NounCategory[] {
    return this.categories;
  }
}
