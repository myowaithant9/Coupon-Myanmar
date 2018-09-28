import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  shopID: any;
  promotionID: any;
  userID: any = 320;
  shoplist_apiUrl = 'http://thetthar.com/api/v1/shops/all_list'; //for shop list api
  couponlist_apiUrl = 'http://thetthar.com/api/v1/coupons/all_list'; //for coupon list api
  promotionlist_apiUrl = 'http://thetthar.com/api/v1/promotions/all_list/169'; //for promotion list api
  relatedpromotion_apiUrl = 'http://thetthar.com/api/v1/promotions/related/170/' // related promotion list for promotion details page
  followshop_apiUrl = 'http://thetthar.com:3000/api/v1/shops/follow/' // related promotion list for promotion details page
  



  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
    //this.getPromotionList();
  }
 
  //for shop list api start 
  getShopListAPI() {
    return new Promise(resolve => {
      this.http.get(this.shoplist_apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  //for shop list api end

   //for coupon list api start 
   getCouponListAPI() {
    return new Promise(resolve => {
      this.http.get(this.couponlist_apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  //for coupon list api end

  //for promotion list api start 
  getPromotionListAPI() {
    return new Promise(resolve => {
      this.http.get(this.promotionlist_apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  //for promotion list api end

  //for related promotion list api start 
  getRelatdPromotionAPI() {
    return new Promise(resolve => {
      this.http.get(this.relatedpromotion_apiUrl + this.shopID + "/" + this.promotionID).subscribe(data => {
        resolve(data);
        console.log("get Related Promotion url htal yout p");
      }, err => {
        console.log(err);
      });
    });
  }
  //for related promotion list api end

  //for follow shop api start 
  getFollowShopAPI() {
    return new Promise(resolve => {
      this.http.get(this.followshop_apiUrl + this.userID).subscribe(data => {
        resolve(data);
        console.log("get followshop by userID");
      }, err => {
        console.log(err);
      });
    });
  }
  //for follow shop api end

  

}
