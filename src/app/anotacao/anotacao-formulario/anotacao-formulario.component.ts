import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Anotacao } from '../anotacao-interface';
import { Router } from '@angular/router';
import { AnotacaoService } from '../anotacao.service';
@Component({
  selector: 'app-anotacao-formulario',
  templateUrl: './anotacao-formulario.component.html',
  styleUrls: ['./anotacao-formulario.component.css']
})
export class AnotacaoFormularioComponent implements OnInit {
  anotacao: Anotacao = {
    id: Math.floor(1000000*Math.random()),
    obs: '',
    data: null,
    id_grupo: 0,
    id_pessoa: 0
  }
  constructor(private service: AnotacaoService, private router: Router) { }

  ngOnInit(): void {
  }



  salvar(anotacao): void{
    this.service.postAnotacao(anotacao).subscribe(
      data=>{
        this.router.navigate(['/anotacao']);
      },
      error=>
      {

      }
    );
  }

}

