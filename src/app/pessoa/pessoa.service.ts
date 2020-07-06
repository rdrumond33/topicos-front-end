import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private uri = 'https://localhost:5002/api/pessoas/0/100'

  constructor(private http: HttpClient) { }

  getPessoas(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>("https://localhost:5002/api/pessoas/0/100")
  }

  postPessoa(pessoa: Pessoa): Observable<Pessoa>
  {
    return this.http.post<Pessoa>('http://localhost:5003/api/pessoas', pessoa);
  }

  deletePessoa(id: number): Observable<Pessoa>
  {
    return this.http.delete<Pessoa>('http://localhost:5003/api/pessoas/'+id);

  }
}

