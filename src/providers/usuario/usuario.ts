import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SingletonServiceProvider } from '../../providers/singleton-service/singleton-service';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioProvider {

  constructor(private http: Http, private singleton:SingletonServiceProvider) {
    
  }

  public getUserById(id:number){
    return this.http.get(this.singleton.apiUrl + "usuario/" + id, this.singleton.getRequestOptions())
       .map( res => res.json() );
  }

  public saveDataUser(usuario:any){
    let data = JSON.stringify(usuario);

  	return this.http.post(this.singleton.apiUrl + "usuario/save", data, this.singleton.getRequestOptions())
       .map( res => res.json() );	
  }

}
