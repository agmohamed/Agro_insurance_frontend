import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { CallNumber } from '@ionic-native/call-number/ngx';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {
nic:any;
company:any;
Issues:any;
Suggestions:any;
data:any;
  constructor(
    private router:Router,
    private storage:Storage, 
    public http:HttpClient,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private navCtrl:NavController,
    private callNumber: CallNumber) { 

     
    }
  doRefresh(event) {
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
        }, 2000);
        //get submit discussion forms details
        return this.http.get(AccessProviders.server+'/getrequestissues/'+this.nic+'/'+this.company)
          .subscribe((res:any)=>{ 
              this.data=res.message; console.log(res.message)},
              err=>{
                  console.log(err);
        })
  }
  ngOnInit() {
    this.storage.get('storage_XXX').then((res)=>{
      this.nic=res.NIC;
      console.log( this.nic);
     this.storage.get('storage_co').then((res)=>{
       this.company=res;
       console.log(this.company);
       this.doRefresh(0);
      });
    }); 
  }
  
  back(){
    this.router.navigate(['/home/tab1']);
  }
  //post the discussion form data
  submit(){

    return new Promise(resoler=>{
    
      let body={
        
       NIC:this.nic,
       company_id:this.company,
       issues:this.Issues,
       suggetions:this.Suggestions

      }
      
      this.acessPr.postfarmerIssuse(body).subscribe((res:any)=>{
          if(res.status==true){
            this.presentToast("submit successfully");
            //this.router.navigate(['/home/tab2']);
              console.log('true');
          }else{
            
            this.presentToast("error in submission");
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

}
