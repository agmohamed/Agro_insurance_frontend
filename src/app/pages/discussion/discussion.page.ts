import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.page.html',
  styleUrls: ['./discussion.page.scss'],
})
export class DiscussionPage implements OnInit {
data:any;
answer:any;
hide=false;
va:any;
company_id:any;
  constructor(
    private router:Router,
    public http:HttpClient,
    private storage:Storage,
    private acessPr:AccessProviders,
    private toastCtrl:ToastController)
     { }

  doRefresh(event) {
    this.storage.get('storage_company').then((res)=>{
      this.company_id=res.id;
      //get requested discussion forms details
     this.http.get(AccessProviders.server+'/getallrequestissues/'+this.company_id).subscribe((res:any)=>{ 
        this.data=res.message; 
        console.log(res.message);
        this.hide=false;
        })
    })  
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      }, 2000);
     
  } 
  ngOnInit() {
    this.doRefresh(0);
  }
  back(){
    this.router.navigate(['/company/companytab1']);
  }
  Click(event){
    this.va=event.target.id;
    this.hide=true;
  }
  //submit answers for requested forms
  submit(){
    console.log(this.answer);
    console.log(this.va);
    return new Promise(resoler=>{
    
      let body={
        answer:this.answer,
        id:this.va
      }
       this.acessPr.postcompanyreply(body).subscribe((res:any)=>{
          if(res.status==true){
            this.presentToast("submit sucessfully ");
                console.log('true');
                
          }else{
             this.presentToast("cannot submit");
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
