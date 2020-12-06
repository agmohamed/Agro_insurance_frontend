import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  va:any;
  
  constructor(private camera: Camera,public actionSheetController: ActionSheetController, public http:HttpClient,
     private router:Router,private splashScreen: SplashScreen,
     private storage:Storage) {
    }

  ngOnInit() {
  }

openLogin1(event){
  this.va=event.target.id;
  this.storage.set('storage_login',this.va);
  this.router.navigate(['/login']);
 }
 openLogin2(event){
  this.va=event.target.id;
  this.storage.set('storage_login',this.va);
  this.router.navigate(['/officer-login']);
 }

 details(){
  this.router.navigate(['/types']);
 }
 
}
