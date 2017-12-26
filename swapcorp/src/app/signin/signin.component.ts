import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {SigninService} from '../signin.service';
import {RegisterService} from '../register.service';
import {signin} from '../signin';
import {register} from '../register';
import {Md5} from 'ts-md5/dist/md5';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers:[SigninService,RegisterService]
})
export class SigninComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  confirmpassword = new FormControl('', [Validators.required]);
  hide = true;
  signin={};
  registers:register[];

  //router.navigateByUrl('');
    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
             this.email.hasError('email') ? 'Not a valid email' :
             this.password.hasError('password') ? 'You must enter password' :
        
             '';
    }
 //------------------------ Functions -------------------------//   
    onSignin(se){
        alert("hii welcome");
        console.log("Registered data"+JSON.stringify(se));
        var md5 = require('md5');
        console.log("Registered data"+JSON.stringify(md5(se.password)));
        var pwd=md5(se.password);
        se.password=pwd;
   
        if(se){
          this.registerService.getRegister().subscribe(registers => {this.registers = registers
                console.log("getting data "+JSON.stringify(this.registers));              
                for(var i=0;i<this.registers.length;i++){
                         if((se.password == this.registers[i].password) && (se.email == this.registers[i].email)){
                            alert("Registration Successfull");
                            this.router.navigate(['/aboutus']);
                            
                         }                        
                }
          });                   
        }                
        this.signin={};
      }
  constructor(private registerService:RegisterService,private router: Router) { }

  ngOnInit(){
      
  }
}
