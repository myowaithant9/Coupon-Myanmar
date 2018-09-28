import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';

import { PromotionDetailPage } from '../promotion-detail/promotion-detail';


import moment from 'moment';
declare var require: any;


/**
 * Generated class for the PromotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promotion',
  templateUrl: 'promotion.html',
})
export class PromotionPage {
  promotions: any;  

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider, public app: App) {
    this.getPromotionList();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromotionPage');
  }

  //for promotion api
  getPromotionList() {
    this.apiProvider.getPromotionListAPI() 
    .then(data => {
      this.promotions = data;
      console.log(this.promotions);
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
      this.promotions = this.promotions.filter((promotion) => {
        //return (coupon.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  goDetail(promotionitem){
    this.app.getRootNav().setRoot(PromotionDetailPage, {
      data : promotionitem
    })

    this.apiProvider.shopID = promotionitem.shop_id;
    this.apiProvider.promotionID = promotionitem.id;
    //console.log("this.apiProvider.shopID from goDetail:" + this.apiProvider.shopID);
  }

}
