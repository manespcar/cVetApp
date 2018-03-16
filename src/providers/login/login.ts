import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SingletonServiceProvider } from '../../providers/singleton-service/singleton-service';

@Injectable()
export class LoginProvider {

  constructor(private http: Http, private singleton:SingletonServiceProvider) {
    
  }

  public login(usuario:string, password:string){    
    let data = JSON.stringify({username : usuario, password : password});
   
    return this.http.post(this.singleton.apiUrl + "login", data, this.singleton.getRequestOptions());
  }
}
