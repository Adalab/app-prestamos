import { Component } from '@angular/core';
import { FarewellPage} from '../farewell/farewell';
import { ModalPage} from '../modal/modal';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-personal-data-validation',
  templateUrl: 'personal-data-validation.html'
})
export class PersonalDataValidationPage {

  constructor(private navCtrl: NavController, private modal: ModalController) {
  }

  goToFarewellPage() {
    this.navCtrl.push(FarewellPage)
  }

  openModal() {
    const myModal = this.modal.create('ModalPage');
    myModal.present();

  }
}
