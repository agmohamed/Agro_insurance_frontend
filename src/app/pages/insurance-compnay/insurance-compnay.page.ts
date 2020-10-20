import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-insurance-compnay',
  templateUrl: './insurance-compnay.page.html',
  styleUrls: ['./insurance-compnay.page.scss'],
})
export class InsuranceCompnayPage implements OnInit {
  va:string="";
  constructor( private router:Router,private storage:Storage, public navCtrl:NavController,) { }

  ngOnInit() {
  }
  doRefresh(event) {
    
     //this.name=this.datastorage.Name;
     
 setTimeout(() => {
  console.log('Async operation has ended');
  event.target.complete();
 }, 2000);
}

  tryLogin1(event){
    this.storage.get("storage_XXX").then((res)=>{
      if(res==null){
          this.navCtrl.navigateRoot('/login');
      }
    });
    this.router.navigate(['/home']);
    //console.log(event.target.id);
    this.va=event.target.id;
    this.storage.set('storage_co',this.va);
    this.doRefresh(0);
  }
  back(){
    this.router.navigate(['/types']);
  }
}
