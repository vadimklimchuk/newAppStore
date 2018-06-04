import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService: CartService,
              private router: Router) { }

  continueShop() {
    this.router.navigateByUrl("/category");
  }

  goCheckout() {
    this.router.navigateByUrl("/checkout");
  }
}
