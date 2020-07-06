import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoLitarComponent } from './grupo-litar/grupo-litar.component';
import { GrupoFormularioComponent } from './grupo-formulario/grupo-formulario.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [GrupoLitarComponent, GrupoFormularioComponent],
  imports: [
    CommonModule,
    GrupoRoutingModule,
    FormsModule
  ]
})
export class GrupoModule { }
