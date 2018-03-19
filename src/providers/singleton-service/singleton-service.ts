import { Injectable } from '@angular/core';
import { AlertController, LoadingController, Loading } from 'ionic-angular';
import { Headers, RequestOptions } from '@angular/http';
import { LoginPage } from '../../pages/login/login';
import { App  } from 'ionic-angular';

@Injectable()
export class SingletonServiceProvider {

  public loading: Loading;
  public username:string;
  public apiUrl:string;
  public token:string;

  constructor(private alertCtrl: AlertController, private loadingCtrl: LoadingController, public app: App) { 
    //this.apiUrl = 'http://192.168.0.159:8088/';
    this.apiUrl = '/localhost/';
  }

  public showLoading(text) {
       this.loading = this.loadingCtrl.create({
         content: text,
         dismissOnPageChange: true
       });
       this.loading.present();
     }

   public showAlert(title, text) {
     this.loading.dismiss();
     let alert = this.alertCtrl.create({
       title: title,
       subTitle: text,
       buttons: ['OK']
     });
     alert.present();
   }

   public getRequestOptions(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    if(this.token){
      console.log('Existe token')
      headers.append('Authorization', this.token);
    }
    let options = new RequestOptions({ headers: headers });
    return options;
   }

   public showMessageSessionExpired(){
    let alert = this.alertCtrl.create({
      title: '',
      message: 'Su sesión ha caducado',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.username = null;
            this.token = null;
            
            this.app.getRootNav().setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
   }

}
