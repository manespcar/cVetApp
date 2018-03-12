import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import CryptoJS from 'crypto-js';
import { SingletonServiceProvider } from '../../providers/singleton-service/singleton-service';

@Injectable()
export class LoginProvider {

  constructor(private http: Http, private singleton:SingletonServiceProvider) {
    
  }

  public login(usuario:string, password:string){
    var pass = CryptoJS.SHA1(password).toString();
    
    let data = JSON.stringify({usuario : usuario, password : pass});
  
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
   
    return this.http.post(this.singleton.apiUrl + "login/check", data, options)
       .map( res => res.json() );
  }
}
