import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  hide: boolean;

  constructor(private router: Router) {
    this.hide = true;
  }

  ngOnInit() {
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(['user']);
    } else {
      alert("Invalid Credentials");
    }
  }

}
