import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';


/**
 * Generated class for the ShopFollowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-follow',
  templateUrl: 'shop-follow.html',
})
export class ShopFollowPage {
  followshops: any;  


  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.getFollowShopList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopFollowPage');
  }

  //for promotion api
  getFollowShopList() {
    this.apiProvider.getFollowShopAPI() 
    .then(data => {
      this.followshops = data;
      console.log(this.followshops);
    });
  }

}
