import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: Array<IProducts> = []
constructor(private cartService: CartService){}
ngOnInit(): void {
  this.items = this.cartService.getItems();
  console.log('Cart items:', this.items);
}
}
