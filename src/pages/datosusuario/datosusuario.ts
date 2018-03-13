import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SingletonServiceProvider } from '../../providers/singleton-service/singleton-service';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-datosusuario',
  templateUrl: 'datosusuario.html',
})
export class DatosUsuarioPage {

  usuario = {id:null, nombreCompleto:"", direccion:"", email:"", telefono:"", imagen:""};

  constructor(private usuarioProvider: UsuarioProvider, private singleton:SingletonServiceProvider, private camera: Camera) {
  }

  ionViewDidLoad() {
    this.singleton.showLoading('');
    console.log("Recuperando datos de usuario");
  	this.usuarioProvider.getUserById(this.singleton.userid)
  	.subscribe( data => {        
        this.usuario.nombreCompleto = data.nombreCompleto;
        this.usuario.direccion = data.direccion;
        this.usuario.email = data.email;
        this.usuario.telefono = data.telefono;
        this.usuario.id = this.singleton.userid;
        this.usuario.imagen = this.usuario.imagen != "" ? this.usuario.imagen : "assets/imgs/default-image.jpg";
      }, error => {
        console.log(error);
      }
    );
  }

  public guardarDatos(){
    this.singleton.showLoading('');
    console.log("Guardando datos de usuario");
    this.usuarioProvider.saveDataUser(this.usuario)
      .subscribe( data => {
          this.singleton.loading.dismiss().then(() => {
             this.singleton.showAlert("", "Datos actualizados correctamente");
          });
        }, error => {
          console.log(error);
        }
      );
  }

  public takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
       this.usuario.imagen = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
       // Handle error
    });
  }

}