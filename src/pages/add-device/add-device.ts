import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, AlertController, ModalController, ToastController  } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-add-device',
  templateUrl: 'add-device.html'
})
export class AddDevicePage {
    mac: string;
    password: string;
    loading: any;
    
    constructor(public navCtrl: NavController,  private toastCtrl: ToastController){
    
    }
    
    addDevice(){
        let details = {
            mac: this.mac,
            password: this.password
        };
       /* 
        this.settingService.addDevice(details).then((result) => {
            //this.presentToast('successfully added'); 
            this.toastSuccess();
            this.navCtrl.pop();

            //this.loading.dismiss();
            //console.log(result);
            //this.navCtrl.setRoot(FeedPage);
        }, (err) => {
            //this.loading.dismiss();
            this.presentToast();
            //this.presentToast(err.error);
            //this.navCtrl.pop();
            //console.log(err);
        });*/
    }

    presentToast() {
      let toast = this.toastCtrl.create({
        message: "Failed to add",
        duration: 3000,
        position: 'middle'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }

    toastSuccess() {
      let toast = this.toastCtrl.create({
        message: "Successfully added",
        duration: 3000,
        position: 'middle'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }
}
