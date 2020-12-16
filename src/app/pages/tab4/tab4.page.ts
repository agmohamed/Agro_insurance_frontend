import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
data:any;
name:any;
phone:any;
address:any;
id:any;
hide1=false;
hide2=false;
i:any="";
val:any; val1:any;
pic:any;
value:any;  value1:any;
  constructor(private router:Router,
    private storage:Storage, public http:HttpClient,
    private toastCtrl:ToastController,private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,private acessPr:AccessProviders,
    private navCtrl:NavController) {

    
   }

   update(){
    console.log(this.name);
    console.log(this.phone);
    return new Promise(resoler=>{
    
      let body={
        
       name:this.name,
        phone:this.phone,
        address:this.address

      }
      
      this.acessPr.updatefarmer(body,this.id).subscribe((res:any)=>{
          if(res.status==true){
            //loader.dismiss();
           // this.disableButton=false;
            this.presentToast('Update sucessfully');
            //this.router.navigate(['/home/tab2']);
              console.log('true');
          }else{
            //loader.dismiss();
            //this.disableButton=false;
           // this.presentToast(res.message);
          }
      });
    });
   }

   async presentToast(a) {
    let toast = await this.toastCtrl.create({
      message: a,
      duration: 3000,
      position: 'top'
    });
  toast.present();
  }

  ngOnInit() {
    this.storage.get('storage_XXX').then((res)=>{
      this.data=res;
      this.name=res.Name;
      this.phone=res.Phone;
      this.address=res.Address;
      this.id=res.NIC;
      console.log(res);
      console.log(Math.round(res.rating_number));
      if(Math.round(res.rating_number)==0){
        this.pic="/assets/icon/nostar.jpg"
      }
      if(Math.round(res.rating_number)==1 ){
        this.pic="/assets/icon/onestar.jpg"
      }
      if(Math.round(res.rating_number)==2 ){
        this.pic="/assets/icon/twostar.jpg"
      }
      if(Math.round(res.rating_number)==3 ){
        this.pic="/assets/icon/threestar.jpg"
      }
      if(Math.round(res.rating_number)==4 ){
        this.pic="/assets/icon/fourstar.jpg"
      }
      if(Math.round(res.rating_number)==5){
        this.pic="/assets/icon/fivestar.jpg"
      }
      console.log(this.id);
     this.getpolicy();
     this.getclaim();
    }); 
  }
 //get active policies
  getpolicy(){
    return this.http.get(AccessProviders.server+'/allpolicy/'+this.id).subscribe((res:any)=>{ 
    this.val=res.message; console.log(res.message)},
         err=>{
           console.log(err);
    })
  
  }
  //get active claims
  getclaim(){
    return this.http.get(AccessProviders.server+'/getclaimforafarmer/'+this.id).subscribe((res:any)=>{ 
    this.val1=res.message; console.log(res.message)},
         err=>{
           console.log(err);
  })
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

  //navigate to view more details about policy
  view(event){
    this.value=event.target.id;
    console.log(this.value);
    this.storage.set('storage_appliedPolicy',this.value);
    this.router.navigate(['/apply-policy']);
    }
    
    //navigate to view more details about claim
  view1(event){
      this.value1=event.target.id;
      console.log(this.value1);
      this.storage.set('storage_appliedClaim',this.value1);
      this.router.navigate(['/apply-claim']);
      }
  
  viewhistory1(){
    if(this.hide1==false)
       this.hide1=true;
    else
     this.hide1=false;
  }
  viewhistory2(){
    if(this.hide2==false)
       this.hide2=true;
    else
     this.hide2=false;
  }
}
