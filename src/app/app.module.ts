import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { AppMinimize } from '@ionic-native/app-minimize';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { Ionic2RatingModule } from 'ionic2-rating';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ShopPage } from '../pages/shop/shop';
import { CouponPage } from '../pages/coupon/coupon';
import { PromotionPage } from '../pages/promotion/promotion';

import { ShopFollowPage } from '../pages/shop-follow/shop-follow';
import { NearMePage } from '../pages/near-me/near-me';
import { CategoryPage } from '../pages/category/category';
import { NotiPage } from '../pages/noti/noti';
import { SettingsPage } from '../pages/settings/settings';
import { TermsPage } from '../pages/terms/terms';
import { AboutappPage } from '../pages/aboutapp/aboutapp';
import { SignOutPage } from '../pages/sign-out/sign-out';
import { SplashPage } from '../pages/splash/splash';
import { ShopDetailPage } from '../pages/shop-detail/shop-detail';

import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api'; //for api
 
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ShopPage,
    CouponPage,
    PromotionPage,
    TabsPage,
    ShopFollowPage,
    NearMePage,
    CategoryPage,
    NotiPage,
    SettingsPage,
    TermsPage,
    AboutappPage,
    SignOutPage,
    SplashPage,
    ShopDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  //for api
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SuperTabsModule.forRoot(),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ShopPage,
    CouponPage,
    PromotionPage,
    TabsPage,
    ShopFollowPage,
    NearMePage,
    CategoryPage,
    NotiPage,
    SettingsPage,
    TermsPage,
    AboutappPage,
    SignOutPage,
    SplashPage,
    ShopDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppMinimize,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
