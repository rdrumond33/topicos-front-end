import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilrecursoListarComponent } from './perfilrecurso-listar/perfilrecurso-listar.component';


const routes: Routes = [{
  path:'',
  component:PerfilrecursoListarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilrecursoRoutingModule { }
