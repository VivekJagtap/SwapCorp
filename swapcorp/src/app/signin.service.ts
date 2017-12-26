import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {signin} from './signin';
import 'rxjs/add/operator/map';
@Injectable()
export class SigninService {

  constructor(private http:Http) { }

  getRegister(){
    return this.http.get('http://localhost:3000/api/signin').map(res =>res.json());    
  }

  addSignIn(newSignin){
    console.log("passed data"+JSON.stringify(newSignin));
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/signin',newSignin,{headers:headers})
       .map(res => res.json());
  }


}
