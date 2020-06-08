import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anotacao } from './anotacao-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnotacaoService {
  private uri = 'https://localhost:5002/api/anotacoes'

  constructor(private http: HttpClient) { }

  get():Observable<Anotacao[]>{
    return this.http.get<Anotacao[]>(this.uri)
  }
}
