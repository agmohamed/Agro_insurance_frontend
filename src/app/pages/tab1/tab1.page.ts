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

 arr: any[] = [] 
 arr1: any= [] 
 //server:string='http://localhost:8000';
 server:string='http://192.168.8.188:8080';
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
        // this.val();
        });
      }); 
      this.ionViewDidEditor();
      
    }

  ngOnInit() {
    
  }

  val(v1, v2){
   
    return new Promise(resoler=>{
    
      let body={
        
       premium:v1

      }
      
      this.acessPr.postPremium(body,v2).subscribe((res:any)=>{
          if(res.status==true){
            //loader.dismiss();
           // this.disableButton=false;
            //this.presentToast(res.message);
            //this.router.navigate(['/home/tab2']);
              console.log('true');
          }else{
            //loader.dismiss();
            //this.disableButton=false;
           // this.presentToast(res.message);
          }
      },(err=>{
        //loader.dismiss();
       // this.disableButton=false;
       // this.presentAlert('Timeout');
      }));
    });
  }
  j:any=0;
  init(){
    if(this.datastorage1==0){

        this.http.get(this.server+'/risk1/'+this.nic+'/'+this.datastorage1).subscribe((res:any)=>{ 
           for (this.i in res.me){
           
             this.arr.push({ 'name': res.me[this.i], 'floor':res.message[this.i].id  }); 
             console.log(this.arr[this.i]);this.va1=res; 
             this.val(this.arr[this.i].name,this.arr[this.i].floor);
             this.j++;
             console.log(this.j);
             }
            })
      
        this.http.get(this.server+'/wrisk/'+this.nic+'/'+this.datastorage1).
            subscribe((res:any)=>{ 
              for (this.i in res.me){
              this.arr.push({ 'name': res.me[this.i], 'floor':res.message[this.i].id  }); 
              //console.log(this.arr[this.i]);
              //this.val(this.arr[this.j].name,this.arr[this.j].floor);
              this.j++;
              console.log(this.j);
      }
        for(this.k=0;this.k<this.j;this.k++){
          this.val(this.arr[this.k].name,this.arr[this.k].floor);
          console.log(this.arr[this.k]);
        }
    }) 
     
    }
    
    else if(this.datastorage1==1){
        this.http.get(this.server+'/risk2/'+this.nic+'/'+this.datastorage1).subscribe((res:any)=>{ 
            for (this.i in res.me){
              this.arr.push({ 'name': res.me[this.i], 'floor':res.message[this.i].id  }); 
              console.log(this.arr[this.i]);
              this.val(this.arr[this.i].name,this.arr[this.i].floor);  
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
      //for(let i=0;i<this.arr.length;i++)
     
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
