import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { SingletonServiceProvider } from '../../providers/singleton-service/singleton-service';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioProvider {

  constructor(private http: Http, private singleton:SingletonServiceProvider) {
    
  }

  public getUserById(id:number){
  	let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
   
    return this.http.get(this.singleton.apiUrl + "usuario/" + id, options)
       .map( res => res.json() );
  }

}
