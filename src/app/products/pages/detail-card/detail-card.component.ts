import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from "../../shared/product.model";
import { ProductsService } from '../../../services/products.service';
import { CartService } from '../../../services/cart.service';
import { AuthService } from '../../../core/auth/shared/auth.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent implements OnInit {
  public product: Product;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute,
              private location: Location,
              private cart: CartService,
              private router: Router,
              private authService: AuthService,
              private ngProgress: NgProgress) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    this.ngProgress.start();

    const id = +this.route.snapshot.paramMap.get('id') - 1;
    this.productsService.getProduct(id).subscribe(product => {
      this.product = product;
      this.ngProgress.done();
    });
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }

  goBack(): void {
    this.location.back();
  }
}
