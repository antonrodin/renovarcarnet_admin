import { Component, OnInit } from '@angular/core';
import { User } from "../models/User";
import { UserService } from "../services/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  hide: boolean;

  constructor(private router: Router, private userService: UserService) {
    this.hide = true;
    this.user = new User();
  }

  ngOnInit() {
  }

  login() : void {
    
    this.userService.login(this.user).then(result => {
      if(result['token']) {
        localStorage.setItem('user-token', result['token']);
        this.router.navigate(['user']);
      } else {
        alert("Credenciales invalidos");
      }
    })
    
  }

}
