import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isError: boolean = false
  information: string = ''

  constructor(
    private userService: UserService,
    private dataService: DataService,
    private router: Router,
    library: FaIconLibrary
  ) 
  { library.addIcons(faX); }

  authorization(username: string, password: string) {
    this.userService.loadUsers(username).then((user) => {
      if(user) {
        if (user.password == password) {
          // here is a save command to save data in some storage.
          localStorage.setItem('currentUser',JSON.stringify(user))
          this.router.navigate(['/'])
        } 
        else {
          this.isError = true;
          this.information = "your'e password is wrong!"
        }
      } else {
        this.isError = true;
        this.information = "maybe something is invalid!"
      } 
    })
  }

  readLoginForm(username: string, password: string) {
    this.authorization(username, password)
  }

  async readRegisterForm(username: string, password: string) {
    if (username && password) {
      const newUser = new User()
      newUser.username = username
      newUser.password = password

      this.information = await this.userService.postUser(newUser)
      this.isError = this.dataService.getErrorState()
    } 
    
    else {
      this.isError = true;
      this.information = "please fill-in all the fields."
    }
  }
}
