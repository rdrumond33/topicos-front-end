import { Component, OnInit } from '@angular/core';
import { Recurso } from '../recurso-interface';
import { RecursoService } from '../recurso.service';

@Component({
  selector: 'app-recurso-listar',
  templateUrl: './recurso-listar.component.html',
  styleUrls: ['./recurso-listar.component.css']
})
export class RecursoListarComponent implements OnInit {

  result: Recurso[]
  constructor(private recursoService: RecursoService) { }

  ngOnInit(): void {
    this.recursoService.get().subscribe(res=> this.result = res)
  }

}
