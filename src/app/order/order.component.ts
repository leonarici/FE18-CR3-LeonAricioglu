import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../products';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  cartItems: Array<IProducts> = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }

  clearCart() {
    this.cartItems = this.cartService.clearCart();
  }
}
