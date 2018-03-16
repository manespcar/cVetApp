import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SingletonServiceProvider } from '../../providers/singleton-service/singleton-service';
import 'rxjs/add/operator/map';

@Injectable()
export class MascotasProvider {

  constructor(private http: Http, private singleton:SingletonServiceProvider) {
    
  }

  public recuperarMascotasByUsuarioId(id:number){   
    return this.http.get(this.singleton.apiUrl + "/mascotas/usuario/" + id, this.singleton.getRequestOptions())
       .map( res => res.json() );
  }

}
