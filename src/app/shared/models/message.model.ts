export class Message {
  body: string;
  senderId: string;
  senderName: string;
  constructor(message?) {
    this.body = message && message.body || '';   
    this.senderId = message && message.senderId || '';
    this.senderName = message && message.senderName || ''; 
  }
}