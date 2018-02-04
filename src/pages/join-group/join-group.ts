import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';


/**
 * Generated class for the JoinGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-join-group',
  templateUrl: 'join-group.html',
})
export class JoinGroupPage {
    accessKey: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthProvider, public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinGroupPage');
  }
    
    join(){
        let details = {
            accessKey: this.accessKey
        };
        
        this.authService.join(details).then((result) => {
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
        });        
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
