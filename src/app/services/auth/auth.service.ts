import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { SRV_URL } from 'src/app/config';
import {Md5} from 'ts-md5/dist/md5';
import { Observable, of } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  public login(info: { login: string, password: string }):Observable<number> { 
    
    info.password = Md5.hashStr(info.password) as string
    
    return this._http.post<any>(`${SRV_URL}/api/auth/`, info, {observe: 'response'})
            .pipe(
              map(res=> 
              {
                if (res.status == 200)
                  localStorage.setItem("token", res.body.token);                
                return res.status;
              }),
              catchError(error => {
                return of((error as HttpResponse<any>).status);
              }
              )
            )
  }
  
  public sendTestRequest(){
    const token = localStorage.getItem('token');
    let headers= new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    this._http.get(`${SRV_URL}/weatherforecast/summaries`, { headers: headers }).subscribe(res=> alert(res));
  }
}
