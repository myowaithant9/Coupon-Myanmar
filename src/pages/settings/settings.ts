import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  templateUrl: 'terms.html',
})
export class TermsPage {
  constructor(params: NavParams) {
    //this.item = params.data.item;
  }
}

@Component({
  templateUrl: 'about.html',
})
export class AboutPage {
  constructor(params: NavParams) {
    //this.item = params.data.item;
  }
}


@Component({
  template: `
  <ion-header>

  <ion-navbar color="coupon">
    <button ion-button menuToggle color="yellow">
      <ion-icon name="menu"></ion-icon>
    </button>
  </ion-navbar>

</ion-header>


<ion-content>
  <ion-card>
    <ion-card-header>
      <b>Application</b>
    </ion-card-header>
    <button ion-item>
      <ion-icon large item-start name='sync'></ion-icon>
      <h2>Check update</h2>
    </button>
    <button ion-item>
      <ion-icon large item-start name='share'></ion-icon>
      <h2>Share application</h2>
    </button>
  </ion-card>
  <ion-card>
    <ion-card-header>
      <b>Notification</b>
    </ion-card-header>
    <ion-item>
      <ion-icon large item-start name='notifications-outline'></ion-icon>
      <h2>Notification On/Off</h2>
    </ion-item>
  </ion-card>
  <ion-card>
    <ion-card-header>
      <b>General</b>
    </ion-card-header>
    <button ion-item (click)="openTermsPage()">
      <ion-icon large item-start name='flag'></ion-icon>
      <h2>Terms and conditions</h2>
    </button>
    <button ion-item>
      <ion-icon large item-start name='trash'></ion-icon>
      <h2>Delete account</h2>
    </button>
    <button ion-item (click)="openAboutPage()">
      <ion-icon large item-start name='chatbubbles'></ion-icon>
      <h2>About this app</h2>
    </button>
  </ion-card>

</ion-content>
`
})

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  openTermsPage() {
    console.log('ionViewDidLoad TermsPage');
    this.navCtrl.push(TermsPage);
    console.log('Reach TermsPage');

  }

  openAboutPage() {
    console.log('ionViewDidLoad AboutPage');
    this.navCtrl.push(AboutPage);
    console.log('Reach AboutPage');

  }

}

