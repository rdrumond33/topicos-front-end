import { Injectable } from '@angular/core';
import { Perfil } from './perfil-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private uri = 'http://localhost:5003/api/perfis/0/100'

  constructor(private http: HttpClient) { }

  get():Observable<Perfil[]>{
    return this.http.get<Perfil[]>(this.uri)
  }
}
