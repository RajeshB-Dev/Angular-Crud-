import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { OrderbynameComponent } from './orderbyname/orderbyname.component';
const routes: Routes = [
  {path:"products-list",component:ProductinfoComponent},
  {path:"home-page",component:HomepageComponent},
  {path:"add-product",component:AddproductComponent},
  {path:"delete-product",component:DeleteproductComponent},
  {path:"updatecustomer",component:UpdateCustomerComponent},
  {path:"orderbyname",component:OrderbynameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
