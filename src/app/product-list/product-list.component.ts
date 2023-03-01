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
  product: IProducts= {} as IProducts;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) {}

    addToCart(product:IProducts){
      window.alert('Your product has been added to the cart!');
      this.cartService.addToCart(this.product)
    }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=> {
      this.id = +params['productId'];
      this.product= products[this.id];
    })
    
  }

}