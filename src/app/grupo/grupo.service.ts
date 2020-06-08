import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Grupo } from './grupo-interface';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  private uri = 'https://localhost:5002/api/grupos'

  constructor(private http: HttpClient) { }

  get():Observable<Grupo[]>{
    return this.http.get<Grupo[]>(this.uri)
  }
}
