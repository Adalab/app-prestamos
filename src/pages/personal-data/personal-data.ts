import { Component } from '@angular/core';
<<<<<<< HEAD
import {farewellPage} from '../farewell/farewell';
=======
import { farewellPage} from '../farewell/farewell';
>>>>>>> start new page to make form part
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-personal-data',
  templateUrl: 'personal-data.html'
})

export class PersonalDataPage {

  constructor(public navCtrl: NavController) {

  }
<<<<<<< HEAD
  goToPersonalFarewellPage(){
    this.navCtrl.push(farewellPage)
  }
=======
  goToFarewellPage(){
    this.navCtrl.push(farewellPage)
  }

>>>>>>> start new page to make form part
}
