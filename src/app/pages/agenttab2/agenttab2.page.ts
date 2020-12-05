import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { AccessProviders } from '../../providers/access-providers';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-agenttab2',
  templateUrl: './agenttab2.page.html',
  styleUrls: ['./agenttab2.page.scss'],
})
export class Agenttab2Page implements OnInit {
 data:any;
  constructor(private router:Router, private storage:Storage,public http:HttpClient,
    private toastCtrl:ToastController, private navCtrl:NavController) { 
    this.storage.get('storage_agent').then((res)=>{
      console.log(res);
      this.data=res;
     
    });
   }

  

  ngOnInit() {
  }

}
