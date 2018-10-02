import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppMinimize } from '@ionic-native/app-minimize';


import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';

import { TabsPage } from '../pages/tabs/tabs';
import { ShopFollowPage } from '../pages/shop-follow/shop-follow';
import { NearMePage } from '../pages/near-me/near-me';
import { CategoryPage } from '../pages/category/category';
import { NotiPage } from '../pages/noti/noti';
import { SettingsPage } from '../pages/settings/settings';
//import { TermsPage } from '../pages/terms/terms';
//import { AboutappPage } from '../pages/aboutapp/aboutapp';
import { SignOutPage } from '../pages/sign-out/sign-out';

import { SplashPage } from '../pages/splash/splash';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  loader: any;

  pages: Array<{title: string, component: any, active: boolean, icon: string }>;
  placeholder = 'assets/imgs/supergirl.jpg';

  constructor(public appMinimize: AppMinimize, public storage: Storage, public loadingCtrl: LoadingController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl: ModalController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: TabsPage, active: true, icon: 'home' },
      { title: 'Following Shops', component: ShopFollowPage, active: false, icon: 'map' },
      { title: 'Category',
        component: CategoryPage, active: false, icon: 'ionic' },
      { title: 'Notification', component: NotiPage, active: false, icon: 'ionic' },
      { title: 'App Settings', component: SettingsPage, active: false, icon: 'archive' },
      //{ title: 'Terms', component: TermsPage, active: false, icon: 'body' },
      //{ title: 'About This App', component: AboutappPage, active: false, icon: 'bookmarks' },
      { title: 'Sign Out', component: SignOutPage, active: false, icon: 'book' }
    ];

  }

  initializeApp() {
    this.presentLoading();

    this.platform.registerBackButtonAction(() => {
      this.appMinimize.minimize();
   });
 
    this.platform.ready().then(() => {
 
            let splash = this.modalCtrl.create(SplashPage);
            splash.present();
 
      this.storage.get('introShown').then((result) => {
 
        if(result){
          this.rootPage = LoginPage;
        } else {
          this.rootPage = 'FirstTimePage';
          this.storage.set('introShown', true);
        }
 
        this.loader.dismiss();
 
      });
 
    });
  }

  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "Plzz Wait ..."
    });
 
    this.loader.present();
 
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
