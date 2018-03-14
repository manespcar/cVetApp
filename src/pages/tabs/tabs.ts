import { Component } from '@angular/core';

import { DatosUsuarioPage } from '../datosusuario/datosusuario';
import { MascotasPage } from '../mascotas/mascotas';
import { AvisosPage } from '../avisos/avisos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AvisosPage;
  tab2Root = DatosUsuarioPage;
  tab3Root = MascotasPage;

  constructor() {

  }
}
