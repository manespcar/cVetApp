import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { SingletonServiceProvider } from '../../providers/singleton-service/singleton-service';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  registerCredentials = { usuario: '', password: '' };

  constructor(private navCtrl: NavController, private loginProvider: LoginProvider, private singleton:SingletonServiceProvider) {
  }

  public login(){
    this.singleton.showLoading('Accediendo...');
    this.loginProvider.login(this.registerCredentials.usuario, this.registerCredentials.password)
     .subscribe( data => { 
            this.loadVariablesInSession(data);
            this.navCtrl.push(TabsPage);
          }, error => {
            this.singleton.showAlert("Error", "Usuario o contraseña incorrectos");
          }
      );
   }

   private loadVariablesInSession(data:any) {
     this.singleton.username = this.registerCredentials.usuario;
     this.singleton.token = data.headers.get('authorization');
   }

}
