import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoagrupoRoutingModule } from './pessoagrupo-routing.module';
import { PessoagrupoListarComponent } from './pessoagrupo-listar/pessoagrupo-listar.component';
import { PessoagrupoFormularioComponent } from './pessoagrupo-formulario/pessoagrupo-formulario.component';


@NgModule({
  declarations: [PessoagrupoListarComponent, PessoagrupoFormularioComponent],
  imports: [
    CommonModule,
    PessoagrupoRoutingModule
  ]
})
export class PessoagrupoModule { }
