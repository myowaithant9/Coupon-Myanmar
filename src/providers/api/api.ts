import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  shoplist_apiUrl = 'http://thetthar.com/api/v1/shops/all_list'; //for shop list api
  couponlist_apiUrl = 'http://thetthar.com/api/v1/shops/all_list'; //for coupon list api



  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
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

   //for shop list api start 
   getCouponListAPI() {
    return new Promise(resolve => {
      this.http.get(this.couponlist_apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  //for shop list api end

  

}
