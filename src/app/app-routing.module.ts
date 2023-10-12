import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent } from './home/home.component'; // added this
import { LoginComponent } from './login/login.component'; // added this
import { CustomersComponent } from './customers/customers.component'; // added this
import { OopsComponent } from './oops/oops.component'; // added this

const routes: Routes = [
  {path: '', component: HomeComponent}, // added this
  {path: 'login', component: LoginComponent}, // added this
  {path: 'customers', component: CustomersComponent}, // added this
  {path: '**', component: OopsComponent} // added this
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
