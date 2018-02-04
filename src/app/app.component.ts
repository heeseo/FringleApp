import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { HomePage } from '../pages/home/home';
import{ListPage} from '../pages/list/list';
import{GroupInfoPage} from '../pages/group-info/group-info';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import {ProfilePage} from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//declare var FCMPlugin;
@Component({
  templateUrl: 'app.html'
  //template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  //rootPage = HelloIonicPage;
    rootPage:any = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public authService: AuthProvider,
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [


    ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    //this.nav.setRoot(page.component);
      this.nav.push(page.component);
  }

  logout(){
    this.menu.close();  
    this.authService.logout();
    this.nav.setRoot(LoginPage);
      
  }
}
