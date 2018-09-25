import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
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
    var now = new Date();
    var timeDiff = Math.abs(now.getDate() - new Date(expdate).getDate());
    if (timeDiff == 0){
      return "Today";
    }
    else if (timeDiff == 1){
      return "Tomorrow";
    }
    
    else {
      return timeDiff + " days left";
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

}
