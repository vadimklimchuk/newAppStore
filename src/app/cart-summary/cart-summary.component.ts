import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {

  constructor(private cartService: CartService) { }

  itemCount() {
    return this.cartService.itemCount;
  }

  cartPrice() {
    return this.cartService.cartPrice;
  }
}
