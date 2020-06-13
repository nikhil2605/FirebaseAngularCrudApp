import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public db: AngularFireDatabase, public http: HttpClient) { }

  user;
  users;

  userObj = {
    username: "",
    email: "",
    designation: "",
    id: ""
  }

  baseUrl = "https://angular8firebase-b03a1.firebaseio.com/users.json";


  getLatestUsers() {
    return this.db.list('users').valueChanges();
  }

  createUser(user): Observable<any> {
    return this.http.post(this.baseUrl, user);
  }

  deleteUser(user): Observable<any> {
    return this.http.delete(this.baseUrl, user);
  }

  updateUser(user): Observable<any> {
    return this.http.put(this.baseUrl + user.id, user);
  }



}