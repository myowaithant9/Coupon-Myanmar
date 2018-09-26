import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ToastController } from 'ionic-angular';        //Toast


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

  coupondetail: any=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController                 //Toast
  ) {
    this.coupondetail.push(this.navParams.get("data"));
    console.log("coupon detail " + JSON.stringify(this.coupondetail));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CouponDetailPage');
  }

  savetoast() {
    const toast = this.toastCtrl.create({
      message: 'This Coupon is added to MyCoupon',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

}
