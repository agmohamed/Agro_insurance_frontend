import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
@Component({
  selector: 'app-companytab1',
  templateUrl: './companytab1.page.html',
  styleUrls: ['./companytab1.page.scss'],
})
export class Companytab1Page implements OnInit {
de:any;
de1:any;
pic:any;
de2:any;
  constructor(private router:Router,private storage:Storage,
    private toastCtrl:ToastController, private navCtrl:NavController) { 

    this.storage.get('storage_company').then((res)=>{
      this.de=res.name;
      this.de1=res.description;
      this.pic=res.image;
      this.de2=res.types;
     console.log(this.de);
      
      //this.name=this.datastorage.Name;
      //console.log(this.l1);
    });
  }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/login']);
  }
  forum(){
    this.router.navigate(['/discussion']);
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
