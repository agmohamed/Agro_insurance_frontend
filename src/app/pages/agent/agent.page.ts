import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { AccessProviders } from '../../providers/access-providers';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
@Component({
  selector: 'app-agent',
  templateUrl: './agent.page.html',
  styleUrls: ['./agent.page.scss'],
})
export class AgentPage implements OnInit {
datastorage:any;
id:any;
data:any;
va:any;
agent_id:any;
  constructor(private router:Router, private storage:Storage,public http:HttpClient,
    private toastCtrl:ToastController, private navCtrl:NavController) {
    this.storage.get('storage_agent').then((res)=>{
      console.log(res);
      this.datastorage=res;
      this.id=this.datastorage.company_id;
      this.agent_id= this.datastorage.id;
      console.log(this.id);
      console.log(this.agent_id);
      this. getpolicy();
    });
   }

  ngOnInit() {
  }
  view(event){
    this.va=event.target.id;
    this.storage.set('storage_info',this.va);
    console.log(this.va);
    this.router.navigate(['/agent-verification']);
  }
  getpolicy(){
    this.http.get(AccessProviders.server+'/agent/'+this.agent_id+'/'+this.id).subscribe((res:any)=>{ 
          this.data=res.message;
       })
      
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
}
