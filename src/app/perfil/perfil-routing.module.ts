import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilListarComponent } from './perfil-listar/perfil-listar.component';
import { PerfilFormularioComponent } from './perfil-formulario/perfil-formulario.component';

const routes: Routes = [
  {
    path:'',
    component:PerfilListarComponent
  },
  {
    path:'form',
    component: PerfilFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
