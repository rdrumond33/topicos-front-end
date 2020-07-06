import { Injectable } from '@angular/core';
import {Login} from './login-interface'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private uri = 'http://localhost:5003/api/logins/0/100'

  constructor(private http: HttpClient) { }

  get():Observable<Login[]>{
    return this.http.get<Login[]>(this.uri)
  }
}
