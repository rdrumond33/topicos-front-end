import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginListarComponent } from './login-listar/login-listar.component';

const routes: Routes = [{
  path:'',
  component:LoginListarComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
