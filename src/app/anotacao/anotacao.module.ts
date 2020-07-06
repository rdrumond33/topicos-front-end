import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AnotacaoRoutingModule } from './anotacao-routing.module';
import { AnotacaoListaComponent } from './anotacao-lista/anotacao-lista.component';
import { AnotacaoFormularioComponent } from './anotacao-formulario/anotacao-formulario.component';


@NgModule({
  declarations: [AnotacaoListaComponent, AnotacaoFormularioComponent],
  imports: [
    CommonModule,
    AnotacaoRoutingModule,
    FormsModule
  ]
})
export class AnotacaoModule { }
