import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import {Storage} from '@ionic/storage';
import { ToastController,LoadingController,AlertController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.page.html',
  styleUrls: ['./policies.page.scss'],
})
export class PoliciesPage implements OnInit {
 public photos:any;
  cameradata:string;
  base64Image:string
  Start_date:string;
  End_date:string;
  datastorage:any;
  datastorage1:any;
  hideMe=false;
  hide=false;
  hid=true;
  size:number;
  district:string;
  land_num:string;
  selectland:string="";
  gramasewa_division:string;
  crop:string;
  owership:string;
  NIC:string;
  risk:string;
  type:string;
  data:any;
  selectone:string;
  id:any;
  l1:any;
  l2:any;
  addr:any;
  risktype:any;
  policy:any;
i:any="";
di:any;
gr:any;
values:any;
arr1:any[]=[];
arr2:any=[];
  myform:FormGroup;
  constructor(private router:Router,private camera: Camera,public actionSheetController: ActionSheetController,
    private toastCtrl:ToastController, private acessPr:AccessProviders, public http:HttpClient,
    private storage:Storage,
    private formBuilder:FormBuilder) { 
      // this.myform = this.formBuilder.group({
      //   crop: ['', [Validators.required]],
      //   SDate: ['', [Validators.required, Validators.pattern('^0[1-9]{9}$')]],
      //   EDate: ['', [Validators.required, Validators.pattern('^[0-9]{9}[A-Za-z]$')]],
      //   Password: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]+$')]],
      //   type: ['', [Validators.required]],
       
      // });
      this.myform=new FormGroup({
        userdetails:new FormControl({
          crop:new FormControl('',Validators.required),
          SDate:new FormControl('',Validators.required),
          EDate:new FormControl('',Validators.required),
          optional:new FormControl('',Validators.required),
          type:new FormControl('',Validators.required),
          // landD:new FormControl('',Validators.required),
          // land:new FormControl('',Validators.required),
        })
      })
      this.storage.get('storage_co').then((res)=>{
        console.log(res);
        this.datastorage1=res;
        //this.name=this.datastorage.Name;
        console.log(this.datastorage1);
        if(res==0){
          this.hideMe=true;
         
       }
      //  if(res==1){
      //   this.hide=true;
      //  }
       this.showrisks();
       this.showpolicy();
       this.va();
      });
     /* this.storage.get('storage_co').then((res)=>{
        console.log(res);
        this.datastorage=res;
        if(res==0){
          this.hideMe=true;
         
       }
       if(res==1){
        this.hide=true;
       }
        //this.name=this.datastorage.Name;
       // console.log(this.datastorage);
      });*/
      this.storage.get('storage_XXX').then((res)=>{
        console.log(res);
        this.datastorage=res;
        this.NIC=this.datastorage.NIC;
        console.log(this.NIC);
       
        return this.http.get(AccessProviders.server+'/land/'+this.NIC).subscribe((res:any)=>{ 
          for(this.i in res.message){this.data=res.message; 
            console.log(res.message);
            this.arr2.push({'land':res.message[this.i]. land_number,'dis':res.message[this.i].District,'gra':res.message[this.i]. Gramaseva_division}); 
          console.log(this.arr2[this.i]);
            //this.di=res.message[i]. District;
          }},
              
          err=>{
            console.log(err);
           }
        )
      });
     

  }
  onClick(){
    this.hid=false;

  }
  ngOnInit() {
    this.photos=[];
    
  }
  location(){
    this.router.navigate(['/location']);
  }
 back(){
    this.router.navigate(['/home/tab2']);
  }
  addlocation(){

    this.storage.get('storage_location').then((res)=>{
      console.log(res);
      this.l1=res.t1;
      this.l2=res.t2;
      this.addr=res.t3;
      //this.name=this.datastorage.Name;
      console.log(this.l1);
    });
  }
  va(){

    this.http.get(AccessProviders.server+'/detail/'+this.datastorage1).subscribe((res:any)=>{ 
      for(this.i in res.message){
        this.arr1.push({'id':res.message[this.i].id,'name':res.message[this.i].Name}); 
        console.log(this.arr1[this.i]);}},
          
         )
   
  }
  showrisks(){
   
  this.http.get(AccessProviders.server+'/risktypes/'+this.datastorage1).subscribe((res:any)=>{ 
            this.risktype=res.message;
            console.log(this.risktype);
        })
  }
  showpolicy(){
    this.http.get(AccessProviders.server+'/detail/'+this.datastorage1).subscribe((res:any)=>{ 
      this.policy=res.message;
      console.log(this.policy);
  })
  }
  submit(){
    console.log(this.type);
    console.log(this.base64Image);

    for(let j=0;j<this.arr1.length;j++){
      if(this.type==this.arr1[j].name){
        this.values=this.arr1[j].id;
    }
    // else if(this.type== undefined){
    //   this.values=this.arr1[j].id;
    // }
    }
    
    console.log(this.values);
    if(this.selectland!=""){
      for(let j=0;j<this.arr2.length;j++){
        if(this.selectland==this.arr2[j].land){
          this.district=this.arr2[j].dis;
          this.gramasewa_division=this.arr2[j].gra;
        }
       }
    }
    
  console.log(this.district);
    
    //console.log(this.arr2[0].id);
    if(this.crop==null){
      this.presentToast("Crop is required");
    }
    else if(this.Start_date==null){
      this.presentToast("Start date is required");
    }
    else if(this.End_date==null){
      this.presentToast("End date is required");
    }
    
    // else if(this.hideMe==true){
    //   if(this.risk==null){
    //     this.presentToast("Risk type is required");
    //   }
    // }
    else if(this.type==null){
      this.presentToast("Policy type is required");
    }
    else if(this.size==null)
    {
      this.presentToast("size is required");
    }else if(this.base64Image==null)
    {
      this.presentToast("Photo is required");
    }
    else if(this.hid==true){
      if(this.land_num==null){
        this.presentToast("land_num is required");
       }else if(this.district==null)
        {
      this.presentToast("district is required");
        }
        else if(this.gramasewa_division==null){
      this.presentToast("gramasewa_division is required");
        }
        else if(this.owership==null)
        {
      this.presentToast("Owership is required");
        }
        else if(this.addr==null)
        {
      this.presentToast("Address is required");
        }
        else if(this.l1==null)
        {
      this.presentToast("latitude is required");
        }
        else if(this.l2==null)
        {
      this.presentToast("longitude is required");
        }
    } 
   
    
    
    //this.disableButton=true;
    // const loader=await this.loadingCtrl.create({
    //     message:'Please wait......',
    // });
    //loader.present();
    this.http.get(AccessProviders.server+'/agentId/'+this.district+'/'+this.gramasewa_division+'/'+this.datastorage1).subscribe((res:any)=>{ 
      for(this.i in res.message){this.id=res.message[this.i].id;
         //this.arr2.push({'id':res.message[this.i].id}); 
         console.log( this.id);
        return new Promise(resoler=>{
        let body={
          
          land_num:this.land_num,
          selectland:this.selectland,
          gramasewa_division:this.gramasewa_division,
          district:this.district,
          crop:this.crop,
          owership:this.owership,
          size:this.size,
          nic:this.NIC,
          End_date:this.End_date,
          Start_date:this.Start_date,
          risk:this.risk,
          type:this.values,
          id:this.id,
          img:this.base64Image,
          address:this.addr,
          latitude:this.l1,
          longitude:this.l2
         

        }
        this.acessPr.postPolicy(body,this.NIC).subscribe((res:any)=>{
            if(res.status==true){
              //loader.dismiss();
             // this.disableButton=false;
              //this.presentToast(res.message);
              this.router.navigate(['/home/tab2']);

            }else{
              //loader.dismiss();
              //this.disableButton=false;
             // this.presentToast(res.message);
            }
        },(err=>{
          //loader.dismiss();
         // this.disableButton=false;
         // this.presentAlert('Timeout');
          }));
        });

       }}
       )
      
    
     
     
  
  }
  async presentToast(a) {
    let toast = await this.toastCtrl.create({
      message: a,
      duration: 3000,
      position: 'top'
    });
  toast.present();
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

}
