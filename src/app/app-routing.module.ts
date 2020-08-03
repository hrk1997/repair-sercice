import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'service',component: ServiceComponent},
  {path:'contact',component: ContactComponent},
  {path:'login',component: LoginComponent},
  {path:'signup',component: SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
