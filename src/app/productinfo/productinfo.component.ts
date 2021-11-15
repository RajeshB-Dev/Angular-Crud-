import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../Product';
import { ActivatedRoute, Router} from '@angular/router';
import { sequence } from '@angular/animations';
import { UpdateserviceService } from '../updateservice.service';
@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent {
customerlist!:Product[];
customerupdate1!:Product;
mytext!:number;
  static secondconstructor: any;
secondconstructor()
{
  return this;
}
  constructor(private route: ActivatedRoute,private router:Router,private data:UpdateserviceService) { 
    this.customerlist=
    [
      {
        id:3,
        Name:"Swayam",
        city:"kolkata",
        pincode:500032,
      noOfOrders:3
    
      },
      {
        id:2,
        Name:"Vishal",
        city:"Bangalore",
        pincode:500012,
      noOfOrders:7
      },
      {
        id:1,
        Name:"Rajesh",
        city:"Hyderabad",
        pincode:500062,
      noOfOrders:5
      },
      {
        id:4,
        Name:"Ashray",
        city:"Delhi",
        pincode:509092,
      noOfOrders:1
      }
     
    ]
   
  }
  
  ngOnInit():void{

    console.log(this.mytext);
    console.log(window.history.state.product1);
    this.customerlist.push(window.history.state.product1);
    console.log(window.history.state.name);
   console.log(window.history.state.customerupdate2)
 
    
  }

deleteProduct(productdelete:Product)
{
  console.log(productdelete);
const index=this.customerlist.indexOf(productdelete);
console.log(index);
this.customerlist.splice(index,1);
}
UpdateCustomer(customerupdate:Product)
{
  this.router.navigate(['/updatecustomer'],{state:{customerupdate1:customerupdate}});
  
}
orderbyname(customerlist:Product[])
{
  this.router.navigate(['/orderbyname'],{state:{customerlist:this.customerlist}});  
}
addelements()
{
  
}

}
