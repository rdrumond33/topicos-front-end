import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilListarComponent } from './perfil-listar/perfil-listar.component';


const routes: Routes = [
  {
    path:'',
    component:PerfilListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
