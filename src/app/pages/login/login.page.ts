import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { IonSlides } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

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
  ) {
    
      this.storage.get('storage_login').then((res)=>{
        this.id=res;
        console.log(this.id);
         if(this.id=="id2" ){
           this.hide=false;
         }
         
     });
    
   
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  ngOnInit() {
    this.validations_form = this.formBuilder.group({
     
      NIC: ['', [Validators.required, Validators.pattern('^[0-9]{9}[A-Za-z]$')]],
      Password: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]+$')]],
    
     
    });
  }
  ionViewDidEditor(){
    this.disableButton=false;
  }
  async tryLogin(){
    
    
    this.isSubmitted = true;
    // if(this.NIC==""){
    //   this.presentToast("YourUsername is required");
    // }else if(this.Password=="")
    // {
    //   this.presentToast("YourPassword is required");
    // }else{
      this.disableButton=true;
      
    if (this.validations_form.valid){
        const loader=await this.loadingCtrl.create({
          message:'Please wait......',
      });
      loader.present();
        return new Promise(resoler=>{
          let body={

            NIC:this.NIC,
            Password:this.Password
          }
          this.acessPr.postLogin(body).subscribe((res:any)=>{
            // if(res.message=='Success loginCompany' ){
            //   loader.dismiss();
            //   this.disableButton=false;
            //   this.presentToast('Login sucessfully');
            //   this.storage.set('storage_company',res.data1);
              
            //   this.navCtrl.navigateRoot(['/company']);
            //   console.log(res.data1);
            // }
            // else if(res.message=='Success login Agent' ){
            //   loader.dismiss();
            //   this.disableButton=false;
            //   this.presentToast('Login sucessfully');
            //   this.storage.set('storage_agent',res.data2);
              
            //   this.navCtrl.navigateRoot(['/agent-home']);
            //  console.log(res.data2);
            // }
            // else if(res.message=='Success login Organization' ){
            //   loader.dismiss();
            //   this.disableButton=false;
            //   this.presentToast('Login sucessfully');
            //   this.storage.set('storage_org',res.data3);
              
            //   this.navCtrl.navigateRoot(['/organization-home']);
            //  console.log(res.data3);
            // }
           if(res.status==true ){
              loader.dismiss();
              this.disableButton=false;
              this.presentToast('Login sucessfully');
              this.storage.set('storage_XXX',res.data);
                
              this.navCtrl.navigateRoot(['/types']);
              console.log(res.data);
              }else{
                loader.dismiss();
                this.disableButton=false;
                this.presentToast('Email or password or status is wrong');
              }
          }
          // ,(err=>{
          //   loader.dismiss();
          //   this.disableButton=false;
          //   this.presentToast('Timeout');
          // })
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
//   image(){
//     this.router.navigate(['/welcome']);
//   }
//   Getselected(selected_value)
// {
// console.log("selector: ", selected_value );
// }
  get errorControl() {
  return this.validations_form.controls;
  }
}
