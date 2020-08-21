import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string="";
  password:string="";
  disableButton;
  selected_value:string;
  constructor(
    private router:Router,
    private storage:Storage,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private navCtrl:NavController,
  ) { }

  ngOnInit() {
  }
  ionViewDidEditor(){
    this.disableButton=false;
  }
  async tryLogin(){
    if(this.email=="ABC" && this.password=="abc" ){
      this.navCtrl.navigateRoot(['/aaib']);
    }
    if(this.email=="CompanyB" && this.password=="B123" ){
      this.navCtrl.navigateRoot(['/sanasa']);
    }
    if(this.email=="" && this.password=="" ){
      this.navCtrl.navigateRoot(['/insurance-compnay']);
    }
   
  }
//      if(this.email==""){
//       this.presentToast("YourEmail is required");
//     }else if(this.password=="")
//     {
//       this.presentToast("YourPassword is required");
//     }else{
//       this.disableButton=true;
//       const loader=await this.loadingCtrl.create({
//           message:'Please wait......',
//       });
//       loader.present();
//         return new Promise(resoler=>{
//           let body={
//             aksi:'process_login',
           
//             email:this.email,
//             password:this.password
//           }
//           this.acessPr.postLogin(body).subscribe((res:any)=>{
//               if(res.status==true && this.selected_value=='f'){
//                 loader.dismiss();
//                 this.disableButton=false;
//                 this.presentToast('Login sucessfully');
//                 this.storage.set('storage_XXX',res.data);
                
//                 this.navCtrl.navigateRoot(['/insurance-compnay']);
//                console.log(res.data);
//               }else{
//                 loader.dismiss();
//                 this.disableButton=false;
//                 this.presentToast('Email or password or status is wrong');
//               }
//           },(err=>{
//             loader.dismiss();
//             this.disableButton=false;
//             this.presentToast('Timeout');
//           }));
//         });

      
//     }
//   }
//   async presentToast(a) {
//     let toast = await this.toastCtrl.create({
//       message: a,
//       duration: 3000,
//       position: 'top'
//     });
//   toast.present();
//   }

  Register(){
    this.router.navigate(['/register']);
  }
  back(){
    this.router.navigate(['/welcome']);
  }
//   image(){
//     this.router.navigate(['/welcome']);
//   }
//   Getselected(selected_value)
// {
// console.log("selector: ", selected_value );
// }
}
