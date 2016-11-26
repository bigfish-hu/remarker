export class User {

  id: number;
  name: string;
  email: string;
  isSuperadmin: boolean;
  createdAt: string;
  updatedAt: string;

  public getNameFirstLetterUc(): string {
    return this.name.charAt(0).toUpperCase();
  }

}
