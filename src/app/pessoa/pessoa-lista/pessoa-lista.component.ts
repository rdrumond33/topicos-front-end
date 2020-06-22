import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa.interface';
import { PessoaService } from '../pessoa.service';
import { Location } from '@angular/router';


@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css']
})
export class PessoaListaComponent implements OnInit {
  result: Pessoa[]
  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
   this.pessoaService.getPessoas().subscribe(res=> this.result = res)
  }

  apagar(id: number)
  {
    this.pessoaService.deletePessoa(id).subscribe(
      data=>{
        this.location.path();
      },
      error=>
      {

      }
    );
  }
}
