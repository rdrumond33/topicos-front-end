import { Component, OnInit } from '@angular/core';
import { Login } from '../login-interface';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-listar',
  templateUrl: './login-listar.component.html',
  styleUrls: ['./login-listar.component.css']
})
export class LoginListarComponent implements OnInit {


  result: Login[]
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.get().subscribe(res=> this.result = res)
  }

}
