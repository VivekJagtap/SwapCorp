import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'signin', component: SigninComponent },
  { path: '',redirectTo:'/home',pathMatch:'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})

export class AppRoutingModule { }
