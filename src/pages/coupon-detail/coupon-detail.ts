import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CouponDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coupon-detail',
  templateUrl: 'coupon-detail.html',
})
export class CouponDetailPage {

  itemdetail: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemdetail = this.navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CouponDetailPage');
  }

}
