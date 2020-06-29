import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnotacaoRoutingModule } from './anotacao-routing.module';
import { AnotacaoListaComponent } from './anotacao-lista/anotacao-lista.component';
import { AnotacaoFormularioComponent } from './anotacao-formulario/anotacao-formulario.component';


@NgModule({
  declarations: [AnotacaoListaComponent, AnotacaoFormularioComponent],
  imports: [
    CommonModule,
    AnotacaoRoutingModule
  ]
})
export class AnotacaoModule { }
