import {Users} from "./Users";
import {Post} from "./Post";
export class ApplyUser{
  private idUser : number;
  private dateApply : Date;
  private status : boolean;
  private users : Users[];
  private post : Post[];


  constructor(idUser: number, dateApply: Date, status: boolean, users: Users[], post: Post[]) {
    this.idUser = idUser;
    this.dateApply = dateApply;
    this.status = status;
    this.users = users;
    this.post = post;
  }
}
