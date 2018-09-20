import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';


/**
 * Generated class for the CouponPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon.html',
})
export class CouponPage {
  coupons: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.getCouponList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CouponPage');
  }

  //for coupon api
  getCouponList() {
    this.apiProvider.getCouponListAPI() 
    .then(data => {
      this.coupons = data;
      console.log(this.coupons);
    });
  }

  searchCoupons(ev: any) {
    // Reset items back to all of the items
    this.getCouponList();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.coupons = this.coupons.filter((coupon) => {
        //return (coupon.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
