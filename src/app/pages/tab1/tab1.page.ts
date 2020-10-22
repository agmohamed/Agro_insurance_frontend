import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../providers/access-providers';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
 datastorage: any;
 datastorage1: any;
 name: string;
 nic:any;
 i:any;
 m:any;
 va:any;
 values:any;
 arr: any[] = [] 
 server:string='http://localhost:8000';
  //info: User;
  
  constructor(private router:Router,
    private storage:Storage, public http:HttpClient,
    private toastCtrl:ToastController,private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,private acessPr:AccessProviders,
    private navCtrl:NavController) 
    { 
     
      this.storage.get('storage_XXX').then((res)=>{
        this.nic=res.NIC;
        console.log( this.nic);
       this.storage.get('storage_co').then((res)=>{
         this.datastorage1=res;
         console.log(this.datastorage1);
         this.init();
         
        });
      }); 
      this.ionViewDidEditor();
    }

  ngOnInit() {
    
  }
  init(){
    if(this.datastorage1==0){

        this.http.get(this.server+'/risk1/'+this.nic+'/'+this.datastorage1).subscribe((res:any)=>{ 
           for (this.i in res.me){
             this.arr.push({ 'name': res.me[this.i], 'floor':res.message[this.i].id  }); 
             console.log(this.arr[this.i]);  
      }})
      
        this.http.get(this.server+'/wrisk/'+this.nic+'/'+this.datastorage1).
            subscribe((res:any)=>{ 
              for (this.i in res.me){
              this.arr.push({ 'name': res.me[this.i], 'floor':res.message[this.i].id  }); 
              console.log(this.arr[this.i]);  
      }}) 
    }
    
    else if(this.datastorage1==1){
        this.http.get(this.server+'/risk2/'+this.nic+'/'+this.datastorage1).subscribe((res:any)=>{ 
            for (this.i in res.me){
              this.arr.push({ 'name': res.me[this.i], 'floor':res.message[this.i].id  }); 
              console.log(this.arr[this.i]);  
      }})
             
    }
       
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
