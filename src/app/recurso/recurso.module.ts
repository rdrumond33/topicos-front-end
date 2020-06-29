import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursoRoutingModule } from './recurso-routing.module';
import { RecursoListarComponent } from './recurso-listar/recurso-listar.component';
import { RecursoFormularioComponent } from './recurso-formulario/recurso-formulario.component';


@NgModule({
  declarations: [RecursoListarComponent, RecursoFormularioComponent],
  imports: [
    CommonModule,
    RecursoRoutingModule
  ]
})
export class RecursoModule { }
