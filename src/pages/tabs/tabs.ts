import { Component } from '@angular/core';

import { DatosUsuarioPage } from '../datosusuario/datosusuario';
import { MascotasPage } from '../mascotas/mascotas';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DatosUsuarioPage;
  tab3Root = MascotasPage;

  constructor() {

  }
}
