import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {GroupInfoPage} from '../group-info/group-info';
import {CreateGroupPage} from '../create-group/create-group';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private modal: ModalController, public navCtrl: NavController) {

  }
  
  openModal() {
    const myModal =this.modal.create('GroupInfoPage')
    myModal.present();
}

    createGroup(){
        this.navCtrl.push('CreateGroupPage');
               
    }

}
