import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import {Storage} from '@ionic/storage';
import { AccessProviders } from '../../providers/access-providers';
@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {
data:any;
datastorage:any;
i:any="";
va1:string="";
va2:string="";
va3:string="";
arr:any=[];

  constructor(private router:Router,
              public http:HttpClient,
              private storage:Storage) { }

  ngOnInit() {
    this.storage.get('storage_co').then((res)=>{
      console.log(res);
      this.datastorage=res;
      //this.name=this.datastorage.Name;
      console.log(this.datastorage);
      return this.http.get(AccessProviders.server+'/detail/'+this.datastorage).subscribe((res:any)=>{ for(this.i in res.message){this.data=res.message; console.log(res.message)}},
          err=>{
            console.log(err);
          })
    });
   
  }
  back(){
    this.router.navigate(['/home']);
  }
  go1(d,num){
    this.va1=d.Description;
    this.va2=d.Benefits;
    this.va3=d.Name;
    this.arr=[this.va1,this.va2,this.va3];
    this.storage.set('storage_getde',this.arr);
    console.log(this.va1);
    this.router.navigate(['/des1']);
  }
  go2(){
    this.router.navigate(['/des2']);
  }
  go3(){
    this.router.navigate(['/des3']);
  }
  
  /*getdata1(){
    return this.http.get(this.server+'/detail/'+this.datastorage).subscribe((res:any)=>{ this.data=res.message[0].companies_id; console.log(res.message[0].id)},
          err=>{
            console.log(err);
          }
          
    )
        }*/
}
