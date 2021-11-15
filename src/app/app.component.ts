import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Products';
 name!:string;
  constructor(private router:Router)
  {

  }
  findProduct(Name:string) 
  {
  
    this.router.navigate(["/products-list"],{state:{'Product.Name':Name}});
   
  }
}
