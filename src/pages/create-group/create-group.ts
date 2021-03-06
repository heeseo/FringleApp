import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';


/**
 * Generated class for the CreateGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-group',
  templateUrl: 'create-group.html',
})
export class CreateGroupPage {

    name: string;
    status: string;
    description: string;
    interests: string;
    area: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthProvider, public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateGroupPage');
  }
    
    createGroup(){

        let details = {
            groupName: this.name,
            status: this.status,
            description: this.description,
            interests: this.interests,
            area: this.area
        };
       
        this.authService.createGroup(details).then((result) => {
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

    toastSuccess() {

      let toast = this.toastCtrl.create({
        message: "Successfully created Group",
        duration: 3000,
        position: 'middle'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }

    presentToast() {
      let toast = this.toastCtrl.create({
        message: "Failed to create",
        duration: 3000,
        position: 'middle'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }

}
