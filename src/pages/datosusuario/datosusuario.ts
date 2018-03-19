import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { Camera } from '@ionic-native/camera';
import { SingletonServiceProvider } from '../../providers/singleton-service/singleton-service';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-datosusuario',
  templateUrl: 'datosusuario.html',
})
export class DatosUsuarioPage {

  public foto:string;
  usuario = {username:"", nombreCompleto:"", direccion:"", email:"", telefono:"", imagen:""};

  constructor(private usuarioProvider: UsuarioProvider, private singleton:SingletonServiceProvider, private camera: Camera) {
  }

  ionViewDidLoad() {
    this.singleton.showLoading('');
    console.log("Recuperando datos de usuario");
  	this.usuarioProvider.getUserById(this.singleton.username)
  	.subscribe( data => {
        this.usuario.username = this.singleton.username;
        this.usuario.nombreCompleto = data.nombreCompleto;
        this.usuario.direccion = data.direccion;
        this.usuario.email = data.email;
        this.usuario.telefono = data.telefono;
        this.foto = (data.imagen) ? data.imagen : "assets/imgs/default-image.jpg";
      }, error => {
        if(error.status == 403){
          this.singleton.showMessageSessionExpired();
        }
      }
    );
  }

  public guardarDatos(){
    this.singleton.showLoading('');
    console.log("Guardando datos de usuario");
    this.usuario.imagen = this.foto;
    this.usuarioProvider.saveDataUser(this.usuario)
      .subscribe( data => {
          this.singleton.loading.dismiss().then(() => {
             this.singleton.showAlert("", "Datos actualizados correctamente");
          });
        }, error => {
          if(error.status == 403){
            this.singleton.showMessageSessionExpired();
          }
        }
      );
  }

  public tomarFoto(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,      
        targetWidth: 1000,
        targetHeight: 1000,
        quality: 100
    }).then((imageData) => {
      this.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
        console.log(err);
    });    
  }

}