import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../Product';
import { ProductinfoComponent } from '../productinfo/productinfo.component';
import { UpdateserviceService } from '../updateservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  id!:number;
  Name!:string;
  city!:string;
  noOfOrders!:number;
  pincode!:number;
  private a!:ActivatedRoute;
  private b!:Router;
  private c!:UpdateserviceService;
  private product1!:Product;
  @Output() productAdd: EventEmitter<Product>  =new EventEmitter();
  constructor(private router:Router) { }
  
  ngOnInit(): void {
  }
  onSubmit(data:NgForm)
  {
    console.log(data.value);
    this.productAdd.emit(data.value);
    this.product1=data.value;
    let myobj=new ProductinfoComponent(this.a,this.b,this.c);
    this.router.navigate(["/products-list"],{state:{'product1':this.product1}});
  }

}
