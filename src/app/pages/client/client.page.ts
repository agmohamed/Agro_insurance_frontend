import { Component, OnInit } from '@angular/core';
import { IonicRatingModule } from 'ionic-rating';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { AccessProviders } from '../../providers/access-providers';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {
data1:any;
data2:any;
data3:any; data4:any;
id:any;
com:any;
policyid:any;
hide=false;
hid=false;
hide2=false;
amount:any;
am:any;
policy:any;
pic:any;
  constructor(
    private router:Router, 
    private storage:Storage,
    public http:HttpClient,
    private acessPr:AccessProviders,
    private toastCtrl:ToastController) 
  {
    
  }

  ngOnInit() {
    this.storage.get('storage_afarmer').then((res)=>{
      this.id=res;
    
    this.http.get(AccessProviders.server+'/onefarmer/'+this.id).subscribe((res:any)=>{ 
    this.data1=res.message; 
        console.log(res.message);
        console.log(Math.round(res.message[0].rating_number));
        if(Math.round(res.message[0].rating_number)==0){
          this.pic="/assets/icon/nostar.jpg"
        }
        if(Math.round(res.message[0].rating_number)==1 ){
          this.pic="/assets/icon/onestar.jpg"
        }
        if(Math.round(res.message[0].rating_number)==2 ){
          this.pic="/assets/icon/twostar.jpg"
        }
        if(Math.round(res.message[0].rating_number)==3 ){
          this.pic="/assets/icon/threestar.jpg"
        }
        if(Math.round(res.message[0].rating_number)==4 ){
          this.pic="/assets/icon/fourstar.jpg"
        }
        if(Math.round(res.message[0].rating_number)==5){
          this.pic="/assets/icon/fivestar.jpg"
        }
       
      })
      this.http.get(AccessProviders.server+'/farmerspolicy/'+this.id+"/").subscribe((res:any)=>{ 
        this.data3=res.message; 
            console.log(res.message);
           
          })
      this.http.get(AccessProviders.server+'/getclaimforafarmer/'+this.id).subscribe((res:any)=>{ 
            this.data4=res.message;
               
              })       
      this.storage.get('storage_company').then((res)=>{
        this.com=res.id;
        this.http.get(AccessProviders.server+'/activepolicy/'+this.id+"/"+this.com).subscribe((res:any)=>{ 
          this.data2=res.message;
          this.am=res.message[0].PaidAmount;
              console.log(res.message);
              console.log( res.message[0].PaidAmount);
            })
            this.com=res.id;
      })  
      
    });
  }
  
  back(){
    this.router.navigate(['/company/companytab4']);
  
  }
  show(){
    if(this.hide==false)
      this.hide=true;
    else
     this.hide=false;
  }
  show1(){
    if(this.hide2==false)
      this.hide2=true;
    else
     this.hide2=false;
  }
  Click(event){
    this.policyid=event.target.id;
    this.hid=true;
    
  }
  //update the farmer's paid amount for premium
  update(){
    
    console.log(this.policyid);
    return new Promise(resoler=>{
      let body={
        amount:this.amount
      }
      this.acessPr.updateAmount(body,this.policyid).subscribe((res:any)=>{
          if(res.status==true){
            //loader.dismiss();
           // this.disableButton=false;
            this.presentToast("update successfully");
              console.log('true');
              this.hid=false;
          }else{
            console.log('false');
           // this.presentToast(res.message);
          }
      });
    });
    
  }
  async presentToast(a) {
    let toast = await this.toastCtrl.create({
      message: a,
      duration: 1000,
      position: 'top'
    });
  toast.present();
  }

  //navigate to rating page
  rate(){
    this.router.navigate(['/rateuser']);
  }
}
