import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-merchant',
  templateUrl: 'modal-merchant.html',
})
export class ModalMerchantPage {

  constructor (private navParams: NavParams, private view: ViewController) {
  }

  closeModalMerchant(){
  this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalMerchantPage');
  }

}
