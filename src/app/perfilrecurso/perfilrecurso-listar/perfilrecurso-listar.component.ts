import { Component, OnInit } from '@angular/core';
import { Perfilrecurso } from '../perfilrecurso-interface';
import { PerfilrecursoService } from '../perfilrecurso.service';

@Component({
  selector: 'app-perfilrecurso-listar',
  templateUrl: './perfilrecurso-listar.component.html',
  styleUrls: ['./perfilrecurso-listar.component.css']
})
export class PerfilrecursoListarComponent implements OnInit {


  result: Perfilrecurso[]
  constructor(private perfilrecursoService: PerfilrecursoService) { }

  ngOnInit(): void {
    this.perfilrecursoService.get().subscribe(res=> this.result = res)
  }
}
