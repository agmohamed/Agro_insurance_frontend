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
server:string='http://localhost:8000';
data:any;
verifi:any;
va:any;
  constructor(private router:Router, private storage:Storage,public http:HttpClient,private acessPr:AccessProviders,) 
  { 
    this.storage.get('storage_info').then((res)=>{
      this.id=res;
      console.log( res);
      this.http.get(this.server+'/getpolicy/'+this.id).subscribe((res:any)=>{ 
        this.data=res.message;
        console.log( this.data);
       
     })
    });
  }

  ngOnInit() {
  }
  onClick(){
    this.verify();
    
  }
  verify(){
    console.log(this.verifi);
    console.log(this.id);
    if(this.verifi=='True')
        this.va=1;
    else if(this.verifi=='False')
        this.va=0;
        
    return new Promise(resoler=>{
    
        let body={
          verify:this.va,
        }
          this.acessPr.postagentVerify(body,this.id).subscribe((res:any)=>{
            if(res.status==true){
                  this.router.navigate(['/agent']);
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

    this.router.navigate(['/agent']);
  }
}
