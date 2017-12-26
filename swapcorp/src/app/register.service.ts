import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {register} from './register'; 
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {

  constructor(private http:Http) { }

  //Retriving register data
  getRegister(){
      return this.http.get('http://localhost:3000/api/page').map(res =>res.json());    
    }

 // Adding register data
   addRegister(newRegister){
     console.log("passed data"+JSON.stringify(newRegister));
     var headers = new Headers();
     headers.append('Content-Type','application/json');
     return this.http.post('http://localhost:3000/api/page',newRegister,{headers:headers})
        .map(res => res.json());
   } 

// Deleting Data
 deleteRegister(id){
      console.log("delta data"+JSON.stringify(id));
      return this.http.delete('http://localhost:3000/api/page/'+id)
       .map(res =>res.json());
 }

//  deleteRegisterByEmail(regemail){
//   console.log("delta data"+JSON.stringify(regemail));
//   // return this.http.delete('http://localhost:3000/api/page/'+regData)
//   //  .map(res =>res.json());
// }

// Updating Data
    // updateRegister(id){
    //   console.log("passed edit id"+id);
    //   var headers = new Headers();
    //   headers.append('Content-Type','application/json');
    //  return this.http.put('localhost:3000/api/page/'+id,{headers:headers}).map(res => res.json());               
 
    // }

}
