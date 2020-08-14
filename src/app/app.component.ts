import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import {NavController} from '@ionic/angular';
import { AccessProviders } from './providers/access-providers';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage:Storage,
    public navCtrl:NavController,
    private acessPr:AccessProviders,
  ) {
    this.initializeApp();
   
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.storage.get("storage_XXX").then((res)=>{
      if(res==null){
          this.navCtrl.navigateRoot('/welcome');
      }else{
        this.navCtrl.navigateRoot('/insurance-compnay');
      }
    });
  }
  // check(){
  //   if( this.acessPr.checkLogged()) {
  //     this.navCtrl.navigateRoot('/home');
  //   } else {
  //     this.navCtrl.navigateRoot('/login');
  //   }
  // }
}
