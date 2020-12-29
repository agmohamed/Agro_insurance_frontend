import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { AccessProviders } from '../../providers/access-providers';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-agenttab2',
  templateUrl: './agenttab2.page.html',
  styleUrls: ['./agenttab2.page.scss'],
})
export class Agenttab2Page implements OnInit {
 data:any;
 name:any;
 nic:any;
 phone:any;
 district:any;
 gramasewa_division:any;

  constructor(
    private router:Router, 
    private storage:Storage,
    public http:HttpClient,
    private toastCtrl:ToastController, 
    private navCtrl:NavController) { }

  

  ngOnInit() {
    //get agent details from the storage
  this.storage.get('storage_agent').then((res)=>{
      console.log(res);
      this.data=res;
      this.name=res.Name;
      this.nic=res.NIC;
      this.district=res.District;
      this.gramasewa_division=res.Gramaseva_division;
      this.phone=res.phone;
    });
  }
  //logout from the application
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
