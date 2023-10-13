import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SecurityService } from '../security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  constructor(public security: SecurityService, private router: Router) {}

  username:string = "";
  password:string = "";

  public btnLogin()
  {
    this.security.validateCredentials(this.username, this.password);

    if (this.security.isConnected())
    {
      this.router.navigate([''])
    }
    
  }



}
