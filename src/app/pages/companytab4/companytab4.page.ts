import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { AccessProviders } from '../../providers/access-providers';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
@Component({
  selector: 'app-companytab4',
  templateUrl: './companytab4.page.html',
  styleUrls: ['./companytab4.page.scss'],
})
export class Companytab4Page implements OnInit {
id:any;
data:any;
va:any;
  constructor(
    private router:Router,
    private storage:Storage, 
    public http:HttpClient,) { }

  ngOnInit() {
    this.storage.get('storage_company').then((res)=>{
      this.id=res.id;
      return this.http.get(AccessProviders.server+'/getclients/'+this.id).subscribe((res:any)=>{ 
      this.data=res.message; 
          console.log(res.message);
         
        })
    });
  }
 
  go(event){
    this.va=event.target.id;
    this.storage.set('storage_afarmer',this.va);
    console.log(this.va);
    this.router.navigate(['/client']);
  }
}
