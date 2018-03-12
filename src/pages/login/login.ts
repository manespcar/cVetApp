import { Component } from '@angular/core';
import { IonicPage, AlertController, LoadingController, Loading, NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { SingletonServiceProvider } from '../../providers/singleton-service/singleton-service';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  registerCredentials = { usuario: '', password: '' };

  constructor(private navCtrl: NavController, private loginProvider: LoginProvider, private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController, private singleton:SingletonServiceProvider) {
  }

  public login(){
    this.showLoading();
    this.loginProvider.login(this.registerCredentials.usuario, this.registerCredentials.password)
     .subscribe( data => { 
            this.loadVariablesInSession(data);
            this.navCtrl.push(TabsPage);
          }, error => {
            this.showError("Usuario o contraseña incorrectos");
          }
      );
   }

   private showLoading() {
       this.loading = this.loadingCtrl.create({
         content: 'Accediendo...',
         dismissOnPageChange: true
       });
       this.loading.present();
     }

   private showError(text) {
     this.loading.dismiss();
     let alert = this.alertCtrl.create({
       title: 'Error',
       subTitle: text,
       buttons: ['OK']
     });
     alert.present(prompt);
   }

   private loadVariablesInSession(data:any) {
     this.singleton.userid = data.id;
     this.singleton.username = data.usuario;
   }

}
