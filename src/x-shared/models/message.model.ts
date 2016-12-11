import { Observable } from 'rxjs/Rx';
import { User } from './user.model';
export class Message {
  body: string;
  author: User;
  constructor(message?) {
    this.body = message && message.body || '';
    this.author = message && message.author || new User();
  }
}