import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MascotasProvider } from '../../providers/mascotas/mascotas';
import { SingletonServiceProvider } from '../../providers/singleton-service/singleton-service';

@IonicPage()
@Component({
  selector: 'page-mascotas',
  templateUrl: 'mascotas.html',
})
export class MascotasPage {

  mascotas: Array<any>;

  constructor(private mascotasProvider: MascotasProvider, private singleton:SingletonServiceProvider) {
  }

  ionViewDidLoad() {
    this.singleton.showLoading('');
    console.log("Recuperando mascotas de usuario");
    //this.mascotasProvider.recuperarMascotasByUsuarioId(this.singleton.userid)
    this.mascotasProvider.recuperarMascotasByUsuarioId(490)
  	.subscribe( data => {        
        this.mascotas = data;
      }, error => {
        console.log(error);
      }
    );
  }

}
