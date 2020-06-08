import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursoRoutingModule } from './recurso-routing.module';
import { RecursoListarComponent } from './recurso-listar/recurso-listar.component';


@NgModule({
  declarations: [RecursoListarComponent],
  imports: [
    CommonModule,
    RecursoRoutingModule
  ]
})
export class RecursoModule { }
