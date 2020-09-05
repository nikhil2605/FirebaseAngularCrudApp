import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users;

  username: ""
  email: ""
  designation: ""
  id: 0


  constructor(public userService: UserService) {
  }
  ngOnInit(): void {
    this.getLatestUsers();
  }

  getLatestUsers() {
    this.userService.getLatestUsers().subscribe(data => {
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          username: e.payload.doc.data()['username'],
          email: e.payload.doc.data()['email'],
          designation: e.payload.doc.data()['designation'],
        };
      })
      console.log();
    });
  }



  deleteUser(user) {
    this.userService.deleteUser(user.id).then(data => {
      this.getLatestUsers();
    });
  }

  editUser(user) {
    this.username = user.username
    this.email = user.email
    this.designation = user.designation
    this.id = user.id
    this.userService.editUser(user);
  }

}