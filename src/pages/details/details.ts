import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {


  d:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    this.d = JSON.parse(this.navParams.data['data'])
    console.log(this.d)
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Booking was proceed successfully',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
