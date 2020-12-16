import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-agent-verification',
  templateUrl: './agent-verification.page.html',
  styleUrls: ['./agent-verification.page.scss'],
})
export class AgentVerificationPage implements OnInit {
id:any;
data:any;
verifi:any;
issue:any;
va:any;
hide=false;
status:any;
hide1=false;
  constructor(
    private router:Router, 
    private storage:Storage,
    public http:HttpClient,
    private acessPr:AccessProviders) 
    { }

  ngOnInit() {
    this.storage.get('storage_info').then((res)=>{
      this.id=res;
      console.log( res);
      this.http.get(AccessProviders.server+'/getpolicy/'+this.id).subscribe((res:any)=>{ 
        this.data=res.message;
        console.log( this.data);
        this.storage.set('storage_landnumber',res.message[0].land_number); 
     })
    });
  }
  onClick(){
    this.verify();
    
  }
  //post agent verification
  verify(){
    console.log(this.verifi);
    console.log(this.id);
    if(this.verifi=='Accept'){
      this.va=1;
      this.status='pending';
    }
       
    else if(this.verifi=='Reject'){
       this.va=0;
       this.status='reject';
    } 
    return new Promise(resoler=>{
    
        let body={
          verify:this.va,
          issue:this.issue,
          status:this.status
        }
          this.acessPr.postagentVerify(body,this.id).subscribe((res:any)=>{
            if(res.status==true){
                  this.router.navigate(['/agent-home/agent']);
                  console.log('true');
            }else{
                  //loader.dismiss();
                  //this.disableButton=false;
                  // this.presentToast(res.message);
            }
        });
      });
  }

  back(){

    this.router.navigate(['/agent-home/agent']);
  }
  location(){
    this.router.navigate(['/viewlocation']);
  }
  submit(){
    console.log(this.verifi);
    if(this.verifi=="Reject"){
      this.hide=true;

    }
    else{
      this.hide=false;
    }

  }
  //view uploded photos
  viewimage(){
    if(this.hide1==false)
      this.hide1=true;
    else
    this.hide1=false;
  }
}
