import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public msg:string;
  constructor(private _auth:AuthService ) { }

  ngOnInit(): void {
    this.ResetMsg();
  }

  public ResetMsg():void{
    this.msg = "Log in to continue";
  }
  public Login(info: { login: string, password: string }) {
     this._auth.login(JSON.parse(JSON.stringify(info))).subscribe(
       status=>
       {
         if (status==200)
         {
           this.msg = "Success";
           this._auth.sendTestRequest();
         }
         else if (status==401)
           this.msg = "Wrong login/password";
         else
           this.msg = `Something went wrong (${status})`;
       });
  }
}
