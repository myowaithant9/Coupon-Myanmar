import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  shoplist_apiUrl = 'http://thetthar.com/api/v1/shops/all_list'; //for api


  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  //for api start 
  getShopListAPI() {
    return new Promise(resolve => {
      this.http.get(this.shoplist_apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.shoplist_apiUrl+'/users', JSON.stringify(data))

/*
      this.http.post(this.apiUrl+'/users', JSON.stringify(data), {
        headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
        params: new HttpParams().set('id', '3'),
      })
*/
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }  

  //for api end

}
