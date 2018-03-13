import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { SingletonServiceProvider } from '../../providers/singleton-service/singleton-service';
import 'rxjs/add/operator/map';

/*
  Generated class for the MascotasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MascotasProvider {

  constructor(private http: Http, private singleton:SingletonServiceProvider) {
    
  }

  public recuperarMascotasByUsuarioId(id:number){
  	let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
   
    return this.http.get(this.singleton.apiUrl + "/mascotas/usuario/" + id, options)
       .map( res => res.json() );
  }

}
