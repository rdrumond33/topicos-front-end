import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecursoListarComponent } from './recurso-listar/recurso-listar.component';


const routes: Routes = [{
  path:'',
  component:RecursoListarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursoRoutingModule { }
