import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {GroupInfoPage} from '../group-info/group-info';
import {JoinGroupPage} from '../join-group/join-group';
import {ShareGroupPage} from '../share-group/share-group';


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
    
    joinGroup(){
        this.navCtrl.push('JoinGroupPage');
        
    }
    
    shareGroup(){
        this.navCtrl.push('ShareGroupPage');
        
    }

}
