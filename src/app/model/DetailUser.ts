import {Address} from "./Address";
import {Users} from "./Users";
export class DetailUser {
 public id: number;
 public name: string;
 public  email: string;
 public password: string;
 public  img : string;
 public  quantity: number;
 public place: string;
 public phone: number;
 public website: string;
 public city: string;
public  address: Address[];
public users : Users[];


  constructor(id: number, name: string, email: string, password: string, img: string, quantity: number, place: string, phone: number, website: string, city: string, address: [], users: []) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.img = img;
    this.quantity = quantity;
    this.place = place;
    this.phone = phone;
    this.website = website;
    this.city = city;
    this.address = address;
    this.users = users;
  }
}
