import { Injectable } from '@angular/core';
import {Login} from './login-interface'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private uri = 'https://localhost:5002/api/logins'

  constructor(private http: HttpClient) { }

  get():Observable<Login[]>{
    return this.http.get<Login[]>(this.uri)
  }
}
