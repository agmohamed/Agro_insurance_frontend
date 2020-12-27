import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { AccessProviders } from '../../providers/access-providers';

//import { mobiscroll, MbscPopupOptions } from '@mobiscroll/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
cameradata:string;
base64Image:string
datastorage: any;
datastorage1: any;

i:any="";
val:any;
value:any;
  constructor(
    private camera: Camera,
    public actionSheetController:ActionSheetController,
    public http:HttpClient,
    private router:Router,
    private storage:Storage) {
  
   }
   
  ngOnInit() {
    
    this.doRefresh(0);
    
  }
   doRefresh(event) {
    this.storage.get('storage_XXX').then((res)=>{
          console.log(res);
          this.datastorage=res.NIC;
      this.storage.get('storage_co').then((res)=>{
            console.log(res);
            this.datastorage1=res;
            console.log(this.datastorage1);
            //get applied policy details
         return this.http.get(AccessProviders.server+'/getapplypolicy/'+this.datastorage+'/'+this.datastorage1).subscribe((res:any)=>{ 
              for(this.i in res.message){this.val=res.message; console.log(res.message)}},
                 err=>{
                   console.log(err);
          })
         });
      });
      setTimeout(() => {
          console.log('Async operation has ended');
          event.target.complete();
          }, 2000);
    }

  

go(){
    this.router.navigate(['/policies']);
  }
  //navigate to view more detils of policies
view(event){
    this.value=event.target.id;
    console.log(this.value);
    this.storage.set('storage_appliedPolicy',this.value);
    this.router.navigate(['/apply-policy']);
  }

}
