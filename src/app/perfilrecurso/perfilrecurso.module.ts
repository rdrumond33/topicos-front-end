import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilrecursoRoutingModule } from './perfilrecurso-routing.module';
import { PerfilrecursoListarComponent } from './perfilrecurso-listar/perfilrecurso-listar.component';


@NgModule({
  declarations: [PerfilrecursoListarComponent],
  imports: [
    CommonModule,
    PerfilrecursoRoutingModule
  ]
})
export class PerfilrecursoModule { }
