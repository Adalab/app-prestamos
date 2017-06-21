import { Component } from '@angular/core';
import { FarewellPage} from '../farewell/farewell';

import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalAcceptedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-accepted',
  templateUrl: 'modal-accepted.html',
})
export class ModalAcceptedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAcceptedPage');
  }
  closeModalAccepted(){
  this.view.dismiss();
  }
  goToFarewellPage() {
    this.navCtrl.push(FarewellPage)
  }
}
