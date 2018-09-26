import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';

import { CouponDetailPage } from '../coupon-detail/coupon-detail';

import moment from 'moment';
declare var require: any;



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
  currentDate: any; 
  expireDate: any;
  leftDate: string;


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

  dateDiff(expdate){
    let moment = require('moment');
    let todayDate = new Date();
    let date1 = moment(todayDate, 'YYYY-MM-DD'),
       date2 = moment(expdate, 'YYYY-MM-DD');
   
    let duration = moment.duration(date2.diff(date1));
    duration = duration.asDays();
    
    //console.log("date " + Math.ceil(duration));

    if (Math.ceil(duration) == 0){
      return "Today";
    }
    else if (Math.ceil(duration) == 1){
      return "Tomorrow";
    }
    
    else {
      return Math.ceil(duration) + " days left";
    }
  }

  searchCoupons(ev: any) {
    // Reset items back to all of the items
    //this.getCouponList();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.coupons = this.coupons.filter((coupon) => {
        //return (coupon.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  goDetail(couponitem){
    this.navCtrl.push(CouponDetailPage, {
      data : couponitem
    })
  }

}
