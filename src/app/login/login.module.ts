import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginListarComponent } from './login-listar/login-listar.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginListarComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
