import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
//import * as Constants from '../../providers/access-providers';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
 datastorage: any;
 datastorage1: any;
 name: string;
 id:any;
 premium:any;
 nic:any;
 i:any;
 m:any;
 va:any;
 va1:any;
 values:any;
 k:any;
 data:any;
 arr: any[] = [] 
 arr1: any= [] 
 amount:any=[];
 
  constructor(
    private router:Router,
    private storage:Storage, public http:HttpClient,
    private toastCtrl:ToastController,private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,private acessPr:AccessProviders,
    private navCtrl:NavController) 
    { }
   
  ngOnInit() {
    //get stored details of the farmer
    this.storage.get('storage_XXX').then((res)=>{
        this.nic=res.NIC;
        this.name=res.Name;
        console.log( this.nic);
        //get stored details of the company
     this.storage.get('storage_co').then((res)=>{
        this.datastorage1=res;
         console.log(this.datastorage1);
     //get premium details of the a farmer
      this.http.get(AccessProviders.server+'/getactivePremium/'+this.nic+'/'+this.datastorage1).subscribe((res:any)=>{ 
         
        this.data=res.message;
        for (this.i in res.amount){
           this.amount[this.i]=res.amount[this.i];
          } 
        console.log(this.amount);
        })
      });
    }); 
  }

 
  // ionViewDidEditor(){
  //     this.storage.get('storage_XXX').then((res)=>{
  //       console.log(res);
  //       this.datastorage=res;
  //       this.name=this.datastorage.Name;
  //       //console.log(this.datastorage);
  //     });
    
  // }
   
    go(){
      this.router.navigate(['/description']);
    }
    forum(){
      this.router.navigate(['/forum']);
    }
    back(){
      this.router.navigate(['/insurance-compnay']);
    }
    contact(){
      this.router.navigate(['/contact-agent']);
    }
}
