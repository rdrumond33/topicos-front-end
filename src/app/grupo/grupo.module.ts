import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoLitarComponent } from './grupo-litar/grupo-litar.component';
import { GrupoFormularioComponent } from './grupo-formulario/grupo-formulario.component';


@NgModule({
  declarations: [GrupoLitarComponent, GrupoFormularioComponent],
  imports: [
    CommonModule,
    GrupoRoutingModule
  ]
})
export class GrupoModule { }
