import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { UpdateserviceService } from '../updateservice.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  mytext!: number;
  customerupdate1!:Product;
  constructor(private data: UpdateserviceService,private router:Router) {}
  
  ngOnInit() {
      this.data.currentMytext.subscribe(mytext => this.mytext = mytext);
      console.log(window.history.state.customerupdate1);
      this.customerupdate1=window.history.state.customerupdate1;
  }
  
  changeMytext(): void {
      this.data.changeMytext(this.mytext);
    
      this.customerupdate1.noOfOrders=this.mytext;
      this.router.navigate(["/products-list"],{state:{customerupdate2:this.customerupdate1}});
  }
  }
