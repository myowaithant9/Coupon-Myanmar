import { Component } from '@angular/core';

import { ShopPage } from '../shop/shop';
import { CouponPage } from '../coupon/coupon';
import { PromotionPage } from '../promotion/promotion';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ShopPage;
  tab2Root = CouponPage;
  tab3Root = PromotionPage;

  constructor() {

  }
}
