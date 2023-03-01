import { Injectable } from '@angular/core';
import { IProducts} from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array<IProducts>=[];

  constructor() { }

  addToCart(product: IProducts) {
    this.items.push(product);
    console.log('Added to cart:', product);
    console.log('Cart items:', this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}

