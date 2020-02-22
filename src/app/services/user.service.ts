import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string;

  constructor(private http: HttpClient, private router: Router) {
    this.url = "https://protected-springs-55933.herokuapp.com/api/users";
  }

  login(user: User) : Promise<any> {
    return this.http.post(`${this.url}/login`, user).toPromise();
  }

  logout() {
    localStorage.removeItem('user-token');
    this.router.navigate(['/']);
  }

  isUserLogged() {
    if (localStorage.getItem('user-token')) {
      return true;
    } else {
      return false;
    }
  }

}
