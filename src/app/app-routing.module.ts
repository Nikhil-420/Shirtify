import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdressFormComponent } from './adress-form/adress-form.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo:"/home"},
  {path:'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'cart', component: CartComponent},
  {path: 'address-form', component: AdressFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
