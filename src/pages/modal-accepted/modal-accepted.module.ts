import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAcceptedPage } from './modal-accepted';

@NgModule({
  declarations: [
    ModalAcceptedPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAcceptedPage),
  ],
  exports: [
    ModalAcceptedPage
  ]
})
export class ModalAcceptedPageModule {}
