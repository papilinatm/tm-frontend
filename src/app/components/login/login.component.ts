import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth:AuthService ) { }

  ngOnInit(): void {
    //this.LoginTest();
  }

  public LoginTest(){
      this._auth.login();
  }

}
