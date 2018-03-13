import { Injectable } from '@angular/core';
import { IonicPage, AlertController, LoadingController, Loading, NavController } from 'ionic-angular';


@Injectable()
export class SingletonServiceProvider {

  public loading: Loading;
  public username:string;
  public userid:number;
  public apiUrl:string;

  constructor( private alertCtrl: AlertController, private loadingCtrl: LoadingController) { 
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

}
