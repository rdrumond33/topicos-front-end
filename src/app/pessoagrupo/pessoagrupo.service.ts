import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoagrupo } from './pessoagrupo-interface';

@Injectable({
  providedIn: 'root'
})
export class PessoagrupoService {
  private uri = 'https://localhost:5002/api/pessoagrupos'

  constructor(private http: HttpClient) { }

  get():Observable<Pessoagrupo[]>{
    return this.http.get<Pessoagrupo[]>(this.uri)
  }
}
