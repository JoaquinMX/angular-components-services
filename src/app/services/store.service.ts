import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product.model';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart: Array<Product> = [];
  private myCart = new BehaviorSubject<Product[]>([]);
  private total: number = 0;

  myCart$ = this.myCart.asObservable();


  constructor() { }

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }

  getTotal() {
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    return this.total;

  }
}
