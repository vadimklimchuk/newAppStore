import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product.model';
import { ProductsService } from '../model/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts():void {
    this.productsService.getProducts()
      .subscribe(product => this.products = product);
  }
}
