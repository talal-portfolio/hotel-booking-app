import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  images:any=[
    {
      name: 'Dubai U.A.E.',
      con: 'United Arab Emirates',
      city: 'Dubai',
      image: 'assets/imgs/dubai.jpeg',
      deals: 400,
    },{
      name: 'London U.K.',
      con: 'United Kingdom',
      city: 'London',
      image: 'assets/imgs/london.jpg',
      deals: 2000,
    },{
      name: 'Kaula Lampur Malaysia',
      con: 'Malaysia',
      city: 'Kaula Lampur',
      image: 'assets/imgs/Malaysia.jpg',
      deals: 600,
    },
    {
      name: 'New York U.S.A.',
      con: 'Unites States of America',
      city: 'New York',
      image: 'assets/imgs/nyc.jpg',
      deals: 2400,
    },{
      name: 'Paris France',
      con: ' France',
      city: 'Paris',
      image: 'assets/imgs/paris.jpg',
      deals: 4000,
    },{
      name: 'Phi Phi Island Thailand',
      con: 'Thailand',
      city: 'Phi Phi Island',
      image: 'assets/imgs/thailand.jpg',
      deals: 800,
    },{
      name: 'Istanbul Turkey',
      con: ' Turkey',
      city: 'Istanbul',
      image: 'assets/imgs/Turkey.jpg',
      deals: 700,
    }
    
     ];


  constructor(public navCtrl: NavController) {

  }
  search(){
    this.navCtrl.push(SearchPage);
  }

}
