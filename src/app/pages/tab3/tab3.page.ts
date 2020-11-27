import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AccessProviders } from '../../providers/access-providers';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
NIC:any;
datastorage1:any;
val:any;
i:any;
  constructor(private router:Router, private acessPr:AccessProviders,
    public http:HttpClient,private storage:Storage) {
      this.doRefresh(0);
     }

  ngOnInit() {
  }
  doRefresh(event) {
    this.storage.get('storage_XXX').then((res)=>{
        console.log(res);
        this.NIC=res.NIC;
    this.storage.get('storage_co').then((res)=>{
          console.log(res);
          this.datastorage1=res;
          console.log(this.datastorage1);
       return this.http.get(AccessProviders.server+'/claimdetail/'+this.NIC+'/'+this.datastorage1).subscribe((res:any)=>{ 
            for(this.i in res.message){this.val=res.message; console.log(res.message)}},
               err=>{
                 console.log(err);
        })
       });
    });
    setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
        }, 2000);
  }
  add(){
    this.router.navigate(['/claim']);
  }

}
