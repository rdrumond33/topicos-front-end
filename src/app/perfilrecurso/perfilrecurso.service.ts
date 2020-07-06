import { Injectable } from '@angular/core';
import { Perfilrecurso } from './perfilrecurso-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilrecursoService {
  private uri = 'http://localhost:5003/api/perfilrecursos'

  constructor(private http: HttpClient) { }

  get():Observable<Perfilrecurso[]>{
    return this.http.get<Perfilrecurso[]>(this.uri)
  }
}
