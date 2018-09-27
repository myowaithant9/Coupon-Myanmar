import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the PromotionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promotion-detail',
  templateUrl: 'promotion-detail.html',
})
export class PromotionDetailPage {
  promotionsegment: string = "about";

  promotiondetail: any=[];

  relatedpromotions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.promotiondetail.push(this.navParams.get("data"));
    console.log("promotion detail " + JSON.stringify(this.promotiondetail));
    this.getRelatedPromotion();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromotionDetailPage');
  }

  //for related promotion api
  getRelatedPromotion() {
    this.apiProvider.getRelatdPromotionAPI() 
    .then(data => {
      this.relatedpromotions = data;
      console.log(this.relatedpromotions);
    });
  }

}
