export class User {
  id: string;
  displayName: string;
  avatarUrl: string;

  constructor(user?: any) {
    this.id = user && user.id || '';
    this.displayName = user && user.displayName || '';
    this.avatarUrl = user && user.avatarUrl || '';
  }
}