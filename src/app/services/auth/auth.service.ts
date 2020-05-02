import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { SRV_URL } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  public login():void{ 
    this._http.get<any>(`${SRV_URL}/api/auth/token/secret`).subscribe(res=> 
    {
      localStorage.setItem("token", res.token);
      this.sendTestRequest();
    }
    );
  }
  
  public sendTestRequest(){
    const token = localStorage.getItem('token');
    let headers= new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    this._http.get(`${SRV_URL}/weatherforecast/summaries`, { headers: headers }).subscribe(res=> alert(res));
  }
}
