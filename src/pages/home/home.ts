import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import {GroupInfoPage} from '../group-info/group-info';
import {JoinGroupPage} from '../join-group/join-group';
import {ShareGroupPage} from '../share-group/share-group';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private modal: ModalController, public navCtrl: NavController, public toastCtrl: ToastController) {

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
