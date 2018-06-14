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

  ngOnInit() { }

  public continueShop() {
    this.router.navigateByUrl("/category");
  }

  public goCheckout() {
    this.router.navigateByUrl("/checkout");
  }

  public updateQuantity(quantity, value) {
    this.cartService.updateQuantity(quantity, value);
  }

  public removeLine(id: number) {
    this.cartService.removeLine(id);
  }

  public cartLines() {
    return this.cartService.lines;
  }

  public cartLinesLength() {
    return this.cartService.lines.length;
  }

  public cartPrice() {
    return this.cartService.cartPrice;
  }
}
