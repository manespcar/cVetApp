import { Injectable } from '@angular/core';


@Injectable()
export class SingletonServiceProvider {

  public username:string;
  public userid:number;
  public apiUrl:string;

  constructor() { 
  	this.apiUrl = '/localhost/';
  }

}
