import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'app-claim',
  templateUrl: './claim.page.html',
  styleUrls: ['./claim.page.scss'],
})
export class ClaimPage implements OnInit {
  public photos:any;
  cameradata:string;
  base64Image:string;
  district:any;
  gramasewa_division:any;
  id:any;NIC:any;
  policy_number:any;company:any; 
  land:any; amount:any;date:any;loss:any;phone:any;bank:any;branch:any;
  account:any;loan:any;
  constructor(private router:Router,private camera: Camera,public actionSheetController: ActionSheetController,
    private acessPr:AccessProviders,public http:HttpClient,private storage:Storage) { 
      this.storage.get('storage_co').then((res)=>{
        console.log(res);
        this.company=res;
      });
    }

  ngOnInit() {
    this.photos=[];
  }
  submit(){
   
    this.http.get(AccessProviders.server+'/getpolicy/'+this.policy_number).subscribe((res:any)=>{ 
        this.land=res.message[0].land_number;
        this.NIC=res.message[0].NIC;
        console.log(res.message);
    if(this.company==0){
        this.http.get(AccessProviders.server+'/landlocation/'+ this.land).subscribe((res:any)=>{ 
          this.district=res.message[0].District;
          this.gramasewa_division=res.message[0].Gramaseva_division;
          console.log(res.message);
           this.http.get(AccessProviders.server+'/organizationId/'+this.district+'/'+this.gramasewa_division).subscribe((res:any)=>{ 
             this.id=res.message[0].id;
   
        return new Promise(resoler=>{
        let body={
          policy_number:this.policy_number,
          amount:this.amount,
          loss:this.loss,
          date:this.date,
          phone:this.phone,
          bank:this.bank,
          account:this.account,
          loan_number:this.loan,
          organization_id:this.id,
          NIC:this.NIC,
          company_id:this.company,
          image:this.base64Image,
          branch:this.branch
        }
             this.acessPr.postClaim(body).subscribe((res:any)=>{
                  if(res.status==true){
                   //this.presentToast(res.message);
                   this.router.navigate(['/home/tab3']);
                  }else{
                  // this.presentToast(res.message);
                  }
                });
            });
          });
      });
    }
    else{
         return new Promise(resoler=>{
         let body={
         policy_number:this.policy_number,
         amount:this.amount,
         loss:this.loss,
         date:this.date,
         phone:this.phone,
         bank:this.bank,
         account:this.account,
         loan_number:this.loan,
         NIC:this.NIC,
         company_id:this.company,
         image:this.base64Image,
         branch:this.branch
      }
            this.acessPr.postClaim(body).subscribe((res:any)=>{
               if(res.status==true){
                //this.presentToast(res.message);
                this.router.navigate(['/home/tab3']);
               }else{
               // this.presentToast(res.message);
              }
          });
        });
     }
    });
  }
  openCamera(){
    const options: CameraOptions = {
      quality: 20,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      this.cameradata=imageData;
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photos.push(this.base64Image);
      this.photos.reverse();
    }, (err) => {
     // Handle error
    });
  }
  openGallery(){
    const options: CameraOptions = {
      quality: 20,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     this.cameradata=imageData;
   this.base64Image = 'data:image/jpeg;base64,' + imageData;
   this.photos.push(this.base64Image);
   this.photos.reverse();
    }, (err) => {
     // Handle error
    });
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'choice media',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'camera',
        role: 'destructive',
        icon: 'camera',
        handler: () => {
         this.openCamera();
        }
      }, {
        text: 'Gallery',
        icon: 'camera',
        handler: () => {
          this.openGallery();
        }
      }
      ]
    });
    await actionSheet.present();
  }
  
  add(){
    let body={
      images:this.cameradata
    };
  
  }


  back(){
    this.router.navigate(['/home/tab3']);
  }
}
