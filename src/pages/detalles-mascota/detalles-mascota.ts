import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { MascotasProvider } from '../../providers/mascotas/mascotas';
import { SingletonServiceProvider } from '../../providers/singleton-service/singleton-service';
import { Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-detalles-mascota',
  templateUrl: 'detalles-mascota.html',
})
export class DetallesMascotaPage {

  public foto:string;
  public infoMascota:any;
  public isActive:boolean;

  constructor(private navParams: NavParams, private mascotasProvider: MascotasProvider, private singleton:SingletonServiceProvider, private camera: Camera) {
  }

  ionViewDidLoad() {
    this.singleton.showLoading('');
    console.log("Recuperando informacion de la mascota");
    this.mascotasProvider.recuperarInformacionDeMascota(this.navParams.get('mascotaId'))
  	.subscribe( data => {
        this.infoMascota = data;
        if(data.recordatorios){
          this.isActive = true;
        } else {
          this.isActive = false;
        }
        this.foto = data.imagen;
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
