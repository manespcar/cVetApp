import { Component } from '@angular/core';
import { SingletonServiceProvider } from '../../providers/singleton-service/singleton-service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  text: string;

  constructor(private singleton:SingletonServiceProvider) {
    this.text = "Hola " + singleton.username;
  }

}
