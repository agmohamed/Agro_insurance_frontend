import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AccessProviders } from '../../providers/access-providers';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
data:any;
id:any;
hide=false;
j:any;
  constructor(private router:Router,public http:HttpClient,
    private storage:Storage) { 
    this.storage.get('storage_cropdetails').then((res)=>{
      this.id=res;
      console.log(this.id);
       this.http.get(AccessProviders.server+'/getcropsdetail/'+this.id).subscribe((res:any)=>{ 
           this.data=res.message; 
           console.log(res.message);
           for(this.j in res.message){
            if(res.message[this.j]!=""){
              this.hide=true;
            }
           }
          
         
        })
      })
  }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/company/companytab2']);
  }
  update(){
    for(let i=0;i<this.data.length;i++){
      console.log(this.data[i].claim_value_for_Acre);
    }
  }
}
