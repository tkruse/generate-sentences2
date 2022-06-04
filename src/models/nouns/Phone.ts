import { noun } from 'satzbau';
import { Noun } from './Noun';


export class Phone extends Noun {

  constructor() {
    super(noun('das telefon,-e,-s'), "phone");
  }

}
