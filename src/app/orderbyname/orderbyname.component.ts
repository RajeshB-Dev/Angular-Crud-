import { Component, IterableDiffers, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-orderbyname',
  templateUrl: './orderbyname.component.html',
  styleUrls: ['./orderbyname.component.css']
})
export class OrderbynameComponent implements OnInit {

  constructor() { }
  
  customerlist1!:Product[];
  ngOnInit(): void {
    console.log(window.history.state.customerlist);
    this.customerlist1=window.history.state.customerlist;
    this.customerlist1.sort(function(a,b){ return a.id-b.id;})
     }
}
