import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallesMascotaPage } from './detalles-mascota';

@NgModule({
  declarations: [
    DetallesMascotaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetallesMascotaPage),
  ],
})
export class DetallesMascotaPageModule {}
