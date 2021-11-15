import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule } from '@angular/forms';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

import { OrderbynameComponent } from './orderbyname/orderbyname.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductinfoComponent,
    HomepageComponent,
    AddproductComponent,
    DeleteproductComponent,
    UpdateCustomerComponent,
    OrderbynameComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
