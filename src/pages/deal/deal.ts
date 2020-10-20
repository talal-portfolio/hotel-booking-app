import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the DealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deal',
  templateUrl: 'deal.html',
})
export class DealPage {
  images:any=[
    {
      title: 'Dubai U.A.E.',
      con: 'United Arab Emirates',
      city: 'Dubai',
      image: 'assets/imgs/dubai.jpeg',
      deals: '24',
      bud:   '400',
      days: '3'
    },{
      title: 'London U.K.',
      con: 'United Kingdom',
      city: 'London',
      image: 'assets/imgs/london.jpg',
      deals: '14',
      bud:   '2000',
      days: '10'
    },{
      title: 'Kaula Lampur Malaysia',
      con: 'Malaysia',
      city: 'Kaula Lampur',
      image: 'assets/imgs/Malaysia.jpg',
      deals: '20',
      bud:   '600',
      days: '7'
    },
    {
      title: 'New York U.S.A.',
      con: 'Unites States of America',
      city: 'New York',
      image: 'assets/imgs/nyc.jpg',
      deals: '12',
      bud:   '2400',
      days: '7'
    },{
      title: 'Paris France',
      con: ' France',
      city: 'Paris',
      image: 'assets/imgs/paris.jpg',
      deals: '13',
      bud:   '4000',
      days: '30'
    },{
      title: 'Phi Phi Island Thailand',
      con: 'Thailand',
      city: 'Phi Phi Island',
      image: 'assets/imgs/thailand.jpg',
      deals: '34',
      bud:   '800',
      days: '30'
    },{
      title: 'Istanbul Turkey',
      con: ' Turkey',
      city: 'Istanbul',
      image: 'assets/imgs/Turkey.jpg',
      deals: '24',
      bud:   '600',
      days: '3'
    }
    
     ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealPage');
  }
  gotoNext(i){
    let data = JSON.stringify(i)
    this.navCtrl.push(DetailsPage, {data: data})
    console.log(i)
  }

}
