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

  usuario = {nombreCompleto:"", direccion:"", email:"", telefono:""};

  constructor(private usuarioProvider: UsuarioProvider, private singleton:SingletonServiceProvider) {
  }

  ionViewDidLoad() {
  	this.usuarioProvider.getUserById(this.singleton.userid)
  	.subscribe( data => {        
        this.usuario.nombreCompleto = data.nombreCompleto;
        this.usuario.direccion = data.direccion;
        this.usuario.email = data.email;
        this.usuario.telefono = data.telefono;
      }, error => {
        console.log(error);
      }
    );
  }

  public guardarDatos(){
  	this.usuarioProvider.saveDataUser(this.usuario)
  	.subscribe( data => {        
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

}