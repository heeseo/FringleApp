import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the GroupInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'GroupInfoPage'
})
@Component({
  selector: 'page-group-info',
  templateUrl: 'group-info.html',
})
export class GroupInfoPage {

  constructor(private navParams: NavParams, private view: ViewController) {
  }
  closeModal(){
  this.view.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupInfoPage');
  }

}
