import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';
import 'rxjs/add/operator/map';

/*
  Generated class for the TodosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodosProvider {

  constructor(public http: HttpClient, public authService: AuthProvider) {
    console.log('Hello TodosProvider Provider');
  }
  
  getTodos(){
  
    return new Promise((resolve, reject) => {
    
        //let headers = new HttpHeaders();
        //headers.set('Authorization', this.authService.token);
        
        const headers = new HttpHeaders().set('Content-Type', 'text').append('Authorization', this.authService.token);
        
        this.http.get('http://10.101.0.133:3000/api/todos', {headers: headers})
        .subscribe(data => {
            resolve(data);
        }, (err) => {
            reject(err);
        });
    });
  }
  
  createTodo(todo){
    return new Promise((resolve, reject) => {
 
      const headers = new HttpHeaders().append('Content-Type', 'application/json').append('Authorization', this.authService.token);
 
      this.http.post('http://10.101.0.133:3000/api/todos/insert', todo, {headers: headers})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
 
    });
 
  }

  deleteTodo(id){
 
    return new Promise((resolve, reject) => {
 
        const headers = new HttpHeaders().append('Authorization', this.authService.token);
 
        this.http.delete('http://10.101.0.133:3000/api/todos/' + id, {headers: headers}).subscribe((res) => {
            resolve(res);
        }, (err) => {
            reject(err);
        });    
 
    });
 
  }
 
  

}
