import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
//import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { ProfilePage } from '../profile/profile'
import { HomePage } from '../home/home';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  role: string;
  email: string;
  password: string;

  constructor(public navCtrl: NavController, public authService: AuthProvider, public navParams: NavParams, public loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');

  }

  register(){

    let loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
    loading.present();
    //this.showLoader();
 

      
    let details = {
        email: this.email,
        password: this.password,
        role: this.role,
    };
    console.log(details);
    this.authService.createAccount(details).then((result) => {
      loading.dismiss();
      console.log(result);
      //this.navCtrl.setRoot(FeedPage);
        this.navCtrl.setRoot(HomePage);
    }, (err) => {
        loading.dismiss();
    });
 
  }
 
  showLoader(){
 
    let loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    loading.present();
 
  }

}
