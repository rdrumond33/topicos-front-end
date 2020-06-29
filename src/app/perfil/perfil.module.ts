import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilListarComponent } from './perfil-listar/perfil-listar.component';
import { PerfilFormularioComponent } from './perfil-formulario/perfil-formulario.component';


@NgModule({
  declarations: [PerfilListarComponent, PerfilFormularioComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
