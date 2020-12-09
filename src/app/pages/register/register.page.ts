import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  Name:string="";
  NIC:string="";
  Password:string="";
  Phone:string="";
  disableButton;
  isSubmitted = false;
  validations_form: FormGroup;
  constructor(private router:Router,
          private toastCtrl:ToastController,
          private loadingCtrl:LoadingController,
          private alertCtrl:AlertController,
          private acessPr:AccessProviders,
          private formBuilder:FormBuilder
    ) { 
      this.validations_form = this.formBuilder.group({
        Name: ['', [Validators.required, Validators.pattern('^([A-Za-z ])+$')]],
        Phone: ['', [Validators.required, Validators.pattern('^0[1-9]{9}$')]],
        NIC: ['', [Validators.required, Validators.pattern('^[0-9]{9}[A-Za-z]$')]],
        Password: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]+$')]],
      
       
      });
    }

  ngOnInit() {
  
  }
  ionViewDidEditor(){
    this.disableButton=false;
  }
  async tryRegister(){
    //this.router.navigate(['/login']);
    this.isSubmitted = true;
  
    // if(this.Name==""){
    //     this.presentToast("Yourname is required");
    // }else if(this.NIC==""){
    //   this.presentToast("YourNIC is required");
    // }else if(this.Password=="")
    // {
    //   this.presentToast("YourPassword is required");
    // }else if(this.Phone=="")
    //   {
    //     this.presentToast("YourPhone is required");
    //   }
   // else{
      this.disableButton=true;
     
      if (this.validations_form.valid){
        const loader=await this.loadingCtrl.create({
          message:'Please wait......',
      });
      loader.present();
        return new Promise(resoler=>{
          let body={
            Name:this.Name,
            NIC:this.NIC,
            Phone:this.Phone,
            Password:this.Password
          }
          this.acessPr.postData(body).subscribe((res:any)=>{
              if(res.status==true){
                loader.dismiss();
               // this.disableButton=false;
                this.presentToast(res.message);
                this.router.navigate(['/login']);

              }else{
                loader.dismiss();
                this.disableButton=false;
                this.presentToast(res.message);
              }
          },(err=>{
            loader.dismiss();
            this.disableButton=false;
            this.presentAlert('Timeout');
          }));
        });

      }
   // }
  }
  async presentToast(a) {
    let toast = await this.toastCtrl.create({
      message: a,
      duration: 3000,
      position: 'top'
    });
  toast.present();
  }

  async presentAlert(a) {
    const alert = await this.alertCtrl.create({
     backdropDismiss:false,
      header: a,
      
      buttons: [
        {
          text: 'close',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Try Again',
          handler: () => {
           this.tryRegister();
          }
        }
      ]
    });

    await alert.present();
  }
  get errorControl() {
    return this.validations_form.controls;
  }
}
