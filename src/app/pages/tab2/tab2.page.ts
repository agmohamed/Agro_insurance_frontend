import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
//import { mobiscroll, MbscPopupOptions } from '@mobiscroll/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
cameradata:string;
base64Image:string
datastorage: any;
  constructor(private camera: Camera,public actionSheetController: ActionSheetController,private router:Router,private storage:Storage) {

    this.ionViewDidEditor();
   }

  ngOnInit() {
  }

  ionViewDidEditor(){
    this.storage.get('storage_co').then((res)=>{
      console.log(res);
      this.datastorage=res;
      //this.name=this.datastorage.Name;
      //console.log(this.datastorage);
    });
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
go(){
  this.router.navigate(['/policies']);
}
active(){
  this.router.navigate(['/active-policy']);
}

}
