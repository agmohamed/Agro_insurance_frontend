import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.page.html',
  styleUrls: ['./agent.page.scss'],
})
export class AgentPage implements OnInit {
datastorage:any;
id:any;
data:any;
va:any;

  constructor(private router:Router, private storage:Storage,public http:HttpClient,) {
    this.storage.get('storage_agent').then((res)=>{
      console.log(res);
      this.datastorage=res;
      this.id=this.datastorage.company_id;
      console.log(this.id);
      this. getpolicy();
    });
   }

  ngOnInit() {
  }
  view(event){
    this.va=event.target.id;
    this.storage.set('storage_info',this.va);
    console.log(this.va);
    this.router.navigate(['/agent-verification']);
  }
  getpolicy(){
    this.http.get(AccessProviders.server+'/agent/'+this.id).subscribe((res:any)=>{ 
          this.data=res.message;
       })
      
  }
  back(){

    this.router.navigate(['/login']);
  }
}
