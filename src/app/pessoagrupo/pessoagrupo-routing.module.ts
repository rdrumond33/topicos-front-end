import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoagrupoListarComponent } from './pessoagrupo-listar/pessoagrupo-listar.component';


const routes: Routes = [{
  path:'',
  component:PessoagrupoListarComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoagrupoRoutingModule { }
