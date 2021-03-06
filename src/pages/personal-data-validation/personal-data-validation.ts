import { Component } from '@angular/core';
import { FarewellPage} from '../farewell/farewell';
import { ModalPage} from '../modal/modal';
import { ModalMerchantPage} from '../modal-merchant/modal-merchant';
import { ModalAcceptedPage} from '../modal-accepted/modal-accepted';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-personal-data-validation',
  templateUrl: 'personal-data-validation.html'
})
export class PersonalDataValidationPage {

  constructor(private navCtrl: NavController, private modal: ModalController) {
  }

  openModal() {
    const myModal = this.modal.create('ModalPage');
    myModal.present();

  }
  openModalMerchant() {
    const myModal = this.modal.create('ModalMerchantPage');
    myModal.present();

  }
  openModalAccepted() {
    const myModal = this.modal.create('ModalAcceptedPage');
    myModal.present();
  }

  goToFarewellPage() {
    this.navCtrl.push(FarewellPage)
    }
}
