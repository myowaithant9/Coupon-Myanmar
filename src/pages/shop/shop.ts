import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ShopDetailPage } from '../shop-detail/shop-detail';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  shops: any;

  //searchQuery: string = '';
  //rate: any;
  //items: string[];

  //items: Array<{image: string, name: string, rating: number, type: string, icon: string  }>;
  //, octime: string, phoneNo: number, address: string, delivery: boolean
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    //this.initializeItems();
    this.getShopList();
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad ShopPage');
  }

  //for shoplist api
  getShopList() {
    this.apiProvider.getShopListAPI()
    .then(data => {
      this.shops = data;
      console.log(this.shops);
    });
  }

  /*
  initializeItems() {

    this.items = [
      { image: 'assets/imgs/supergirl.jpg', name: 'Shwe Pan', rating: 3.4, type: 'Restaurant', icon: 'ionic'},
      { image: 'assets/imgs/supergirl.jpg', name: 'Hot Pot City', rating: 4.5,type: 'Hot Pot',  icon: 'ionic' },
      { image: 'assets/imgs/supergirl.jpg', name: 'Hotke Htoe', rating: 5,type: 'BBQ',  icon: 'ionic' },
      { image: 'assets/imgs/supergirl.jpg', name: 'Oreno Kit', rating: 2.1,type: 'Coffee Shop',  icon: 'ionic' }
    ]
  }
*/
  searchShops(ev: any) {
    // Reset items back to all of the items
    this.getShopList();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.shops = this.shops.filter((shop) => {
        //return (shop.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  goDetail(data)
  {
    this.navCtrl.push(ShopDetailPage, {
      d: data
    })
  }

}
