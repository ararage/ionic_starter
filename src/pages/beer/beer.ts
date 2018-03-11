import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-beer',
  templateUrl: 'beer.html',
})
export class BeerPage {
  //Información obtenida de la página principal
  data:any
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('data')
    console.log(this.data)
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeerPage');
  }

}
