import { CartItem } from './shopping-cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

export class ShoppingCartService {

  public cartItems: CartItem[] = [];

  clear() {
    this.cartItems = [];
  }

  addItem(menuItem: MenuItem) {
    let foundItem = this.cartItems.find(cartItem => cartItem.menuItem.id === menuItem.id);

    if (foundItem) {

      foundItem.quantity++;

    } else {

      this.cartItems.push(new CartItem(menuItem));

    }

  }

  removeItem(cartItem: CartItem) {
    this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
  }

  total(): number {
    return this.cartItems
    .map(cartItem => cartItem.value()) // array com os valores
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0); // soma os valores
  }

}
