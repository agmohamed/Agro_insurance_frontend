import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { AccessProviders } from '../../providers/access-providers';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
@Component({
  selector: 'app-apply-policy',
  templateUrl: './apply-policy.page.html',
  styleUrls: ['./apply-policy.page.scss'],
})
export class ApplyPolicyPage implements OnInit {
data:any;
id:any;
verifi:any;
company_id:any;
hide1=false;
hide2=false;
hide3=false;
hide4=false;
  constructor(private router:Router,
    private acessPr:AccessProviders,public http:HttpClient,private storage:Storage) 
    {
      this.storage.get('storage_appliedPolicy').then((res)=>{
        console.log(res);
        this.id=res;
        this.storage.get('storage_co').then((res)=>{
          console.log(res);
          this.company_id=res;
          this.getpolicy();
        })
       
     
      });
     }
     
     getpolicy(){
      this.http.get(AccessProviders.server+'/getpolicy/'+this.id).subscribe((res:any)=>{ 
            this.data=res.message;
            console.log(this.data);
            if(res.message[0].agent_verification==1)
                 this.verifi=true;
            else if (res.message[0].agent_verification==0)
                  this.verifi=false;
            else
            this.verifi=null;
             if(res.message[0].agent_reply!=null){
               this.hide1=true;
             } 
             if(res.message[0].company_reply!=null){
              this.hide2=true;
            } 
            if(this.company_id==0){
              this.hide3=true;
            }  
            else{
              this.hide3=false;
            }      
         })
        
    }
  ngOnInit() {
  }
  show(){
    if(this.hide4==false)
      this.hide4=true;
    else
    this.hide4=false;
  }
}
