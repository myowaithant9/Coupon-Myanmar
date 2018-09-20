import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
/**
 * Generated class for the FirstTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first-time',
  templateUrl: 'first-time.html',
})
export class FirstTimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FirstTimePage');
  }

  goLogin()
  {
    this.navCtrl.setRoot(LoginPage);
  }

}
