import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Anotacao } from './anotacao-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnotacaoService {
  private uri = 'http://localhost:5003/api/anotacoes/0/100'

  constructor(private http: HttpClient) { }

 get(): Observable<Anotacao[]>{
    return this.http.get<Anotacao[]>(this.uri)
  }

  postAnotacao(anotacao: Anotacao): Observable<Anotacao>
  {
    return this.http.post<Anotacao>('http://localhost:5003/api/anotacoes', anotacao);
  }

  deleteAnotacao(id: number): Observable<Anotacao>
  {
    return this.http.delete<Anotacao>('http://localhost:5003/api/anotacoes/'+id);

  }
}
