import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

    public token: any;

    constructor(public http: HttpClient, public storage: Storage) {
    }
    
    checkAuthentication(){
 
    return new Promise((resolve, reject) => {
 
        //Load token if exists
        this.storage.get('token').then((value) => {
 
            this.token = value;
 
            //let headers = new Headers();
            //headers.append('Authorization', this.token);
 
            const headers = new HttpHeaders().set('Content-Type', 'text').append('Authorization', this.token);

            this.http.get('http://10.101.0.133:3000/api/auth/protected', {headers: headers})
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
                
 
        });         
 
    });
 
  }

  createAccount(details){
 
    return new Promise((resolve, reject) => {
 
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
 
        this.http.post('http://10.101.0.133:3000/api/auth/register', details, {headers: headers})
          .subscribe(res => {
 
            let data = res;
            this.token = data['token'];
            this.storage.set('token', data['token']);
            resolve(data);
 
          }, (err) => {
            reject(err);
          });
 
    });
 
  }
 
  login(credentials){
 
    return new Promise((resolve, reject) => {
 
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
 
        this.http.post('http://10.101.0.133:3000/api/auth/login', credentials, {headers: headers})
          .subscribe(res => {
 
            let data = res;
            this.token = data['token'];
            this.storage.set('token', data['token']);
            resolve(data);
 
            //resolve(res);
          }, (err) => {
            reject(err);
          });
 
    });
 
  }
 
  logout(){
    this.storage.set('token', '');
  }
     
}
