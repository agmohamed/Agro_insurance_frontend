import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { AccessProviders } from '../../providers/access-providers';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
@Component({
  selector: 'app-apply-claim',
  templateUrl: './apply-claim.page.html',
  styleUrls: ['./apply-claim.page.scss'],
})
export class ApplyClaimPage implements OnInit {

  id:any;
  company_id:any;
  data:any;
  verifi:any;
  hide1=false;
  hide2=false;
  hide3=false;
  hide4=false;
  constructor(
    private router:Router,
    private acessPr:AccessProviders,
    public http:HttpClient,
    private storage:Storage) 
    {}

  ngOnInit() {
    this.storage.get('storage_appliedClaim').then((res)=>{
      console.log(res);
      this.id=res;
      this.storage.get('storage_co').then((res)=>{
        console.log(res);
        this.company_id=res;
        this.getclaim();
      })
    });
  }

//get claim details according to claim id
  getclaim(){
    this.http.get(AccessProviders.server+'/getclaim/'+this.id).subscribe((res:any)=>{ 
          this.data=res.message;
          console.log(this.data);
          if(this.company_id==0){
              this.hide3=true;
            if(res.message[0].organization_verification==1)
            this.verifi="accept";
           else if (res.message[0].organization_verification==0)
             this.verifi="reject";
             console.log( this.verifi);
          }
          else{
            this.hide3=false;
          }
          if(res.message[0].organization_reply!=null){
            this.hide1=true;
          }
          else{
            this.hide1=false;
          }
          if(res.message[0].company_reply!=null){
            this.hide2=true;
          }
          else{
            this.hide2=false;
          }
          //  if(res.message[0].agent_reply!=null){
          //    this.hide1=true;
          //  } 
          //  if(res.message[0].company_reply!=null){
          //   this.hide2=true;
          // } 
          // if(this.company_id==0){
          //   this.hide3=true;
          // }  
          // else{
          //   this.hide3=false;
          // }      
       })
      
  }
  back(){
    this.router.navigate(['/home/tab3']);
  }
  show(){
    if(this.hide4==false)
      this.hide4=true;
    else
    this.hide4=false;
  }
}
