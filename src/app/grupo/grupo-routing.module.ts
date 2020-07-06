import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoLitarComponent } from './grupo-litar/grupo-litar.component';
import { GrupoFormularioComponent } from './grupo-formulario/grupo-formulario.component';

const routes: Routes = [
  {
    path:'',
    component:GrupoLitarComponent
  },
  {
    path:'form',
    component: GrupoFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoRoutingModule { }
