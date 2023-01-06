export class CvUser{
  private id : number;
  private name : string;
  private mail : string;
  private imgCV : string;
  private phoneNumber : number;

  constructor(id: number, name: string, mail: string, imgCV: string, phoneNumber: number) {
    this.id = id;
    this.name = name;
    this.mail = mail;
    this.imgCV = imgCV;
    this.phoneNumber = phoneNumber;
  }
}
