import { noun } from 'satzbau';
import { Noun } from './Noun';


export class Key extends Noun {

  constructor() {
    super(noun('der schlüssel,-,-s'), "key");
  }

}
