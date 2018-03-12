import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { SingletonServiceProvider } from '../../providers/singleton-service/singleton-service';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-datosusuario',
  templateUrl: 'datosusuario.html',
})
export class DatosUsuarioPage {

  usuario:any;

  constructor(private usuarioProvider: UsuarioProvider, private singleton:SingletonServiceProvider) {
  }

  ionViewDidLoad() {
  	this.usuarioProvider.getUserById(this.singleton.userid)
  	.map(res => {console.log("response "+res)});
  	/*.subscribe( data => {        
        this.usuario = data;
      }, error => {
        console.log(error);
      }
    );*/ 
  }

  public guardarDatos(){
  	console.log('guardarDatos -> '+this.usuario.direccion);
  }

}