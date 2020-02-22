import { Injectable } from '@angular/core';
import { Marcador } from '../models/Marcador';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarcadorService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = "https://protected-springs-55933.herokuapp.com/api/provincias/45";
  }

  all() : Promise<any> {
    return this.http.get(`${this.url}/`).toPromise();
  }

}
