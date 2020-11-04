import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AccessProviders } from '../../providers/access-providers';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController } from '@ionic/angular';
@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
data:any;
id:any;
hide=false;
j:any;
arr1:any=[];
arr2:any=[];
arr3:any=[];
  constructor(private router:Router,public http:HttpClient,
    private storage:Storage,private acessPr:AccessProviders,
    private toastCtrl:ToastController,) 
    { 
    this.storage.get('storage_cropdetails').then((res)=>{
      this.id=res;
      console.log(this.id);
       this.http.get(AccessProviders.server+'/getcropsdetail/'+this.id).subscribe((res:any)=>{ 
           this.data=res.message; 
           console.log(res.message);
           for(this.j in res.message){
                if(res.message[this.j]!=""){
                    this.hide=true;
              }
           }
         })
      })
   }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/company/companytab2']);
  }
  update(){
    for(let i=0;i<this.data.length;i++){
      console.log(this.data[i].rate);
      this.arr1[i]=this.data[i].rate;
      this.arr2[i]=this.data[i].crop_id;
      this.arr3[i]=this.data[i].claim_value_for_Acre;
      
    }
    console.log(this.arr1);
    console.log(this.arr2);
    console.log(this.arr3);
    let body={
          
     rate:this.arr1,
     crop:this.arr2,
     claim_value:this.arr3 

    }
    this.acessPr.updatepolicycrop(body,this.id).subscribe((res:any)=>{
        if(res.status==true){
          //loader.dismiss();
         // this.disableButton=false;
          this.presentToast('update successfully');
          this.router.navigate(['/company/companytab2']);

        }else{
          //loader.dismiss();
          //this.disableButton=false;
         // this.presentToast(res.message);
        }
      })
  
  }
  async presentToast(a) {
    let toast = await this.toastCtrl.create({
      message: a,
      duration: 3000,
      position: 'top'
    });
  toast.present();
  }
}
