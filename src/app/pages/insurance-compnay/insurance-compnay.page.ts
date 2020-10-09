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

  constructor( private router:Router,private storage:Storage, public navCtrl:NavController,) { }

  ngOnInit() {
  }
  tryLogin1(){
    this.storage.get("storage_XXX").then((res)=>{
      if(res==null){
          this.navCtrl.navigateRoot('/login');
      }
    });
    this.router.navigate(['/home']);
  }
  back(){
    this.router.navigate(['/types']);
  }
}
