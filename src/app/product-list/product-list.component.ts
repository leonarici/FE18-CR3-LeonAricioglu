import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { products} from '../products';
import { CartService } from '../cart.service';
import { IProducts } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit{
  products:IProducts[] = products;
 
  constructor(
    private cartService: CartService
    ) {}

    addToCart(product:IProducts){
      window.alert('Your product has been added to the cart!');
      this.cartService.addToCart(product)
    }

  ngOnInit(): void {
    
    
  }

}