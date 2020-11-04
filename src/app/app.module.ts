//import { MbscModule } from '@mobiscroll/angular';
//import { MbscModule } from '@mobiscroll/angular-lite';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { AccessProviders } from './providers/access-providers';
import { Camera} from '@ionic-native/camera/ngx';
//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { IonicRatingModule } from 'ionic4-rating';
 import {Geolocation} from  '@ionic-native/geolocation/ngx';
 import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
 
// import { StarRatingModule } from 'ionic3-star-rating';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ 
    //MbscModule,  
   
    FormsModule,  
BrowserModule, IonicRatingModule ,IonicModule.forRoot(), AppRoutingModule,HttpClientModule,IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    //FileTransfer,
    //FileUploadOptions,
   // FileTransferObject,
   
    Camera,
    WebView,
    FilePath,
    AccessProviders,
    Geolocation,
    NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
