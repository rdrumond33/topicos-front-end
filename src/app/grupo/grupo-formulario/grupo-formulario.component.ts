import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Grupo } from '../grupo-interface';
import { Router } from '@angular/router';
import { GrupoService } from '../grupo.service';

@Component({
  selector: 'app-grupo-formulario',
  templateUrl:'./grupo-formulario.component.html',
  styleUrls: ['./grupo-formulario.component.css']
})
export class GrupoFormularioComponent implements OnInit {

  grupo: Grupo = {
    id: Math.floor(1000000*Math.random()),
    nome: ''
  }
  constructor(private service: GrupoService, private router: Router) { }

  ngOnInit(): void {
  }

  salvar(grupo): void{
    this.service.postGrupo(grupo).subscribe(
      data=>{
        this.router.navigate(['/grupos']);
      },
      error=>
      {

      }
    );
  }

}
