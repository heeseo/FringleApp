import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import {GroupInfoPage} from '../group-info/group-info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private modal: ModalController, private toastCtrl: ToastController) {

  }

  makeToast() {
    let toast = this.toastCtrl.create({
      message: 'Wave Sent Successfully',
      duration: 4000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  
  openModal() {
    const myModal =this.modal.create('GroupInfoPage')
    myModal.present();
}

}
