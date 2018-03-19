import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SingletonServiceProvider } from '../../providers/singleton-service/singleton-service';
import 'rxjs/add/operator/map';

@Injectable()
export class MascotasProvider {

  constructor(private http: Http, private singleton:SingletonServiceProvider) {
    
  }

  public recuperarMascotasByUsuarioId(username:string){   
    return this.http.get(this.singleton.apiUrl + "/mascotas/usuario/" + username, this.singleton.getRequestOptions())
       .map( res => res.json() );
  }

}
