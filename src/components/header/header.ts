import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SingletonServiceProvider } from '../../providers/singleton-service/singleton-service';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  text: string;

  constructor(private alertCtrl: AlertController, private navCtrl: NavController, private singleton:SingletonServiceProvider) {
    this.text = "Hola " + this.singleton.username;
  }

  public salir(){
      let alert = this.alertCtrl.create({
        title: 'Cerrrar sesión',
        message: '¿Estás de seguro de cerrar sesión?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Aceptar',
            handler: () => {
              this.singleton.userid = null;
              this.singleton.username = null;
              this.navCtrl.goToRoot({});
            }
          }
        ]
      });
      alert.present();
  }

}
