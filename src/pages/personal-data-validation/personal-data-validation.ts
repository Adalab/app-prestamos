import { Component } from '@angular/core';
import { FarewellPage} from '../farewell/farewell';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-personal-data-validation',
  templateUrl: 'personal-data-validation.html'
})
export class PersonalDataValidationPage {

  constructor(public navCtrl: NavController) {

  }
  goToFarewellPage() {
    this.navCtrl.push(FarewellPage)
  }
}

//modal

function modal() {
$scope.openModal = function(){
    $scope.modal.show();
};

$scope.closeModal = function(){
    $scope.modal.hide();
};

$scope.$on('$destroy', function() {
    $scope.modal.remove();
});
}
