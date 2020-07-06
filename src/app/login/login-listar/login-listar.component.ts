import { Component, OnInit } from '@angular/core';
import { Login } from '../login-interface';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-listar',
  templateUrl: './login-listar.component.html',
  styleUrls: ['./login-listar.component.css']
})
export class LoginListarComponent implements OnInit {

  results:  Observable<Login>
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.results = this.loginService.get()
  }

  apagar(id: number)
  {
    this.loginService.deletar(id).subscribe();
  }

}
