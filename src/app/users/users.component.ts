import { Component, OnInit } from '@angular/core';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  constructor(private _userService: UsersService) { }


  users;

  ngOnInit() {

    this._userService.getUsers()
        .subscribe(users => {
          this.users = users;
        });


  }


  deleteUser(user) {

    var answer = confirm("User " +user.name+ "wirklich löschen?");
    if(!answer)
      return false;

    var index = this.users.indexOf(user);
    this.users.splice(index,1);

    this._userService.deleteUser(user.id)
        .subscribe();

  }

}
