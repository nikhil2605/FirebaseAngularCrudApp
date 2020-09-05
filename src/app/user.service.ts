import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(public fireService: AngularFirestore) { }

  userEdited = new Subject();


  getLatestUsers() {
    return this.fireService.collection('User').snapshotChanges();
  }

  createUser(Record) {
    return this.fireService.collection('User').add(Record);
  }

  deleteUser(id) {
    return this.fireService.doc('User/' + id).delete();
  }

  updateUser(id, Record) {
    return this.fireService.doc('User/' + id).update(Record);
  }

  editUser(user) {
    this.userEdited.next(user);
  }

}