import { Component, ViewChild, ElementRef } from '@angular/core';
import {Geolocation} from  '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Router,ActivatedRoute } from '@angular/router';
declare var google;
@Component({
  selector: 'app-des2',
  templateUrl: './des2.page.html',
  styleUrls: ['./des2.page.scss'],
})
export class Des2Page  {

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  latitude :number;
  longitude:number;
  constructor(private router:Router,private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,) { }
  
  // ionViewDidLoad(){
  //   this.loadMap();
  // }

  loadMap(){
    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = -34.9290;
       this.longitude = 138.6010;

      let latLng = new google.maps.LatLng( this.latitude,this.longitude );

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    })
   
   // let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    // let mapOptions = {
    //   center: latLng,
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // }

    // this.map = new google.maps.Map( );

  }
  ngOnInit() {
    this.loadMap();
  }
  back(){
    this.router.navigate(['/description']);
  }
}
