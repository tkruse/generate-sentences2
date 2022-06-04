import { noun } from 'satzbau';
import { Noun } from './Noun';



export class Phone implements Noun {
  renderDE(): string {
    const phone = noun('das telefon,-e,-s');
    return phone.write();
  }
  renderEN() : string {
    return "a phone";
  }
}
