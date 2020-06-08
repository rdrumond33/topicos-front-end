import { Component, OnInit } from '@angular/core';
import { Pessoagrupo } from '../pessoagrupo-interface';
import { PessoagrupoService } from '../pessoagrupo.service';

@Component({
  selector: 'app-pessoagrupo-listar',
  templateUrl: './pessoagrupo-listar.component.html',
  styleUrls: ['./pessoagrupo-listar.component.css']
})
export class PessoagrupoListarComponent implements OnInit {

  result: Pessoagrupo[]
  constructor(private pessoagrupoService: PessoagrupoService) { }

  ngOnInit(): void {
    this.pessoagrupoService.get().subscribe(res=> this.result = res)
  }
}
