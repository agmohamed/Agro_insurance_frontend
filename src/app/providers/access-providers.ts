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
 
//public static server= 'http://192.168.8.188:8080';
public static server= 'http://localhost:8000';
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
            
            return this.http.post(AccessProviders.server+'/register',JSON.stringify(body),{
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
            return this.http.post(AccessProviders.server+'/login',JSON.stringify(body),{
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
          
          return this.http.post(AccessProviders.server+'/policy/'+$id,JSON.stringify(body),{
              headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8 '),
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
          
          return this.http.post(AccessProviders.server+'/premium/'+$id,JSON.stringify(body),{
              headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
            })
          . map(res=>res
          );
          
          
       }
      postagentVerify(body,$id){
        let headers=new HttpHeaders({
            'Content-Type':'applicationJson,charset-UTF-8'
        });
        let options={
            headers:headers
        }
        
        return this.http.post(AccessProviders.server+'/agentverify/'+$id,JSON.stringify(body),{
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
          })
        . map(res=>res
        );
      }
      updatefarmer(body,$id){
        let headers=new HttpHeaders({
            'Content-Type':'applicationJson,charset-UTF-8'
        });
        let options={
            headers:headers
        }
        
        return this.http.post(AccessProviders.server+'/update/'+$id,JSON.stringify(body),{
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
          })
        . map(res=>res
        );
      }
      getPolicy(){
        return this.http.get(AccessProviders.server+'/detail')

       }
        public checkLogged() {
            return this.isLogged; 
          }
          public getUserInfo() : User {
            return this.currentUser;
        }
}
