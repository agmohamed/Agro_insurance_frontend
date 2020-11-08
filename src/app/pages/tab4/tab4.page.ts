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

i:any="";
val:any;
pic:any;
  constructor(private router:Router,
    private storage:Storage, public http:HttpClient,
    private toastCtrl:ToastController,private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,private acessPr:AccessProviders,
    private navCtrl:NavController) {

    this.storage.get('storage_XXX').then((res)=>{
      this.data=res;
      this.id=res.NIC;
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
    }); 
   }
   update(){
    console.log(this.data.Name);
    console.log(this.data.Phone);
    return new Promise(resoler=>{
    
      let body={
        
      name:this.data.Name,
      phone:this.data.Phone,
      address:this.data.Address

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
  }
  getpolicy(){
    return this.http.get(AccessProviders.server+'/allpolicy/'+this.id).subscribe((res:any)=>{ 
    this.val=res.message; console.log(res.message)},
         err=>{
           console.log(err);
  })

  }
}
