import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MascotasProvider } from '../../providers/mascotas/mascotas';
import { DetallesMascotaPage } from '../../pages/detalles-mascota/detalles-mascota';
import { SingletonServiceProvider } from '../../providers/singleton-service/singleton-service';

@IonicPage()
@Component({
  selector: 'page-mascotas',
  templateUrl: 'mascotas.html',
})
export class MascotasPage {

  mascotas: Array<any>;

  constructor(private mascotasProvider: MascotasProvider, private singleton:SingletonServiceProvider, private navCtrl: NavController) {
  }

  ionViewDidLoad() {
    this.singleton.showLoading('');
    console.log("Recuperando mascotas de usuario");
    this.mascotasProvider.recuperarMascotasByUsuarioId(this.singleton.username)
  	.subscribe( data => {        
        this.mascotas = data;
      }, error => {
        if(error.status == 403){
          this.singleton.showMessageSessionExpired();
        }
      }
    );
  }

  getInfoMascota(id:number){
    this.navCtrl.push(DetallesMascotaPage, {mascotaId:id});
  }

}
