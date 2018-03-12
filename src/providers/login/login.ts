import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import CryptoJS from 'crypto-js';

let apiUrl = '/localhost/';

@Injectable()
export class LoginProvider {

  constructor(public http: Http) {
    
  }

  public login(usuario:string, password:string){
    var pass = CryptoJS.SHA1(password).toString();

    let data = JSON.stringify({usuario : usuario, password : pass});
  
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
   
    return this.http.post(apiUrl + "login/check", data, options)
       .map( res => res.json() );
  }
}
