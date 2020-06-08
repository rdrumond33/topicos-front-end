import { Injectable } from '@angular/core';
import { Recurso } from './recurso-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {
  private uri = 'https://localhost:5002/api/recursos'

  constructor(private http: HttpClient) { }

  get():Observable<Recurso[]>{
    return this.http.get<Recurso[]>(this.uri)
  }
}
