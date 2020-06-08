import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private uri = 'https://localhost:5002/api/pessoas'

  constructor(private http: HttpClient) { }

  getPessoas(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.uri)
  }
}

