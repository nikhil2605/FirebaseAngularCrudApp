import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular - Firebase Demo App';
  description = 'Angular-Fire-Demo';

  itemValue = '';
  users;

  userObj = {
    username: "",
    email: "",
    designation: "",
    id: ""
  }

  isEdit = false;

  constructor(public userService: UserService, public db: AngularFireDatabase) {
  }
  ngOnInit(): void {
    this.getLatestUsers();
  }

  getLatestUsers() {
    this.userService.getLatestUsers().subscribe(data => {
      this.users = data;
    });
  }

  saveUser(userForm) {
    this.userService.createUser(this.userObj).subscribe((data) => {
      this.getLatestUsers();
    });
    userForm.form.reset();
  }

  deleteUser(user) {
    this.userService.deleteUser(user).subscribe((data) => {
      this.getLatestUsers();
    });
  }

  updateUser(userForm) {
    this.userService.updateUser(this.userObj).subscribe((data) => {
      this.getLatestUsers();
    });
    userForm.form.reset();

  }

  editUser(user) {
    this.userObj = Object.assign({}, user);
    this.isEdit = true;
  }

}

