import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalMerchantPage } from './modal-merchant';

@NgModule({
  declarations: [
    ModalMerchantPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalMerchantPage),
  ],
  exports: [
    ModalMerchantPage
  ]
})
export class ModalPageModule {}
