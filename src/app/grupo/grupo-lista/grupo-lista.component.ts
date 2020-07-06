import { Component, OnInit } from '@angular/core';
import { Grupo } from '../grupo-interface';
import { GrupoService } from '../grupo.service';


@Component({
  selector: 'app-grupo-lista',
  templateUrl: './grupo-lista.component.html',
  styleUrls: ['./grupo-lista.component.css']
})
export class GrupoListaComponent implements OnInit {
  result: Grupo[]
  constructor(private GrupoService: GrupoService) { }

  ngOnInit(): void {
   this.GrupoService.getGrupo().subscribe(res=> this.result = res)
  }

  apagar(id: number)
  {
    this.GrupoService.deleteGrupo(id).subscribe();
  }
}
