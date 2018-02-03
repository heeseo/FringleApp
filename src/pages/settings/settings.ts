import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController  } from 'ionic-angular';
import { SettingProvider } from '../../providers/setting/setting';
import { AuthProvider } from '../../providers/auth/auth';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
    usr: any;
    devices: any;
    dvid: any;
    constructor(public navCtrl: NavController, public authService: AuthProvider, public settingService: SettingProvider,private toastCtrl: ToastController){
        
    }
    
    ionViewDidLoad() {
      
        this.settingService.getSetting().then((data) => {
              this.usr = data;
            this.devices = this.usr.devices;
            console.log(data);

        }, (err) => {
            console.log("not allowed");
        });
    }

    removeDevice(div){     
        this.settingService.removeDevice(div).then((result) => {
            //this.navCtrl.pop();
            console.log('Deleting element');

            this.successToast(); 

            this.removeItem(div);
            //this.loading.dismiss();
            //console.log(result);
            //this.navCtrl.setRoot(FeedPage);
        }, (err) => {
            //this.loading.dismiss();
            this.failToast();
            //this.navCtrl.pop();
            //console.log(err);
        });
    }

    successToast() {
      let toast = this.toastCtrl.create({
        message: "Successfully removed",
        duration: 3000,
        position: 'middle'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }

    failToast() {
      let toast = this.toastCtrl.create({
        message: "Failed to remove",
        duration: 3000,
        position: 'middle'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }

    removeItem(item){
        for(var i = 0; i < this.devices.length; i++) {
            if(this.devices[i] == item){
                this.devices.splice(i, 1);    
            }
        }
    }

}
