import { Injectable } from '@angular/core';
import { Grupo } from './grupo-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  private uri = 'http://localhost:5003/api/grupos/0/100'

  constructor(private http: HttpClient) { }

  get(): Observable<Grupo[]>{
    return this.http.get<Grupo[]>(this.uri)
  }

  postGrupo(grupo: Grupo): Observable<Grupo>
  {
    return this.http.post<Grupo>('http://localhost:5003/api/grupos', grupo);
  }

  deleteGrupo(id: number): Observable<Grupo>
  {
    return this.http.delete<Grupo>('http://localhost:5003/api/grupos/'+id);

  }
}
