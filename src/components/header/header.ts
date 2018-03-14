import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { SingletonServiceProvider } from '../../providers/singleton-service/singleton-service';
import { LoginPage } from '../../pages/login/login';
import { App  } from 'ionic-angular';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  text: string;

  constructor(private alertCtrl: AlertController, private singleton:SingletonServiceProvider, public app: App) {
    this.text = "Hola " + this.singleton.username;
  }

  public salir(){
      let alert = this.alertCtrl.create({
        title: '',
        message: '¿Estás seguro que deseas salir?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Sí',
            handler: () => {
              this.singleton.userid = null;
              this.singleton.username = null;
              
              this.app.getRootNav().setRoot(LoginPage);
            }
          }
        ]
      });
      alert.present();
  }

}
