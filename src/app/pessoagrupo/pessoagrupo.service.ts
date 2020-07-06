import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoagrupo } from './pessoagrupo-interface';

@Injectable({
  providedIn: 'root'
})
export class PessoagrupoService {
  private uri = 'http://localhost:5003/api/pessoagrupos/0/100'

  constructor(private http: HttpClient) { }

  get():Observable<Pessoagrupo[]>{
    return this.http.get<Pessoagrupo[]>(this.uri)
  }
}
