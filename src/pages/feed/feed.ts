import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, ModalController  } from 'ionic-angular';
import { TodosProvider } from '../../providers/todos/todos';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
    
  //imagedata: Array<{mac: string, url: string}>;
    imagedata: any;
    images: any;
    loading: any;
    groupimage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoService: TodosProvider, public modalCtrl: ModalController, public alertCtrl: AlertController, public authService: AuthProvider) {
      /*this.imagedata = [
          {mac:"mac1", url: "image1"},
          {mac:"mac1", url: "image2",},
          {mac:"mac1", url: "image3"},
          {mac:"mac1", url: "image4"},
          {mac:"mac1", url: "image5"},
          {mac:"mac1", url: "image6"},
          {mac:"mac1", url: "image7"},
          {mac:"mac2", url: "image8"},
          {mac:"mac2", url: "image9"},
          {mac:"mac2", url: "image10"},
          {mac:"mac3", url: "image11"},
          {mac:"mac3", url: "image12"},
          {mac:"mac3", url: "image13"},
          {mac:"mac4", url: "image14"},
          {mac:"mac4", url: "image15"},
          {mac:"mac4", url: "image16"},
          {mac:"mac5", url: "image17"},
          {mac:"mac6", url: "image18"}
      ];
        this.groupimage = this.transformArray(this.imagedata, "mac");*/
  }



  ionViewDidLoad() {

  }

}
