import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  server1:string='http://localhost:8080';
  server2:string="http://dummy.restapiexample.com/api/v1/employees";
  cameradata:string;
base64Image:string

  constructor(private camera: Camera,public actionSheetController: ActionSheetController, public http:HttpClient,
     private router:Router,) { //this.gets();
    }

  ngOnInit() {
  }
openCamera(){
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((imageData) => {
    this.cameradata=imageData;
   this.base64Image = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  });
}

openGallery(){
  const options: CameraOptions = {
    quality: 100,
    sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((imageData) => {
   this.cameradata=imageData;
 this.base64Image = 'data:image/jpeg;base64,' + imageData;
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
openLogin(){
  this.router.navigate(['/login']);
 }

 details(){
  this.router.navigate(['/types']);
 }
 //data:any;
 //i:any;
 /*gets(){
  return this.http.get(this.server2).subscribe((res:any)=>{ for(this.i in res.data){this.data=res.data; console.log(res)}},
  err=>{
    console.log(err);
  }
  
)

 }*/
}
