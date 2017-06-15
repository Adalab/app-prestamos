import { Component } from '@angular/core';
import { FarewellPage} from '../farewell/farewell';
import { Modal, NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-personal-data-validation',
  templateUrl: 'personal-data-validation.html'
})
export class PersonalDataValidationPage {

  constructor(public navCtrl: NavController, private modal: ModalController) {

  }
  goToFarewellPage() {
    this.navCtrl.push(FarewellPage)
  }

  openModal() {
    const myModal: Modal = this.modal.create('ModalPage');
    myModal.present();

  }
}
