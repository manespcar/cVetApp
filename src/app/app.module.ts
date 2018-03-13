import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';

import { HeaderComponent } from '../components/header/header';

import { DatosUsuarioPage } from '../pages/datosusuario/datosusuario';
import { MascotasPage } from '../pages/mascotas/mascotas';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginProvider } from '../providers/login/login';
import { SingletonServiceProvider } from '../providers/singleton-service/singleton-service';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { MascotasProvider } from '../providers/mascotas/mascotas';

@NgModule({
  declarations: [
    MyApp,
    DatosUsuarioPage,
    MascotasPage,
    HomePage,
    TabsPage,
    LoginPage,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DatosUsuarioPage,
    MascotasPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    SingletonServiceProvider,
    UsuarioProvider,
    MascotasProvider
  ]
})
export class AppModule {}
