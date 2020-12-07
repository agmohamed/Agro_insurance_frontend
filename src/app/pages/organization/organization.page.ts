import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { AccessProviders } from '../../providers/access-providers';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
@Component({
  selector: 'app-organization',
  templateUrl: './organization.page.html',
  styleUrls: ['./organization.page.scss'],
})
export class OrganizationPage implements OnInit {
  datastorage:any;
  id:any;
  data:any;
  data1:any;
  va:any;
  request: string = "summary";
  verify:any;
  i:any;
  constructor(private router:Router,private storage:Storage,public http:HttpClient,
    private toastCtrl:ToastController, private navCtrl:NavController) { 

    this.storage.get('storage_org').then((res)=>{
      console.log(res);
      this.datastorage=res;
      this.id=this.datastorage.id;

      console.log(this.id);
      this.doRefresh(0);
     
    });
  }

  getclaim(){
    this.http.get(AccessProviders.server+'/claimOrg/'+this.id).subscribe((res:any)=>{ 
          this.data=res.message;
       })
      
  }
  getAllclaim(){
    this.http.get(AccessProviders.server+'/getclaimhistory/'+this.id).subscribe((res:any)=>{ 
          this.data1=res.message;
          console.log( this.data1);
          for(this.i in res.message){
            if(res.message[this.i].organization_verification==0){
              this.verify=false;
            }
            else{
              this.verify=true;
            }
          }
          
       })
      
  }
  ngOnInit() {
  }

  view(event){
    this.va=event.target.id;
    this.storage.set('storage_info1',this.va);
    console.log(this.va);
    this.router.navigate(['/organization-verification']);
  }
  back(){
    this.router.navigate(['/login']);
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
  doRefresh(event) {
    this.getclaim();
    this. getAllclaim();
    setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
        }, 2000);
  }
}
