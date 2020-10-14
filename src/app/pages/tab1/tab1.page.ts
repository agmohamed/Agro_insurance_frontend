import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../providers/access-providers';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  datastorage: any;
  // email: string;
  name: string;
  //info: User;
  constructor(private router:Router,
    private storage:Storage,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private navCtrl:NavController) { 
      // if( this.acessPr.checkLogged() ) {
      //   this.info = this.acessPr.getUserInfo(); 
      //   console.log(this.info);
       
      // } else {
      //   console.log('not logged');
      //   this.router.navigateByUrl('/login');
      // }
      this.ionViewDidEditor();
    }

  ngOnInit() {
  }
  ionViewDidEditor(){
      this.storage.get('storage_XXX').then((res)=>{
        console.log(res);
        this.datastorage=res;
        this.name=this.datastorage.Name;
        //console.log(this.datastorage);
      });
    }
    async processLogout(){
      this.storage.clear();
      this.navCtrl.navigateRoot('/welcome');
      const toast = await this.toastCtrl.create({
        message: 'logout successfully',
        duration: 3000,
        position: 'top'
      });
    toast.present();
    }
    go(){
      this.router.navigate(['/description']);
    }
    forum(){
      this.router.navigate(['/forum']);
    }
    back(){
      this.router.navigate(['/insurance-compnay']);
    }
}
