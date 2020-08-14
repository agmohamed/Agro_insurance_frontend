import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';


export class User {
    
    email: string;
  
    constructor( email: string) {
     
      this.email = email;
    }
  }

@Injectable()
export class AccessProviders{
  // server:string='http://localhost:8000';
  //   //server:string='http://192.168.8.188:8080';
  //   token: string;
  //   currentUser: User;
  // isLogged: Boolean = false;
  //   constructor(
       
  //       public http:HttpClient,
  //       private storage:Storage,
  // ) { }
  
  //       postData(body){
  //           let headers=new HttpHeaders({
  //               'Content-Type':'applicationJson,charset-UTF-8'
  //           });
  //           let options={
  //               headers:headers
  //           }
            
  //           return this.http.post(this.server+'/register',JSON.stringify(body),{
  //               headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
  //             })
  //           . map(res=>res
  //           );
            
            
  //       }
       
  //       postLogin(body){
  //           let headers=new HttpHeaders({
  //               'Content-Type':'applicationJson,charset-UTF-8'
  //           });
  //           let options={
  //               headers:headers
  //           }
  //           this.currentUser = new User(body.email);
  //           this.isLogged = true;
  //           return this.http.post(this.server+'/login',JSON.stringify(body),{
  //               headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
  //             })
  //           . map(res=>res
  //           );
            
            
  //       }
  //       public checkLogged() {
  //           return this.isLogged; 
  //         }
  //         public getUserInfo() : User {
  //           return this.currentUser;
  //         }
}
