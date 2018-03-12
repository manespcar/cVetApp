import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatosUsuarioPage } from './datosusuario';

@NgModule({
  declarations: [
    DatosUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(DatosUsuarioPage)
  ],
})
export class DatosUsuarioPageModule {}
