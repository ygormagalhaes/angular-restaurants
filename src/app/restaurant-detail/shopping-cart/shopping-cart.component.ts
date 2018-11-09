import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from './shopping-cart-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): CartItem[] {
    return this.shoppingCartService.cartItems;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

}
