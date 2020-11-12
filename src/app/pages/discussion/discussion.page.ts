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
  constructor(private router:Router,public http:HttpClient,private storage:Storage
    ,private acessPr:AccessProviders) { 

    this.http.get(AccessProviders.server+'/getallrequestissues').subscribe((res:any)=>{ 
      this.data=res.message; 
          console.log(res.message);
         
        })
  }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/company/companytab1']);
  }
  Click(event){
    this.va=event.target.id;
    this.hide=true;
  }
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
              
                console.log('true');
                
          }else{
                //loader.dismiss();
                //this.disableButton=false;
                // this.presentToast(res.message);
          }
      });
    });
  }
}
