import { Injectable } from '@angular/core';
import { AlertController, LoadingController, Loading } from 'ionic-angular';


@Injectable()
export class SingletonServiceProvider {

  public loading: Loading;
  public username:string;
  public userid:number;
  public apiUrl:string;

  constructor(private alertCtrl: AlertController, private loadingCtrl: LoadingController) { 
  	this.apiUrl = 'http://10.11.112.24:8088/';
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
