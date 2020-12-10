import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { AccessProviders } from '../../providers/access-providers';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
@Component({
  selector: 'app-companyclaimverification',
  templateUrl: './companyclaimverification.page.html',
  styleUrls: ['./companyclaimverification.page.scss'],
})
export class CompanyclaimverificationPage implements OnInit {
companyid:any;
id:any;
data:any; land:any;
policy_num:any;
send:any; verification:any;
verifi:any;
hide=false;
issue:any;
hide1:any;
  constructor(private router:Router,private storage:Storage, public http:HttpClient,
    private acessPr:AccessProviders) { 
      this.storage.get('storage_company').then((res)=>{
        this.companyid=res.id;
       console.log(this.companyid);
        
        //this.name=this.datastorage.Name;
        //console.log(this.l1);
    
  this.storage.get('storage_companyclaim').then((res)=>{
      this.id=res;
      console.log( res);
      this.http.get(AccessProviders.server+'/getclaim/'+this.id).subscribe((res:any)=>{ 
        this.data=res.message;
        this.policy_num=res.message[0].policy_number;
        if(res.message[0].organization_verification==1)
             this.verifi="Accept";
        else if (res.message[0].organization_verification==0)
        this.verifi="Reject";
           this.http.get(AccessProviders.server+'/getlandforclaim/'+this.id+'/'+ this.policy_num).subscribe((res:any)=>{ 
        
        this.storage.set('storage_landnumber',res.message[0].land_number);
          })
        })
       })
      }); 
    }

  ngOnInit() {
  }
  location(){
    this.router.navigate(['/viewlocation']);
  }
  submit(){

    if(this.verification=='Accept'){
      this.send='Active';
      //this.init();
    }
    else
        this.send='Reject';
    return new Promise(resoler=>{
    
      let body={
        verify:this.send,
        issue:this.issue
      }
      
      this.acessPr.postcompanyclaimverification(body,this.id).subscribe((res:any)=>{
          if(res.status==true){
            //loader.dismiss();
           // this.disableButton=false;
            //this.presentToast(res.message);
            this.router.navigate(['/company/companytab3']);
              console.log('true');
          }else{
            //loader.dismiss();
            //this.disableButton=false;
           // this.presentToast(res.message);
          }
      },(err=>{
        //loader.dismiss();
       // this.disableButton=false;
       // this.presentAlert('Timeout');
      }));
    });
  }
  back(){

    this.router.navigate(['/company/companytab3']);
  }
  farmerProfile(){
    //this.storage.remove('storage_afarmer');
    this.router.navigate(['/client']);

  }
  view(){
    if(this.verification=='Reject'){
      this.hide=true;
    }
    else{
      this.hide=false;
    }
  }
  viewPhoto(){
    if(this.hide1==false)
    this.hide1=true;
    else
    this.hide1=false;
  }
}
