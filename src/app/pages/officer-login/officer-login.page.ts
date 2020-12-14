import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-officer-login',
  templateUrl: './officer-login.page.html',
  styleUrls: ['./officer-login.page.scss'],
})
export class OfficerLoginPage implements OnInit {
  username:any;
  Password:any;
  isSubmitted = false;
  validation_form:FormGroup;
  
  constructor(
    private router:Router,
    private storage:Storage,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private acessPr:AccessProviders,
    private navCtrl:NavController,
    private formBuilder:FormBuilder,
  ) {
    
    }

  ngOnInit() {
   
     
      this.validation_form = new FormGroup({
     
        username: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9]+$')]),
        Password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{4,}$')]),
      
       
      });
    
     
  
  }

  async tryLogin(){
    
    this.isSubmitted = true;
    // if(this.username==""){
    //   this.presentToast("YourUsername is required");
    // }else if(this.Password=="")
    // {
    //   this.presentToast("YourPassword is required");
    // }else{
  
    if (this.validation_form.valid){
      const loader=await this.loadingCtrl.create({
          message:'Please wait......',
      });
     // loader.present();
        return new Promise(resoler=>{
          let body={

            username:this.username,
            Password:this.Password
          }
          this.acessPr.postOfficerLogin(body).subscribe((res:any)=>{
            // if(res.message=='error'){
            //   this.presentToast('Timeout');
            // }
            if(res.message=='Success loginCompany' ){
              loader.dismiss();
              
              this.presentToast('Login sucessfully');
              this.storage.set('storage_company',res.data1);
              
              this.navCtrl.navigateRoot(['/company']);
              console.log(res.data1);
            }
            else if(res.message=='Success login Agent' ){
              loader.dismiss();
             
              this.presentToast('Login sucessfully');
              this.storage.set('storage_agent',res.data2);
              
              this.navCtrl.navigateRoot(['/agent-home']);
             console.log(res.data2);
            }
            else if(res.message=='Success login Organization' ){
              loader.dismiss();
              
              this.presentToast('Login sucessfully');
              this.storage.set('storage_org',res.data3);
              
              this.navCtrl.navigateRoot(['/organization-home']);
             console.log(res.data3);
            }
          // else{
          //   this.presentToast('Timeout');
          // }
           } ,(err=>{
           // loader.dismiss();
           
            this.presentToast('Timeout');
          }));
        });
      
      }
    
  }
  async presentToast(a) {
    let toast = await this.toastCtrl.create({
      message: a,
      duration: 1000,
      position: 'top'
    });
  toast.present();
  }

 
  
  back(){
    this.storage.clear();
    this.router.navigate(['/welcome']);
  }

  get errorControl() {
    return this.validation_form.controls;
    }
}
