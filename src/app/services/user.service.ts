import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = "https://protected-springs-55933.herokuapp.com/api/users";
  }

  login(user: User) : Promise<any> {
    return this.http.post(`${this.url}/login`, user).toPromise();
  }

  isUserLogged() {
    if (localStorage.getItem('user-token')) {
      return true;
    } else {
      return false;
    }
  }

}
