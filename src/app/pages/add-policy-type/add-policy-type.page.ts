import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import {Storage} from '@ionic/storage';
import { ToastController,LoadingController,AlertController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { shadow } from '@ionic/core/dist/types/utils/transition/ios.transition';
@Component({
  selector: 'app-add-policy-type',
  templateUrl: './add-policy-type.page.html',
  styleUrls: ['./add-policy-type.page.scss'],
})
export class AddPolicyTypePage implements OnInit {
id:any;
Name:any;
Description:any;
Benefits:any;
insurance_id:any;
hide=false;
arr1:any=[];
arr2:any=[];
val:any=[];
val1:any=[];
arr3:any=[];
  constructor(
    private router:Router,
    public actionSheetController: ActionSheetController,
    private toastCtrl:ToastController, 
    private acessPr:AccessProviders, 
    public http:HttpClient,
    private storage:Storage) {
      
     }

  ngOnInit() {
    this.storage.get('storage_company').then((res)=>{
      this.id=res.id;
      console.log(this.id);
      
     });
  }

//add new policy type
  add(){
    console.log(this.id);
    return new Promise(resoler=>{
      let body={
        company_id:this.id,
        Name:this.Name,
        Description:this.Name,
        Benefits:this.Benefits
       

      }
      this.acessPr.addnewpolicyType(body).subscribe((res:any)=>{
          if(res.status==true){
            this.insurance_id=res.id;
          console.log("sucessful");
          this.show();
          
          }else{
           // this.presentToast(res.message);
          }
      });
      });
  }
  show(){
    console.log(this.insurance_id);
    this.hide=true;
  
  }
  //post details after enter all details
  submit(){
    for(let i=0;i<4;i++){
      this.arr1[i]=this.val[i];
      this.arr2[i]=this.val1[i];
    }
    console.log(this.arr1+this.arr2);
    this.arr3=["1","2","3","4"];
    return new Promise(resoler=>{
    let body={
      insurance_id:this.insurance_id,  
      value:this.arr1,
      rate:this.arr2,
      crop_id:this.arr3
 
     }
     this.acessPr.addnewpolicyTypeDetails(body).subscribe((res:any)=>{
         if(res.status==true){
          // this.presentToast('update successfully');
           this.router.navigate(['/company/companytab2']);
 
         }else{
           
          // this.presentToast(res.message);
         }
       })
      })
  }
  back(){
    this.router.navigate(['/company/companytab2']);
  }
}
