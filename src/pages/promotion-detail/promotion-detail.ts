import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.promotiondetail.push(this.navParams.get("data"));
    console.log("promotion detail " + JSON.stringify(this.promotiondetail));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromotionDetailPage');
  }

}
