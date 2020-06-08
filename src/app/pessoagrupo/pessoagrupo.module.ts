import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoagrupoRoutingModule } from './pessoagrupo-routing.module';
import { PessoagrupoListarComponent } from './pessoagrupo-listar/pessoagrupo-listar.component';


@NgModule({
  declarations: [PessoagrupoListarComponent],
  imports: [
    CommonModule,
    PessoagrupoRoutingModule
  ]
})
export class PessoagrupoModule { }
