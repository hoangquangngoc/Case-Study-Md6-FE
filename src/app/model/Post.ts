import {Address} from "./Address";
import {TypeOfWork} from "./TypeOfWork";
import {WorkTime} from "./WorkTime";

export class Post{
  private id : number;
  private title :string
  private salary: number;
  private level: string;
  private experience :number;
  private content: string;
  private gender : string;
  private description:string;
  private expirationDatePost: Date
  private status: boolean;
  private address:Address[];
  private typeOfWork : TypeOfWork[];
  private  workTime : WorkTime[] ;


  constructor(id: number, title: string, salary: number, level: string, experience: number, content: string, gender: string, description: string, expirationDatePost: Date, status: boolean, address: Address[], typeOfWork: [], workTime: []) {
    this.id = id;
    this.title = title;
    this.salary = salary;
    this.level = level;
    this.experience = experience;
    this.content = content;
    this.gender = gender;
    this.description = description;
    this.expirationDatePost = expirationDatePost;
    this.status = status;
    this.address = address;
    this.typeOfWork = typeOfWork;
    this.workTime = workTime;
  }
}
