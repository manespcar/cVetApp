import { Component } from '@angular/core';

import { DatosUsuarioPage } from '../datosusuario/datosusuario';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DatosUsuarioPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
