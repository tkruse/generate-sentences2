import { noun } from 'satzbau';
import { Noun } from './Noun';


export class Cat extends Noun {

  constructor() {
    super(noun('die Katze,-,-'), "cat");
  }

}
