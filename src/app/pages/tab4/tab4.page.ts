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
  constructor(private router:Router,
    private storage:Storage, public http:HttpClient,
    private toastCtrl:ToastController,private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,private acessPr:AccessProviders,
    private navCtrl:NavController) {

    this.storage.get('storage_XXX').then((res)=>{
      this.data=res;
      this.id=res.NIC;
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
