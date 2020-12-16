import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { IonSlides } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  NIC:string="";
  Password:string="";
  disableButton;
  selected_value:string;
  company:any;
  id:any;
  isSubmitted = false;
  validations_form: FormGroup;
  hide=true;
  slideOptions = {
    initialSlide: 1,
    speed: 300,
  };
  constructor(
    private router:Router,
    private storage:Storage,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private navCtrl:NavController,
    private formBuilder:FormBuilder
  ) { }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  ngOnInit() {
    
  //   this.storage.get('storage_login').then((res)=>{
  //     this.id=res;
  //     console.log(this.id);
  //      if(this.id=="id2" ){
  //        this.hide=false;
  //      }
       
  //  });
    this.validations_form = this.formBuilder.group({
     
      NIC: ['', [Validators.required, Validators.pattern('^[0-9]{9}[A-Za-z]$')]],
      Password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d^a-zA-Z0-9].{4,12}$')]],
    
     
    });
  }
  ionViewDidEditor(){
    //this.disableButton=false;
  }
  async tryLogin(){
    
    
    this.isSubmitted = true;
      
    if (this.validations_form.valid){
        const loader=await this.loadingCtrl.create({
          message:'Please wait......',
      });
     // loader.present();
        return new Promise(resoler=>{
          let body={

            NIC:this.NIC,
            Password:this.Password
          }
          this.acessPr.postLogin(body).subscribe((res:any)=>{
            
           if(res.status==true ){
              loader.dismiss();
              //this.disableButton=false;
              this.presentToast('Login sucessfully');
              this.storage.set('storage_XXX',res.data);
                
              this.navCtrl.navigateRoot(['/types']);
              console.log(res.data);
              }else{
               // loader.dismiss();
               // this.disableButton=false;
                this.presentToast('Email or password or status is wrong');
              }
          }
          ,(err=>{
            loader.dismiss();
           // console.log(err.message);
            //this.disableButton=false;
            this.presentToast("Enter valid NIC/password");
          })
          );
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

  Register(){
    this.router.navigate(['/register']);
  }
  back(){
    this.storage.clear();
    this.router.navigate(['/welcome']);
  }

  get errorControl() {
   return this.validations_form.controls;
  }
}
