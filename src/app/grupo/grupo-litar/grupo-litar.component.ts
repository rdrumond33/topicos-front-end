import { Component, OnInit } from '@angular/core';
import { Grupo } from '../grupo-interface';
import { GrupoService } from '../grupo.service';

@Component({
  selector: 'app-grupo-litar',
  templateUrl: './grupo-litar.component.html',
  styleUrls: ['./grupo-litar.component.css']
})
export class GrupoLitarComponent implements OnInit {

  result: Grupo[]
  constructor(private grupoService: GrupoService) { }

  ngOnInit(): void {
    this.grupoService.get().subscribe(res=> this.result = res)
  }

}
