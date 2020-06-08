import { Injectable } from '@angular/core';
import { Perfil } from './perfil-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private uri = 'https://localhost:5002/api/perfil'

  constructor(private http: HttpClient) { }

  get():Observable<Perfil[]>{
    return this.http.get<Perfil[]>(this.uri)
  }
}
