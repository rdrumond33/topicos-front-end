import { Component, OnInit } from '@angular/core';
import { Perfil } from '../perfil-interface';
import { PerfilService } from '../perfil.service';

@Component({
  selector: 'app-perfil-listar',
  templateUrl: './perfil-listar.component.html',
  styleUrls: ['./perfil-listar.component.css']
})
export class PerfilListarComponent implements OnInit {


  result: Perfil[]
  constructor(private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.perfilService.get().subscribe(res=> {
      console.log(res)
      this.result = res})
  }

}
