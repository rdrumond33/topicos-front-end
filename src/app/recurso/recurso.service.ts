import { Injectable } from '@angular/core';
import { Recurso } from './recurso-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {
  private uri = 'http://localhost:5003/api//0/100'

  constructor(private http: HttpClient) { }

  get():Observable<Recurso[]>{
    return this.http.get<Recurso[]>(this.uri)
  }
}
