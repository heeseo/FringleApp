import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
//import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { FeedPage } from '../feed/feed';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    email: string;
    password: string;
    loading: any;

    constructor(public navCtrl: NavController, public authService: AuthProvider, public navParams: NavParams, public loadingCtrl: LoadingController,
    private toastCtrl: ToastController, ) {
    }

    ionViewDidLoad() {
        this.showLoader();
 
        //Check if already authenticated
        this.authService.checkAuthentication().then((res) => {
            console.log("Already authorized");
            this.loading.dismiss();
            this.navCtrl.setRoot(FeedPage);
        }, (err) => {
            console.log("Not already authorized");
            this.loading.dismiss();
        });
    }
 
    login(){

        this.showLoader();
        
        let credentials = {
            email: this.email,
            password: this.password,
        };
 
        this.authService.login(credentials).then((result) => {
            this.loading.dismiss();
            console.log(result);
            this.navCtrl.setRoot(HomePage);
            this.toastSuccess();

        }, (err) => {
            this.loading.dismiss();
            this.presentToast();
            //this.presentToast(err.error); 
            console.log(err);
        });
 
    }
 
    launchSignup(){
        this.navCtrl.push(SignupPage);
    }
 
    showLoader(){
 
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
 
        this.loading.present();
 
    }

    presentToast() {
      let toast = this.toastCtrl.create({
        message: "Failed to login",
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
        message: "Successfully loged-in",
        duration: 3000,
        position: 'middle'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }

}
