import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AccessProviders } from '../../providers/access-providers';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController } from '@ionic/angular';
@Component({
  selector: 'app-companytab2',
  templateUrl: './companytab2.page.html',
  styleUrls: ['./companytab2.page.scss'],
})
export class Companytab2Page implements OnInit {
data:any;
id:any;
va:any;
  constructor(
    private router:Router,
    public http:HttpClient,
    private storage:Storage,
    private acessPr :AccessProviders,  
    private toastCtrl:ToastController ) { }


  doRefresh(event) {
    this.http.get(AccessProviders.server+'/getcompanypolicies/'+this.id).subscribe((res:any)=>{ 
      this.data=res.message; 
      console.log(res.message);
      })
     setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
        }, 2000);
  }

  ngOnInit() {
    this.storage.get('storage_company').then((res)=>{
      this.id=res.id;
      console.log(this.id);
       this.doRefresh(0);
       //this.name=this.datastorage.Name;
       //console.log(this.l1);
      
     });
  }
 
  update(event){
    this.va=event.target.id;
    this.storage.set('storage_cropdetails',this.va);
    console.log(this.va);
    this.router.navigate(['/update']);
  }
  add(){
    this.router.navigate(['/add-policy-type']);
  }
  delete(event){
    this.va=event.target.id;
    console.log(this.va);
    this.acessPr.deletePolicy(this.va).subscribe((res:any)=>{
      if(res.status==true){
        //loader.dismiss();
       // this.disableButton=false;
        this.presentToast('delete successfully');
        //this.router.navigate(['/company/companytab2']);

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
