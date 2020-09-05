import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  user;

  username: ""
  email: ""
  designation: ""
  id: 0

  isEdit = false;

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.editUser();
  }

  editUser() {
    this.userService.userEdited.subscribe(data => {
      this.username = data['username'];
      this.email = data['email'];
      this.designation = data['designation'];
      this.id = data['id'];
      this.isEdit = true;
    });
  }

  saveUser(userForm) {
    let Record = {};
    Record['username'] = this.username;
    Record['email'] = this.email;
    Record['designation'] = this.designation;

    this.userService.createUser(Record).then(data => {
      userForm.form.reset();
    }).catch(error => {
      console.log(error);
    });
  }

  updateUser(userForm) {
    let Record = {};
    Record['username'] = this.username;
    Record['email'] = this.email;
    Record['designation'] = this.designation;
    this.userService.updateUser(this.id, Record).then(resp => {
      userForm.form.reset();
      this.isEdit = false;
    });
  }

  Clear() {
    this.username = ""
    this.email = ""
    this.designation = ""
    this.isEdit = false;
  }

}
