import { Component, ViewChild } from '@angular/core';
import { Platform, Nav,  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BookingPage } from '../pages/booking/booking';
import { DealPage } from '../pages/deal/deal';
import { SettingsPage } from '../pages/settings/settings';
import { ProfilePage } from '../pages/profile/profile';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  home(){
    this.nav.popToRoot();

  }
  booking(){
    this.nav.push(BookingPage);
  }
  deals(){
    this.nav.push(DealPage);
  }
  settings(){
    this.nav.push(SettingsPage);
  } 
  profile(){
    this.nav.push(ProfilePage);
  }
  
}

