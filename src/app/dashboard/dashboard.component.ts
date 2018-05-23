import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product.model';
import { ProductsService } from '../model/products.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public products: Product[] = [];

  public list: string = null;
  public bgDash = "#F0F1F2";

  constructor(private productsService: ProductsService,
              private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.getProducts();
    this.getBackground();
    this.getViewDashboard();
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(product => this.products = product);
  }

  getBackground(): void {
    this.bgDash = this.localStorage.getBackground();
  }

  getViewDashboard(): void {
    this.list = this.localStorage.getViewDashboard();
  }
}
