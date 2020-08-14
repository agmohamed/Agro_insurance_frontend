import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../providers/access-providers';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  datastorage: any;
  email: string;
  info: User;
  constructor( private router:Router,
    private storage:Storage,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private navCtrl:NavController) { 
      // if( this.acessPr.checkLogged() ) {
      //   this.info = this.acessPr.getUserInfo(); 
      // } else {
      //   console.log('not logged');
      //   this.router.navigateByUrl('/login');
      // }
    }

  ngOnInit() {
  }
  ionViewDidEditor(){
    this.storage.get('storage_XXX').then((res)=>{
      console.log('hello');
      this.datastorage=res;
      this.email=this.datastorage.email;
      //console.log(res.data);
    })
  }
}
