import { Injectable } from '@angular/core';
import { Grupo } from './grupo-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  private uri = 'https://localhost:5002/api/grupos'

  constructor(private http: HttpClient) { }

  getGrupo(): Observable<Grupo[]>{
    return this.http.get<Grupo[]>(this.uri)
  }

  postGrupo(grupo: Grupo): Observable<Grupo>
  {
    return this.http.post<Grupo>('https://localhost:5002/api/grupos', grupo);
  }

  deleteGrupo(id: number): Observable<Grupo>
  {
    return this.http.delete<Grupo>('https://localhost:5002/api/grupos/'+id);
    
  }
}