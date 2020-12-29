import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import {Storage} from '@ionic/storage';
import { AccessProviders } from '../../providers/access-providers';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-des1',
  templateUrl: './des1.page.html',
  styleUrls: ['./des1.page.scss'],
})
export class Des1Page implements OnInit {
  data:any;
  data1:any;
  datastorage1:any;
  datastorage2:any;
  datastorage3:any;
  me:any;
  i:any="";
  nameArr:any;
  company:any;
  id:number;
  hide=false;
  slideOptions = {
    initialSlide: 1,
    speed: 300,
  };

  constructor(
    private router:Router,
    public http:HttpClient,
    private storage:Storage) {}

    slidesDidLoad(slides: IonSlides) {
      slides.startAutoplay();
    }
  ngOnInit() {
    this.storage.get('storage_getde').then((res)=>{
      console.log(res);
      this.datastorage1=res[0];
      this.datastorage2=res[1];
      this.datastorage3=res[2];
      this.id=res[3];
      this.nameArr=this.datastorage2.split(',');
        for(this.i in this.nameArr){
        console.log(this.nameArr[this.i]);
       }
      //this.name=this.datastorage.Name;
      this.http.get(AccessProviders.server+'/getcropsdetail/'+this.id).subscribe((res:any)=>{ 
        this.data1=res.message; 
        console.log(res.message);
       
      })
      console.log(this.datastorage1);
      console.log(res[3]);
    });
   
    this.storage.get('storage_co').then((res)=>{
      console.log(res);
      this.company=res;
      if(res==0){
        this.hide=true;
     }
      console.log(this.company);
      return this.http.get(AccessProviders.server+'/risktypes/'+this.company).subscribe((res:any)=>{ 
        this.data=res.message; console.log(this.data)},
          err=>{
            console.log(err);
          })
      });
     
  }
  back(){
    this.router.navigate(['/description']);
  }
}
