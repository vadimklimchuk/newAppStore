import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService,
              private router: Router) { }

  ngOnInit() {
    console.log(this.cartLines())
  }

  continueShop() {
    this.router.navigateByUrl("/category");
  }

  goCheckout() {
    this.router.navigateByUrl("/checkout");
  }

  updateQuantity(quantity, value) {
    this.cartService.updateQuantity(quantity, value);
  }

  removeLine(id: number) {
    this.cartService.removeLine(id);
  }

  cartLines() {
    return this.cartService.lines.length;
  }
}
