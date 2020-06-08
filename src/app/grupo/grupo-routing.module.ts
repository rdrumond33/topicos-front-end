import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoLitarComponent } from './grupo-litar/grupo-litar.component';


const routes: Routes = [
  {
    path:'',
    component:GrupoLitarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoRoutingModule { }
