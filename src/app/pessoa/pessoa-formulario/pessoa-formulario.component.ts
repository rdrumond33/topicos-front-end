import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../pessoa.interface';
import { Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-formulario',
  templateUrl: './pessoa-formulario.component.html',
  styleUrls: ['./pessoa-formulario.component.css']
})
export class PessoaFormularioComponent implements OnInit {

  pessoa: Pessoa = {
    id: Math.floor(1000000*Math.random()),
    nome: ''
  }
  constructor(private service: PessoaService, private router: Router) { }

  ngOnInit(): void {
  }


  salvar(pessoa): void{
    this.service.postPessoa(pessoa).subscribe(
      data=>{
        this.router.navigate(['/pessoas']);
      },
      error=>
      {

      }
    );
  }

}
