import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DetailUser} from "../../model/DetailUser";
import {Post} from "../../model/Post";

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  constructor(private http: HttpClient) {
  }


  findEnterpriseById(id: number): Observable<DetailUser> {
    return this.http.get<any>(`http://localhost:8081/post/${id}`)
  }


  savePost(post: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8081/post/save`, post);
  }

  findAllByIdEnterprise(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8081/post/findAllById/${id}`,);
  }

  listPostEnterprise(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/post/listPost`);

  }



  statusPost(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/enterprise/statusPost/${id}`,);
  }

  openKeyPost(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/enterprise/openKeyPost/${id}`,);
  }

  //Call Api tìm kiếm




}





