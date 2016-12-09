export class User {
  id: string;
  displayName: string;
  avatarUrl: string;

  constructor(user?: any) {
    this.id = user && user.id || null;
    this.displayName = user && user.displayName || null;
    this.avatarUrl = user && user.avatarUrl || null;
  }
}