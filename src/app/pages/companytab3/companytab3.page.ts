import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AccessProviders } from '../../providers/access-providers';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
// import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-companytab3',
  templateUrl: './companytab3.page.html',
  styleUrls: ['./companytab3.page.scss'],
})
export class Companytab3Page implements OnInit {
id:any;
data:any; data1:any;
va:any;
request: string = "policy";
  constructor(private router:Router,public http:HttpClient,private storage:Storage) { 
    
    this.storage.get('storage_company').then((res)=>{
      this.id=res.id;
      console.log(this.id);
       this.doRefresh(0);
       //this.name=this.datastorage.Name;
       //console.log(this.l1);
       this.http.get(AccessProviders.server+'/getrequestpolicy/'+this.id).subscribe((res:any)=>{ 
        this.data=res.message; 
            console.log(res.message);
           
          })
          if(this.id==0){
            this.http.get(AccessProviders.server+'/getclaimAAIB/'+this.id).subscribe((res:any)=>{ 
             this.data1=res.message; 
                console.log(res.message);
              }) 
             }
             else{
            this.http.get(AccessProviders.server+'/getclaimSANASA/'+this.id).subscribe((res:any)=>{ 
                  this.data1=res.message; 
                  console.log(res.message);
                   
                  }) 
             }   
       
     });
     
  }

  ngOnInit() {
  }

  doRefresh(event) {
    this.http.get(AccessProviders.server+'/getrequestpolicy/'+this.id).subscribe((res:any)=>{ 
      this.data=res.message; 
          console.log(res.message);
         
        })
        if(this.id==0){
          this.http.get(AccessProviders.server+'/getclaimAAIB/'+this.id).subscribe((res:any)=>{ 
           this.data1=res.message; 
              console.log(res.message);
            }) 
           }
           else{
          this.http.get(AccessProviders.server+'/getclaimSANASA/'+this.id).subscribe((res:any)=>{ 
                this.data1=res.message; 
                console.log(res.message);
                 
                }) 
           }   
    setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
        }, 2000);
  }
  view(event){
    this.va=event.target.id;
    this.storage.set('storage_companypolicy',this.va);
    console.log(this.va);
    this.router.navigate(['/companypolicyverification']);
  }
  view1(event){
    this.va=event.target.id;
    this.storage.set('storage_companyclaim',this.va);
    console.log(this.va);
    this.router.navigate(['/companyclaimverification']);
  }
}
