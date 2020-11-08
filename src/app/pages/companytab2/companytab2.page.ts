import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AccessProviders } from '../../providers/access-providers';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
@Component({
  selector: 'app-companytab2',
  templateUrl: './companytab2.page.html',
  styleUrls: ['./companytab2.page.scss'],
})
export class Companytab2Page implements OnInit {
data:any;
id:any;
va:any;
  constructor(private router:Router,public http:HttpClient,private storage:Storage) { 
    
    this.storage.get('storage_company').then((res)=>{
     this.id=res.id;
     console.log(this.id);
      
      //this.name=this.datastorage.Name;
      //console.log(this.l1);
      this.http.get(AccessProviders.server+'/getcompanypolicies/'+this.id).subscribe((res:any)=>{ 
          this.data=res.message; 
          console.log(res.message);
         
        })
    });
   
  }

  ngOnInit() {
  }
 
  update(event){
    this.va=event.target.id;
    this.storage.set('storage_cropdetails',this.va);
    console.log(this.va);
    this.router.navigate(['/update']);
  }
}
