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
  constructor(private AnotacaoService: AnotacaoService) { }

  ngOnInit(): void {
    this.AnotacaoService.getAnotacao().subscribe(res=> this.result = res)
  }
  apagar(id: number)
  {
    this.AnotacaoService.deleteAnotacao(id).subscribe();
  }
}
