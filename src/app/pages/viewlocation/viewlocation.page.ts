import { Component, ViewChild, ElementRef } from '@angular/core';
import {Geolocation} from  '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Router,ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { AccessProviders } from '../../providers/access-providers';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
declare var google;
@Component({
  selector: 'app-viewlocation',
  templateUrl: './viewlocation.page.html',
  styleUrls: ['./viewlocation.page.scss'],
})
export class ViewlocationPage  {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  latitude :number;
  longitude:number;
  land:any;
  data:any;
  constructor(
    private router:Router,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder, 
    private storage:Storage,
    private acessPr:AccessProviders, 
    public http:HttpClient,) { }

 //show location according to latitude and longitude
  loadMap(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(this.latitude+this.longitude);
      let latLng = new google.maps.LatLng( this.latitude,this.longitude );

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    })
   

  }
  ngOnInit() {
    this.storage.get('storage_landnumber').then((res)=>{
      this.land=res;
      console.log( res);
     this.http.get(AccessProviders.server+'/landlocation/'+ this.land).subscribe((res:any)=>{ 
        this.data=res.message; 
        this.latitude=res.message[0].latitude;
        this.longitude=res.message[0].longitude;
        console.log(this.latitude+this.longitude);
        this.loadMap();
        console.log(res.message)},
             err=>{
               console.log(err);
      })
    });
    //this.loadMap();
  }
  back(){
    //this.router.navigate(['/description']);
  }


}
