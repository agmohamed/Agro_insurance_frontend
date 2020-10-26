import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';


export class User {
    
    NIC: string;
  
    constructor( NIC: string) {
     
      this.NIC = NIC;
    }
  }

@Injectable()
export class AccessProviders{
 server:string='http://localhost:8000';
 
    //server:string='http://192.168.8.188:8080';
  //   token: string;
    currentUser: User;
  isLogged: Boolean = false;
   constructor(
       
       public http:HttpClient,
        private storage:Storage,
  ) { }
  
        postData(body){
            let headers=new HttpHeaders({
                'Content-Type':'applicationJson,charset-UTF-8'
            });
            let options={
                headers:headers
            }
            
            return this.http.post(this.server+'/register',JSON.stringify(body),{
                headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
              })
            . map(res=>res
            );
            
            
        }
       
        postLogin(body){
            let headers=new HttpHeaders({
                'Content-Type':'applicationJson,charset-UTF-8'
            });
            let options={
                headers:headers
            }
            this.currentUser = new User(body.NIC);
            this.isLogged = true;
            return this.http.post(this.server+'/login',JSON.stringify(body),{
                headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
              })
            . map(res=>res
            );
            
            
        }
        postPolicy(body,$id){
          let headers=new HttpHeaders({
              'Content-Type':'applicationJson,charset-UTF-8'
          });
          let options={
              headers:headers
          }
          
          return this.http.post(this.server+'/policy/'+$id,JSON.stringify(body),{
              headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
            })
          . map(res=>res
          );
          
          
        }
     
        postPremium(body,$id){
          let headers=new HttpHeaders({
              'Content-Type':'applicationJson,charset-UTF-8'
          });
          let options={
              headers:headers
          }
          
          return this.http.post(this.server+'/premium/'+$id,JSON.stringify(body),{
              headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
            })
          . map(res=>res
          );
          
          
       }
      getPolicy(){
        return this.http.get(this.server+'/detail')

       }
        public checkLogged() {
            return this.isLogged; 
          }
          public getUserInfo() : User {
            return this.currentUser;
          }
}
