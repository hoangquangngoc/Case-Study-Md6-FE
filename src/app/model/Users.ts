import {Roles} from "./Roles";

export class Users{
  private id :number;
  private username: string;
  private password:string;
  private email: string;
  private name: string
  private roles:Roles[];

  constructor(id: number, username: string, password: string, email: string, name: string, roles: []) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.name = name;
    this.roles = roles;
  }
}
