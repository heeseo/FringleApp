import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FeedPage } from '../feed/feed';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  userID: string;
  fName: string;
  lName: string;
  dob: Date;
  gender: string;
  status: string;
  city: string;
  county: string;
  country: string;
  hobbies: string;
  details: string;
  interest: string;

  constructor(public navCtrl: NavController, public authService: AuthProvider, public navParams: NavParams, public loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');

  }

  setProfile(){

    let loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
    loading.present();
    //this.showLoader();
 

      
    let details = {
        useID: this.userID,
          fname: this.fName,
          lname: this.lName,
          dob: this.dob,
          gender: this.gender,
          status: this.status,
          city: this.city,
          county: this.county,
          country: this.country,
          hobbies: this.hobbies,
          details: this.details,
          interest: this.interest,
    };
    console.log(details);
    this.authService.setProfile(details).then((result) => {
      loading.dismiss();
      console.log(result);
      //this.navCtrl.setRoot(FeedPage);
        this.navCtrl.setRoot(HomePage);
    }, (err) => {
        loading.dismiss();
    });
 
  }

    skip(){
        this.navCtrl.setRoot(HomePage);        
    }
 
  showLoader(){
 
    let loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    loading.present();
 
  }

}
