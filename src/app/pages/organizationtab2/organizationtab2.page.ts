import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { AccessProviders } from '../../providers/access-providers';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
@Component({
  selector: 'app-organizationtab2',
  templateUrl: './organizationtab2.page.html',
  styleUrls: ['./organizationtab2.page.scss'],
})
export class Organizationtab2Page implements OnInit {
data:any;
  constructor(
    private router:Router,private storage:Storage,public http:HttpClient,
    private toastCtrl:ToastController, private navCtrl:NavController
  ) { 
    this.storage.get('storage_org').then((res)=>{
      console.log(res);
      this.data=res;
    });
  }

  ngOnInit() {
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
}
