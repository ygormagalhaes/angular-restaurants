import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from './shopping-cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

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

  add(menuItem: MenuItem) {
    this.shoppingCartService.addItem(menuItem);
  }

  remove(cartItem: CartItem) {
    this.shoppingCartService.removeItem(cartItem);
  }

  limpar() {
    this.shoppingCartService.clear();
  }

}
