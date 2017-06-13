import { Component } from '@angular/core';
import { FarewellPage} from '../farewell/farewell';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-personal-data-validation',
  templateUrl: 'personal-data-validation.html'
})
export class PersonalDataValidationPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  goToFarewellPage() {
    this.navCtrl.push(FarewellPage)
  }

  ProfileModal() {
     let profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
     profileModal.present();
   }
}

@Component({
  selector: 'modal-profile',
  templateUrl: 'personal-data-validation.html'
})

export class Profile {

 constructor(params: NavParams) {
   console.log('UserId', params.get('userId'));
 }

}
