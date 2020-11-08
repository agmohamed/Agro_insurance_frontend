import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { AccessProviders } from '../../providers/access-providers';
@Component({
  selector: 'app-rateuser',
  templateUrl: './rateuser.page.html',
  styleUrls: ['./rateuser.page.scss'],
})
export class RateuserPage implements OnInit {
id:any;
i:any=0;
  constructor( private router:Router,
    private storage:Storage,private acessPr:AccessProviders) {

    this.storage.get('storage_afarmer').then((res)=>{
      this.id=res;
      console.log(this.id);
    })
   }

  ngOnInit() {
  }
  Onclick(){
    this.i++;
    console.log(this.i);
   }
  submit(){
  
    return new Promise(resoler=>{
      let body={
        rating:this.i
        }
      this.acessPr.updateratingvalue(body,this.id).subscribe((res:any)=>{
          if(res.status==true){
           
            this.router.navigate(['/client']);
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
    this.router.navigate(['/client']);
  
  }
}
