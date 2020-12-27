import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-contact-agent',
  templateUrl: './contact-agent.page.html',
  styleUrls: ['./contact-agent.page.scss'],
})
export class ContactAgentPage implements OnInit {
nic:any;
company:string;
data:any;
phone:string;
  constructor(
    private router:Router,
    private storage:Storage, 
    public http:HttpClient,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private navCtrl:NavController,
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
    this.storage.get('storage_XXX').then((res)=>{
      this.nic=res.NIC;
      console.log( this.nic);
     this.storage.get('storage_co').then((res)=>{
       this.company=res;
       console.log(this.company);
        this.getagentDetails();
      });
    }); 
  }
  getcall(event){
    this.phone=event.target.id;
    this.callNumber.callNumber(this.phone, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

  getagentDetails(){
    return this.http.get(AccessProviders.server+'/contactagent/'+this.nic+'/'+this.company)
    .subscribe((res:any)=>{ 
        this.data=res.message; console.log(res.message)},
        err=>{
            console.log(err);
  })
  }
}
