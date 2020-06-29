import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilrecursoRoutingModule } from './perfilrecurso-routing.module';
import { PerfilrecursoListarComponent } from './perfilrecurso-listar/perfilrecurso-listar.component';
import { PerfilrecursoFormularioComponent } from './perfilrecurso-formulario/perfilrecurso-formulario.component';


@NgModule({
  declarations: [PerfilrecursoListarComponent, PerfilrecursoFormularioComponent],
  imports: [
    CommonModule,
    PerfilrecursoRoutingModule
  ]
})
export class PerfilrecursoModule { }
