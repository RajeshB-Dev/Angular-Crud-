import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
private productsarraysource= new  Subject<Product>();
productadd$=this.productsarraysource.asObservable();
  constructor() {
}
addProduct(product:Product)
{
  this.productsarraysource.next(product);
}
}
