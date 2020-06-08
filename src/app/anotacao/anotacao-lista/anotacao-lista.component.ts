import { Component, OnInit } from '@angular/core';
import { Anotacao } from '../anotacao-interface';
import { AnotacaoService } from '../anotacao.service';

@Component({
  selector: 'app-anotacao-lista',
  templateUrl: './anotacao-lista.component.html',
  styleUrls: ['./anotacao-lista.component.css']
})
export class AnotacaoListaComponent implements OnInit {
  result: Anotacao[]
  constructor(private anotacaoService: AnotacaoService) { }

  ngOnInit(): void {
    this.anotacaoService.get().subscribe(res=> this.result = res)
  }

}
