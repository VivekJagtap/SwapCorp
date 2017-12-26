import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {RegisterService} from '../register.service';
import {register} from '../register';
import { registerLocaleData } from '@angular/common/src/i18n/locale_data';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[RegisterService]
})
export class RegisterComponent implements OnInit {

//-------------------- Form Validation Part ------------------------//

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  confirmpassword = new FormControl('', [Validators.required]);
  hide = true;
  register={};

  getErrorMessage(){
      return this.email.hasError('required') ? 'You must enter a value' :
             this.email.hasError('email') ? 'Not a valid email' :
             this.password.hasError('password') ? 'You must enter password' :
             this.password.hasError('confirmpassword') ? 'You must enter password' :  
              '';
       }
 //------------------------ Functions -------------------------//   
 //country=["India","Australia","England","Japan"];
 registers:register[];
     
    onRegister(re){ 
         var md5 = require('md5');
          var md5 = require('md5');
          console.log("Registered data"+JSON.stringify(md5(re.password)));
          var pwd=md5(re.password);
          re.password=pwd;
          re.confirmpwd=re.confirmpassword;    
          this.registerService.addRegister(re).subscribe(regist =>{          
               console.log("Success"+JSON.stringify(regist));
               this.registerService.getRegister().subscribe(registers => this.registers = registers);
               this.register={};
              
         });
    }

//Deleting data
       onDelete(reg){          
            this.registerService.deleteRegister(reg).subscribe(registers =>{
               console.log("updated data"+JSON.stringify(registers));
               this.ngOnInit();
            } );             
          }

// Update data
      onEdit(reg){
        alert("edit ID");
    //       this.registerService.updateRegister(reg).subscribe(regist=>{
    //               console.log("edit success"+JSON.stringify(regist));
    //       })
    //         //console.log("edited data"+JSON.stringify(regist));
 
      }

  constructor(private registerService:RegisterService) { }

  ngOnInit() {
          this.registerService.getRegister().subscribe(registers => this.registers = registers);   
             
          }
  
}
