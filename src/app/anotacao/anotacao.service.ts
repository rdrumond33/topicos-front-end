import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Anotacao } from './anotacao-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnotacaoService {
  private uri = 'https://localhost:5002/api/anotacoes'

  constructor(private http: HttpClient) { }

 getAnotacao(): Observable<Anotacao[]>{
    return this.http.get<Anotacao[]>(this.uri)
  }

  postAnotacao(anotacao: Anotacao): Observable<Anotacao>
  {
    return this.http.post<Anotacao>('https://localhost:5002/api/anotacoes', anotacao);
  }

  deleteAnotacao(id: number): Observable<Anotacao>
  {
    return this.http.delete<Anotacao>('https://localhost:5002/api/anotacoes/'+id);
    
  }
}
