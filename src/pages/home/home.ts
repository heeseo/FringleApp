import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {GroupInfoPage} from '../group-info/group-info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private modal: ModalController) {

  }
  
  openModal() {
    const myModal =this.modal.create('GroupInfoPage')
    myModal.present();
}

}
