import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingPage } from '../booking/booking';
import { ListsPage } from '../lists/lists';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  booking(){
    this.navCtrl.push(BookingPage);
  }
  list(){
    this.navCtrl.push(ListsPage);
  }
  signup(){
    this.navCtrl.push(SignupPage);
  }
  login(){
    this.navCtrl.push(LoginPage);
  }

}
